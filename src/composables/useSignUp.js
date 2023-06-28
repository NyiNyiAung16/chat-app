import { ref } from "vue";
import { auth } from "@/firebase/config";

let error=ref(null);
let singUp=async(email,password,displayName)=>{
   try{
    let res=await auth.createUserWithEmailAndPassword(email,password);
    if(!res){
        throw new Error("can't create an account");
    }
    res.user.updateProfile({displayName})
    return res;
   }catch(err){
        error.value=err.message;
   }
}

let useSignUp=()=>{
    return {error, singUp};
}

export default useSignUp;