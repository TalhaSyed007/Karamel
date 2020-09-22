import React, { Component } from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { splash } from '../../assets/index'

export default class Splash extends Component {
    componentDidMount = () => {
        this.splashDone();
    };

    splashDone = () => {
        setTimeout(() => {
            console.log('Timeout');
            this.props.navigation.navigate('Intro');
        }, 2000);
    };
    render() {
        return (
            <View style={styles.main}>
                <Image
                    style={{ width: '100%', height: '100%', resizeMode: 'cover' }}
                    source={splash}
                    resizeMode={'cover'}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    main: {
        flex: 1
    }
})