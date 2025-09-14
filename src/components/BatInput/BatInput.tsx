import React from "react";
import { View, TextInput } from "react-native";

import { styles } from "./BatInputStyles";

interface BatInputProps {
    password?: string;
}

export function BatInput ({ password }: BatInputProps) {

    return (
        <View style={styles.container}>
            <TextInput style={styles.batInput}
                placeholder="Password will be Here"
                placeholderTextColor={'#44496f'}
                value={password}
                editable={false}
                multiline={true}
            />
        </View>
    )
}