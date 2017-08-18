import { Platform } from 'react-native';
import CalendarAndroid from './index.android';
import CalendarIos from './index.ios';

const Calendar = Platform.OS === "ios"
    ? CalendarIos
    : CalendarAndroid;

export default Calendar;