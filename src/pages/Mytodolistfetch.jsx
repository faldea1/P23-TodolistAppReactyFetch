import React, { useEffect, useState } from 'react';
import { FaTrash, FaTasks } from 'react-icons/fa';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MytodolistFetch = () => {

    //useState's: para especificar nueva tarea e incorporarla a lista.
    const [input, setInput] = useState('');
    const [tasksList, setTasksList] = useState([]);


    //Se ejecuta después del 1er renderizado y para cada actualización:
    useEffect(() => {
        createUser();
        fetchData();
    }, [])



    //CREATE-POST usuario faldea1:
    const createUser = async() => {
        const settings = {
            method: "POST",
            body: JSON.stringify([]),
            headers: { 'Content-Type': 'application/json' }
        }

        const request = await fetch(`http://assets.breatheco.de/apis/fake/todos/user/faldea1`, settings);
        const json = await request.json();
        const data = json;

        console.log('comprobando faldea1', data)

    };

    //FETCH-GET TodoList API:
    const fetchData = async() => {
        const settings = {
            method: "GET",
            headers: { 'Content-Type': 'aplication/json' }
        }

        const request = await fetch(`http://assets.breatheco.de/apis/fake/todos/user/faldea1`, settings);
        const json = await request.json();
        const data = json;

        setTasksList(data)

    };

    //UPDATE lista de tareas:
    const updateTaskUser = async() => {
        const settings = {
            method: "PUT",
            body: JSON.stringify(tasksList),
            headers: {'Content-Type': 'aplication/json'}
        }

        const request = await fetch(`http://assets.breatheco.de/apis/fake/todos/user/faldea1`, settings);
        const json = await request.json();
        const data = json;

        console.log('actualizar lista', data);

    };

    //DELETE Usuario y lista de tareas:
    const deleteAll = async () => {
        const settings = {
            method: "DELETE"
        }

        const request = await fetch(`http://assets.breatheco.de/apis/fake/todos/user/faldea1`, settings);
        const json = await request.json();
        const data = json;

        //llamada a POST y GET:
        createUser();
        fetchData();

        console.log('eliminar contenido', data);

    };




    
 






    













    //Input: agregar tarea especificada (en input) a la lista.


    return (
        <Container>
            <div className='row'>
                <div className='col-md-8 offset-md-2'>
                    <h1>My Todolist Fetch   <span className="mytitleicon"><FaTasks /></span></h1>
                </div>
            </div>
        </Container>
    );

}

export default MytodolistFetch;
