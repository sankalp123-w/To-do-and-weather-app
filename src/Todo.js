import React,{useState} from 'react';

const Todo =()=>{

  const [setlist,setfnc]= useState("");

const [sl,stf]= useState([]);
function Stl(){

	stf((old)=>{

		return [...old,setlist];
	});
setfnc("");
	console.log(sl.length);
	
}

  function gt(event){
    setfnc(event.target.value)
  
  }
  function del(index){
  	console.log(index);
  	stf((old)=>{
 
      return old.filter((arryitm,ind)=>{;
		return index!==ind});
	});
	
	
  }
	return(
           <>
           <div className="wrapper">
             <header>Todo App</header>
            <div className="inputField">
          <input type="text" className="in" placeholder="input you list" onChange={gt} value={setlist}/>
          <button className="btn" onClick={Stl} >➕</button>
            </div>
               

            <div className="todoList">
            <ul>
             {sl.map((val,index)=>{

             return(<><li>{val}</li>
             	<button onClick={()=>{del(index)}}>✖</button></>);
             })}
            </ul>
            </div>
             <div className="footer">
      <span>You have <span className="pendingTasks"></span>these task to complete today</span>
       </div>
            </div>



           </>

		);
};

export default Todo