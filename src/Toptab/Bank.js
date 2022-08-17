import React,{Component} from "react";
import { View,Text,StyleSheet } from "react-native";

export default class Bank extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.hometext}>Bank page</Text>

            </View>
        )
    }
}
const styles = StyleSheet.create({

    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'black',
    
    },
    hometext:{
        fontSize:20,
        fontWeight:'bold',
        color:'gray'
        
    }
})