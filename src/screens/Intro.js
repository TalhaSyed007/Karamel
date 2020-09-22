import React, { Component } from 'react'
import { View, StyleSheet, Text, ImageBackground, Image } from 'react-native'
import { intro, right } from '../../assets'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default class Intro extends Component {

    render() {
        return (
            <View style={styles.main}>

                <ImageBackground
                    style={{ width: '100%', height: '100%', resizeMode: 'cover' }}
                    source={intro}
                    resizeMode={'cover'}
                >
                    <View style={{ flex: 1, justifyContent: 'flex-end', left: '80%', top: 50 }}>
                        <TouchableOpacity
                            style={{ width: '50%', height: 120 }}
                            onPress={() => this.props.navigation.navigate('Login')}
                        >
                            <Image

                                source={right}
                            />
                        </TouchableOpacity>
                    </View>
                </ImageBackground>


            </View>
        );
    }
}
const styles = StyleSheet.create({
    main: {
        flex: 1
    }
})