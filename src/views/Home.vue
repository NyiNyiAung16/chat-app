<template>

   
  <div class="todoMain">
      
    <transition name="error" appear="">
      <div v-if="showErrorBox"  class="errorBox">
        <p>Can't create a todo list<br/>Pls write a todo list</p>
    </div>
    </transition>

    <h2>Your's Todo Lists</h2>

      <div class="todoNavbar">
        <input type="text" placeholder="write your's todo list and enter to submit" v-model="todoList" @keypress.enter="submit">
      </div>

      <transition name="fade" appear >
        <div>
          <transition-group tag="div" name="text" appear>
            <div v-if="getTodos==''">
              <ShowText></ShowText>
            </div>
          </transition-group>
          
        <transition-group tag="div" name="listStyle" appear >
          <div v-for="getTodo in getTodos" :key="getTodo.id"   @click="removeTodo(getTodo.id)"   class="todoStyle">
              <p> {{ getTodo.todo }}</p>
          </div>
        </transition-group>
        </div>
      </transition>
  </div>
</template>

<script>
import ShowText from '../components/ShowText'
import useCollection from '@/composables/useCollection'
import { db,timestamp } from '@/firebase/config';
import { onMounted, ref } from 'vue'
import deleteTodo from '../composables/deleteTodo'

export default {
  components: { ShowText },
  setup(){
      let todoList=ref('');
      let showErrorBox=ref(false);

      //todo lists Post in firebase
      let doc=ref(
        {todo:'',time:timestamp()}
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
          },4000)
        }
      }

      //todo lists fetch
      let getTodos=ref([]);
      onMounted(()=>{
        try{
          let res= db.collection('todoLists').orderBy('time','desc').onSnapshot((snap)=>{
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
    position: relative;
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

  @media (max-width: 400px){
    h2{
      font-size: 20px;
    }
  }

  .fade-enter-from{
    opacity: 0;
    transform: scale(0.4);
  }
  .fade-enter-to{
    opacity: 1;
    transform: scale(1);
  }
  .fade-enter-active{
    transition: all 2s ease;
  }
  .fade-leave-from{
    opacity: 1;
    transform: scale(1);
  }
  .fade-leave-to{
    opacity: 0;
    transform: scale(0.4);
  }
  .fade-leave-active{
    transition: all 2s ease;
  }
  .listStyle-enter-from,.listStyle-leave-to  {
      opacity: 0;
      transform: scale(0.4);
  }

  .listStyle-enter-active{
    transition: all 2s ease;
  }

  .listStyle-leave-active{
    transition: all 2s ease;
    position: absolute;
  }
  .listStyle-move{
    transition: all 1s ease;
  }
  .text-enter-from,.text-leave-to  {
      opacity: 0;
      transform: translateX(200px);
  }

  .text-enter-active,.text-leave-active{
    transition: all 2s ease;
    position: absolute;
  }
  .text-move{
    transition: all 3s ease;
  }

  .error-enter-from{
    opacity: 0;
    transform: translateY(-60px) scale(0.5);
  }
  .error-enter-active{
    transition: all 2s ease-out;
  }
  .error-leave-to{
    opacity: 0;
    transform: translateY(-60px) scale(0.5);
  }
  .error-leave-active{
    transition: all 2s ease-in;
  }
</style>