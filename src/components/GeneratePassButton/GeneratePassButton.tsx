import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import { styles } from './GeneratePassButtonStyles';

export function GeneratePassButton() {
  return (
    <View
    style={styles.container}>
        <TouchableOpacity
        style={styles.generateButton}
        onPress={() => console.log('Generate Password')}
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