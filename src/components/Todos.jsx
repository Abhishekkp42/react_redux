import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { addTodo } from "../Redux/action";

export const Todos = () =>{
const [text, setText] = useState("")

	const dispatch= useDispatch();

	const todos= useSelector((store) => {
		return store.todos
	})

	// useEffect(() => {
	// 	getData();
	// },[])

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
			dispatch(addTodo(res.data))
		})
		
	}

	return (
		<div>
			<input onChange={(e)=> {
				let {value} = e.target
				setText(value)
			}}/>
			<button onClick={() => {
				postTodo()
				getData();
				
				// dispatch(addTodo(text))
			}}>Add</button>
			
			{todos.map((e, i) => {
				return <div key={i}>
					{/* <h1>{e.id}</h1> */}
					<h1>{e.title}  {e.status}</h1>
					<h1></h1>
				</div>	
})}
		</div>
	)
}