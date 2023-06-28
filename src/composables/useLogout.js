import { ref } from "vue";
import { auth } from "@/firebase/config";

let error=ref(null);
let signout=async()=>{
   try{
    return await auth.signOut();
   }catch(err){
    error.value=err.message;
   }
}

let useLogout=()=>{
    return {error, signout};
}

export default useLogout;