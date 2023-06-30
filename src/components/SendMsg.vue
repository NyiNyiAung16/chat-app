<template>
  <div class="sendForm">
    <input type="text" v-model="message">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="sendLogo" @click="sendMessage">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
    </svg>
  </div>
</template>

<script>
import { ref } from 'vue'
import useCollection from '../composables/useCollection'
import getUser from '@/composables/getUser'
import {timestamp} from '../firebase/config'

export default {
    setup(){
        let message=ref('');
        let {user}=getUser();
        let {error,addDoc}=useCollection('message');
        let sendMessage=async()=>{
            let doc={
                name:user.value.displayName,
                message:message.value,
                time:timestamp()
            }
            await addDoc(doc)
            message.value=''
        }


        return {message, sendMessage, error}
    }
}
</script>

<style>
    .sendForm{
        max-width: 500px;
        background: rgb(237, 235, 235);
        margin: 0 auto;
        padding: 10px;
        border-top: 1px solid gray;
        display: flex;
        border-radius: 0px 0px 10px 10px;
       
    }
    .sendForm > input {
        background-color: rgb(28, 165, 177);
         color:white;
    }
    .sendForm > .sendLogo{
        width: 30px;
        height: 35px;
        align-self: center;
        margin-left: 9px;
        background-color: gray;
        color: aqua;
        padding: 0px 5px;
        border-radius: 30%;
        cursor: pointer;
    }
</style>