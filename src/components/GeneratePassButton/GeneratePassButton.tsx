import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import { styles } from './GeneratePassButtonStyles';

function generatePassword() {
    console.log('Generate Password')
}

export function GeneratePassButton() {
  return (
    <View
    style={styles.container}>
        <TouchableOpacity
        style={styles.generateButton}
        onPress={generatePassword}
        >
            <Text
            style={styles.generateButtonText}
            >
                GENERATE
            </Text>
        </TouchableOpacity>
    </View>
  );
}