import React,{Component} from "react";
import { View,Text,StyleSheet,Image, ImageBackground } from "react-native";
import {  TouchableHighlight } from "react-native-gesture-handler";
import  Icon  from "react-native-vector-icons/MaterialIcons";
import { ScrollView } from "react-native";

export default class Home extends Component{
    render(){
        return(
            <ScrollView>
            <View style={styles.container}>
                
                <View style={{height:'15%',width:'100%',backgroundColor:'white',flexDirection:'row'}}>
                    <TouchableHighlight style={styles.iconbutton}
                    underlayColor='white'
                    onPress={()=>this.props.navigation.navigate('Mydrawer')}>
                    <Icon name="apps" color={'green'} size={24}></Icon>
                    </TouchableHighlight>
                    <View style={{flexDirection:'row'}} >
                        <Image style={{height:50,width:200,marginTop:35,marginLeft:10}} source={require('../BottomTab/assets/inmakes.png')}></Image>
                        <View style={styles.classbox}>
                            <Icon name="circle" color={'green'} size={22}></Icon>
                            <Text style={{fontWeight:'bold',color:'green',marginLeft:5}}>Classes</Text>
                        </View>
                    </View>
                </View>
            
                <Text style={{fontSize:16,color:'black',marginLeft:15,marginTop:15,fontWeight:'bold'}}>Goodmorning</Text>
                <Text style={{fontSize:24,color:'black',marginLeft:15,marginTop:5,fontWeight:'bold'}}>Adarsh Mohanan</Text>
                <View style={styles.box2}>
                    <Text style={{color:'white',marginLeft:15,marginTop:10}}>Class</Text>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{fontSize:20,color:'white',marginLeft:15,marginTop:5,fontWeight:'bold'}}>Plus Two Science</Text>
                        <View style={{marginLeft:130,marginTop:5}}>
                        <Icon name="expand-more" color={'gray'} size={24}></Icon>
                        </View>

                    </View>

                </View>
                
                
            
                <View style={{flexDirection:'row',width:900}}>
                  <ScrollView horizontal={true}
                  showsHorizontalScrollIndicator={false}>
                    <View style={{flexDirection:'row',width:1000}}>
                    
                    
                        <TouchableHighlight style={styles.classbox}
                        underlayColor='white'
                        onPress={()=>this.props.navigation.navigate('Biology')}>
                            <View style={{flexDirection:'row'}}>
                        <Icon name="circle" color={'green'} size={22}></Icon>
                            <Text style={{fontWeight:'bold',color:'green',marginLeft:5}}>Biology</Text>
                            </View>
                            </TouchableHighlight>

                            <TouchableHighlight style={styles.classbox}
                            underlayColor='white'
                            onPress={()=>this.props.navigation.navigate('Biology')}>
                            <View style={{flexDirection:'row'}}>
                        <Icon name="circle" color={'green'} size={22}></Icon>
                            <Text style={{fontWeight:'bold',color:'green',marginLeft:5}}>Physics</Text>
                            </View>
                            </TouchableHighlight>

                            <TouchableHighlight style={styles.classbox}
                            underlayColor='white'
                            onPress={()=>this.props.navigation.navigate('Biology')}>
                            <View style={{flexDirection:'row'}}>
                        <Icon name="circle" color={'green'} size={22}></Icon>
                            <Text style={{fontWeight:'bold',color:'green',marginLeft:5}}>Chemistry</Text>
                            </View>
                            </TouchableHighlight>

                            <TouchableHighlight style={styles.classbox}
                            underlayColor='white'
                            onPress={()=>this.props.navigation.navigate('Biology')}>
                            <View style={{flexDirection:'row'}}>
                        <Icon name="circle" color={'green'} size={22}></Icon>
                            <Text style={{fontWeight:'bold',color:'green',marginLeft:5}}>Maths</Text>
                            </View>
                            </TouchableHighlight>
                            </View>
                            </ScrollView>
                           
                            
                        
                          </View>
                          
                          
                         
                
                <Text style={{fontSize:16,color:'black',marginLeft:15,marginTop:15,fontWeight:'bold'}}>Recent courses</Text>

                <View style={{flexDirection:'row',width:900}}>
                  <ScrollView horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <View style={{flexDirection:'row',width:1000}}>
                    <View style={{height:140,width:230,backgroundColor:'red',marginLeft:20,marginTop:10,borderRadius:5,flexDirection:'row'}}>
                        
                            <ImageBackground style={{height:140,width:230}} source={require('../BottomTab/assets/bio.jpg')}>
                        <View style={{flexDirection:'row',marginLeft:40,marginTop:50}}>
                            
                            <Icon name="play-arrow" color={'black'} size={38}></Icon>
                            <Text style={{color:'black',fontWeight:'bold',fontSize:24}}>Course Title</Text>
                        </View>
                        </ImageBackground>
                        
                        

                         <View style={{marginLeft:10}}>
                            <ImageBackground style={{height:140,width:230}} source={require('../BottomTab/assets/bio.jpg')}>
                        <View style={{flexDirection:'row',marginLeft:40,marginTop:50}}>
                            
                            <Icon name="play-arrow" color={'black'} size={38}></Icon>
                            <Text style={{color:'black',fontWeight:'bold',fontSize:24}}>Course Title</Text>
                        </View>
                        </ImageBackground>
                        
                         </View>

                         </View>
                    

                </View>
                </ScrollView>
                </View>

                <View style={{flexDirection:'row',width:700}}>
                <ScrollView horizontal={true}
                showsHorizontalScrollIndicator={true}>
                   
                    
                <View style={{flexDirection:'row',width:900}}>
                    
                
                <View style={styles.lastbox}>
                    <View style={styles.inputbox}>
                    </View>
                    <Text style={{fontSize:20,color:'white',marginLeft:15,marginTop:5,fontWeight:'bold'}}>Target live classes</Text>
                    <Text style={{color:'gray',marginTop:10,marginLeft:5}}>Live classes by best teachers from learninghub to clear your doubts and to provide individual attention</Text>
                    <TouchableHighlight style={styles.button}>
                        <Text style={{color:'white',fontWeight:'bold'}}>Book a free class</Text>

                    </TouchableHighlight>

                </View>
                

                
                <View style={styles.lastbox}>
                    <View style={styles.inputbox}>
                    </View>
                    <Text style={{fontSize:20,color:'white',marginLeft:15,marginTop:5,fontWeight:'bold'}}> Availing free online councselling classes</Text>
                    <Text style={{color:'gray',marginTop:10,marginLeft:5}}>By learning hub career experts</Text>
                    <TouchableHighlight style={styles.button}>
                        <Text style={{color:'white',fontWeight:'bold'}}>Shedule a call</Text>

                    </TouchableHighlight>

                </View>
                
                

                </View>
                
                </ScrollView>
                </View>
                
                


            </View>
            
            </ScrollView>
            
        )
    }
}
const styles = StyleSheet.create({

    container:{
         backgroundColor:'white',
         height:900,
         width:1200
    
    },
    hometext:{
        fontSize:20,
        fontWeight:'bold',
        color:'black'
        
    },
    iconbutton:{
        height:40,
        width:40,
        backgroundColor:'white',
        borderRadius:5,
        borderWidth:1,
        borderColor:'gray',
        alignItems:'center',
        justifyContent:'center',
        marginTop:40,
        marginLeft:15

    },
    classbox:{
        height:40,
        width:100,
        backgroundColor:'white',
        marginTop:40,
        marginLeft:20,
        borderRadius:8,
        borderWidth:2,
        borderColor:'black',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row'
    },
    box2:{
        height:80,
        width:350,
        backgroundColor:'black',
        marginLeft:20,
        borderRadius:5
    },
    lastbox:{
        height:300,
        width:230,
        backgroundColor:'black',
        marginTop:10,
        marginLeft:20,
        borderRadius:8

    },
    inputbox:{
        height:100,
        width:100,
        backgroundColor:'gray',
        borderRadius:50,
        marginLeft:30,
        marginTop:20
    },
    button:{
        height:40,
        width:120,
        backgroundColor:'green',
        marginTop:20,
        marginLeft:50,
        borderRadius:8,
        alignItems:'center',
        justifyContent:'center',
        
    }
})