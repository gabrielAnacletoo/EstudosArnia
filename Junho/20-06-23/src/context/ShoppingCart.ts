import { Dispatch, SetStateAction, createContext } from "react";




/*usando uma tupla
a primeira posição
ShoppingCartContextType é o type da função
tupla é um array de 2 posicções a primeira possicao é um state 
a segunda é uma função que modfica o state
=====
dispacth significa que é um dispaaro de uma função ele ocaziona um reerender 

*/
type ShoppingCartContextType = [ShoppingCart, Dispatch<SetStateAction<ShoppingCart>>]

export const ShoppingCartContextType = createContext<ShoppingCartContextType>([
    {} as ShoppingCart,
    () => ({}),
])
