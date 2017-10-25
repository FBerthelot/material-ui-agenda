var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

var Agenda = function (_Component) {
  _inherits(Agenda, _Component);

  function Agenda(props) {
    _classCallCheck(this, Agenda);

    var _this = _possibleConstructorReturn(this, (Agenda.__proto__ || Object.getPrototypeOf(Agenda)).call(this, props));

    _this.state = {
      // transitionDirection: 'left',
      displayDate: _this.props.initialSelectedDate || new Date(),
      selectedDate: _this.props.initialSelectedDate || new Date(),
      view: _this.props.view
    };
    return _this;
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

  _createClass(Agenda, [{
    key: 'handleMonthChange',
    value: function handleMonthChange(months) {
      this.setState({
        displayDate: addMonths(this.state.displayDate, months)
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return React.createElement(
        'div',
        null,
        React.createElement(DateDisplay, {
          locale: this.props.locale,
          DateTimeFormat: this.props.DateTimeFormat,
          selectedDate: this.state.selectedDate
        }),
        React.createElement(CalendarToolbar, {
          DateTimeFormat: this.props.DateTimeFormat,
          locale: this.props.locale,
          displayDate: this.state.displayDate,
          onMonthChange: this.handleMonthChange.bind(this)
        }),
        React.createElement(DayHeader, {
          DateTimeFormat: this.props.DateTimeFormat,
          locale: this.props.locale,
          firstDayOfWeek: this.props.firstDayOfWeek
        }),
        function () {
          switch (_this2.state.view) {
            case 'month':
              return React.createElement(MonthView, {
                DateTimeFormat: _this2.props.DateTimeFormat,
                locale: _this2.props.locale,
                firstDayOfWeek: _this2.props.firstDayOfWeek,
                displayDate: _this2.state.displayDate
              });
            default:
              return null;
          }
        }()
      );
    }
  }]);

  return Agenda;
}(Component);

export default Agenda;


Agenda.defaultProps = {
  DateTimeFormat: Intl.DateTimeFormat,
  locale: 'en-EN',
  firstDayOfWeek: 1,
  view: 'month'
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
  view: PropTypes.string
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