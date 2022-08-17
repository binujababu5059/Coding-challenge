import React,{Component} from "react";
import { View,Text,StyleSheet,Image, TouchableHighlight } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import  Icon  from "react-native-vector-icons/MaterialIcons";

export default class Videos extends Component{
    render(){
        return(
            <ScrollView>
            <View style={styles.container}>
                
                <TouchableHighlight style={{height:250, width:'80%',backgroundColor:'black',marginTop:20,borderRadius:5}}
                underlayColor='white'
                onPress={()=>this.props.navigation.navigate('Whatsapp')}>
                    <View>
                    <Image style={{height:150,width:'100%'}} source={require('./tabimage/let.jpg')}></Image>
                    <Text style={{fontWeight:'bold',color:'white',fontSize:18,marginTop:10,marginLeft:10}}>Long chapter names can be shown here</Text>
                    <View style={{marginLeft:20,flexDirection:'row',marginTop:10}}>

                    <Icon name="radio-button-checked" color={'green'} size={18}></Icon>
                    <Text style={{color:'gray', marginLeft:10}}>chapter 1</Text>

                    <View style={{marginLeft:10,flexDirection:'row'}}>
                    <Icon name="radio-button-checked" color={'green'} size={18}></Icon>
                    <Text style={{color:'gray', marginLeft:10}}>part 1</Text>
                    </View>

                </View>
                </View>
                </TouchableHighlight>

                

                <TouchableHighlight style={{height:250, width:'80%',backgroundColor:'black',marginTop:20,borderRadius:5}}
                underlayColor='white'
                onPress={()=>this.props.navigation.navigate('Whatsapp')}>
                    <View>
                    <Image style={{height:150,width:'100%'}} source={require('./tabimage/let.jpg')}></Image>
                    <Text style={{fontWeight:'bold',color:'white',fontSize:18,marginTop:10,marginLeft:10}}>Long chapter names can be shown here</Text>
                    <View style={{marginLeft:20,flexDirection:'row',marginTop:10}}>

                    <Icon name="radio-button-checked" color={'green'} size={18}></Icon>
                    <Text style={{color:'gray', marginLeft:10}}>chapter 1</Text>

                    <View style={{marginLeft:10,flexDirection:'row'}}>
                    <Icon name="radio-button-checked" color={'green'} size={18}></Icon>
                    <Text style={{color:'gray', marginLeft:10}}>part 1</Text>
                    </View>

                </View>
                </View>
                </TouchableHighlight>


            </View>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({

    container:{
        flex:1,
        alignItems:'center',
        
        backgroundColor:'white',
    
    },
    hometext:{
        fontSize:20,
        fontWeight:'bold',
        color:'black'
        
    }
})