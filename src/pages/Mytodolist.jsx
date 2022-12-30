import React from 'react';
import { FaTrash, FaTasks } from 'react-icons/fa';
import { useState } from 'react';



const Mytodolist = () => {

    //Aplicar "controlled input": 
    const [inputContent, setInputContent] = useState(""); //renderizar componente nuevamente cada vez que cambie el contenido del input.
    const [listoftodos, setlistoftodos] = useState([]); //Array x default, donde se agregaran las tasks nuevas.

    return (
        <div className="container">
            <h1>My Todolist  <span className="mytitleicon"><FaTasks /></span></h1>
            <ul>
                <li><input type="text" onChange={(e) => setInputContent(e.target.value)} value={inputContent} onKeyDown={(e) => e.key === "Enter" ? setlistoftodos(listoftodos.concat(inputContent)) : null} onKeyUp={(e) => e.key === "Enter" ? setInputContent("") : null} placeholder="Add a morning action to start a good day"></input></li>
                {listoftodos.map((task, index) => (<li>{task}<span><FaTrash onClick={() => setlistoftodos(listoftodos.filter((t, currentIndex) => index != currentIndex))} /></span></li>))}
            </ul>
            <div className="MyActionsNumb">Number of Tasks: {listoftodos.length}</div>
        </div>
    );
};

export default Mytodolist;