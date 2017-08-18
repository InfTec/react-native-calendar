/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import Calendar from './component/calendar';

export default class CalendarIos extends Component {
  render() {
    return (
      <Calendar/>
    );
  }
}

AppRegistry.registerComponent('reactNativeCalendar', () => CalendarIos);
