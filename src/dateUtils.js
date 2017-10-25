/* eslint import/prefer-default-export: 'off' */

import { getDaysInMonth } from 'material-ui/DatePicker/dateUtils';

export function getWeekArray(d, firstDayOfWeek) {
  if (!d || !(d instanceof Date) || (firstDayOfWeek !== 0 && !firstDayOfWeek) || firstDayOfWeek > 6) {
    throw new Error('getWeekArray should be call with (AValidDate, numberOfFirstDayWeek)');
  }
  const daysInMonth = getDaysInMonth(d);

  const dayArray = [...Array(daysInMonth)]
    .map((Ø, i) => new Date(d.getFullYear(), d.getMonth(), i + 1));

  let currentWeek = [];
  return dayArray.reduce((acc, day, i) => {
    if (currentWeek.length === 7) {
      acc.push(currentWeek);
      currentWeek = [];
    }

    // If there is date to add from the past month
    if (i === 0 && day.getDay() !== firstDayOfWeek) {
      const dayInPastMonth = getDaysInMonth(new Date(d.getFullYear(), d.getMonth() - 1));
      const numberOfDayToAdd = Math.abs((day.getDay() || 7) - firstDayOfWeek);

      currentWeek = [...Array(numberOfDayToAdd)]
        .map((Ø, j) => {
          const dayToRemove = numberOfDayToAdd - (j + 1);
          return new Date(d.getFullYear(), d.getMonth() - 1, dayInPastMonth - dayToRemove);
        });
    }

    currentWeek.push(day);

    // if there is date to add from the next month
    if (i === dayArray.length - 1) {
      if (currentWeek.length !== 7) {
        [...Array(7 - currentWeek.length)].forEach((Ø, k) => {
          currentWeek.push(new Date(d.getFullYear(), d.getMonth() + 1, k + 1));
        });
      }

      acc.push(currentWeek);
    }

    return acc;
  }, []);
}
