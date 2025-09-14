import React from "react";
import { View, TextInput } from "react-native";

import { styles } from "./BatInputStyles";
import { BatButton } from "../BatButton/BatButton";


export function BatInput () {
    return (
        <View style={styles.container}>
            <TextInput style={styles.batInput}
                placeholder="Password will be Here"
                placeholderTextColor={'#44496f'}
            />
            <BatButton />
        </View>
    )
}