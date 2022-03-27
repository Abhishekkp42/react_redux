import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { addTodo } from "../Redux/action";
import {Link} from "react-router-dom"

export const Todos = () =>{
const [text, setText] = useState("")

	const dispatch= useDispatch();

	const todos= useSelector((store) => {
		return store.todos
	})

	useEffect(() => {
		getData();
	},[])

	const getData = () => {
		axios.get("http://localhost:5000/todos")
		.then((res) => {
			console.log("Data", res.data)
			// setText([...res.data])
			dispatch(addTodo(res.data))
			
		})
		
	}

	const postTodo= () => {
		axios.post("http://localhost:5000/todos", {title:text, status: false})
		.then((res) => {
			// console.log("Res", res)
			// dispatch(addTodo(res.data))
			getData()
		})
		// setText("")
	}

	const handleDelete=(id) => {
		console.log("Delete")
		axios.delete(`http://localhost:5000/todos/${id}`).then(() => {
			getData();
		})
	}

	const toogleStatus= (id, status) => {
		axios.patch(`http://localhost:5000/todos/${id}`, {status: status ? false : true})
			getData();
	}
	
			{/* {todos.map((e, i) => {
				return <div key={i}>
					{/* <h1>{e.id}</h1> */}
					{/* <h1>{e.title}.  {e.status}<button onClick={() => handleDelete(e.id)}>Delete</button></h1>	 */}
				{/* </div>	 */}
			{/* })} */}

	return (
		<div>
			<input onChange={(e)=> {
				let {value} = e.target
				setText(value)
			}}/>
			<button onClick={() => {
				postTodo()
				// getData();
				
				// dispatch(addTodo(text))
			}}>Add</button>
			
			<table>
        <thead>
          <tr>
            <th>Sl.NO</th>
            <th>Task</th>
            <th>Status</th>
            <th>Delete</th>
          </tr>
        </thead>

			<tbody>
          {todos.map((el, i) => {
            return (
              <tr key={el.id}>
                <td>{i}</td>
                <td>
                  <Link to={`/todos/${el.id}`} >{el.title}</Link>
                </td>
                <td>
                  <button
                    onClick={() => {
                      toogleStatus(el.id, el.status);
                    }}
                  >
                    {el.status ? "Completed" : "Pending"}
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      handleDelete(el.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
		</table>
		</div>
	)
}