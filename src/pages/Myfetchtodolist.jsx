import React, { useEffect, useState } from 'react';
import { FaTrash, FaTasks } from 'react-icons/fa';

const MytodolistFetch = () => {
    const [task, setTask] = useState("");
    const [list, setList] = useState([]);
    const [disable, setDisable] = useState(false);
    const url = "http://assets.breatheco.de/apis/fake/todos/user/faldea1";

    useEffect(() =>{
        getTasks();
    }, []);

    function items(){
        const array = list.filter((elem) =>{
            return elem.done === false;
        })

        return array.length;

    };

    //Fetch's - GET (obtener de API), PUT (actualizar), POST (crear), DELETE (borrar).

    //GET:
    async function getTasks() {
        try {

            const getresp = await fetch(url);
            if (!getresp.ok) {
                alert('there is a problem');
                return;
            }

            const body = await getresp.json();
            setList(body);

        } catch (error) {
            console.log('Error:', error);

        }
    };

    //PUT:
    async function putTasks(data){
        try{
            const putrequest = await fetch(url, {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(data)
            });
            if (!putrequest.ok){
                alert('there is a problem');
                return;
            }

            getTasks();

        } catch(error) {
            console.log('Error:', error);
        }
    };

    //POST:
    async function postTasks(){
        try{
            const data = [];
            const postresp = await fetch(url,{
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(data)
            });
            if(!postresp.ok){
                alert('there is a problem');
                return;
            }

            putTasks([{label:"Create task", done: true}]);

        } catch(error) {
            console.log('Error:', error);
        }
    };

    //DELETE
    async function deleteTasks(){
        try{
            const delrequest = await fetch(url, {
                method: "DELETE",
                headers: {"Content-Type": "application/json"}
            });

            postTasks();

        } catch (error){
            console.log('Error:', error);
        }
    };








    















return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-8 offset-md-2'>
                <h1>My Todolist Fetch   <span className="mytitleicon"><FaTasks /></span></h1>
            </div>
        </div>
    </div>


);



};

export default MytodolistFetch;
