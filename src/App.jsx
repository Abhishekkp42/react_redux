import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Todos} from "./components/Todos"
import { Route, Routes } from 'react-router-dom'
import { SingleTodo } from './components/SingleTodo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Todos />} />
        <Route path='/todos/:id' element={<SingleTodo />} />
      </Routes>
    </div>
  )
}

export default App
