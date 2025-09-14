import React from "react";
import { View } from "react-native";

import { BatLogo } from "../../components/BatLogo/BatLogo";
import { BatInput } from "../../components/BatInput/BatInput";


import { homeStyles } from "./HomeStyles";
import { GeneratePassButton } from "../../components/GeneratePassButton/GeneratePassButton";


export default function Home() {
    return(
        <View
        style = {homeStyles.container}
        >
            <BatLogo />
            <BatInput />
            <GeneratePassButton
            />
        </View>
    )
 }

