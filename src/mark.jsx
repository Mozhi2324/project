import React from "react";
import { View,Text,StyleSheet } from "react-native";

const MarkScreen = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>MarksDetail</Text>
            <Text style={styles.mark}>Tamil:66</Text>
             <Text style={styles.mark}>English:59</Text>
              <Text style={styles.mark}>Statistics:78</Text>
               <Text style={styles.mark}>Javaprogramming:65</Text>
                <Text style={styles.mark}>Allied Optional:67</Text>
        </View>
    )
};
const styles =StyleSheet.create({
    container:{
        flex:1,
        padding:20,
        backgroundColor:'#fff'
    },
    title:{
        fontSize:22,
        fontWeight:'bold',
        marginBottom:20
    },
    mark:
    {
        fontSize:18,marginBottom:10
    },
})
export default MarkScreen ;