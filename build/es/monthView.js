import React from 'react';
import PropTypes from 'prop-types';

import { getWeekArray } from './dateUtils';

var MonthView = function MonthView(_ref) {
  var DateTimeFormat = _ref.DateTimeFormat,
      displayDate = _ref.displayDate,
      firstDayOfWeek = _ref.firstDayOfWeek,
      locale = _ref.locale;

  var weekArray = getWeekArray(displayDate, firstDayOfWeek);

  return React.createElement(
    'div',
    { style: { display: 'flex', flexDirection: 'column', width: '100%' } },
    weekArray.map(function (week, j) {
      return React.createElement(
        'div',
        { key: j, style: { display: 'flex', justifyContent: 'space-around' } },
        week.map(function (day, i) {
          return React.createElement(
            'div',
            { key: i },
            new DateTimeFormat(locale, { day: 'numeric' }).format(day)
          );
        })
      );
    })
  );
};

MonthView.defaultProps = {
  DateTimeFormat: Intl.DateTimeFormat,
  locale: 'en-EN',
  firstDayOfWeek: 1,
  displayDate: new Date()
};

MonthView.propTypes = {
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
    * The date to display (default is today date)
    */
  displayDate: PropTypes.instanceOf(Date),

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

export default MonthView;