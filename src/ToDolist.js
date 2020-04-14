import React, { useState } from "react";
import Checkbox from "@material-ui/core/Checkbox"
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import './App.css';
export default function ToDolist(props) {
    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(1),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
        item: {

        }
    }));
    const classes = useStyles();
    return (
        <>
            <List className="todolist">
                {
                    props.List.map((item, index) => (
                        <ListItem key={index} >
                            <Grid container spacing={1} className={classes.item} justify='center'>

                                <Grid item >
                                    <Checkbox value="primary" checked={item.ischecked} onClick={() => { let newlist = props.List; newlist[index].ischecked = !newlist[index].ischecked; props.setList([...newlist]); }} /></Grid>

                                <Grid item xs={6}>
                                    <Paper className={classes.paper}>{item.text}</Paper>
                                </Grid>

                                <Grid item >
                                    <IconButton aria-label="delete" onClick={() => props.Del(index)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </Grid>
                            </Grid>
                        </ListItem>
                    ))
                }
            </List>
        </>
    )
}