import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container:{
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    pressable:{
        marginRight: 2,
        borderWidth:0.5,
        width:'32%',
        height: '100%',
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textPressable:{
        color: 'black',
    },
    icon:{
        marginLeft: 8
    },
    textinput:{
        borderWidth: 0.5,
        textAlign: 'left',
        width:'66%',
        paddingLeft:10
    },
    modal:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});