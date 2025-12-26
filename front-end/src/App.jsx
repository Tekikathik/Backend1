import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import Route_map from '../Component/Route_map'
function App() {

  const get =()=>{
    axios.get("http://localhost:7000/get").then((result) => {
      console.log(result.data)
    })
    .catch((err)=>{
      console.log(err);
    })
  }
  const user ={
    name:"karthik",
    roll:250
  }
  const  post=()=>{
    axios.post("http://localhost:7000/add",user).then((result) => {
      console.log(result.data)
    })
    .catch((err)=>{
      console.log(err);
    })
  }
  const  put=()=>{
    axios.put("http://localhost:7000/add",user).then((result) => {
      console.log("result")
    })
    .catch((err)=>{
      console.log(err);
    })
  }

  return (
    <>
    {/* <button onClick={get}>get student</button>
    <button onClick={post}>Add student</button> */}
    <Route_map/>
    </>
  )
}

export default App
