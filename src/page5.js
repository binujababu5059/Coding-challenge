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




export default class Arrow extends Component{

  constructor(){
    super();
    this.state ={
      number:null
    

    }
}

  
  render(){
    return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image style={{height:390,width:370}} source={require('../images/bukku.png')}></Image>

      </View>
      <View style={{height:'20%',width:'100%',alignItems:'center',justifyContent:'center'}}>
      <Text style={styles.textView}>App tour title</Text>
      <Text>The app tour description goes here</Text>
      </View>
      <TouchableHighlight style={styles.button}
      underlayColor='white'
      onPress={()=>this.props.navigation.navigate('MyBottomTab')}>
        <Icon name={'arrow-forward'} color={'black'} size={26}></Icon>
      </TouchableHighlight>
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
  textView:{
    fontSize:20,
    fontWeight: 'bold',
    color:'black',
    marginTop:90,
    
  },

  button:{
    height:70,
    width:70,
    backgroundColor:'green',
    marginTop:20,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:5,
    borderColor:'black',
    borderWidth:4,
    marginBottom:20
   },
   card:{
    
    height:'60%',
    width:'95%',
    elevation:8,
    justifyContent:'center',
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center'
  

   }

})

