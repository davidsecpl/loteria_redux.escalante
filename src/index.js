import React, {useState} from "react";
import { View } from "react-native";
import { styles } from './styles';
import { Game, Sorteo } from './screens/index';
import { Provider } from "react-redux";
import store from './store/index';

export default function App() { 
  const [windowsRender, setWindowsRender] = useState('game');
  const [listaNum, setListaNum] = useState('');
  
  const Screen = () => {
    
    if(windowsRender === 'game'){
      return <Game winRender={setWindowsRender} numsSet={setListaNum}/> 
    }

    if(windowsRender === 'sorteo'){
      return <Sorteo winRender={setWindowsRender} nums={listaNum}/> 
    }
    
  };

  return (
    <Provider store={store}>
        <View style={styles.container}>
          <Screen/>
        </View >
    </Provider>
    
  );
}