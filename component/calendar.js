import React, {Component} from 'react';
import Month from './month';
import {View} from 'react-native';

export default class Calendar extends Component {
    render() {
        return (
            <View style={{backgroundColor: 'white'}}>
                <Month/>
            </View>
        );
    }
}
