import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { View } from "react-native";

import Login from "./src/page1";
import Otp from "./src/page2";
import Register from "./src/page3";
import Continue from "./src/page4";
import Arrow from "./src/page5";
import Biology from "./src/BottomTab/Biology";


import Home from "./src/BottomTab/Home";
import Recent from "./src/BottomTab/Recent";
import Profile from "./src/BottomTab/Profile"
import Contact from "./src/BottomTab/Contact"
import Exams from "./src/BottomTab/Exams"
import  Icon  from "react-native-vector-icons/MaterialIcons";


import Videos from "./src/Toptab/Videos"
import Chapter from "./src/Toptab/Chapter"
import Resources from "./src/Toptab/Resources"
import Bank from "./src/Toptab/Bank"
import { TouchableHighlight } from "react-native-gesture-handler";
import { Text } from "react-native";

const stack= createStackNavigator()
const BottomTab= createBottomTabNavigator()
const Toptab= createMaterialTopTabNavigator()

function Mystack(){
  return(
    <stack.Navigator>
      <stack.Screen
      name="login"
      component={Login}
      options={{headerShown:false}}/>

      <stack.Screen
      name="Otp"
      component={Otp}
      options={{headerShown:false}}/>

      <stack.Screen
      name="Register"
      component={Register}
      options={{headerShown:false}}/>

      <stack.Screen
      name="Continue"
      component={Continue}
      options={{headerShown:false}}/>

      <stack.Screen
      name="Arrow"
      component={Arrow}
      options={{headerShown:false}}/>

      <stack.Screen
      name="MyBottomTab"
      component={MyBottomTab}
      options={{headerShown:false}}/>

      <stack.Screen
      name="Biology"
      component={Biology}
      options={{headerShown:false}}/>

      <stack.Screen
      name="Mytab"
      component={Mytab}
      options={{headerShown:false}}/>

     </stack.Navigator>

     
    
  )
}

function MyBottomTab(){
  return(
    <BottomTab.Navigator
    screenOptions={{
    
      tabBarLabelStyle:{fontSize:16},
      tabBarItemStyle:{width:100},
      tabBarStyle:{backgroundColor:'white'},
      
    }}>
      <BottomTab.Screen
      name="Home"
      component={Home}
      options={{
        headerShown:false,
        tabBarActiveTintcolor:'green',
        tabBarActiveTintcolor:'gray',
        tabBarIcon:({focused})=>
        focused? <Icon name="home" size={26} color={'green'}/>:<Icon name="home" size={20} color={'gray'}/>
      }}/>
      <BottomTab.Screen
      name="Recent"
      component={Recent}
      options={{
        headerShown:false,
        tabBarActiveTintcolor:'green',
        tabBarActiveTintcolor:'gray',
        tabBarIcon:({focused})=>
        focused? <Icon name="play-arrow" size={26} color={'green'}/>:<Icon name="play-arrow" size={20} color={'gray'}/>
      }}/>
      <BottomTab.Screen
      name="Exams"
      component={Exams}
      options={{
        headerShown:false,
        tabBarActiveTintcolor:'green',
        tabBarActiveTintcolor:'gray',
        tabBarIcon:({focused})=>
        focused? <Icon name="chat" size={26} color={'green'}/>:<Icon name="chat" size={20} color={'gray'}/>
      }}/>
      <BottomTab.Screen
      name="Profile"
      component={Profile}
      options={{
        headerShown:false,
        tabBarActiveTintcolor:'green',
        tabBarActiveTintcolor:'gray',
        tabBarIcon:({focused})=>
        focused? <Icon name="person" size={26} color={'green'}/>:<Icon name="person" size={20} color={'gray'}/>
      }}/>
      <BottomTab.Screen
      name="Contact"
      component={Contact}
      options={{
        headerShown:false,
        tabBarActiveTintcolor:'green',
        tabBarActiveTintcolor:'gray',
        tabBarIcon:({focused})=>
        focused? <Icon name="mail" size={26} color={'green'}/>:<Icon name="mail" size={20} color={'gray'}/>
      }}/>

    </BottomTab.Navigator>
  )
}
function Mytab(){

return(
    
    <View style={{height:'100%',width:'100%'}}>
      <View style={{height:'30%',width:'100%',backgroundColor:'black'}}>
        <View style={{flexDirection:'row'}}>
        <TouchableHighlight style={{height:35,width:35,backgroundColor:'gray',marginTop:30,marginLeft:20,borderRadius:5}}
        underlayColor='white'
        onPress={()=>this.props.navigation.navigate('Biology')}>
        <View style={{alignItems:'center',justifyContent:'center',marginTop:5}}>
        <Icon name="chevron-left" color={'black'} size={22}></Icon>
        </View>
        </TouchableHighlight>
        </View>
        <View style={{alignItems:'center',justifyContent:'center'}}>
        <Text style={{fontSize:22,color:'white',marginLeft:10}}>Biology</Text>
        <Text style={{fontWeight:'bold',color:'white',fontSize:26,marginTop:20}}>Long chapter names can be shown here</Text>
        
        </View>
        <View style={{marginLeft:20,flexDirection:'row',marginTop:10}}>

                    <Icon name="radio-button-checked" color={'green'} size={18}></Icon>
                    <Text style={{color:'gray', marginLeft:10}}>chapter 1</Text>

                    <View style={{marginLeft:10,flexDirection:'row'}}>
                    <Icon name="radio-button-checked" color={'green'} size={18}></Icon>
                    <Text style={{color:'gray', marginLeft:10}}>3 parts</Text>
                    </View>

                </View>

      </View>

    <Toptab.Navigator
    screenOptions={{
      tabBarLabelStyle:{fontSize:12},
      tabBarStyle:{backgroundColor:'black'}
      }}>
      
      <Toptab.Screen
      name='Videos'
      component={Videos} 
      options={{
        tabBarActiveTintColor:'red',
        tabBarInactiveTintColor:'gray',
        tabBarIcon:({focused})=>
        focused? <Icon name="preview" size={22} color='red'/>:<Icon
        name="preview" size={22} color={'gray'}/>
      }}>

      </Toptab.Screen>

      <Toptab.Screen
      name="Chapter"
      component={Chapter}
      options={{
        tabBarActiveTintColor:'red',
        tabBarInactiveTintColor:'gray',
        tabBarIcon:({focused})=>
        focused? <Icon name="pages"  size={22} color='red'/>:<Icon
        name="pages" size={22}  color={'gray'}/>
      }}> 
      </Toptab.Screen>

      <Toptab.Screen name="Resources"
      component={Resources}
      options={{
        tabBarActiveTintColor:'red',
        tabBarInactiveTintColor:'gray',
        tabBarIcon:({focused})=>
        focused? <Icon name="book" size={22} color='red'/>:<Icon
        name="book" size={22} color={'gray'}/>
      }}>
        </Toptab.Screen>


        <Toptab.Screen
        name="QN Bank"
        component={Bank}
        options={{
          tabBarActiveTintColor:'red',
          tabBarInactiveTintColor:'gray',
          tabBarIcon:({focused})=>
          focused? <Icon name="money" size={22}  color='red'/>:<Icon
          name="money" size={22} color={'gray'}/>
        }}>
        
      </Toptab.Screen>
      

    </Toptab.Navigator>
    
     </View>  
  )
}

export default function App(){
  return(
    <NavigationContainer>
      <Mystack/>
    </NavigationContainer>
  )
}