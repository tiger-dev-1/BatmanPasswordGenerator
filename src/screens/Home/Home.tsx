import React from "react";
import { View } from "react-native";

import { BatLogo } from "../../components/BatLogo/BatLogo";
import { BatInput } from "../../components/BatInput/BatInput";

import { homeStyles } from "./HomeStyles";


export default function Home() {
    return(
        <View
        style = {homeStyles.container}
        >
            <BatLogo />
            <BatInput />
        </View>
    )
 }

