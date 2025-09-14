import React from "react";
import { View } from "react-native";
import { BatLogo } from "../../components/BatLogo/BatLogo";
import { homeStyles } from "./HomeStyles";


export default function Home() {
    return(
        <View
        style = {homeStyles.container}
        >
            <BatLogo />
        </View>
    )
 }

