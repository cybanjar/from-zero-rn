import React from 'react';
import { Text, View, useColorScheme, StyleSheet, Image, Button, TouchableHighlight } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Login = () => {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    return (
        <View style={styles.sectionContainer}>
            <Image source={require('../assets/image/logo_child.png')}
                style={{ width: 50, height: 50, marginTop: 36 }} />

            <Text style={[styles.sectionTitle, {
                color: isDarkMode ? Colors.white : Colors.black,
            }]}>Welcome back, {'\n'} Plase login!</Text>

            <Text style={{ marginTop: 60, color: '#a8a8a8', fontSize: 16 }}>Enter your email and password</Text>

            <TouchableHighlight activeOpacity={0.6}>
                <Text style={styles.text}>
                    Login
                </Text>
            </TouchableHighlight>
        </View>
    );
}

const styles = StyleSheet.create({
    sectionContainer: {
        paddingHorizontal: 24,
        height: '100%',
        backgroundColor: '#FFF'
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        marginTop: 40,
    },
    text: {
        padding: 14,
        backgroundColor: '#8FB7F3',
        textAlign: 'center',
        color: '#fff',
        fontSize: 16,
        fontWeight: '700',
        borderRadius: 30
    }
})


export default Login;