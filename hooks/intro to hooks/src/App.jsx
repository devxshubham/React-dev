import React,{ useState, useMemo, useCallback } from 'react'
import axios from 'axios';
import './App.css'


// MEMO
// function App() {
//   const [input , setInput] = useState(0);
//   const [count, setCount] = useState(0);
//   let sum = useMemo( () =>{
//     let sum=0;
//     for(let i=1; i<=input; i++){
//       sum += i;
//     }
//     console.log(sum)
//     return sum;
//   },[input]);
  
//   return (
//     <>
//       <input onChange={(e) =>{
//         setInput(e.target.value)
//       }} type="text" />
//       <div>nth sum is {sum}</div>
//       <button onClick={()=>{
//         setCount(count+1)
//       }}>count is {count}</button>
//     </>
//   )
// }

// useCallback
function App(){
  const [count, setCount] = useState(0)
  const xyz = useCallback(()=>{
    console.log("xyz")
  },[])
  return(
    <>
      <Compo xyz={xyz}></Compo>
      <button onClick={()=>{
        setCount(count+1)
      }}>count is {count}</button>
    </>
  )
}
const Compo = React.memo(({xyz})=>{
  console.log("re render because of xyz")
  return <div>
    <button onClick={xyz}>console</button>
  </div>
})


export default App
