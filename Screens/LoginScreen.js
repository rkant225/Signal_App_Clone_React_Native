import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {StyleSheet, View, Text, KeyboardAvoidingView} from 'react-native';
import {Button, Input, Image} from 'react-native-elements';

const LoginScreen = (props) =>{
    const {navigation} = props; // Coming from StackNavigator
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = () =>{

    }

    const handleRegister = () =>{
        navigation.navigate("Register")
    }


    return (
        <KeyboardAvoidingView enabled behavior="padding" style={styles.container}>
            <StatusBar style="light"/> 
            
            <Image source={{uri : "https://seeklogo.com/images/S/signal-logo-20A1616F60-seeklogo.com.png"}} style={{height : 150, width : 150}}/>
            <View style={styles.inputContainer}>
                <Input placeholder="Email" autoFocus type="email" value={email} onChangeText={(text)=>{setEmail(text)}}/>
                <Input placeholder="Password" secureTextEntry type="password" value={password} onChangeText={(text)=>{setPassword(text)}}/>
            </View>

            <Button title="Login" containerStyle={styles.button} onPress={handleSignIn}/>
            <Button title="Register" containerStyle={styles.button} type="outline" onPress={handleRegister}/>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        padding : 10,
        backgroundColor : 'white'
    }, 
    inputContainer : {
        width : 300
    },
    button : {
        width : 200,
        marginTop : 10
    }
});
export default LoginScreen;