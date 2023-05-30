import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { Header, InputContrasena, InputDocument, Menu } from "../../components";
import { logo, theme } from "../../constants";
import { styles } from './styles';

const Login = ({ winRender }) => {
    const [tipoDoc, setTipoDoc] = useState('DNI');
    const [nroDoc, setNroDoc] = useState(null);
    const [clave, setClave] = useState(null);

    const onInciarSession = ()=> {
        winRender('game');
    };

    return (
        <View style={styles.container}>
            <Header title='Loteria ¡DINERO YA!' subtitle='Gana hasta $ 1 millón' message='Sorteos en linea' 
                widthLogo={114} heightLogo={130} urlLogo={logo.game.url}/>            
            <InputDocument tipoDoc={tipoDoc} setTipoDoc={(value)=>{setTipoDoc(value)}} nroDoc={nroDoc} colorBorde={theme.borderColors.inputDocument}/>
            <InputContrasena colorBorde={theme.borderColors.inputDocument} value={clave} />
            
            <Pressable onPress={()=>{}}>
                <Text>Olvidé mi Contraseña</Text>
            </Pressable>
            <Menu lista={[{title: 'Ingresar', handler: onInciarSession, disabled: false}]} color={theme.colors.buttonLogin}/>
            <View>
                <Text>¿Eres nuevo?</Text>
                <Pressable onPress={()=>{}}>
                    <Text>Registrate aquí</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default Login;