import {createContext,useContext} from 'react'
export const CRUDContext=createContext({
    fetchAPIURL:'http://127.0.0.1:8000/api/',
    fetchId:'',
    parameters:{
        Method: 'POST',
            Headers: {
                Accept: 'application.json',
                'Content-Type': 'application/json'
            }
    },
    allData:[],
    singledata:{},
    addData:()=>{},
    editData:(id,data)=>{},
    deleteData:(id,data)=>{},
    selectAllData:()=>{},
    selectData:(id)=>{},
    searchData:(data)=>{},
});

export const useCRUD=()=>{
    return useContext(CRUDContext);
}
export const CRUDProvider=CRUDContext.Provider;