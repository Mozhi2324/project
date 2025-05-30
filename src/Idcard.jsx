import React from 'react';
import { View, Text, Image, StyleSheet, TouchableWithoutFeedback,TouchableOpacity  } from 'react-native';

const IDCardScreen = ({navigation}) => {
  return(
    <TouchableWithoutFeedback onPress={() => navigation.navigate('Details')}>
  
          <View style={styles.container}>
        <Text style={styles.title}>GOBI ARTS AND SCIENCE COLLEGE</Text>
        <Text style={{paddingTop:10,paddingLeft:10,fontSize:20}}>(AUTONOMUS)</Text>
        <Text style={styles.title}>GOBICHETTIPALAYAM-638 453</Text>
        <Text style={styles.title}>PHONE:04285-240147,240748</Text>
        <View style={styles.container}>
    <Image
        style={styles.image}></Image>
        <Image style={{height:150, width:150,flex:0.7,backgroundColor:'lightblue',alignSelf:'center',marginTop:20,overlayColor:'lightblue',
       }}
          source={require('./asset/download.jpg')}></Image>
          <Text style={styles.text1} >Name :<Text style={{fontSize:20,color:'red',fontWeight:'bold'}}>MANIMEGALAI</Text></Text>
          <Text style={styles.text1} >Course :<Text style={{fontSize:20,color:'black',fontWeight:'bold'}}>(BSc.CS)</Text></Text>
          <Text style={styles.text1} >RollNo :<Text style={{fontSize:20,color:'black',fontWeight:'bold'}}>23CS011</Text></Text>
          <Text style={styles.text1} >Validity :<Text style={{fontSize:20,color:'black',fontWeight:'bold'}}>31-05-2026</Text></Text>

                                
        </View>
    </View>
    </TouchableWithoutFeedback>
    
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})
  export default IDCardScreen;