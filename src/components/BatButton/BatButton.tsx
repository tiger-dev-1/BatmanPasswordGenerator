import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
 } from "react-native";

 import { styles } from "./BatButtonStyles";


 export function BatButton() {
   return ( 
   <View style={styles.container}>
        <TouchableOpacity
            onPress={() => console.log('Olá, BatButton!')}>
                <Text
                style={styles.buttonText}>
                        COPY
                </Text>
        </TouchableOpacity>
    </View>
   )
 }