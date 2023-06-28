<template>
  <div class="container">
    <div>
      <span>Hi {{user.displayName}}</span>
      <span>Logged in as {{user.email}}</span>
    </div>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
import getUser from '@/composables/getUser';
import useLogout from '../composables/useLogout'
export default {
    setup(){
      let {user}=getUser();
      let {error, signout}=useLogout();

      let logout=async()=>{
          await signout();
      }

      return {logout, error, user}
    }
}
</script>

<style>
  .container{
    max-width: 500px;
    margin: 0 auto;
    background: rgb(237, 235, 235);
    border-radius: 15px 15px 0px 0px;
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    text-align: start;
    align-items: center;
  }
  .container > div > span{
    display: block;
    color: rgb(109, 162, 162);
    text-decoration: none;
    margin-block: 5px;
  }
  .container button{
    cursor: pointer;
  }
</style>