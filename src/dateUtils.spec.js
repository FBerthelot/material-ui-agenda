/* eslint array-bracket-spacing: 'off' , no-multi-spaces: 'off' */
import { getWeekArray } from './dateUtils';

/* Helper for tests (choosen year is 2017), monday is the first day here */
const august2017Days = [
   [31,  1,  2,  3,  4,  5,  6],
   [ 7,  8,  9, 10, 11, 12, 13],
   [14, 15, 16, 17, 18, 19, 20],
   [21, 22, 23, 24, 25, 26, 27],
   [28, 29, 30, 31,  1,  2,  3],
];

const september2017Days = [
   [28, 29, 30, 31,  1,  2,  3],
   [ 4,  5,  6,  7,  8,  9, 10],
   [11, 12, 13, 14, 15, 16, 17],
   [18, 19, 20, 21, 22, 23, 24],
   [25, 26, 27, 28, 29, 30,  1],
];

const september2017DaysSunday = [
   [27, 28, 29, 30, 31,  1,  2],
   [ 3,  4,  5,  6,  7,  8,  9],
   [10, 11, 12, 13, 14, 15, 16],
   [17, 18, 19, 20, 21, 22, 23],
   [24, 25, 26, 27, 28, 29, 30],
];

const september2017DaysFriday = [
   [ 1,  2,  3,  4,  5,  6,  7],
   [ 8,  9, 10, 11, 12, 13, 14],
   [15, 16, 17, 18, 19, 20, 21],
   [22, 23, 24, 25, 26, 27, 28],
   [29, 30,  1,  2,  3,  4,  5],
];

const october2017Days = [
   [25, 26, 27, 28, 29, 30,  1],
   [ 2,  3,  4,  5,  6,  7,  8],
   [ 9, 10, 11, 12, 13, 14, 15],
   [16, 17, 18, 19, 20, 21, 22],
   [23, 24, 25, 26, 27, 28, 29],
   [30, 31,  1,  2,  3,  4,  5],
];

test('getWeekArray - no parameters', () => {
  expect(() => getWeekArray()).toThrow();
});

test('getWeekArray - not valide date', () => {
  expect(() => getWeekArray('2017', 0)).toThrow();
});

test('getWeekArray - no firstDayOfWeek', () => {
  expect(() => getWeekArray(new Date())).toThrow();
});

test('getWeekArray - invalid type of firstDayOfWeek', () => {
  expect(() => getWeekArray(new Date(), 'yu')).toThrow();
});

test('getWeekArray - invalid firstDayOfWeek number', () => {
  expect(() => getWeekArray(new Date(), 9)).toThrow();
});

test('getWeekArray - Each week should have 7 days', () => {
  const weekArray = getWeekArray(new Date(2017, 7), 1);
  expect(weekArray.length).toBeGreaterThan(0);
  weekArray.forEach((week) => {
    expect(week.length).toBe(7);
  });
});

test('getWeekArray - August 2017 should return good weekArray with monday as the first Day Of Week', () => {
  const weekArray = getWeekArray(new Date(2017, 7), 1);
  expect(weekArray.length).toBe(august2017Days.length);
  weekArray.forEach((week, i) => {
    week.forEach((day, j) => {
      expect(day instanceof Date).toBe(true);
      expect(day.getDate()).toBe(august2017Days[i][j]);
    });
  });
});

test('getWeekArray - september 2017 should return good weekArray with monday as the first Day Of Week', () => {
  const weekArray = getWeekArray(new Date(2017, 8), 1);
  expect(weekArray.length).toBe(september2017Days.length);
  weekArray.forEach((week, i) => {
    week.forEach((day, j) => {
      expect(day instanceof Date).toBe(true);
      expect(day.getDate()).toBe(september2017Days[i][j]);
    });
  });
});

test('getWeekArray - october 2017 should return good weekArray with monday as the first Day Of Week', () => {
  const weekArray = getWeekArray(new Date(2017, 9), 1);
  expect(weekArray.length).toBe(october2017Days.length);
  weekArray.forEach((week, i) => {
    week.forEach((day, j) => {
      expect(day instanceof Date).toBe(true);
      expect(day.getDate()).toBe(october2017Days[i][j]);
    });
  });
});

test('getWeekArray - september 2017 should return good weekArray with Sunday as the first Day Of Week', () => {
  const weekArray = getWeekArray(new Date(2017, 8), 0);
  expect(weekArray.length).toBe(september2017DaysSunday.length);
  weekArray.forEach((week, i) => {
    week.forEach((day, j) => {
      expect(day instanceof Date).toBe(true);
      expect(day.getDate()).toBe(september2017DaysSunday[i][j]);
    });
  });
});

test('getWeekArray - september 2017 should return good weekArray with friday as the first Day Of Week', () => {
  const weekArray = getWeekArray(new Date(2017, 8), 5);
  expect(weekArray.length).toBe(september2017DaysFriday.length);
  weekArray.forEach((week, i) => {
    week.forEach((day, j) => {
      expect(day instanceof Date).toBe(true);
      expect(day.getDate()).toBe(september2017DaysFriday[i][j]);
    });
  });
});
