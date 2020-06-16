import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, TouchableHighlight, FlatList, ListItem, TextInput, SafeAreaView, StatusBar, ScrollView, View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Card } from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage'

// import { AsyncStorage } from 'react-native';


const SignupScreen = ({ navigation }) => {
  const [empId, setEID] = useState("")

  const [firstname, setName] = useState(null)
  const [lastname, setLName] = useState(null)
  const [emailid, setEmail] = useState(null)
  const [phone, setPhone] = useState(null)
  const [haddress, setAddress] = useState(null)
  const [passwordd, setPassword] = useState("")
  const [profile, setProfile] = useState([])
  const [avatarurl, setSelectedIm] = useState(null)
  const [listd, setListd] = useState([]);


  const slides = [
    {

      uri: 'https://i.ibb.co/dLqBk4W/boy1.png',
      backgroundColor: '#20d2bb',
    },
    {

      uri: 'https://i.ibb.co/12RNfL1/girl.png',
      backgroundColor: '#febe29',
    },
    {

      uri: 'https://i.ibb.co/myCXSqx/by2.png',

      backgroundColor: '#22bcb5',
    },
    {

      uri: 'https://i.ibb.co/kQSS6fh/grl2.png',

      backgroundColor: '#3395ff',
    },
    {

      uri: 'https://i.ibb.co/ncJgPw3/by3.png',

      backgroundColor: '#f6437b',
    },
    {


      uri: 'https://i.ibb.co/QjRSV7t/grl3.png',

      backgroundColor: '#febe29',
    },
  ];
  global.slides = slides;


  validateEmail = (emailid) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(emailid);
  };


  isLower=(passwordd)=>{
  var re =  /(?=.*[a-z])/;
  return re.test(passwordd);

  };
  isupper=(passwordd)=>{
    var re =  /(?=.*[A-Z])/;
    return re.test(passwordd);
  
    };
    isNumber=(passwordd)=>{
      var re =  /(?=.*[0-9])/;
      return re.test(passwordd);
    
      };

      isSpecialCharacter=(passwordd)=>{
        var re =  /(?=.[!@#$%^&])/;
        return re.test(passwordd);

      };

  updateState = () => {

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
            myarray.push(myarr)

            setListd(myarr)
            console.log("myarr")

            console.log(myarray)
            console.log("listd")

            console.log(listd)

            if (listd != null && listd.length > 0) {
              if (listd.includes(empId)) {
                alert("Employee with this id already exist")
                return
              }
            }

            updateDataa()
          }
        }
        )
        .catch(error => {
          console.log('error!')
          updateDataa()

        }
        );

    } catch (error) {
      console.log("error")
      updateDataa()


    }

  }




  updateDataa = () => {
    if (empId == null || empId =='') {
      alert('Please enter emp id')
      return
    }
    if (firstname == null|| firstname=='') {
      alert('Please enter first name')
      return
    }

    if (lastname == null || lastname=='') {
      alert('Please enter last name')
      return
    }
    if (emailid == null|| emailid=='') { 
      alert('Please enter email id')
      return
    }

    if(!validateEmail(emailid)){
      alert('Please enter valid email id')
      return
    }

    if (phone == null|| phone=='') { 
      alert('Please enter phone number')
      return
    }

    if(phone.length!=10)
{
  alert('Please enter valid phone number')
  return
}
if (haddress == null|| haddress=='') { 
  alert('Please enter address')
  return
}
if (passwordd == null|| passwordd=='') { 
  alert('Please enter password')
  return
}

if(!isLower(passwordd)){
  alert('Please enter atleast one lowercase, uppercase, digit and a special character')
  return
}

if(!isupper(passwordd)){
  alert('Please enter atleast one lowercase, uppercase, digit and a special character')
  return
}


if(!isNumber(passwordd)){
  alert('Please enter atleast one lowercase, uppercase, digit and a special character')
  return
}
if(!isSpecialCharacter(passwordd)){
  alert('Please enter atleast one lowercase, uppercase, digit and a special character')
  return
}

    if (avatarurl != null) {

      
      let json = {
        empid: empId,
        fname: firstname,
        lname: lastname,
        email: emailid,
        mobile: phone,
        address: haddress,
        pwd: passwordd,
        avatar_url: avatarurl,
      }

      if (profile != null) {
        profile.push(json)

        var jsonData = {
          "profileList":
            profile

        }

        AsyncStorage.setItem('profiles', JSON.stringify(jsonData));
      } else {

        var jsonData = {
          "profileList": [
            json

          ]
        }


        AsyncStorage.setItem('profiles', JSON.stringify(jsonData));
      }


      AsyncStorage.setItem(empId, JSON.stringify(passwordd));

      // navigation.navigate('Dashboard')
      navigation.goBack()

    } else {
      alert('Please select profile image');
    }
  }



  return (

    <ImageBackground
      source={require('../image/bg_signup.jpg')}

      style={styles.container}>



<StatusBar
        backgroundColor="#041E2F"
        />
      <SafeAreaView
        style={styles.container}
        contentContainerStyle={{ flex: 1, justifyContent: "center" }} >

        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          contentContainerStyle={{ flex: 1, justifyContent: "flex-start" }}>


          <KeyboardAwareScrollView
            extraScrollHeight={40}
            resetScrollToCoords={{ x: 0, y: 0 }}
            enableOnAndroid={true}
            keyboardVerticalOffset={100}

            contentContainerStyle={{ flexGrow: 1, marginBottom: 40, justifyContent: "flex-start" }}
          >



            <View style={styles.containerInput}>

              <View style={styles.viewStyle}>
                <Icon name="user" size={20} color="#000" style={{ alignSelf: "center", alignItems: "center" }} />
                <TextInput
                  onChangeText={text => setEID(text)} keyboardType={'numeric'}
                  placeholder="Enter emp id" style={{ fontSize: 16, color: 'black', alignSelf: "center", alignItems: "center", marginLeft: 10, }}
                />
              </View>

              <View style={styles.viewStyle}>
                <Icon name="user" size={20} color="#000" style={{ alignSelf: "center", alignItems: "center" }} />
                <TextInput
                  onChangeText={text => setName(text)}

                  placeholder="Enter first name" style={{ fontSize: 16, color: 'black', alignSelf: "center", alignItems: "center", marginLeft: 10, }}
                />
              </View>

              <View style={styles.viewStyle}>
                <Icon name="user" size={20} color="#000" style={{ alignSelf: "center", alignItems: "center" }} />
                <TextInput
                  onChangeText={text => setLName(text)}
                  placeholder="Enter last name" style={{ fontSize: 16, color: 'black', alignSelf: "center", alignItems: "center", marginLeft: 10, }}
                />
              </View>


              <View style={styles.viewStyle}>

                <Icon name="envelope" size={20} color="#000" style={{ alignSelf: "center", alignItems: "center" }} />
                <TextInput placeholder="Enter email" keyboardType={'email-address'}
                  onChangeText={text => setEmail(text)}

                  style={{ fontSize: 16, color: 'black', alignSelf: "center", alignItems: "center", marginLeft: 10, }} />
              </View>


              <View style={styles.viewStyle}>

                <Icon name="phone" size={20} color="#000" style={{ alignSelf: "center", alignItems: "center" }} />
                <TextInput placeholder="Enter mobile number" keyboardType={'numeric'}
                  validators={['required', 'isNumber', 'maxNumber:11']}
                  errorMessages={['Phonenumber is required', 'Phonenumber invalid', 'Not a valid number ']}

                  onChangeText={text => setPhone(text)}

                  style={{ fontSize: 16, color: 'black', alignSelf: "center", alignItems: "center", marginLeft: 10, }} />
              </View>
              <View style={styles.viewStyle}>

                <Icon name="home" size={20} color="#000" style={{ alignSelf: "center", alignItems: "center" }} />
                <TextInput onChangeText={text => setAddress(text)}

                  placeholder="Enter address" style={{ fontSize: 16, color: 'black', alignSelf: "center", alignItems: "center", marginLeft: 10, }} />
              </View>


              <View style={styles.viewStyle}>

                <Icon name="lock" size={20} color="#000" style={{ alignSelf: "center", alignItems: "center" }} />
                <TextInput onChangeText={text => setPassword(text)}
 
                  placeholder="Enter password" secureTextEntry={true} style={{ fontSize: 16, color: 'black', alignSelf: "center", alignItems: "center", marginLeft: 10, }} />
              </View>

              <View>
                <Card
                  containerStyle={{
                    backgroundColor: "translucent",
                    padding: 10,
                    marginLeft: 0,
                    marginRight: 0,
                    marginTop: 0,
                  }}>
                  <View
                    style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                    <Text style={{ color: '#228B22' }}
                    >
                      Choose profile image
            </Text>
                  </View>
                  <View style={{ marginTop:10,flexDirection: 'row', width: '100%' }}>
                    <ScrollView 
                      horizontal={true}
                      showsHorizontalScrollIndicator={false}>
                      {
                      
                      global.slides.map((item, key) => (

                        <View style={{ margin: 5 }}key={key}>
                          <TouchableHighlight onPress={() => { setSelectedIm(item.uri) }}
                          >
                            <Image
                              source={{
                                uri: item.uri,
                              }}
                              style={{ width: 70, height: 70, margin: 10 }}

                            />
                          </TouchableHighlight>
                          <View
                            style={{
                              flexDirection: 'row',
                              justifyContent: 'space-between',
                            }}>

                          </View>
                          <View
                            style={{
                              flexDirection: 'row',
                              justifyContent: 'space-between',
                            }}>

                          </View>
                        </View>
                      ))}
                    </ScrollView>
                  </View>
                </Card>
              </View>

              <TouchableOpacity style={styles.loginBtn}>
                <Text onPress={updateState} style={styles.textStyle}>Submit</Text>
              </TouchableOpacity>

            </View>
          </KeyboardAwareScrollView>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>

  );
}

export default SignupScreen;


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
    paddingTop: "10%",
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
    marginTop: 20,
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


