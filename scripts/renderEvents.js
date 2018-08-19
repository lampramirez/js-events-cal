/*
 Assumptions:
 - I am not using ES6 since I'm not using a transpiler like Babel
 */

/*
  Final testing:
  - Run html validator
  - Remove console.logs
*/

var renderEvents = function(eventsArray) {
  // Gatekeeper
  if (!eventsArray || !Array.isArray(eventsArray)) {
    return 'Please supply an array of events.';
  }
  var hourInPixels = 60;
  var minuteInPixels = hourInPixels/60;
  var dayWidthInPixels = 100;
  var eventsOccuringNow = 0;
  
  var calEventHeight = function(calEvent) {
    return calEvent.duration * minuteInPixels;
  }

  var calEventStartPixel = function(calEvent) {
    return calEvent.starts_at * minuteInPixels;
  }

  var compareStartTime = function(a,b) {
    if (a.starts_at < b.starts_at) {
      return -1;
    }
    if (a.starts_at > b.starts_at) {
      return 1;
    }
    return 0;
  }

  var sortEvents = function() {
    var eventsCopy = eventsArray;
    return eventsCopy.sort(compareStartTime);
  }

  var renderEvent = function(calEvent) {
    // Check start time against previous end times

  }
  eventsArray.forEach(function(calEvent) {
    // Ensure each event has required properties
    if (!calEvent.starts_at || !calEvent.duration) {
      console.log('Event does not have `starts_at` or `duration`, both of which are required to render');
      return;
    }
    renderEvent(calEvent);
  })
}

// ***** FOR DEVELOPMENT ONLY *****
var eventsArray = [{starts_at: 120, duration: 45, title: "Meeting with Ben", location: "Coffee Shop"}, {starts_at: 240, duration: 60, title: "Lunch with Karl", location: "TBA"}, {starts_at: 75, duration: 60, title: "Sync with John"}, {starts_at: 360, duration: 25}, {starts_at: 420, duration: 120}];
renderEvents(eventsArray);
// ***** END DEVELOPMENT ONLY CODE *****
