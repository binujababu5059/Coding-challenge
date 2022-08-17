import React,{Component} from "react";
import  Icon  from 'react-native-vector-icons/MaterialIcons';

import {
  View,
  StyleSheet,
  ImageBackground,
  Image,
  Text,
  TextInput,
  TouchableHighlight
}from "react-native"




export default class Register extends Component{

  constructor(){
    super();
    this.state ={
      number:null
    

    }
}

  
  render(){
    return (
    <View style={styles.container}>
      <View style={{height:'35%',width:'100%',alignItems:'center',justifyContent:'center'}}>
      <Image source={require('../images/inmakes.png')}
        style={styles.logo}>
          </Image>
          <Image style={{height:80,width:80,marginTop:40}} source={require('../images/book3.jpg')}>
              
            </Image>
          
         </View>
         
            
          <View style={{height:'20%',width:'100%',alignItems:'center',justifyContent:'center'}}>
          <Text style={styles.textView}>Student Details</Text>
          
         
    
          
          </View>
          
          <View style={styles.vwbar}>
            <TextInput style={styles.inputvw}
            placeholder={'Full name'}
            placeholderTextColor={'white'}>

            </TextInput>

            <TextInput style={styles.inputvw}
            placeholder={'Email'}
            placeholderTextColor={'white'}>
            </TextInput>
            
              
             <View style={styles.dropdwn}>
            <TextInput
            placeholder={'Select state'}
            placeholderTextColor={'white'}>
            </TextInput>
            <View style={{marginLeft:120,marginTop:5}}>
              <Icon name="expand-more" size={20} color='white'></Icon>
              </View>
            </View>
          

            <TextInput style={styles.inputvw}
            placeholder={'Pin code'}
            placeholderTextColor={'white'}>

            </TextInput>
          
            
            
            <TouchableHighlight style={styles.button}
            underlayColor='white'
            onPress={()=>this.props.navigation.navigate('Continue')}>
              <Text style={{fontWeight:'bold',color:'white',fontSize:16}}>Register</Text>

            </TouchableHighlight>
            
          </View>
          
          
            
              

          
          </View>
    )
  }
}
  
  


const styles = StyleSheet.create({
  container : {
    height: '100%',
    width : '100%',
    backgroundColor: 'white',
    alignItems:'center',
    justifyContent:'center'
   },
  logo:{
    height:80,
    width:300,
    marginTop:80
    
    
  },
  textView:{
    fontSize:20,
    fontWeight: 'bold',
    color:'black',
    marginTop:50,
    
  },
  inputvw:{
    height:50,
    width:250,
    backgroundColor:'black',
    borderRadius:5,
    borderWidth:2,
    marginLeft:5,
    marginTop:10,
    padding:10,
    color:'white',
    borderColor:'gray',
    
    },
  vwbar:{
    height:'55%',
    width:'100%',
    backgroundColor:'black',
    borderRadius:20,
    alignItems:'center',
    justifyContent:'center',
    
  },
  button:{
    height:40,
    width:200,
    backgroundColor:'green',
    marginTop:15,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:5,
    marginBottom:20

  },
  vwicon:{
    height:50,
    width:250,
    backgroundColor:'black',
    borderRadius:5,
    borderWidth:2,
    marginLeft:5,
    marginTop:10,
    padding:10,
    color:'white',
    borderColor:'gray',
    flexDirection:'row'
  },
  dropdwn:{
    height:60,
    width:'65%',
    backgroundColor:'black',
    borderRadius:5,
    borderWidth:2,
    marginLeft:5,
    marginTop:10,
    padding:10,
    color:'white',
    borderColor:'gray',
    flexDirection:'row'
  }


})

