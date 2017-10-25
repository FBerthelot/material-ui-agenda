import React from 'react';
import PropTypes from 'prop-types';
import { localizedWeekday } from 'material-ui/DatePicker/dateUtils';

const dayHeader = ({ DateTimeFormat, locale, firstDayOfWeek }) => {
  const daysArray = [...Array(7)];

  return (
    <div style={{ display: 'flex', width: '100%', justifyContent: 'space-around' }}>
      {
        daysArray.map((Ø, i) => {
          const day = localizedWeekday(DateTimeFormat, locale, i, firstDayOfWeek);
          return <div key={i}>{day}</div>;
        })
      }
    </div>
  );
};

dayHeader.defaultProps = {
  DateTimeFormat: Intl.DateTimeFormat,
  locale: 'en-EN',
  firstDayOfWeek: 1,
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
  locale: PropTypes.string,
};

export default dayHeader;
