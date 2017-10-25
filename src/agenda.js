import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import keycode from 'keycode';
// import transitions from 'material-ui/styles/transitions';
import CalendarToolbar from 'material-ui/DatePicker/CalendarToolbar';
import DateDisplay from 'material-ui/DatePicker/DateDisplay';
// import SlideInTransitionGroup from 'material-ui/internal/SlideIn';
import { addMonths } from 'material-ui/DatePicker/dateUtils';

import DayHeader from './dayHeader';
import MonthView from './monthView';


export default class Agenda extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // transitionDirection: 'left',
      displayDate: this.props.initialSelectedDate || new Date(),
      selectedDate: this.props.initialSelectedDate || new Date(),
      view: this.props.view,
    };
  }
/*
  formatDate(date) {
    const DateTimeFormat = this.props.DateTimeFormat || dateTimeFormat;
    return new DateTimeFormat(this.props.locale, {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
    }).format(date);
  }

  setDisplayDate(date, newSelectedDate) {
    const newDisplayDate = getFirstDayOfMonth(date);

    if (newDisplayDate !== this.state.displayedDate) {
      const direction = newDisplayDate > this.state.displayedDate ? 'right' : 'left';
      this.setState({
        displayedDate: newDisplayDate,
        transitionDirection: direction,
        selectedDate: newSelectedDate || this.state.selectedDate,
      });
    }
  }

  setSelectedDate(date) {
    const newDisplayDate = getFirstDayOfMonth(date);
    if (newDisplayDate === this.state.displayDate) {
      this.setState({ selectedDate: date });
    } else {
      this.setDisplayDate(newDisplayDate, date);
    }
  }

  handleTouchTapDay(event, date) {
    this.setSelectedDate(date);
  }
*/

  handleMonthChange(months) {
    this.setState({
      displayDate: addMonths(this.state.displayDate, months),
    });
  }

  render() {
    return (
      <div>
        <DateDisplay
          locale={this.props.locale}
          DateTimeFormat={this.props.DateTimeFormat}
          selectedDate={this.state.selectedDate}
          />
        <CalendarToolbar
          DateTimeFormat={this.props.DateTimeFormat}
          locale={this.props.locale}
          displayDate={this.state.displayDate}
          onMonthChange={this.handleMonthChange.bind(this)}
          />

        <DayHeader
          DateTimeFormat={this.props.DateTimeFormat}
          locale={this.props.locale}
          firstDayOfWeek={this.props.firstDayOfWeek}
          />

        {(() => {
          switch (this.state.view) {
            case 'month':
              return <MonthView
                DateTimeFormat={this.props.DateTimeFormat}
                locale={this.props.locale}
                firstDayOfWeek={this.props.firstDayOfWeek}
                displayDate={this.state.displayDate}
                />;
            default:
              return null;
          }
        })()}
      </div>
    );
  }
}

Agenda.defaultProps = {
  DateTimeFormat: Intl.DateTimeFormat,
  locale: 'en-EN',
  firstDayOfWeek: 1,
  view: 'month',
};

Agenda.propTypes = {
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

  // The date selected at first render (Today by default)
  initialSelectedDate: PropTypes.instanceOf(Date),


  // The locale ('en' by default)
  locale: PropTypes.string,

  // The view type, can only be month for now (By Default 'month')
  view: PropTypes.string,
/*
  DateTimeFormat: PropTypes.func,

  meetings: PropTypes.arrayOf(PropTypes.shape({
    kind: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    created: PropTypes.object,
    updated: PropTypes.object,
    summary: PropTypes.string,
    description: PropTypes.string,
    start: PropTypes.shape({
      // date: startDate,
      dateTime: PropTypes.object,
      // timeZone: startTimezone
    }),
    end: PropTypes.shape({
      // date: endDate,
      dateTime: PropTypes.object,
      // timeZone: endTimeZone
    }),
    endTimeUnspecified: PropTypes.bool,
    visibility: PropTypes.string,
    anyoneCanAddSelf: PropTypes.bool,
    guestsCanInviteOthers: PropTypes.bool,
    guestsCanModify: PropTypes.bool,
    guestsCanSeeOtherGuests: PropTypes.bool,
    privateCopy: PropTypes.bool,
    locked: PropTypes.bool,
    reminders: PropTypes.shape({
      useDefault: PropTypes.bool,
      overrides: PropTypes.arrayOf(PropTypes.shape({
          method: PropTypes.string,
          minutes: PropTypes.number,
        })),
    }),
    source: PropTypes.shape({
      url: PropTypes.string,
      title: PropTypes.string,
    }),
  })).isRequired, */
};
