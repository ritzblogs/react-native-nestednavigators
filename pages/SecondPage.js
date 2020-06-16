import React, { useState, useEffect } from 'react';
import { Button,StyleSheet,TouchableHighlight,Image, View, Text, SafeAreaView } from 'react-native';
import { Card } from 'react-native-elements';

function SecondPage( { route, navigation } ) {
  


  return (
    <SafeAreaView style={ styles.container }>


                  <Card 
          containerStyle={{
            backgroundColor:"translucent",
            paddingLeft: 10,
            paddingRight:10,
            paddingTop:10,
            marginTop:100,
            borderRadius:10,
            justifyContent:"center",
            alignContent:"center",
           width:"80%",
          }}>
<TouchableHighlight 
                   >

                  <Image 
                    source={{
                      uri: route.params.uri,
                    }}
                    style={{alignSelf:"center", width: 70, height: 70, margin: 10 }}

                  />
                  </TouchableHighlight>
        
        <Card 
          containerStyle={{
            backgroundColor:"translucent",
            paddingLeft: 10,
            paddingRight:10,
            paddingTop:10,
            paddingBottom:20,
            backgroundColor:"white",
            borderRadius:10,
           width:"90%",
          }}>
             <Card 
          containerStyle={{
            backgroundColor:"translucent",
            padding: 10,
          }}>
              <Text>Name: {route.params.fname+" "+ route.params.lname}</Text>

              </Card>
              <Card 
          containerStyle={{
            backgroundColor:"translucent",
            padding: 10,
          }}>
          <Text>Email: {route.params.email}</Text>
          </Card>
          <Card 
          containerStyle={{
            backgroundColor:"translucent",
            padding: 10,
          }}>
          <Text>Mobile: {route.params.mobile}</Text>
          </Card>
          <Card 
          containerStyle={{
            backgroundColor:"translucent",
            padding: 10,
          }}>
          <Text>Address: {route.params.address}</Text>
         </Card>
       
        </Card>
      

</Card>
     
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: '#282C34',
  },
});


export default SecondPage;