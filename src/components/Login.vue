<template>

  <form @submit.prevent="LoginAcc">
    <p>Login</p>
    <label>Email</label>
    <input type="email" v-model="email">
    <label>Password</label>
    <input type="password" v-model="password">
    <div v-if="error">
        <p>{{error}}</p>
    </div>
    <button>Login</button>
    <div>Not a member?<span @click="SignUp">SignUp</span></div>
  </form>
</template>

<script>
import { ref } from 'vue'
import useLogin from '../composables/useLogin'
import {useRouter} from 'vue-router'
export default {
    setup(props,context){
        let email=ref('');
        let password=ref('');
        let SignUp=()=>{
            context.emit('switchAcc');
        }

        //Login with authentication
        let router=useRouter();
        let {error,signIn}=useLogin();
        let LoginAcc=async()=>{
          let res=await signIn(email.value, password.value);
            if(res){
                router.push('/chatroom');
            }
            
        }
        return {email, password, SignUp, error, LoginAcc}
    }
}
</script>

<style>
    form{
        max-width: 500px;
        margin: 0 auto;
        background: rgb(138, 138, 138);
        padding:10px 20px;
        margin-top: 10%;
        border-radius: 10px;
        text-align: center;
    }
    label{
        display: block;
        text-align: start;
        margin: 10px 0px;
        text-transform: uppercase;
        letter-spacing: 1px;
    }
    input{
        width: 100%;
        padding: 10px;
        border: none;
        background: rgb(224, 252, 255);
        border-radius: 5px;
        box-sizing: border-box;
    }
    button{
        margin: 20px 0px;
        border: none;
        padding: 8px 15px;
        border-radius: 5px;
        background: rgb(81, 228, 224);
        cursor: pointer;
    }
    form p{
        font-size: 30px;
        font-weight: bold;
        color: rgb(81, 228, 224);
    }
    form span{
        text-decoration: underline;
        color: rgb(81, 228, 224);
        margin-left: 5px;
        cursor: pointer;
    }
</style>