import { ref } from "vue";

let error=ref(null);
let signup=async()=>{

}

let useSignUp=()=>{
    return {error,signup};
}

export default useSignUp;