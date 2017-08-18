import React, {Component} from 'react';
import {FlatList, Text, View} from 'react-native';

export default class Month extends Component {
    render() {
        return (
            <View>
                <FlatList
                    horizontal={true}
                    contentContainerStyle={{flex: 1, justifyContent:'space-around'}}
                    data={[
                        {key: 1, day: 'M'},
                        {key: 2, day: 'T'},
                        {key: 3, day: 'W'},
                        {key: 4, day: 'T'},
                        {key: 5, day: 'F'},
                        {key: 6, day: 'S'},
                        {key: 7, day: 'S'}
                    ]}
                    renderItem={({item}) => <View style={{width: 40, alignItems: 'center'}}><Text style={{fontSize: 11}}>{item.day}</Text></View>}
                />
                <FlatList
                    horizontal={true}
                    contentContainerStyle={{flex: 1, justifyContent:'space-around'}}
                    data={[
                        {key: 1, day: '20'},
                        {key: 2, day: '21'},
                        {key: 3, day: '22'},
                        {key: 4, day: '23'},
                        {key: 5, day: '24'},
                        {key: 6, day: '25'},
                        {key: 7, day: '26'}
                    ]}
                    renderItem={({item}) => <View style={{width: 40, alignItems: 'center'}}><Text style={{fontSize: 19}}>{item.day}</Text></View>}
                />
                <FlatList
                    horizontal={true}
                    contentContainerStyle={{flex: 1, justifyContent:'space-around'}}
                    data={[
                        {key: 1, day: '27'},
                        {key: 2, day: '28'},
                        {key: 3, day: '29'},
                        {key: 4, day: '30'},
                        {key: 5, day: '31'},
                        {key: 6, day: '1'},
                        {key: 7, day: '2'}
                    ]}
                    renderItem={({item}) => <View style={{width: 40, alignItems: 'center'}}><Text style={{fontSize: 19}}>{item.day}</Text></View>}
                />
            </View>
        );
    }
}
