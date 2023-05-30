import React,{useState} from "react";
import { View } from 'react-native';
import { Header, Cartilla, Menu, Card, Title, Message } from '../../components/index';
import { theme, logo } from "../../constants";
import { aleatorio } from "../../utils";
import { styles } from './styles';

const Sorteo = ({winRender, nums}) => {
    const [dataSorteo, setDataSorteo] = useState([]);
    const [msgResultados, setMsgResultados] = useState('');
    
    const dataJugada = [];
    const jugada = nums.split(',').map(x => parseInt(x));
    for(let x of jugada){
        dataJugada.push({value: x});
    }

    const onSortear = () => {
        let sorteo = aleatorio.generate(1,45,6);
        let data = [];
        for(let x of sorteo){
            data.push({value: x});
        }
        setDataSorteo(data);
        
        let aciertos = [];
        for(let num of jugada){
            if(sorteo.find(x => x === num)!== undefined){
                aciertos.push(num);
            }
        }
        
        setMsgResultados('Cantidad de aciertos: ' + aciertos.length);
    };

    const onRejugar = () => {
        winRender('game');
    };

    const menuGameTop = [        
        {
          title: 'SORTEAR',
          handler: onSortear,
          disabled: false
        }
    ];

    const menuGameFoot = [
        {
          title: 'ELEGIR OTROS NUMEROS',
          handler: onRejugar,
          disabled: false
        }
    ];
    
    return(
        <View style={styles.container}>
            <Header title='Loteria ¡DINERO YA!' subtitle='Gana hasta $ 1 millón'
                widthLogo={114} heightLogo={130} urlLogo={logo.game.url} />
            <Card style={styles.cardContainer}>
                <Title title='Números elegidos:' />
                <Cartilla data={dataJugada} onSelectItem={()=>{}} extraData={[]} numColumns={6} widthBolilla={40} />
                <Menu lista={menuGameTop} color={theme.colors.buttonGame} widthLabel='70%'/>
                <Title title='Números sorteados:' />
                <Cartilla data={dataSorteo} onSelectItem={()=>{}} extraData={jugada} numColumns={6} heightCartilla={48} widthBolilla={40} />
                <Menu lista={menuGameFoot} color={theme.colors.buttonGame} widthLabel='20%'/>
                <Message msg={msgResultados}/>
            </Card>
        </View>
    );
};

export default Sorteo;