import React,{Component} from "react";
import { View,Text,StyleSheet, ImageBackground,TextInput,TouchableHighlight,Image } from "react-native";
import  Icon  from "react-native-vector-icons/MaterialIcons";

export default class Whatsapp extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={{height:'30%',width:'100%'}}>
                    <ImageBackground style={{height:'100%',width:'100%'}} source={require('../Toptab/tabimage/let.jpg')}>
                        <View style={{marginTop:85,marginLeft:170}}>
                            <Icon name="play-arrow" color={'green'} size={60}></Icon>

                        </View>

                    </ImageBackground>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{color:'gray',marginTop:10,marginLeft:10,fontSize:16}}>Long chapter names can be shown here</Text>
                        <View style={{marginTop:10,marginLeft:50}}>
                        <Icon name="file-download" color={'gray'} size={22}></Icon>
                        </View>
                    </View>
                    <Text style={{color:'white',marginLeft:325}}>download</Text>
                    <View style={{flexDirection:'row',marginLeft:20,marginTop:20}}>
                        <Icon name="chevron-left" color={'green'} size={24}></Icon>
                        <Text style={{color:'gray', marginLeft:10,fontWeight:'bold'}}>previous</Text>
                        <View style={{marginLeft:80,flexDirection:'row'}}>
                    <Icon name="radio-button-checked" color={'green'} size={18}></Icon>
                    <Text style={{color:'gray', marginLeft:10,fontWeight:'bold'}}>part 1</Text>
                    </View>

                    <View style={{marginLeft:70,flexDirection:'row'}}>
                    
                    <Text style={{color:'gray', marginLeft:10,fontWeight:'bold'}}>next</Text>
                    <Icon name="chevron-right" color={'green'} size={22}></Icon>
                    </View>

                    
                    </View>

                    <View style={{height:'20%',width:'100%',backgroundColor:'black'}}>

                    </View>
                    
                    <View style={{flexDirection:'row',marginTop:10}}>
                    <View style={styles.box}>
                        <Text style={{color:'white',marginLeft:10,marginRight:10,marginTop:10}}>your sample question can be shown here no matter how long</Text>
                    </View>

                    <View style={{height:70,width:80,backgroundColor:'pink'}}>
                        <Image style={{height:70,width:80}} source={require('../BottomTab/assets/rrr.jpg')}></Image>

                    </View>

                    </View>

                    <View style={styles.dropdwn}>
                  <TextInput
                    placeholder={'Ask a question'}
                  placeholderTextColor={'white'}>
                 </TextInput>
                 <View style={{flexDirection:'row',marginLeft:60,marginTop:5}}>
                 <View style={styles.classbox}>
                            
                            <Text style={{fontWeight:'bold',color:'black',marginLeft:5}}>Post</Text>
                        </View>
                  </View>
                   </View>

                   <View style={{alignItems:'center',justifyContent:'center'}}>
                
                <TouchableHighlight style={styles.button2}>


                  <View style={{flexDirection:'row'}}>
                    <Icon name="phone" color={'white'} size={24}></Icon>
                  <Text style={{fontWeight:'bold',marginLeft:20,fontSize:18,marginRight:20}}>whatsapp</Text>
                  
                  
                  </View>
                </TouchableHighlight>
                </View>

                    </View>
                    
                

                
                
                
                

            
        )
    }
}
const styles = StyleSheet.create({

    container:{
        flex:1,
        
        backgroundColor:'black',
    
    },
    dropdwn:{
        height:60,
        width:'65%',
        backgroundColor:'black',
        borderRadius:5,
        borderWidth:2,
        marginLeft:70,
        marginTop:20,
        padding:10,
        color:'white',
        borderColor:'gray',
        flexDirection:'row'
      },
      box:{
        height:'100%',
        width:'60%',
        marginLeft:30,
        backgroundColor:'blue',
        borderRadius:5
      },
      button2:{
      
        height:40,
        width:200,
        backgroundColor:'green',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:5,
        flexDirection:'row',
        marginTop:15
    
    },
    classbox:{
        height:25,
        width:70,
        backgroundColor:'white',
        borderRadius:8,
        borderWidth:2,
        borderColor:'black',
        alignItems:'center',
        justifyContent:'center',
        
        
    },
})