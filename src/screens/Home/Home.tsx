import React from "react";
import { View, Text } from "react-native";

import { homeStyles } from "./HomeStyles";


export default function Home() {
    return(
        <View
        style = {homeStyles.container}
        >
            <Text>Hello, World!!!</Text>
        </View>
    )
 }

