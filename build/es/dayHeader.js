function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

import React from 'react';
import PropTypes from 'prop-types';
import { localizedWeekday } from 'material-ui/DatePicker/dateUtils';

var dayHeader = function dayHeader(_ref) {
  var DateTimeFormat = _ref.DateTimeFormat,
      locale = _ref.locale,
      firstDayOfWeek = _ref.firstDayOfWeek;

  var daysArray = [].concat(_toConsumableArray(Array(7)));

  return React.createElement(
    'div',
    { style: { display: 'flex', width: '100%', justifyContent: 'space-around' } },
    daysArray.map(function (Ø, i) {
      var day = localizedWeekday(DateTimeFormat, locale, i, firstDayOfWeek);
      return React.createElement(
        'div',
        { key: i },
        day
      );
    })
  );
};

dayHeader.defaultProps = {
  DateTimeFormat: Intl.DateTimeFormat,
  locale: 'en-EN',
  firstDayOfWeek: 1
};

dayHeader.propTypes = {
  /**
    * Constructor for date formatting for the specified `locale`.
    * The constructor must follow this specification: ECMAScript Internationalization API 1.0.
    * `Intl.DateTimeFormat` is supported by most modern browsers, see http://caniuse.com/#search=intl,
    * otherwise https://github.com/andyearnshaw/Intl.js is a good polyfill.
    *
    * By default, `Intl.DateTimeFormat` will be used
    */
  DateTimeFormat: PropTypes.func,

  /**
    * Used to change the first day of week. It varies from
    * Saturday to Monday between different locales.
    * The allowed range is 0 (Sunday) to 6 (Saturday).
    * The default is `1`, Monday, as per ISO 8601.
    */
  firstDayOfWeek: PropTypes.number,

  // The locale ('en' by default)
  locale: PropTypes.string
};

export default dayHeader;