
/**
 * Sample events arrays.
 */
const eventsArray = [
  {starts_at: 120, duration: 45, title: "1 Meeting with Ben", location: "Coffee Shop"},
  {starts_at: 135, duration: 215, title: "2 Meeting with Ben", location: "Coffee Shop by the tracks"},
  {starts_at: 240, duration: 60, title: "1 Lunch with Karl", location: "TBA"},
  {starts_at: 75, duration: 60, title: "1 Sync with John"},
  {starts_at: 360, duration: 25},
  {starts_at: 460, duration: 120},
  {starts_at: 120, duration: 45, title: "3 Meeting with Ben", location: "Coffee Shop"},
  {starts_at: 135, duration: 215, title: "4 Another Meeting with Ben", location: "Coffee Shop by the tracks"},
  {starts_at: 240, duration: 60, title: "2 Lunch with Karl", location: "TBA"},
  {starts_at: 75, duration: 60, title: "2 Sync with John"},
  {starts_at: 360, duration: 25},
  {starts_at: 470, duration: 120},
  {starts_at: 35, duration: 115, title: "5 Another Meeting with Ben", location: "Coffee Shop by the tracks"},
  {starts_at: 40, duration: 390, title: "3 Lunch with Karl", location: "TBA"},
  {starts_at: 175, duration: 15, title: "3 Sync with John"},
  {starts_at: 460, duration: 150},
  {starts_at: 450, duration: 60},
  {starts_at: 470, duration: 190, title: "4 Lunch with Karl", location: "TBA"},
  {starts_at: 75, duration: 60, title: "1 Sync with John"},
  {starts_at: 440, duration: 20},
  {starts_at: 460, duration: 120},
  {starts_at: 120, duration: 45, title: "3 Meeting with Ben", location: "Coffee Shop"},

  {starts_at: 120, duration: 45, title: "1 Meeting with Ben", location: "Coffee Shop"},
  {starts_at: 135, duration: 215, title: "2 Meeting with Ben", location: "Coffee Shop by the tracks"},
  {starts_at: 240, duration: 60, title: "1 Lunch with Karl", location: "TBA"},
  {starts_at: 75, duration: 60, title: "1 Sync with John"},
  {starts_at: 360, duration: 25},
  {starts_at: 460, duration: 120},
  {starts_at: 120, duration: 45, title: "3 Meeting with Ben", location: "Coffee Shop"},
  {starts_at: 135, duration: 215, title: "4 Another Meeting with Ben", location: "Coffee Shop by the tracks"},
  {starts_at: 240, duration: 60, title: "2 Lunch with Karl", location: "TBA"},
  {starts_at: 75, duration: 60, title: "2 Sync with John"},
  {starts_at: 360, duration: 25},
  {starts_at: 470, duration: 120},
  {starts_at: 35, duration: 115, title: "5 Another Meeting with Ben", location: "Coffee Shop by the tracks"},
  {starts_at: 40, duration: 390, title: "3 Lunch with Karl", location: "TBA"},
  {starts_at: 175, duration: 15, title: "3 Sync with John"},
  {starts_at: 460, duration: 150},
  {starts_at: 450, duration: 60},
  {starts_at: 470, duration: 190, title: "4 Lunch with Karl", location: "TBA"},
  {starts_at: 75, duration: 60, title: "1 Sync with John"},
  {starts_at: 440, duration: 20},
  {starts_at: 460, duration: 120},
  {starts_at: 120, duration: 45, title: "3 Meeting with Ben", location: "Coffee Shop"},

  {starts_at: 120, duration: 45, title: "1 Meeting with Ben", location: "Coffee Shop"},
  {starts_at: 135, duration: 215, title: "2 Meeting with Ben", location: "Coffee Shop by the tracks"},
  {starts_at: 240, duration: 60, title: "1 Lunch with Karl", location: "TBA"},
  {starts_at: 75, duration: 60, title: "1 Sync with John"},
  {starts_at: 360, duration: 25},
  {starts_at: 460, duration: 120},
  {starts_at: 120, duration: 45, title: "3 Meeting with Ben", location: "Coffee Shop"},
  {starts_at: 135, duration: 215, title: "4 Another Meeting with Ben", location: "Coffee Shop by the tracks"},
  {starts_at: 240, duration: 60, title: "2 Lunch with Karl", location: "TBA"},
  {starts_at: 75, duration: 60, title: "2 Sync with John"},
  {starts_at: 360, duration: 25},
  {starts_at: 470, duration: 120},
  {starts_at: 35, duration: 115, title: "5 Another Meeting with Ben", location: "Coffee Shop by the tracks"},
  {starts_at: 40, duration: 390, title: "3 Lunch with Karl", location: "TBA"},
  {starts_at: 175, duration: 15, title: "3 Sync with John"},
  {starts_at: 460, duration: 150},
  {starts_at: 450, duration: 60},
  {starts_at: 470, duration: 190, title: "4 Lunch with Karl", location: "TBA"},
  {starts_at: 75, duration: 60, title: "1 Sync with John"},
  {starts_at: 440, duration: 20},
  {starts_at: 460, duration: 120},
  {starts_at: 120, duration: 45, title: "3 Meeting with Ben", location: "Coffee Shop"},

  {starts_at: 120, duration: 45, title: "1 Meeting with Ben", location: "Coffee Shop"},
  {starts_at: 135, duration: 215, title: "2 Meeting with Ben", location: "Coffee Shop by the tracks"},
  {starts_at: 240, duration: 60, title: "1 Lunch with Karl", location: "TBA"},
  {starts_at: 75, duration: 60, title: "1 Sync with John"},
  {starts_at: 360, duration: 25},
  {starts_at: 460, duration: 120},
  {starts_at: 120, duration: 45, title: "3 Meeting with Ben", location: "Coffee Shop"},
  {starts_at: 135, duration: 215, title: "4 Another Meeting with Ben", location: "Coffee Shop by the tracks"},
  {starts_at: 240, duration: 60, title: "2 Lunch with Karl", location: "TBA"},
  {starts_at: 75, duration: 60, title: "2 Sync with John"},
  {starts_at: 360, duration: 25},
  {starts_at: 470, duration: 120},
  {starts_at: 35, duration: 115, title: "5 Another Meeting with Ben", location: "Coffee Shop by the tracks"},
  {starts_at: 40, duration: 390, title: "3 Lunch with Karl", location: "TBA"},
  {starts_at: 175, duration: 15, title: "3 Sync with John"},
  {starts_at: 460, duration: 150},
  {starts_at: 450, duration: 60},
  {starts_at: 470, duration: 190, title: "4 Lunch with Karl", location: "TBA"},
  {starts_at: 75, duration: 60, title: "1 Sync with John"},
  {starts_at: 440, duration: 20},
  {starts_at: 460, duration: 120},
  {starts_at: 120, duration: 45, title: "3 Meeting with Ben", location: "Coffee Shop"},
];

const eventsArray2 = [
  {starts_at: 75, duration: 60, title: "1 Sync with John"},
];

const eventsArray3 = [
  {starts_at: 75, duration: 60, title: "1 Sync with John"},
  {starts_at: 120, duration: 45, title: "3 Meeting with Ben", location: "Coffee Shop"},
];

const eventsArray4 = [
  {starts_at: 75, duration: 60, title: "1 Sync with John"},
  {starts_at: 440, duration: 20},
  {starts_at: 120, duration: 45, title: "3 Meeting with Ben", location: "Coffee Shop"},
];

const eventsArray5 = [
  {starts_at: 360, duration: 25},
  {starts_at: 470, duration: 120},
  {starts_at: 35, duration: 115, title: "5 Another Meeting with Ben", location: "Coffee Shop by the tracks"},
  {starts_at: 40, duration: 390, title: "3 Lunch with Karl", location: "TBA"},
  {starts_at: 175, duration: 15, title: "3 Sync with John"},
  {starts_at: 460, duration: 150},
  {starts_at: 450, duration: 60},
  {starts_at: 470, duration: 190, title: "4 Lunch with Karl", location: "TBA"},
];

const eventsArray6 = [
  {starts_at: 0, duration: 25},
  {starts_at: 24, duration: 120},
  {starts_at: 24, duration: 115, title: "5 Another Meeting with Ben", location: "Coffee Shop by the tracks"},
  {starts_at: 400, duration: 90, title: "3 Lunch with Karl", location: "TBA"},
  {starts_at: 175, duration: 15, title: "3 Sync with John"},
  {starts_at: 120, duration: 15},
  {starts_at: 50, duration: 60},
  {starts_at: 270, duration: 190, title: "4 Lunch with Karl", location: "TBA"},
];

const events = [
  {starts_at: 120, duration: 45, title: "Meeting with Ben", location: "Coffee Shop"},
  {starts_at: 240, duration: 60, title: "Lunch with Karl", location: "TBA"},
  {starts_at: 75, duration: 60, title: "Sync with John"},
  {starts_at: 360, duration: 25},
  {starts_at: 420, duration: 120}
];
