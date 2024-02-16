import { RecoilRoot, useRecoilValue, useRecoilValueLoadable } from 'recoil'

import { todoAtomFamily } from './atomFamily'




function App(){

  return (
    <RecoilRoot>
      <div>
      <RenderTodo id={'65c125e133341aefa24e0320'}></RenderTodo>
      <RenderTodo id={'65c1261633341aefa24e0324'}></RenderTodo>
    </div>
    </RecoilRoot>
    
  )
}
function RenderTodo({id}){
  const todo = useRecoilValueLoadable(todoAtomFamily(id));
  console.log(todo.contents)
  if( todo.state == 'loading'){
    return <div>
      loading
    </div>
  }
  else if(todo.state == 'hasValue'){
    return <div>
    {todo.contents.title}
  </div>
  }
  
}


export default App