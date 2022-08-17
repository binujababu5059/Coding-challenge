import React,{Component} from "react";
import { View,Text,StyleSheet,Image } from "react-native";
import { ScrollView, TouchableHighlight } from "react-native-gesture-handler";
import  Icon  from "react-native-vector-icons/MaterialIcons";

export default class Profile extends Component{
    render(){
        return(
          <ScrollView>
            <View style={styles.container}>
              <View style={styles.secndvw}>
                <View style={{height:'90%',width:'85%'}}>
                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                <Text style={{fontWeight:'bold',color:'white',fontSize:24}}>Profile</Text>
                <View style={{marginLeft:20}}>
                <Icon name="notifications" color={'gray'} size={24}  ></Icon>
                </View>
                <View style={{marginLeft:40}}>
                <TouchableHighlight style={styles.button1}
                 underlayColor='white'
                 onPress={()=>this.props.navigation.navigate('Continue')}>
                  <Icon name="apps" color={'green'} size={24}></Icon>
                </TouchableHighlight>
                </View>
                </View>
                
                
                <View style={styles.centervw}>
                  <View style={{height:'20%',width:'100%',backgroundColor:'white',flexDirection:'row'}}>
                    <View style={styles.profvw}>
                      <Image style={styles.profimage} source={require('../BottomTab/assets/rrr.jpg')}></Image>
                    </View>
                    <View>
                      <Text style={styles.frsttxt}>Adarsh Mohanan</Text>
                      <Text style={{marginLeft:10,fontWeight:'bold'}}>ID: adarsh123</Text>
                    </View>
                  </View>
                  <Text style={styles.frsttxt}>Personal Info</Text>
                  <View style={{flexDirection:'row',marginTop:10}}>
                  <Text style={{marginRight:20,fontWeight:'bold',marginTop:10,marginLeft:10}}>Account Settings</Text>
                  <Text style={styles.secndtext}>Free Rambler</Text>
                  </View>
                  <View style={{flexDirection:'row',marginTop:10}}>
                  <Text style={{marginRight:20,fontWeight:'bold',marginTop:10,marginLeft:10}}>Email</Text>
                  <Text style={{fontWeight:'bold',color:'black',fontSize:16,marginLeft:85,marginTop:10}}>adarsh1234</Text>
                  </View>
                  <Text style={styles.frsttxt}>Course Info</Text>
                  <View style={{flexDirection:'row',marginTop:10}}>
                  <Text style={{marginRight:20,fontWeight:'bold',marginTop:10,marginLeft:10}}>Center</Text>
                  <Text style={{fontWeight:'bold',color:'black',fontSize:16,marginLeft:75,marginTop:10}}>Inmakes edu</Text>
                  </View>
                  <View style={{flexDirection:'row',marginTop:10}}>
                  <Text style={{marginRight:20,fontWeight:'bold',marginTop:5,marginLeft:10}}>Course</Text>
                  <Text style={{fontWeight:'bold',color:'black',fontSize:16,marginLeft:70,marginTop:10}}>Plus Two Science</Text>
                  </View>
                  <View style={{flexDirection:'row',marginTop:10}}>
                  <Text style={{marginRight:20,fontWeight:'bold',marginTop:10,marginLeft:10}}>Payment Status</Text>
                  <Text style={{fontWeight:'bold',color:'black',fontSize:16,marginLeft:15,marginTop:10}}>Free</Text>
                  </View>
                  <View style={{flexDirection:'row',marginTop:10}}>
                  <Text style={{marginRight:20,fontWeight:'bold',marginTop:10,marginLeft:10}}>Expiry Date</Text>
                  <Text style={{fontWeight:'bold',color:'black',fontSize:16,marginLeft:40,marginTop:10}}>Not Applicable</Text>
                  </View>
                 
                 
                    
                  
                    
                
                   
                   
                  
                
                </View>
                
                   
                <View style={{height:'25%',width:'100%',alignItems:'center',justifyContent:'center'}}>
                
                <TouchableHighlight style={styles.button2}>
                  <View style={{flexDirection:'row'}}>
                    <Icon name="credit-card" color={'white'} size={24}></Icon>
                  <Text style={{fontWeight:'bold',marginLeft:20,fontSize:18,marginRight:20}}>custom payment</Text>
                  <Icon name="chevron-right" color={'white'} size={24} ></Icon>
                  
                  </View>
                </TouchableHighlight>
                </View>
                </View>

                
                
              </View>
              
                

                
                

            </View>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({

    container:{
        flex:1,
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
      height:50,
      width:50,
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
      height:450,
      width:300,
      borderRadius:5,
      marginTop:50,
      marginLeft:15,
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
        flexDirection:'row',
        marginBottom:10
    
    }
    
})