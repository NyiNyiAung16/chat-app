<template>
  <div v-if="user">
    <Navbar></Navbar>
  </div>
  <Chat></Chat>
  <SendMsg></SendMsg>
</template>

<script>
import SendMsg from '../components/SendMsg'
import Chat from '../components/Chat'
import { ref, watch } from 'vue'
import Navbar from '../components/Navbar'
import {useRouter} from 'vue-router'
import getUser from '../composables/getUser'
export default {
  components: {
    SendMsg,
    Chat, Navbar },
  setup(){
    let {user}=getUser();
    let router=useRouter();
    watch(user,()=>{
      router.push('/');
    })

    return {user};
  }
}
</script>

<style>

</style>