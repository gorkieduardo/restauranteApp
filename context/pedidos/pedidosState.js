
import React, {useReducer} from 'react';

import PedidoReducer from './pedidosReducer';
import PedidoContext from './pedidosContext';


import { 
    SELECCIONAR_PRODUCTO,
    CONFIRMAR_ORDENAR_PLATILLO
} from '../../types'



const PedidoState = props => {

  //crear el state inicial
  const initialState = {
    pedido: [],
    platillo: null
  };

  //TODO: uso del reducer /dispacht para ejecutar mis funciones
  const [state, dispatch] = useReducer(PedidoReducer, initialState);

  //selecciona el producto

const seleccionarPlatillo = platillo => {
        dispatch({
            type: SELECCIONAR_PRODUCTO,
            payload: platillo
        })
    }


  return (
    <PedidoContext.Provider
      value={{
        pedido: state.pedido,
        platillo: state.platillo,
        seleccionarPlatillo
      }}>
      {props.children}
    </PedidoContext.Provider>
  );
};
export default PedidoState;
