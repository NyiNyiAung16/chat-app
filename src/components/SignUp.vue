<template>
<form>
    <p>SignUp</p>
    <label>DisplayName</label>
    <input type="text" v-model="displayName">
    <label>Email</label>
    <input type="email" v-model="email">
    <label>Password</label>
    <input type="password" v-model="password">
    <button>SignUp</button>
    <div>Already have an account? <span @click="login">Login</span></div>
  </form>
</template>

<script>
import { ref } from 'vue'
export default {
    setup(props,context){
        let displayName=ref('');
        let email=ref('');
        let password=ref('');
        let login=()=>{
             context.emit('switchAcc');
        }



        return {displayName, email, password, login}
    }
}
</script>

<style>

</style>