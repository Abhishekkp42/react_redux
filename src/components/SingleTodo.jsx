import { useParams } from "react-router-dom"


export const SingleTodo = () => {
	const {id}= useParams();

	return(
		<h2>Sigle todod of {id}</h2>
	)
}