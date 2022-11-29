import { StyleSheet, Text, View } from 'react-native'
import * as React from 'react'
import Button from "react-native-button";
import {styles} from "./styles"

const footer = () => {
  return (
    <View style={{marginTop:20}}>
    <Button title={'continue'} 
    borderRadius={10}
    width={"100%"} 
    fontSize={18}
    height={40} 
    backgroundColor={'#5625CC'}
    activeBackgroundColor={'#7f52e9'} 
    onPress={()=> {}}/>
    <View style={styles.footer}>
       <Text  style={styles.Font}>By countinuing you are adreeing to 101Pay's {'\n'} <Text style={styles.BoldText}>Terms & conditions</Text> and <Text  style={styles.BoldText}>Privacy policy</Text></Text>
       <View style={styles.orMain}>
    
       <View style={styles.Line}/>
       <Text style={{paddingHorizontal:10}}>or </Text>
    
       <View style={styles.Line}/>
    
       </View>
       <Text>Already have an account? <Text style={styles.BoldText}>Login</Text>  </Text>
       </View>
      </View>
  )
}

export default footer
