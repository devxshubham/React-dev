import {atomFamily, selectorFamily} from 'recoil'
import {todos} from './todo'
import axios from 'axios'

// export const todoAtomFamily = atomFamily({
//     key : 'todoAtomFamily',
//     default : id => {
//         return todos.find( x => x.id == id)
//     }
// })

export const todoAtomFamily = atomFamily({
    key : 'todoAtomFamily',
    default : selectorFamily({
        key : 'todoAtomSelectorFamily',
        get : function(id){
            return async function(){
                await new Promise( r => setTimeout(r,5000))
                const response = await axios.get(`http://localhost:3000/todo/${id}`);
                return await response.data;
            }
        }
    })
})