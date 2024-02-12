import {useState, useContext} from 'react'
import {CountContext} from './context'

function App(){
  const [count, setCount] = useState(0);

  return (
    <>
      <CountContext.Provider value={{count,setCount}}>
        <Count />
      </CountContext.Provider>
    </>
  )
}
function Count(){
  return <div>
    <CountRender/>
    <Button />  
  </div>
}
function CountRender(){
  const {count} = useContext(CountContext)
  return <div>count is {count}</div>
}
function Button(){
  const {setCount} = useContext(CountContext)
  return <div>
      <button onClick={()=>{
        setCount( prev => prev+1);
      }}> + </button>
      <button onClick={()=>{
        setCount( prev => prev-1 );
      }}> - </button>
    </div>
}

export default App;