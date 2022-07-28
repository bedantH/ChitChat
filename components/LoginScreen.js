import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image, Button } from 'react-native'
import React, {useState} from 'react'

export default function LoginScreen({navigation}) {
    const [username, setUsername] = useState(""); 

    const handleClick = () => {
        navigation.navigate('Chat', {user: username})
    };

    return (
        <View style={styles.container}>
            <View style={styles.circle} />
            <Image style={styles.image} source={require('../assets/logo1.png')}/>
            <Text style={styles.heading}>Username: </Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your username: "
                onChangeText={(userName) => {setUsername(userName)}}
            />
            <TouchableOpacity
                onPress={handleClick}
                title="Login"
                style={styles.button}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F4F5F7",
        padding: 20,
        paddingTop: 10
    },
    circle: {
        width: 500,
        height: 500,
        borderRadius: 500 / 2,
        backgroundColor: "#FFF",
        position: 'absolute',
        left: -120,
        top: -20
    },
    image: {
        width: 150,
        height: 150,
        alignSelf: 'center',
        marginTop: 20
    },
    heading: {
        fontSize: 23,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: '#000',
        padding: 10,
        borderRadius: 10,
        marginTop: 10 
    },
    button: {
        alignSelf: 'flex-start',
        marginTop: 20,
        backgroundColor: '#03028B',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 10
    },
    buttonText: {
        color: '#fff'
    }
});