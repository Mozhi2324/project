import React from "react";
import { View,Text,StyleSheet,TouchableOpacity } from "react-native";

const DashboardScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the Dashboard</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('IDCard')}>
        <Text style={styles.buttonText}>Go to ID Card</Text>
      </TouchableOpacity>
    </View>
    );
};
const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    text:{
        fontSize:20,
        fontWeight:'nold',
    },
})
export default  DashboardScreen