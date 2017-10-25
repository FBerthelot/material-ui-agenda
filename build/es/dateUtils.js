function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/* eslint import/prefer-default-export: 'off' */

import { getDaysInMonth } from 'material-ui/DatePicker/dateUtils';

export function getWeekArray(d, firstDayOfWeek) {
  var daysInMonth = getDaysInMonth(d);

  var dayArray = [].concat(_toConsumableArray(Array(daysInMonth))).map(function (Ø, i) {
    return new Date(d.getFullYear(), d.getMonth(), i + 1);
  });

  var currentWeek = [];
  return dayArray.reduce(function (acc, day, i) {
    if (currentWeek.length === 7) {
      acc.push(currentWeek);
      currentWeek = [];
    }

    // If there is date to add from the past month
    if (i === 0 && day.getDay() !== firstDayOfWeek) {
      var dayInPastMonth = getDaysInMonth(new Date(d.getFullYear(), d.getMonth() - 1));
      var numberOfDayToAdd = Math.abs((day.getDay() || 7) - firstDayOfWeek);

      currentWeek = [].concat(_toConsumableArray(Array(numberOfDayToAdd))).map(function (Ø, j) {
        var dayToRemove = numberOfDayToAdd - (j + 1);
        return new Date(d.getFullYear(), d.getMonth() - 1, dayInPastMonth - dayToRemove);
      });
    }

    currentWeek.push(day);

    // if there is date to add from the next month
    if (i === dayArray.length - 1) {
      if (currentWeek.length !== 7) {
        [].concat(_toConsumableArray(Array(7 - currentWeek.length))).forEach(function (Ø, k) {
          currentWeek.push(new Date(d.getFullYear(), d.getMonth() + 1, k + 1));
        });
      }

      acc.push(currentWeek);
    }

    return acc;
  }, []);
}