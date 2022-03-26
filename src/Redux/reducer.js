import { ADD_TODO } from "./action";

const initState= { todos:[] }
export const reducer = (store=initState, {type, payload}) => {
		switch (type){
			case ADD_TODO:
				console.log("x", store) 
			return {
				...store,
				todos:[...store.todos, payload]
			};
			default:
				return store
		}
}