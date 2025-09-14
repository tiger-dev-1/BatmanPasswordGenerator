import React from "react";
import {
  View,
  Image,
  Text,
 } from "react-native";

import batLogo from '../../assets/bat-logo.png';
import { batLogoStyles  } from "./BatLogoStyles";

export function BatLogo() {
  return (
    <View style={batLogoStyles.container}>
        <Text style={batLogoStyles.title}>
          BATMAN PASSWORD GENERATOR
        </Text>
        <Image
          source = {batLogo}
          style={batLogoStyles.logo}
        />
    </View>
  );
}