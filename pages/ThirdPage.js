import * as React from 'react';
import { Button, View,StatusBar, StyleSheet, Text, SafeAreaView } from 'react-native';
import { Card } from 'react-native-elements';

const ThirdPage = ({ route, navigation }) => {
  return (
    <SafeAreaView style={styles.container}>


      <Card
        containerStyle={{
          backgroundColor: "white",
          paddingLeft: 10,
          paddingRight: 10,
          paddingTop: 10,
          marginTop: 100,
          borderRadius: 10,
          justifyContent: "center",
          alignContent: "center",
          width: "80%",
        }}>
        <Text style={{fontSize:15}}>This is a demo app which includes basic flow of below points. All the employees signed up get listed and view data on logging in. </Text>

        <Card
          containerStyle={{
            backgroundColor: "translucent",
            padding: 10,
          }}>
          <Text style={{fontSize:15}}>Nested Navigators</Text>
        </Card>

        <Card
          containerStyle={{
            backgroundColor: "translucent",
            padding: 10,
          }}>
           <Text style={{fontSize:15}}>Passing data between screens and nested Navigators</Text>
        </Card>
        <Card
          containerStyle={{
            backgroundColor: "translucent",
            padding: 10,
          }}>
           <Text style={{fontSize:15}}>Storing and retreiving string/array daya</Text>
        </Card>

        <Card
          containerStyle={{
            backgroundColor: "translucent",
            padding: 10,
          }}>
          <Text style={{fontSize:15}}>Form Validation</Text>
        </Card>
        <Card
          containerStyle={{
            backgroundColor: "translucent",
            padding: 10,
          }}>
           <Text style={{fontSize:15}}>Login Validation with stored details</Text>
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



export default ThirdPage;