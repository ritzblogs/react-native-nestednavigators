import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, TextInput, SafeAreaView, StatusBar, ScrollView, View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import AsyncStorage from '@react-native-community/async-storage'


const LoginScreen = ({ navigation }) => {
  const [password, setPwd] = useState("");
  const [uname, setUname] = useState(null);
  const [profile, setProfile] = useState([])
  const [listd, setListd] = useState([]);


  updateState = () => {

    try {
      AsyncStorage.getItem("4")
        .then(req => {
          var str = JSON.parse(req)
          console.log(str)

          console.log(str)
        })
    } catch (error) {

    }

    if (uname == null) {
      alert('Please enter emp id')
      return
    }

    if (password == null || password == '') {
      alert('Please enter password')
      return
    }
    try {

      AsyncStorage.getItem('profiles')
        .then(req => JSON.parse(req))
        .then(json => {


          setProfile(json.profileList)
          if (json.profileList != null && json.profileList.length > 0) {
            var myarr = []
            for (let i = 0; i < json.profileList.length; i++) {
              let jsond = json.profileList[i]
              if (jsond != null) {
                myarr.push(jsond.empid)
              }
            }

            setListd(myarr)

            updateData()

          }
        }
        )
        .catch(error => console.log('error!')

        );
    } catch (error) {
      console.log("error")

    }
  }

  updateData = () => {



    if (listd != null && listd.length > 0) {
      if (listd.includes(uname)) {
        AsyncStorage.getItem(uname)
          .then(req => {
            var str = JSON.parse(req)
            console.log(str)
            console.log(password)

            if (str == password) {
              unameInput.clear()
              pwdInput.clear()

              navigation.navigate('Dashboard')
            } else {
              alert('Incorrect password')
            }
            console.log(str)

          })
          .catch(error => {
            console.log('error!')
            alert('User doesnt exist')
          }
          );



      } else {
        alert("Employee with this id does not exist!")
        return
      }
    }
  }


  return (


    <ImageBackground
    
      source={require('../image/bg_signup.jpg')}
      style={styles.backgroundImage}>

        <StatusBar
        backgroundColor="#041E2F"
        />

      <KeyboardAwareScrollView
        extraScrollHeight={20}
        resetScrollToCoords={{ x: 0, y: 0 }}
        enableOnAndroid={true}
        contentContainerStyle={styles.backgroundImage} >

        <Text style={{ fontSize: 18, color: "white", marginTop: 20, position: "absolute", top: 0, alignSelf: "center" }}>
          Welcome to my App
        </Text>

        <View style={styles.containerInput}>

          <View style={styles.viewStyle}>
            <Icon name="user" size={20} color="#000" style={{ alignSelf: "center", alignItems: "center" }} />
            <TextInput ref={input => { unameInput = input }}
              onChangeText={text => setUname(text)} keyboardType={'numeric'}

              placeholder="Enter emp id" style={{ fontSize: 16, color: 'black', alignSelf: "center", alignItems: "center", marginLeft: 10, }}
            />
          </View>

          <View style={styles.viewStyle}>
            <Icon name="lock" size={20} color="#000" style={{ alignSelf: "center", alignItems: "center" }} />
            <TextInput onChangeText={text => setPwd(text)} ref={input => { pwdInput = input }}
              placeholder="Enter password" secureTextEntry={true} style={{ fontSize: 16, color: 'black', alignSelf: "center", alignItems: "center", marginLeft: 10, }} />
          </View>

          <TouchableOpacity style={styles.loginBtn} onPress={updateState}
          >
            <Text style={styles.textStyle}>LOGIN</Text>

          </TouchableOpacity>
          <View style={{
            width: "90%", flexDirection: 'row',
          }}>
            <Text onPress={() => navigation.navigate('Signup')}
              style={{ flex: 1, textAlign: "left", margin: 10, fontSize: 14, color: "#fff", }}>Create Account</Text>
            <Text style={{ flex: 1, justifyContent: "flex-end", textAlign: "right", margin: 10, fontSize: 14, color: "#fff", }}>Forgot Password?</Text>
          </View>

        </View>
        <Text onPress={() => navigation.navigate('Dashboard')}  
        style={{ fontSize: 18, color: "white", marginBottom: 20, position: "absolute", bottom: 0, alignSelf: "flex-end", paddingRight: 20 }}>
          Skip
               </Text>
      </KeyboardAwareScrollView>
    </ImageBackground>
  );
}
export default LoginScreen;


const styles = StyleSheet.create({
  containerInput: {
    justifyContent: 'center',
    width: "100%",
    alignContent: 'center',
    alignItems: "center",
    alignSelf: 'center',


  }, container: {
    flex: 1,
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
  },


  viewStyle: {

    width: "90%", flexDirection: 'row',
    height: 40, borderColor: 'white', borderRadius: 25,
    backgroundColor: 'rgba(255,255,255,.9)',
    paddingLeft: 10, margin: 10,
  },
  loginBtn: {
    width: "90%",
    backgroundColor: "#EAB15A",
    borderRadius: 25,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10
  },

  textStyle: {
    color: "white",
    fontSize: 16,
    width: "80%",
    height: 40,
    padding: 10,
    textAlign: "center",
  },


  backgroundImage: {
    width: "100%",
    flex: 1,
    resizeMode: "stretch",
    flexDirection: "column",
    justifyContent: "center"
  },

});


