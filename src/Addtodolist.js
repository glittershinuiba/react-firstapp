import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import './App.css';
import ReplyIcon from '@material-ui/icons/Reply';
import TextField from '@material-ui/core/TextField';
import ToDolist from "./ToDolist"




function Addtodolist(props) {
    
   
   const del= (index)=>{
        let newlist = props.list;
        newlist= props.list.splice(index,1);
        props.setlist([...props.list]);
        props.sethislist([...props.hislist, newlist[0]]);
    }
    const add = (index)=>{
        let newlist=props.list; newlist=props.hislist.splice(index,1); props.sethislist([...props.hislist]);props.setlist([...props.list,newlist[0]])
    }

    return (
        <>
        <div class="input-box">
            <TextField id="standard-search" label="Be gong to do" type="search" className="input" type="text" onChange={(e) => { props.settodo(e.target.value) }} />
            <Button  color="primary"  onClick={() => { props.setlist([...props.list, { text: props.todo, ischecked: false }]) }}>添加任务</Button>
            </div>
            <div>
            <ToDolist List={props.list} setList={props.setlist} Del={del} >
            
               
            </ToDolist>
                        
        </div>

        </>
    )
}
export default Addtodolist;

