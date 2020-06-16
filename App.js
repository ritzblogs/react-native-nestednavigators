import 'react-native-gesture-handler';
import * as React from 'react';
import { Button, StyleSheet, Dimensions,TouchableHighlight, TextInput, SafeAreaView, StatusBar, ScrollView, View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerGestureContext } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import LoginScreen from './pages/LoginScreen';
import SignupScreen from './pages/SignupScreen';

const DEVICE_WIDTH = Dimensions.get('screen').width;
const LOGOTYPE_WIDTH = 70;
const TITLE_OFFSET_CENTER_ALIGN = DEVICE_WIDTH / 2 - LOGOTYPE_WIDTH / 2;


import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
import ThirdPage from './pages/ThirdPage';



const NavigationDrawerStructure = (props) => {
  const toggleDrawer = () => {
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={() => toggleDrawer()}>
        <Image
          source={{ uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png' }}
          style={{ width: 25, height: 25, marginLeft: 5 }}
        />
      </TouchableOpacity>
    </View>
  );
}

function firstScreenStack({ navigation }) {
  return (
    <Stack.Navigator 
    initialRouteName="FirstPage">
      <Stack.Screen
        name="FirstPage"
        component={FirstPage}
        options={{
          title: '', //Set Header Title
         
          
          headerRight: () =>  <TouchableHighlight onPress={() => { navigation.navigate('Login') }}
          style={{ alignSelf: "flex-end", marginTop: 10, marginRight: 20 }}              >
          <Image
            source={require('./image/logout.png')}
            style={{ alignSelf: "flex-end", width: 20, height: 20, }}
  
          />
        </TouchableHighlight>,

          headerLeft: () => <NavigationDrawerStructure navigationProps={navigation} 
          
          />,
      
         
        
          headerTransparent: "true", headerTintColor: "#fff", headerTitleContainerStyle: { 
            left: TITLE_OFFSET_CENTER_ALIGN, // THIS RIGHT HERE
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
       <Stack.Screen
        name="SecondPage" options={{ title: "Employee Details", 
          headerTransparent: "true", headerTintColor: "#fff", headerTitleContainerStyle: {
            left: TITLE_OFFSET_CENTER_ALIGN-20, // THIS RIGHT HERE
          },
        }}
        component={SecondPage}
        />

    </Stack.Navigator>
  );
}


function secondScreenStack({ route,navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="ThirdPage"
     
      screenOptions={{
        headerLeft: () => <NavigationDrawerStructure navigationProps={route,navigation} />,
        headerStyle: {
          backgroundColor: 'transparent', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        }
      }}>
      <Stack.Screen
        name="ThirdPage"
        options={{ title: "About", 
        headerTransparent: "true", headerTintColor: "#fff", headerTitleContainerStyle: {
          left: TITLE_OFFSET_CENTER_ALIGN-20, // THIS RIGHT HERE
        },
      }}
        component={ThirdPage}
        />
      <Stack.Screen
        name="First Page"
        component={FirstPage}
        options={{
          title: 'Third Page', //Set Header Title
        }} />
    </Stack.Navigator>
  );
}

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();


function Dashboard() {
  return (

    <Drawer.Navigator

      drawerContentOptions={{
        activeTintColor: '#e91e63',
        itemStyle: { marginVertical: 5 },
      }}>
      <Drawer.Screen
     
        name="FirstPage" options={{ drawerLabel: 'Home',
          headerTransparent: "true", headerTintColor: "#fff", headerTitleContainerStyle: {
            left: TITLE_OFFSET_CENTER_ALIGN, // THIS RIGHT HERE
        },}}
        component={firstScreenStack} />
      <Drawer.Screen
       
        name="ThirdPage"
        options={{ drawerLabel: 'About' }}
        component={secondScreenStack} />
    </Drawer.Navigator>
  );
}



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={SignupScreen} options={{
          headerTransparent: "true", headerTintColor: "#fff", headerTitleContainerStyle: {
            left: TITLE_OFFSET_CENTER_ALIGN, // THIS RIGHT HERE
          },


        }} />
        <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}
