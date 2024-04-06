import React, { useEffect, useState } from 'react'
import Create from './Create'
import axios from 'axios'

export const Home = () => {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/get")
            .then(result => setTodos(result.data))
            .catch(err => console.log(err))

    },[])


    const handleedit = (id) => {
        axios.put("http://localhost:8000/update/" + id)
            .then(() =>{
               window.location.reload()
            })
            .catch(err => console.log(err))
    }

    const deletehandle = (id) => {
        axios.delete("http://localhost:8000/delete/"+ id)
        .then(() =>{
            window.location.reload()
        })
        .catch(err => console.log(err))
    }

    return (
        <div>
            <h1>todos</h1>
            <Create />
            {
                todos.length === 0
                    ?
                    <div>
                        <h2>No record</h2>
                    </div> :

                    todos.map(todo => {
                        return (
                            <div>
                                {todo.task}
                                <div>
                                    <button onClick={()=>deletehandle(todo._id)}>delete</button>
                                    <button onClick={() => handleedit(todo._id)}>
                                        {
                                            todo.done
                                                ?
                                                <div>
                                                    <>checked</>
                                                </div> :
                                                <div>
                                                    <>check</>
                                                </div>
                                        }</button>
                                </div>

                            </div>
                        )
                    })
            }
        </div>

    )
}
