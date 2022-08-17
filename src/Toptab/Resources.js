import React,{Component} from "react";
import { View,Text,StyleSheet } from "react-native";

export default class Resources extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.hometext}>Resource page</Text>

            </View>
        )
    }
}
const styles = StyleSheet.create({

    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'gray',
    
    },
    hometext:{
        fontSize:20,
        fontWeight:'bold',
        color:'black'
        
    }
})