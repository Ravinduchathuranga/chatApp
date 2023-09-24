import { StatusBar } from "expo-status-bar";
import { View, SafeAreaView, StyleSheet, Text, TextInput, Button, Image, Alert } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import * as ImagePicker from 'expo-image-picker';
import { useState } from "react";

const countries = ['Sri Lanka', 'Australia', 'Japan'];


export function SignUp() {

    const [getImageUri, setImageUri] = useState(require('./assets/chat.png'));

    const ui = (
        <SafeAreaView style={styles.contaier}>
            <StatusBar hidden={true} />
            <Image source={getImageUri} />
            <View>
                <Button title="Select Profile Picture" onPress={
                    async () => {

                        const result = await ImagePicker.launchImageLibraryAsync();

                        if (!result.canceled) {
                            setImageUri(
                                {
                                    uri: result.assets[0].uri,
                                });

                        } else {
                            Alert.alert("Message", "Please Select Image");
                        }
                    }}
                />
            </View>
            <View style={styles.view1}>
                <Text>First Name</Text>
                <TextInput style={styles.textInput} autoCorrect={false} />
            </View>
            <View style={styles.view1}>
                <Text>Last Name</Text>
                <TextInput style={styles.textInput} autoCorrect={false} />
            </View>
            <View style={styles.view1}>
                <Text>Mobile</Text>
                <TextInput style={styles.textInput} autoCorrect={false} />
            </View>
            <View style={styles.view1}>
                <Text>Password</Text>
                <TextInput style={styles.textInput} secureTextEntry={true} />
            </View>
            <View style={styles.view1}>
                <Text>Country</Text>
                <SelectDropdown data={countries}
                    buttonStyle={{
                        width: "100%",
                        borderRadius: 6,
                    }}
                />
            </View>
            <View>
                <Button title="Sign Up" />
            </View>

        </SafeAreaView>
    );
    return ui;
}

const styles = StyleSheet.create({

    contaier: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "white"
    },
    view1: {
        width: '100%',
        padding: 10,
    },
    text1: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    textInput: {
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'black',
        marginTop: 5,
        fontSize: 20,
        padding: 8,
        width: "100%",
        borderRadius: 8,
    },
    btn: {
        marginTop: 10,
    },

});