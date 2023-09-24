import { StatusBar } from "expo-status-bar";
import { View, SafeAreaView, StyleSheet, Text, TextInput } from "react-native";

export function SignIn() {
    const ui = (
        <SafeAreaView style={styles.contaier}>
            <StatusBar hidden={true} />
            <View style={styles.view1}>
                <Text>Mobile</Text>
                <TextInput style={styles.textInput} />
            </View>
            <View style={styles.view1}>
                <Text>Password</Text>
                <TextInput style={styles.textInput} />
            </View>
        </SafeAreaView>
    );
    return ui;
}

const styles = StyleSheet.create({

    contaier: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: "white"
    },
    view1: {
        width: '100%',
        padding: 20,
    },
    text1:{
        fontSize:16,
        fontWeight:'bold',
    },
    textInput: {
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'black',
        marginTop: 5,
        fontSize: 20,
        padding: 8,
        width: "100%",
        borderRadius:8,
    },


});