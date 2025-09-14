import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import { styles } from './GeneratePassButtonStyles';

interface GeneratePassButtonProps {
  onPress: () => void;
}

export function GeneratePassButton({ onPress }: GeneratePassButtonProps) {

  return (
    <View
    style={styles.container}>
        <TouchableOpacity
        style={styles.generateButton}
        onPress={onPress}
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