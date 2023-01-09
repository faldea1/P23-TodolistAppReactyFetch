import React, { useEffect, useState } from 'react';
import { FaTrash, FaTasks } from 'react-icons/fa';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MytodolistFetch = () => {

    //useState's: para especificar nueva tarea e incorporarla a lista.
    const [input, setInput] = useState('');
    const [tasksList, setTasksList] = useState([]);
    const [newTask, setNewTask] = useState('');
    const [list, setList] = useState([]);



    //useEffect se ejecuta después del 1er renderizado y para cada actualización:

    //Guardar tasks pendientes
    useEffect(() => {
        fetchData().then(list => {
            setList(list.map(x => x.label));
        });
    }, []);



    //CREATE-POST usuario faldea1:
    const createUser = async () => {
        try {
            const settings = {
                method: "POST",
                mode: 'cors',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify([]),
                redirect: "follow"
            }
            return await fetch("https://assets.breatheco.de/apis/fake/todos/user/faldea1", settings).then(response => response.json());
        } catch (error) {
            console.log(error);
            return { result: "Problems with POST" };
        }
    };

    //FETCH-GET TodoList API:
    const fetchData = async () => {
        try {
            const settings = {
                method: "GET",
                mode: 'cors',
                redirect: "follow"
            }
            return await fetch("https://assets.breatheco.de/apis/fake/todos/user/faldea1", settings).then(response => response.json());
        } catch (error) {
            console.log(error);
            return [];
        }
    };

    //UPDATE lista de tareas:
    const updateTaskUser = async (data = []) => {
        try {
            const settings = {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
                mode: 'cors',
                redirect: "follow"
            }
            return await fetch("https://assets.breatheco.de/apis/fake/todos/user/faldea1", settings).then(response => response.json());
        } catch (error) {
            console.log(error);
            return { result: "Problems with PUT" };
        }
    };

    //DELETE Usuario y lista de tareas:
    const deleteAll = async () => {
        try {
            const settings = {
                method: "DELETE",
                mode: 'cors',
                redirect: "follow"
            }
            return await fetch("https://assets.breatheco.de/apis/fake/todos/user/faldea1", settings).then(response => response.json());
        } catch (error) {
            console.log(error);
            return [];
        }
    };


    
    return (
        <Container>
            <Row>
                <Col>
                    <h1>My Todolist Fetch   <span style={{color: 'chartreuse'}} className="mytitleicon"><FaTasks /></span></h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <input style={{ padding: 8, paddingLeft: 9 }}  className='input' type='text' value={input} placeholder='Add a morning action to start a good day'
                        onChange={e => { setInput(e.target.value); console.log(input); }}
                        onKeyUp={e => {
                            if (e.keyCode === 13) {
                                if (input != '') {
                                    if (list.length == 0) {
                                        createUser().then(val => {
                                            let register = [];
                                            [...list, input].forEach(value => {
                                                register.push({
                                                    label: value,
                                                    done: false
                                                });
                                            });
                                            updateTaskUser(register).then(value => {
                                                fetchData().then(list => {
                                                    setList(
                                                        list.map(
                                                            register => register.label
                                                        )
                                                    )
                                                });
                                            });
                                            setInput("");
                                        });
                                    } else {
                                        let register = [];
                                        [...list, input].forEach(value => {
                                            register.push({
                                                label: value,
                                                done: false
                                            });
                                        });
                                        updateTaskUser(register).then(value => {
                                            fetchData().then(list => {
                                                setList(
                                                    list.map(register => register.label)
                                                );
                                            });
                                        });
                                        setInput("");
                                    }
                                }
                            }
                        }}
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <ul >
                        {list.map((valuelist, key) => {
                            return (
                                <li className='d-flex justify-content-between' key={key}>
                                    {valuelist}
                                    <a onClick={() => {
                                        list.splice(key, 1); let register = [];[...list].forEach(value => {
                                            register.push({
                                                label: value,
                                                done: false
                                            });
                                        });
                                        if (register.length > 0) {
                                            updateTaskUser(register).then(value => {
                                                fetchData().then(list => {
                                                    setList(
                                                        list.map(
                                                            register => register.label
                                                        )
                                                    )
                                                });
                                            });
                                        } else {
                                            deleteAll().then(value => {
                                                setList([]);
                                            });
                                        }
                                    }}>
                                        <FaTrash style={{color: 'darkgray', margin: 'none'}} />
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div style={{color: 'yellow', fontsize: 'medium'}} className="MyActionsNumb2">Number of Tasks : {list.length}</div>
                </Col>
            </Row>
        </Container>
    );

}

export default MytodolistFetch;
