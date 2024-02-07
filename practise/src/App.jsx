import {useEffect} from 'react'

function App(){
  
  return (
    <div>
      <CardWrapper>
        <TextComponent/>
      </CardWrapper>
    </div>
  )
}
function TextComponent(){
  return <div>
    hi there
  </div>
}
function CardWrapper({children}){
  console.log(children)
  return <div style={{
    border : "solid 2px black",
    backgroundColor : "white",
    color : "grey",
    padding : "10x",
    fontSize : "30px"
  }}>
    {children}
  </div>
}





export default App;