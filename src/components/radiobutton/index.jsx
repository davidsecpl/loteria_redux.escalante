import React, { useState } from 'react';
import IonIcons from '@expo/vector-icons/Ionicons';
import { View, Text, Pressable } from 'react-native';
import {styles} from './styles';

const RadioButton = ({ data, option, onSelect, color }) => {
    const [checkOption, setCheckOption] = useState(option);

    const onSelectOption = (value)=>{
        onSelect(value);
        setCheckOption(value);
    }

    return (
        <View style={styles.container}>{data.map( item => {
                    const icon = item.value === checkOption ? 'md-radio-button-on' :  'md-radio-button-off';
                    return (
                            <Pressable style={styles.radio} onPress={()=>{onSelectOption(item.value)}} key={item.id}>                                
                                <Text style={styles.text}>{item.value}</Text>
                                <IonIcons name={icon} style={styles.icon} size={20} color={color} />
                            </Pressable>
                        );
                    }
                )
            }
        </View>
    );
};

export default RadioButton;