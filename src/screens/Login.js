import React, { Component, Fragment } from 'react'
import { View, StyleSheet, Text, ImageBackground, Image, ScrollView, TextInput, KeyboardAvoidingView, Dimensions } from 'react-native'
import { back, menu, mail, pass, deals } from '../../assets'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { color } from '../theme/color'
import { font } from '../theme/font'

export default class Login extends Component {
    handleSubmit = values => {
        if (values.email.length > 0 && values.password.length > 0) {
            this.setState({ isLoading: true });
            setTimeout(() => {
                this.props.navigation.navigate('DrawerScreens')
                this.setState({ isLoading: false })
            }, 1000)
        }
    }
    render() {
        return (

            <View style={styles.main}>
                <ImageBackground
                    style={{
                        resizeMode: 'cover', flexDirection: 'column', width: '100%', height: '100%'

                    }}
                    source={deals}
                    resizeMode={'cover'}
                >
                    <View style={{ left: 20, top: 20 }}>
                        <Image
                            source={menu}
                        />
                        <Text style={{ left: 60, bottom: 30, fontSize: 18 }}>Login</Text>
                    </View>

                    <View style={styles.inputContainer}>
                        <Image style={styles.inputIcon} source={mail} />
                        <TextInput style={styles.inputs}
                            placeholder="*Email"
                            placeholderTextColor='#F6F6F6'
                            autoCapitalize='none'

                        />

                    </View>

                    <View style={styles.inputContainer}>
                        <Image style={styles.inputIcon} source={pass} />
                        <TextInput style={styles.inputs}
                            placeholder="*Password"
                            placeholderTextColor='#F6F6F6'
                            secureTextEntry={true}

                        />

                    </View>


                    <View style={{ flex: 1, justifyContent: 'flex-end', bottom: 120 }}>
                        <TouchableOpacity style={styles.button}

                        >

                            <Text style={{ color: 'white', fontSize: 20, textAlign: 'center' }}>Login</Text>

                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', bottom: 20 }}>
                        <TouchableOpacity>
                            <Text style={{ color: '#fff' }}> Forgot Password?</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={{ color: '#fff' }}>Not Registered Yet?</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>

            </View>


        );
    }
}
const styles = StyleSheet.create({
    main: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    inputs: {
        borderColor: '#a61b29',
        borderWidth: 1,
        padding: 5,
        width: '85%',
        height: 40,
        alignSelf: 'center',
        backgroundColor: '#a61b29',
        borderRadius: 15,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        justifyContent: 'space-between',
        marginBottom: 10,
        top: '100%'
    },
    inputIcon: {
        width: 25,
        height: 25,
        marginLeft: 20,
        justifyContent: 'center'
    },
    button: {
        borderColor: color.btnColor,
        borderWidth: 1,
        padding: 5,
        width: '90%',
        height: 50,
        alignSelf: 'center',
        backgroundColor: color.btnColor,
        borderRadius: 10,

    }
})