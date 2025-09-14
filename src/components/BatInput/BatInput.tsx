import React, { useState } from "react";
import { View, TextInput } from "react-native";

import { styles } from "./BatInputStyles";
import { BatButton } from "../BatButton/BatButton";




export function BatInput () {

    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <TextInput style={styles.batInput}
                placeholder="Password will be Here"
                placeholderTextColor={'#44496f'}
                onChangeText={setPassword}
                value={password}
            />
            <BatButton password={password} />
        </View>
    )
}