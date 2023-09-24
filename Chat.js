import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet } from "react-native";

function SignIn(){
    const ui=(
        <SafeAreaView style={styles.container}>
            <StatusBar hidden={true}/>
        </SafeAreaView>
    );
    return ui();
}

const styles=StyleSheet.create({

    contaier:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"white"
    },

});