import { ADD_TODO } from "./action";

export const reducer = (store, {type, payload}) => {
		switch (type){
			case ADD_TODO:
				// console.log("x", store) 
			return {
				...store,
				todos:[...store.todos, payload]
			};
			default:
				return store
		}
}