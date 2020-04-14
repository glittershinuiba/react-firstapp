import React, { useState } from "react";
import ToDolist from "./ToDolist"
import Button from "@material-ui/core/Button";


function History(props) {
    
    
    const add = (index)=>{
        let newlist=props.list; newlist=props.hislist.splice(index,1); props.sethislist([...props.hislist]);
    }
    return(
        <>

        <ToDolist List={props.hislist} setList={props.sethislist} Del={add}>

        </ToDolist>
        <Button  color="primary"  onClick={() => { props.sethislist([]) }}>CLEAR ALL</Button>


        </>
             )   

   
}

export default History;