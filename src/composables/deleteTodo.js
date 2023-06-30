import { db } from "@/firebase/config"


let deleteTodo=(collection)=>{

    let delTodo=async(id)=>{
        let res=await  db.collection(collection).doc(id).delete();
        return res;
    }
    
    return {delTodo}
}

export default deleteTodo;