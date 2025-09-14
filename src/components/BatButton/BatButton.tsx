import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  Alert,
 } from "react-native";
 import Clipboard from '@react-native-clipboard/clipboard';


 import { styles } from "./BatButtonStyles";

 interface BatButtonProps {
  password?: string;
 }

 export function BatButton({ password }: BatButtonProps) {

  function copyToTransferArea() {
    if (password && password.length > 0) {
      Clipboard.setString(password);
      Alert.alert('Copied!', 'The password has been copied to the clipboard.');
    } else {
      Alert.alert('Attention', 'There is nothing to copy.');
    }
  }

   return (
   <View style={styles.container}>
        <TouchableOpacity
            onPress={copyToTransferArea}>
                <Text
                style={styles.buttonText}>
                        COPY
                </Text>
        </TouchableOpacity>
    </View>
   )
 }