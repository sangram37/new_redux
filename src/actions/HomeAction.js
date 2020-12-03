import {TEXT_INPUT,LOGIN_LOADING,DELETE_BOOK} from '../config/Config'
import {Alert} from "react-native";
export const StoreName =(name)=>{
    return async (dispatch)=>{
        dispatch({
            type:TEXT_INPUT,
            payload:name
        })
    }
   
    
}

export const Delete =(item)=>{
    return async (dispatch)=>{
        dispatch({
            type:DELETE_BOOK,
            payload:item
        })
    }
   
    
}