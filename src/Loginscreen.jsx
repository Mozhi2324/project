import React, { useState } from 'react';
import { TextInput, Button, StyleSheet, Text, View } from 'react-native';

export default function Loginscreen({ navigation}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

 const handleLogin = () => {
    if (username==='mii'&& password==='2324') {
      navigation.navigate('Dashscreen')

    
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={{fontSize:30,
          color:'blue',
          paddingBottom:30,
        }}>Welcome to Loginscreen</Text>  
        <TextInput style={styles.input} placeholder="Username" value={username}
        onChangeText={setUsername}/>
        <Text style={styles.label}> Password</Text>
      <TextInput
      style={styles.input}
        placeholder=" Enter your password"
        secureTextEntry
        value={password}
        onChangeText={setPassword} />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <Button title="Login" onPress={handleLogin} />
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
   justifyContent:'center',
   backgroundColor:'white',
   marginHorizontal:25,
   marginVertical:200,
  },
  from: {
    backgroundColor:'white',
    padding:20,
    borderRadius:20,
    shadowColor:"Black",
    shadowOffset:{
      width:0,
      height:2
    },
    shadowOpacity:0.25,
    shadowRadius:4,
    elevation:5,
  },
  label: {
   fontSize:16,
   marginBottom:5,
   fontWeight:"bold"
  },
  input:{
    height:40,
    borderColor:"grey",
    borderWidth:1,
    marginBottom:15,
    padding:10,
    borderRadius:5,
  },
  error:{
    color:'red',
    marginBottom:10,
  },
});


