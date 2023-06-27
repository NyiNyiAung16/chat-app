<template>
  <div v-if="login">
    <Login @switchAcc="switchAcc"></Login>
  </div>
  <div v-else>
    <SignUp @switchAcc="switchAcc"></SignUp>
  </div>
</template>

<script>
import SignUp from '../components/SignUp'
import Login from '../components/Login'
import { ref } from 'vue'
export default {
  components: {
    SignUp, Login },
    setup(){
      let login=ref(true);
      
      let switchAcc=()=>{
        login.value=!login.value
      }

      return {switchAcc, login}
    }

}
</script>

<style>

</style>