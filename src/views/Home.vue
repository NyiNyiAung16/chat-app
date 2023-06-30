<template>

   
  <div class="todoMain">
      <!-- show error -->
      <div v-if="showErrorBox"  class="errorBox">
        <p>Can't create a todo list<br/>Pls write a todo list</p>
    </div>
    <!-- title -->
    <h2>Your's Todo Lists</h2>
    <!-- navbar -->
      <div class="todoNavbar">
        <input type="text" placeholder="write your's todo list and enter to submit" v-model="todoList" @keypress.enter="submit">
      </div>

       <div v-if="getTodos==''">
        <ShowText></ShowText>
       </div>
        <div v-for="getTodo in getTodos" :key="getTodo.id"   @click="removeTodo(getTodo.id)"   class="todoStyle">
          <p> {{ getTodo.todo }}</p>
        </div>
  </div>
</template>

<script>
import ShowText from '../components/ShowText'
import useCollection from '@/composables/useCollection'
import { db } from '@/firebase/config';
import { onMounted, ref } from 'vue'
import deleteTodo from '../composables/deleteTodo'
export default {
  components: { ShowText },
  setup(){
      let todoList=ref('');
      let showErrorBox=ref(false);

      //todo lists Post in firebase
      let doc=ref(
        {todo:''}
      );
      let {error,addDoc}=useCollection('todoLists');
      let submit=async()=>{
        doc.value.todo=todoList.value;
        if(todoList.value){
          await addDoc(doc.value);
          todoList.value='';
        }else{
          showErrorBox.value=true;
          setTimeout(()=>{
              showErrorBox.value=false
          },2000)
        }
      }

      //todo lists fetch
      let getTodos=ref([]);
      onMounted(()=>{
        try{
          let res= db.collection('todoLists').onSnapshot((snap)=>{
            getTodos.value=snap.docs.map((doc)=>{
            return {id:doc.id,...doc.data()}
          })
          })
         
          if(!res){
            throw new Error("can't fetch data")
          }
        }catch(err){
          error.value=err.message
        }
      })

      //delete todo list

      let {delTodo}=deleteTodo('todoLists');
      let removeTodo=async(id)=>{
        await  delTodo(id)
      }
      return {todoList, error, submit, getTodos, showErrorBox, removeTodo}
  }
}
</script>

<style scoped>
  .todoMain{
    border-radius: 10px;
    max-width: 500px;
    margin: 0 auto;
  }


  h2{
    text-align: center;
    color: aquamarine;
  }
  .todoNavbar{
    border-radius: 10px;
    max-width: 500px;
    margin: 0 auto;
  }

  .todoNavbar input{
    padding: 18px;
    border-radius: 10px;

  }

  .todoStyle{
    width: 100%;
    background: rgb(24, 179, 158);
    padding: 10px;
    margin: 10px 0px;
    border-radius: 10px;
    box-sizing: border-box;
  }

  .errorBox{
    background: red;
    padding: 10px;
    border-radius: 10px;
  }

</style>