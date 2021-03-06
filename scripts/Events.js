'use strict';

/**
 * Events calendar
 */
class EventsCalendar {
  /**
   * Create events calendar.
   * @param {Object[]} calEvents Array of event objects.
   */
  constructor(calEvents) {
    /**
     * Id of html node for rendering element.
     * @type {string}
     */
    this.appNodeId = 'calendar';

    /**
     * The start time.
     * @type {number}
     */
    this.startTime = 9;

    /**
     * Number of hours to be shown in day.
     * @type {number}
     */
    this.hoursInCalDay = 12;

    /**
     * Number of vertical pixels that represent an hour.
     * @type {number}
     */
    this.hourInPixels = 60;

    /**
     * Copy of events array sorted by time.
     * @type {Array}
     */
    this.sortedEvents = [];

    /**
     * Column positions for events (zero based, ie col 1 = 0). Used to calculate left position of event.
     * @type {Array}
     */
    this.eventColPositions = [];

    /**
     * Total columns for each event. Used to calculate width of event.
     * @type {Array}
     */
    this.eventColTotals = [];

    /**
     * Column totals offset. Used for storing offset while calculating eventColTotals.
     * @type {number}
     */
    this.eventColTotalsOffset = 0;

    if (! calEvents || ! Array.isArray(calEvents) || ! calEvents.length) {
      alert('Please supply an array of events.');
      return;
    }

    this.sortEvents(calEvents);
    this.setEventColumns();
    this.renderCalHourBlocks();
    this.renderEvents();
  }

  /**
   * Sort events.
   *
   * @param {Object[]} calEvents Array of event objects.
   */
  sortEvents(calEvents) {
    this.sortedEvents = calEvents.slice().sort(this.compareStartTime);
  }

  /**
   * Compare function for sorting events by start time.
   *
   * @param {number} a Number to compare.
   * @param {number} b Number to compare.
   * @returns {number} Number for sort function representing <, >, =.
   */
  compareStartTime(a,b) {
    if (a.starts_at < b.starts_at) {
      return -1;
    }
    if (a.starts_at > b.starts_at) {
      return 1;
    }
    return 0;
  };

  /**
   * Setup event column information (eventColPositions, eventColTotals)
   *
   * This information essentially maps out a grid for our events for placement on the calendar in appropriate positions,
   * accounting for simultaneous events. By having the eventColPosition and eventColTotal for an event, we know where it
   * should go and how wide it should be to account for other events, keeping in mind any colliding events must have the
   * same width.
   *
   * For example, if an event has an eventColPosition of 1 and an eventColTotal of 4, that event should have a width of
   * 25% and a left position of 0.  If values are 3 and 5, respectfully, the width 20% and left position 40%.
   */
  setEventColumns() {
    /**
     * Array of end times associated to a column (represented by zero based index). This is used to store previous event
     * positions within columns.
     *
     * For example, `eventMap[0] = 120` equates to the first column containing an event with an end time of 120.
     *
     * This information is used to determine if our next event can be placed in the same column or requires a new one.
     * If the current event's start time is later than all the end times in the array, we are essentially starting a
     * new row.
     *
     * @type {Array}
     */
    let eventMap = [];

    this.sortedEvents.forEach((event, index) => {
      const startTime = event.starts_at;
      const endTime = event.starts_at + event.duration;

      // If eventMap is empty, we need a first column.
      if (!eventMap.length) {
        this.eventColPositions[index] = eventMap.push(endTime);
        this.setColTotals(index, eventMap);
        return;
      }

      const latestEndTime = eventMap.reduce((acc, item) => item > acc ? item : acc);
      const earliestEndTime = eventMap.reduce((acc, item) => item < acc ? item : acc);

      // If start time > = all end times up to this point, start a new row.
      if (startTime >= latestEndTime) {
        // Set col totals first as we need to capture length of eventMap prior to starting a new row
        this.setColTotals(index, eventMap, true);
        eventMap = [];
        this.eventColPositions[index] = eventMap.push(endTime);

        // We need to set col totals again in case this is the last item in the array.
        this.setColTotals(index, eventMap);
        return;
      }

      // If start time < earliest end time, add a column.
      if (startTime < earliestEndTime) {
        this.eventColPositions[index] = eventMap.push(endTime);
        this.setColTotals(index, eventMap);
        return;
      }

      // Loop through eventMap to find lowest value (end time) < start time and assign event to that column.
      const position = eventMap.reduce((acc, endTime, colIndex) => endTime <= startTime ? colIndex : acc, 1);
      eventMap[position] = endTime;
      this.eventColPositions[index] = position + 1; // adj for zero based index.
      this.setColTotals(index, eventMap);
    })
  }

  /**
   * Set column totals.
   * @param index
   * @param eventMap
   * @param manualOverride
   */
  setColTotals(index, eventMap, manualOverride = false) {
    if (index === this.sortedEvents.length - 1 || manualOverride) {
      const cols = eventMap.length;
      for (let idx = this.eventColTotalsOffset; idx <= index; idx++) {
        this.eventColTotals[idx] = cols;
      }
      this.eventColTotalsOffset = index;
    }
  }

  /**
   * Render calendar hour blocks.
   */
  renderCalHourBlocks() {
    const endTime = this.startTime + this.hoursInCalDay;
    const hours = [];
    for (let h = this.startTime; h < endTime + 1; h++) {
      hours.push(h);
    }
    const hourEls = hours.map((h, index) => {
      return `
        <div class="cal-hour${hours.length - 1 === index ? ' last' : ''}" style="height: ${this.hourInPixels}px;">
          <span class="cal-hour-label">${this.getCalHourLabel(h)}</span>
        </div>
      `;
    });
    document.getElementById(this.appNodeId).innerHTML = hourEls.join('');
  };

  /**
   * Get hour label for time including AM/PM.
   *
   * @param {number} h Hour represented as 24 hour clock.
   * @returns {string} 12 hour time with AM/PM label.
   */
  getCalHourLabel(h) {
    const hour = h <= 12 ? h : h - 12;
    const hourLabel = h >= 12 ? 'PM' : 'AM';
    return `${hour} ${hourLabel}`;
  };

  /**
   * Render calendar events.
   */
  renderEvents() {
    const events = `
      <div class="cal-events">
        ${this.sortedEvents.map((event, index) => this.createSingleEvent(event, index)).join('')}
      </div>
    `;
    document.getElementById(this.appNodeId).innerHTML += events;
  };

  /**
   * Create single event DOM element.
   *
   * @param {Object.<number, string>} calEvent Events object.
   */
  createSingleEvent(calEvent, index) {
    const elHeight = calEvent.duration * this.hourInPixels/60;
    const elTop = this.calcTimePixelPos(calEvent.starts_at);
    const width = 100 / this.eventColTotals[index];
    const leftPos = (this.eventColPositions[index] - 1) * width;
    const compactClass = width <= 10 || elHeight < 60  ? 'compact' : '';
    const elClasses = ['cal-event', compactClass];

    const titleEl =
      calEvent.title
      ? `<span class="cal-event-title">${calEvent.title}</span>`
      : '';
    const locationEl =
      calEvent.location
      ? `<span class="cal-event-location">${calEvent.location}</span>`
      : '';
    const labelEl =
      titleEl || locationEl
      ? `<div class="cal-event-label">${titleEl}${locationEl}</div>`
      : '';

    return `
      <div class="${elClasses.join(' ')}"
          style="
            height: ${elHeight}px;
            top: ${elTop}px;
            width: ${width}%;
            left: ${leftPos}%;
            ">
          <div class="cal-event-details">
            ${labelEl}
            <span class="cal-event-time">${this.getEventTime(calEvent)}</span>
          </div>          
      </div>   
    `;
  };

  /**
   * Get event time span (from, to).
   *
   * @param {Object} calEvent Events object.
   * @returns {string} Time span represented as hh:mm - hh:mm.  No minutes shown on the hour.
   */
  getEventTime(calEvent) {
    const startTime = this.calcTime(calEvent.starts_at);
    const endTime = this.calcTime(calEvent.starts_at + calEvent.duration);
    return `${startTime} - ${endTime}`;
  };

  /**
   * Calculate time from minutes from start and include label.
   *
   * @param {number} minutesFromStart Number of minutes from startTime.
   * @returns {string} Formatted time (hh:mm AM/PM).
   */
  calcTime(minutesFromStart) {
    const hours = this.startTime + (minutesFromStart / 60);
    let rhours = Math.floor(hours);
    const minutes = 60 * (hours - rhours);
    let rminutes = Math.round(minutes);
    let label = 'AM';
    if ( 12 < rhours ) {
      rhours = rhours - 12;
      label = 'PM';
    }
    rminutes = ( 0 !== rminutes ) ? `:${rminutes}` : '';
    return `${rhours}${rminutes} ${label}`;
  };

  /**
   * Calculate pixel position representing time.
   *
   * @param {number} minutes Minutes from this.startTime.
   * @returns {number} Pixel position representative of given time.
   */
  calcTimePixelPos(minutes) {
    return this.hourInPixels / 60 * minutes;
  };
}
