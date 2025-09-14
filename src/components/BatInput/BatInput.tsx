import React from "react";
import { View, TextInput } from "react-native";
import { styles } from "./BatInputStyles";


export function BatInput () {
    return (
        <View style={styles.container}>
            <TextInput style={styles.batInput}
                placeholder="Click here to type"
                placeholderTextColor={'#44496f'}
            />
        </View>
    )
}