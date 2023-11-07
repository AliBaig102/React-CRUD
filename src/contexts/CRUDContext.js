import {createContext,useContext} from 'react'
export const CRUDContext=createContext({
    fetchAPIURL:'http://127.0.0.1:8000/api/',
    // fetchId:'',
    parameters:{
        method: "POST",
        body:'',
            headers: {
                Accept: 'application.json',
                'Content-Type': 'application/json'
            }
    },
    allData:[],             
    singledata:{},
    result:{},
    addRecord:(data)=>{},
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