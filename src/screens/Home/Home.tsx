import React, { useState } from "react";
import { View } from "react-native";

import { BatLogo } from "../../components/BatLogo/BatLogo";
import { BatInput } from "../../components/BatInput/BatInput";
import { BatButton } from "../../components/BatButton/BatButton";

import { homeStyles } from "./HomeStyles";
import { GeneratePassButton } from "../../components/GeneratePassButton/GeneratePassButton";
import { generatePassword } from "../../services/passwordService";

export default function Home() {
    const [password, setPassword] = useState('');

    function handleGeneratePassword() {
        const newPassword = generatePassword();
        setPassword(newPassword);
    }

    return(
        <View
        style = {homeStyles.container}
        >
            <BatLogo />

            {/* Container para agrupar o Input e o Botão de Cópia */}
            <View style={homeStyles.inputContainer}>
                <BatInput password={password}/>
                <BatButton password={password}/>
            </View>

            <GeneratePassButton onPress={handleGeneratePassword}/>
        </View>
    )
 }
