import React from 'react';
import { View, TextInput, Pressable } from 'react-native';
import IonIcons from '@expo/vector-icons/Ionicons';
import {styles} from './styles';

const InputContrasena = ({colorBorde}) => {
    return (
        <View style={[styles.container,{borderColor:colorBorde}]}>
            <TextInput style={styles.inputContraseña} placeholder='Contraseña'secureTextEntry={true}  />
            <Pressable style={styles.pressable} onPress={()=>{}}>
                <IonIcons style={styles.icon} name='md-eye-off-outline' size={18} color={colorBorde} />
            </Pressable>
        </View>
    );
};

export default InputContrasena;