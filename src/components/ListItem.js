import React from 'react';
import Done from '../assets/done.png';
import Undone from '../assets/undone.png';
import Close from '../assets/close.png';
import Card from './Card'

function ListItem(props){

    function DoneImg(props){
        if(props.done){
            return (<img className="icons" alt="done" src={Done}></img>)
        }else{
            return (<img className="icons" alt="undone" src={Undone}></img>)
        }
    }
    

    return (
       
            <li  key={props.item.id}>
                <Card className={props.item.done?"done item":"item"}>
                    {props.item.text}
                    <div>
                        <button className="task-button" onClick={()=>{props.onDone(props.item)}} ><DoneImg done={props.item.done}></DoneImg></button>
                        <button className="task-button" onClick={() => props.onItemDeleted(props.item)}><img alt="close" src={Close}></img></button>
                    </div>
                </Card>
            </li>)
}

export default ListItem;