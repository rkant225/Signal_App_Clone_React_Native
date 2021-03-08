import { StatusBar } from 'expo-status-bar';
import React, { useLayoutEffect, useState } from 'react';
import {StyleSheet, View, KeyboardAvoidingView} from 'react-native';
import {Button, Input, Text} from 'react-native-elements'
const RegisterScreen = (props) =>{
    const {navigation} = props;


    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    useLayoutEffect(()=>{
        navigation.setOptions({
            title : 'Register', // This will overwrite the options provided in App.js
            headerBackTitle : 'Login' // Will visible in iPhone

        });
    }, [navigation])

    const handleRegisterDataSubmission =()=>{
        console.log('Done');
    }
    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <StatusBar style="light"/>
            <Text h3 style={{marginBottom : 10}}>Create a Signal account</Text>

            <View style={styles.inputContainer}>
                <Input placeholder="Full Name" type="text" autofocus value={fullName} onChangeText={(text)=>{setFullName(text)}}/>
                <Input placeholder="Email"  type="text" value={email} onChangeText={(text)=>{setEmail(text)}}/>
                <Input placeholder="Password" type="password" secureTextEntry value={password} onChangeText={(text)=>{setPassword(text)}}/>
                <Input placeholder="Image URL (Optional)" type="text" value={imageUrl} onChangeText={(text)=>{setImageUrl(text)}} onSubmitEditing={()=>{handleRegisterDataSubmission()}}/>
            </View>
            <Button raised containerStyle={{width : 200}} title="Regisrer" onPress={()=>{handleRegisterDataSubmission()}}/>
        </KeyboardAvoidingView>
    );
    
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center',
        padding : 10
    },
    inputContainer : {
        width : 300
    }
});
export default RegisterScreen;