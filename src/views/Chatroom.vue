<template>
  <div v-if="user">
    <Navbar></Navbar>
  </div>
  <ChatMessage></ChatMessage>
  <SendMsg></SendMsg>
</template>

<script>
import MainNav from '../components/MainNav'
import ChatMessage from '../components/ChatMessage'
import SendMsg from '../components/SendMsg'
import { ref, watch } from 'vue'
import Navbar from '../components/Navbar'
import {useRouter} from 'vue-router'
import getUser from '../composables/getUser'
export default {
  components: {
    MainNav,
    ChatMessage,
    SendMsg,
     Navbar },
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