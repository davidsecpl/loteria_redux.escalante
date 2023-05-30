import React, { useState } from 'react';
import IonIcons from '@expo/vector-icons/Ionicons';
import { View, Text, TextInput, Pressable, Modal } from 'react-native';
import {styles} from './styles';
import RadioButton from '../radiobutton';
import { tipodoc } from '../../constants';

const InputDocument = ({tipoDoc, setTipoDoc, nroDoc, colorBorde}) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [valueRadioButton, setValueRadioButton] = useState(null);    
    
    const onModal = () => {
        setModalVisible(true);
    };

    const onRadioButton = (value) =>{
        setValueRadioButton(value);
        setTipoDoc(value);
        setModalVisible(!modalVisible);
    };

    return (
        <View style={styles.container}>
            <Pressable onPress={onModal} style={[styles.pressable, {borderColor: colorBorde}]}>
                <Text style={styles.textPressable}>{tipoDoc}</Text>
                <IonIcons name='md-chevron-down' size={18} color={colorBorde} style={styles.icon} />
            </Pressable>
            <TextInput style={[styles.textinput, {borderColor: colorBorde}]} placeholder="Número de documento" 
                keyboardType="numeric" value={nroDoc} />
            <Modal animationType='fade' transparent={true} visible={modalVisible}>
                <View style={styles.modal}>
                    <RadioButton data={tipodoc} option={tipoDoc} onSelect={onRadioButton} color={colorBorde} />
                </View>                
            </Modal>
        </View>
    );
};

export default InputDocument;