import React from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";
import { Pressable } from 'react-native';
const DetailsScreen = ({navigation}) => {
  return (
     <Pressable onPress={() => navigation.navigate('Marks')}>
    <View style={styles.container}>
      <Text style={styles.label}>Address:</Text>
      <Text style={styles.address}>
        D/O. SOKKAPPAN KV, 323, ANBUNAGAR, KOOTHAMPOONDI(PO), ERODE-638 315.
      </Text>
      <Text style={styles.label}>Phone:</Text>
      <Text style={styles.phone}>6456754335</Text>
      <Text style={styles.label}>Aadhar:</Text>
      <Text style={styles.adhar}>6456754273627321</Text>
       <Text style={styles.label}>DateOfBirth:</Text>
      <Text style={styles.date}>23/08/2006</Text>
     
    </View></Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#ddd",
  },
  label: {
    fontSize: 30,
    color: "red",
    fontWeight: "bold",
    marginBottom: 5,
  },
  address: {
    fontSize: 15,
    lineHeight: 20,
    marginBottom: 30,
  },
  phone: {
    fontSize: 15,
    marginTop: 10,
  },
  adhar:{
         fontSize: 15,
    lineHeight: 20,
    marginBottom: 30,
  },
  date:{
     fontSize: 15,
    lineHeight: 20,
    marginBottom: 30,
  },
 
});

export default DetailsScreen;
