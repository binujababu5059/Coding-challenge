import React,{Component} from "react";
import { View,Text,StyleSheet,Image } from "react-native";
import { ScrollView, TouchableHighlight } from "react-native-gesture-handler";
import  Icon  from "react-native-vector-icons/MaterialIcons";

export default class Biology extends Component{
    render(){
        return(
            <ScrollView>
            <View style={styles.container}>
              <View style={styles.secndvw}>
                <View style={{height:'90%',width:'85%'}}>
                <View>
                <TouchableHighlight style={styles.button1}
                underlayColor='white'
                onPress={()=>this.props.navigation.navigate('Home')}>
                    <Icon name="chevron-left" color={'green'} size={28}></Icon>

                </TouchableHighlight>
                <Text style={{fontWeight:'bold',color:'gray',fontSize:28,marginTop:20}}>Biology</Text>
                
                <View style={{marginLeft:20,flexDirection:'row',marginTop:10}}>

                    <Icon name="radio-button-checked" color={'green'} size={18}></Icon>
                    <Text style={{color:'orange', marginLeft:10}}>12 chapters</Text>

                    <View style={{marginLeft:10,flexDirection:'row'}}>
                    <Icon name="radio-button-checked" color={'green'} size={18}></Icon>
                    <Text style={{color:'orange', marginLeft:10}}>124 hours</Text>
                    </View>

                </View>
            
                </View>
                
                
                <TouchableHighlight style={styles.centervw}
                 underlayColor='white'
                 onPress={()=>this.props.navigation.navigate('Mytab')}>
                    <View>
                        <Text style={{color:'black', fontWeight:'bold',marginTop:20,marginLeft:10,fontSize:18}}>Long chapter name can be displayed here</Text>
                        <View style={{flexDirection:'row',marginLeft:10,marginTop:10}}>
                        <Icon name="radio-button-checked" color={'green'} size={18}></Icon>
                        <Text style={{color:'gray', marginLeft:10,fontWeight:'bold'}}>chapter 1</Text>
                        <View style={{marginLeft:10,flexDirection:'row'}}>
                    <Icon name="radio-button-checked" color={'green'} size={18}></Icon>
                    <Text style={{color:'gray', marginLeft:10,fontWeight:'bold'}}>3 parts</Text>
                    </View>
                    </View>
                    </View>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.centervw}
                     underlayColor='white'
                     onPress={()=>this.props.navigation.navigate('Mytab')}>
                    <View>
                        <Text style={{color:'black', fontWeight:'bold',marginTop:20,marginLeft:10,fontSize:18}}>Long chapter name can be displayed here</Text>
                        <View style={{flexDirection:'row',marginLeft:10,marginTop:10}}>
                        <Icon name="radio-button-checked" color={'green'} size={18}></Icon>
                        <Text style={{color:'gray', marginLeft:10,fontWeight:'bold'}}>chapter 1</Text>
                        <View style={{marginLeft:10,flexDirection:'row'}}>
                    <Icon name="radio-button-checked" color={'green'} size={18}></Icon>
                    <Text style={{color:'gray', marginLeft:10,fontWeight:'bold'}}>3 parts</Text>
                    </View>
                    </View>
                    </View>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.centervw}
                     underlayColor='white'
                     onPress={()=>this.props.navigation.navigate('Mytab')}>
                    <View>
                        <Text style={{color:'black', fontWeight:'bold',marginTop:20,marginLeft:10,fontSize:18}}>Long chapter name can be displayed here</Text>
                        <View style={{flexDirection:'row',marginLeft:10,marginTop:10}}>
                        <Icon name="radio-button-checked" color={'green'} size={18}></Icon>
                        <Text style={{color:'gray', marginLeft:10,fontWeight:'bold'}}>chapter 1</Text>
                        <View style={{marginLeft:10,flexDirection:'row'}}>
                    <Icon name="radio-button-checked" color={'green'} size={18}></Icon>
                    <Text style={{color:'gray', marginLeft:10,fontWeight:'bold'}}>3 parts</Text>
                    </View>
                    </View>
                    </View>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.centervw}
                     underlayColor='white'
                     onPress={()=>this.props.navigation.navigate('Mytab')}>
                    <View>
                        <Text style={{color:'black', fontWeight:'bold',marginTop:20,marginLeft:10,fontSize:18}}>Long chapter name can be displayed here</Text>
                        <View style={{flexDirection:'row',marginLeft:10,marginTop:10}}>
                        <Icon name="radio-button-checked" color={'green'} size={18}></Icon>
                        <Text style={{color:'gray', marginLeft:10,fontWeight:'bold'}}>chapter 1</Text>
                        <View style={{marginLeft:10,flexDirection:'row'}}>
                    <Icon name="radio-button-checked" color={'green'} size={18}></Icon>
                    <Text style={{color:'gray', marginLeft:10,fontWeight:'bold'}}>3 parts</Text>
                    </View>
                    </View>
                    </View>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.centervw}
                     underlayColor='white'
                     onPress={()=>this.props.navigation.navigate('Mytab')}>
                    <View>
                        <Text style={{color:'black', fontWeight:'bold',marginTop:20,marginLeft:10,fontSize:18}}>Long chapter name can be displayed here</Text>
                        <View style={{flexDirection:'row',marginLeft:10,marginTop:10}}>
                        <Icon name="radio-button-checked" color={'green'} size={18}></Icon>
                        <Text style={{color:'gray', marginLeft:10,fontWeight:'bold'}}>chapter 1</Text>
                        <View style={{marginLeft:10,flexDirection:'row'}}>
                    <Icon name="radio-button-checked" color={'green'} size={18}></Icon>
                    <Text style={{color:'gray', marginLeft:10,fontWeight:'bold'}}>3 parts</Text>
                    </View>
                    </View>
                    </View>
                    </TouchableHighlight>

                    

                
                   
                
                </View>

                
                
              </View>
              </View>
              </ScrollView>
        )
    }
}
const styles = StyleSheet.create({

    container:{
        height:1000,
        backgroundColor:'white',
        alignItems:'center',
      
    
    },
    secndvw:{
      height:'40%',
      width:'100%',
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'black',
    
      
        
    },
    button1:{
      height:45,
      width:45,
      backgroundColor:'black',
      borderWidth:2,
      borderColor:'gray',
      borderRadius:5,
      alignItems:'center',
      justifyContent:'center',
      marginLeft:20,
    },
    centervw:{
      backgroundColor:'white',
      height:130,
      width:320,
      borderRadius:5,
      marginTop:30,
      marginLeft:10,
      borderWidth:2,
      borderColor:'gray',
      
      
    },
    profvw:{
      
      height:80,
      width:80,
      backgroundColor:'green',
      borderRadius:40,
      marginTop:20,
      marginLeft:20,
      
      
      
    },
    frsttxt:{
      fontWeight:'bold',
      color:'black',
      fontSize:18,
      marginTop:20,
      marginLeft:10
    },
    profimage:{
      height:'100%',
      width:'100%'
    },
    secndtext:{
      fontWeight:'bold',
      color:'black',
      fontSize:16,
      marginTop:10,
      marginLeft:10
    },
    button2:{
      
        height:40,
        width:250,
        backgroundColor:'green',
        marginTop:20,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:5,
        flexDirection:'row'
    
    }
    
})