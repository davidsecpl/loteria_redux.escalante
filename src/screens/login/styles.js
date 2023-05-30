import { StyleSheet } from "react-native";
import { theme } from "../../constants";

export const styles = StyleSheet.create({
    container:{
        flex: 1,        
        paddingTop: 150,
        paddingHorizontal: 20,
        backgroundColor: theme.backgroundColors.screenLogin
    },
    textinputNroDoc:{
        borderWidth: 0.5,
        borderColor: theme.borderColors.inputDocument,
        paddingLeft:10,
        alignItems: 'center',
    }
});