 import React, { useState, useEffect } from 'react';
import { Card } from 'react-native-elements';

import { View, Text, TouchableHighlight, Image, StyleSheet, FlatList, ActivityIndicator } from "react-native";
import { List, ListItem, SearchBar, withTheme } from "react-native-elements";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationActions } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'

const FirstPage = ({ navigation }) => {
  const [profile, setProfile] = useState([])

  useEffect(() => {
    try {

      AsyncStorage.getItem('profiles')
        .then(req => JSON.parse(req))
        .then(json => {

          setProfile(json.profileList)
        }
        )
        .catch(error => console.log('error!'));
    } catch (error) {
      console.log("error")

    }

  }, []);


  return (
    <View style={styles.container}>

      {/* <TouchableHighlight onPress={() => { navigation.goBack() }}
        style={{ alignSelf: "flex-end", marginTop: 50, marginRight: 20 }}              >
        <Image
          source={require('../image/logout.png')}
          style={{ alignSelf: "flex-end", width: 20, height: 20, }}

        />
      </TouchableHighlight> */}
      <Text style={{ width: "90%", textAlign: "center", marginTop: "15%", color: "white", fontSize: 20 }}>Employee List</Text>
      <View style={{
        borderBottomColor: 'lightgrey', width: "90%",
        borderBottomWidth: 0.5,
        marginLeft: 5,
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 10,
        marginBottom: "8%",
        marginRight: 5
      }}></View>
      <FlatList style={{ width: "90%", }}

        data={profile}
        renderItem={
          ({ item }) => (
            <Card
              containerStyle={{
                backgroundColor: "translucent",
                padding: 10,
              }}>
              <ListItem
                onPress={() =>
                  navigation.navigate('SecondPage', { fname: item.fname, lname: item.lname, email: item.email, address: item.address, mobile: item.mobile, uri: item.avatar_url }
                  )}

                leftAvatar={{ source: { uri: item.avatar_url } }}
                roundAvatar
                title={item.fname}
                subtitle={item.email}

              />
            </Card>
          )}
        keyExtractor={(item, index) => index.toString()}

      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: '#282C34',
  },
});





export default FirstPage;