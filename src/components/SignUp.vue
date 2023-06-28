<template>
<form @submit.prevent="createAcc">
    <p>SignUp</p>
    <label>DisplayName</label>
    <input type="text" v-model="displayName">
    <label>Email</label>
    <input type="email" v-model="email">
    <label>Password</label>
    <input type="password" v-model="password">

    <div v-if="error">
        <p>{{error}}</p>
    </div>
    <button>SignUp</button>
    <div>Already have an account? <span @click="login">Login</span></div>
  </form>
</template>

<script>
import { ref } from 'vue'
import useSignUp from '../composables/useSignUp'
import {useRouter} from 'vue-router'
export default {
    setup(props,context){
        let displayName=ref('');
        let email=ref('');
        let password=ref('');
        let login=()=>{
             context.emit('switchAcc');
        }

        // Create Account with authentication
        let router=useRouter();
        let {error, singUp}=useSignUp();    
        let createAcc=async()=>{
           let res=await singUp(email.value, password.value, displayName.value);
            if(res){
                router.push('/chatroom');
            }
        }

        return {displayName, email, password, login, error, createAcc}
    }
}
</script>

<style>
    form div > p{
        font-size: 15px;
        font-weight: bold;
        color: rgb(212, 31, 31);
    }
</style>