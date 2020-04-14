import React from 'react';
import ReactDOM from 'react';
import logo from './logo.svg';
import './App.css';
import Button from "@material-ui/core/Button";

import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from "@material-ui/core/Checkbox"
import Card from '@material-ui/core/Card';
import ReplyIcon from '@material-ui/icons/Reply';
import dayu from "./大鱼.m4a"




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      todo: "",
      List: [],
      history:[],
      

    };
    this.handleChage = this.handleChage.bind(this);
    this.addconent = this.addconent.bind(this);
    this.del = this.del.bind(this);
    this.ischecked=this.ischecked.bind(this);
    this.restore=this.restore.bind(this)
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });

  }
  handleChage(e) {
    i++;
    this.setState({
      id: i,
      todo: e.target.value
    })
  }
  addconent() {

    let allTask = this.state.List;
    allTask.unshift({ todo: this.state.todo ,ischecked:false})
    this.setState({
      List: allTask
    })
  }
  del(index) {
    let allTask = this.state.List;
    let allhistory= this.state.history;
    let delitem=allTask.splice(index, 1);
    allhistory.push(delitem[0]);
    
    this.setState({
      List: allTask,
      history:allhistory,
      
    })
  }
    ischecked(index){
      var List2=[...this.state.List];
      List2[index].ischecked=!List2[index].ischecked;
      this.setState({
        List:List2
      })
    }
    
    restore(index){
      let allhistory=this.state.history;
      let allTask=this.state.List;
      let dels=allhistory.splice(index,1);
      allTask.splice(index,0,dels[0]);
      this.setState({
        List:allTask,
        history:allhistory
      })

    }

  

  render() {
    let lase;
    if(this.state.history[0]){
      lase =  <Card>
      <h1>lase</h1>
      <IconButton onClick={()=>this.setState({history:[]})}> 清空<DeleteIcon/> </IconButton>
      <div><ul>{
        this.state.history.map((items,index) => <li className="li">
              <Checkbox value="primary"  inputProps={{ 'aria-label': 'primary checkbox' }} />
              
              <h2>{items.todo}</h2>
              <ReplyIcon onClick={()=>this.restore(index)}></ReplyIcon>
            </li>)
      }</ul>
      </div>
      </Card>
    }
    return (
      <>
      <audio src={dayu} autoPlay controls> <code>audio</code>elm</audio>
        <div className="greeting">
          <img src={logo} alt="flaut" height="220" width="220" />

          </div>
        <div className="button">
        
          <input className="input-box" type="text" onChange={this.handleChage} />
          <Button variant="contained" color="primary" component="span" onClick={this.addconent}>添加任务</Button>
        </div>

        <div className="todolist">
          <ul >
            {
              this.state.List.map((item, index) => <li key={index} className="li">
                <Checkbox value="primary" checked={item.ischecked} inputProps={{ 'aria-label': 'primary checkbox' }} onClick={() => this.ischecked(index)} />
                
                <h2>{item.todo}</h2>
                <IconButton aria-label="delete" onClick={() => this.del(index)}>
                  <DeleteIcon />
                </IconButton>
              </li>)
            }

          </ul>



        </div>
        {lase}
       
      </>
    );
  }
}



export default App;
