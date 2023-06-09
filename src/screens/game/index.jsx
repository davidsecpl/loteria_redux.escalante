import React, { useState } from 'react';
import { View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Header, Cartilla, Menu, Card } from '../../components/index.js';
import { theme, logo } from '../../constants';
import { aleatorio } from '../../utils';
import { styles } from './styles';
import { selectNumber } from '../../store/actions/game.action.js';

const Game = ({ winRender, numsSet }) => {
  const [numerosSelect, setNumeroSelect] = useState([]);
  const [msgJuego, setMsgJuego] = useState('Elige 6 números');
  const [btonJugarDeactivated, setBtonJugarDeactivated] = useState(true);

  const dispatch = useDispatch();
  const game = useSelector((state) => state.game.jugada);

  const data = [];
  for (let i = 0; i < 45; i++) {
    data.push({ value: i + 1});
  }

  const onHandlerItem = (item) => {
    if (numerosSelect.length < 6) {
      switch (numerosSelect.length) {
        case 0:
          setMsgJuego('Elige 5 más');
          break;
        case 1:
          setMsgJuego('Elige 4 más');
          break;
        case 2:
          setMsgJuego('Elige 3 más');
          break;
        case 3:
          setMsgJuego('Elige 2 más');
          break;
        case 4:
          setMsgJuego('Elige 1 más');
          break;
        case 5:
          setMsgJuego('¡Juega ya!');
          setBtonJugarDeactivated(false);
          break;
        default:
          break;
      }

      dispatch(selectNumber(item.value));
      
      setNumeroSelect([...numerosSelect, item.value]);
    }
  };

  const onAzar = () => {
    let lista = [];
    if (numerosSelect.length < 6) {
      lista = numerosSelect.concat(aleatorio.generate(1, 45, 6 - numerosSelect.length));
    } else {
      lista = aleatorio.generate(1, 45, 6);
    }
    setNumeroSelect(lista);
    setMsgJuego('¡Juega ya!');
    setBtonJugarDeactivated(false);
  };

  const onLimpiar = () => {
    setMsgJuego('Elige 6 números');
    setNumeroSelect([]);
    setBtonJugarDeactivated(true);
  };

  const onJugar = () => {
    numsSet(numerosSelect.toString());
    winRender('sorteo');
  };

  // const onSalir = () => {
  //   winRender('login');
  // };

  const menuPrincipal = [
    {
      title: 'DINERO YA!',
      handler: () => {},
      disabled: false,
    },
    {
      title: '# DE PAGOS',
      handler: () => {},
      disabled: false,
    },
    {
      title: '? FRECUENTES',
      handler: () => {},
      disabled: false,
    },
  ];

  const menuGameTop = [
    {
      title: 'Al azar',
      handler: onAzar,
      disabled: false,
    },
    {
      title: 'Limpiar',
      handler: onLimpiar,
      disabled: false,
    },
  ];

  const menuGameFoot = [
    // {
    //   title: 'Salir',
    //   handler: onSalir,
    //   disabled: false,
    // },
    {
      title: '¡A JUGAR!',
      handler: onJugar,
      disabled: btonJugarDeactivated,
    },
  ];

  return (
    <View style={styles.container}>
      <Header
        title="Loteria ¡DINERO YA!"
        subtitle="Gana hasta $ 1 millón"
        message="Elige 6 números de 45"
        widthLogo={114}
        heightLogo={130}
        urlLogo={logo.game.url}
      />
      <Menu lista={menuPrincipal} color={theme.colors.buttonMenu} />
      <Card style={styles.cardContainer}>
        <Menu
          lista={menuGameTop}
          color={theme.colors.buttonGame}
          label={msgJuego}
          widthLabel="50%"
        />
        <Cartilla
          data={data}
          onSelectItem={onHandlerItem}
          extraData={numerosSelect}
          numColumns={5}
          widthBolilla={50}
        />
        <Menu lista={menuGameFoot} color={theme.colors.buttonGame} widthLabel="50%" />
      </Card>
    </View>
  );
};

export default Game;
