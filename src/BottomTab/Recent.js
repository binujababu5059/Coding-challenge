import React,{Component} from "react";
import { View,Text,StyleSheet } from "react-native";
import  Icon  from "react-native-vector-icons/MaterialIcons";

export default class Recent extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.hometext}>recent page</Text>

            </View>
        )
    }
}
const styles = StyleSheet.create({

    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'red',
    
    },
    hometext:{
        fontSize:20,
        fontWeight:'bold',
        color:'black'
        
    }
})