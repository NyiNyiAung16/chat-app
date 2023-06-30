<template>
    <p>How fast can you catch me?<button :disabled="startGame" @click="startBlock">play</button></p>
    <div v-if="showResults">
      <Results :scores="scores"></Results>
    </div>
    <div v-if="block">
      <Block @endGame="endGame"></Block>
    </div>
</template>

<script>
import Block from '../components/Block'
import Results from '../components/Results'
import { onMounted, ref } from 'vue'
export default {
  components: {
    Block, Results },
  setup(){
    let block=ref(false);
    let scores=ref(0);
    let startGame=ref(false);
    let showResults=ref(false);

    //emit 
    let endGame=(score)=>{
      scores.value=score;
      startGame.value=false;
      showResults.value=true,
      block.value=false
    }
    //block show
    let startBlock=()=>{
      block.value=true;
      startGame.value=true;
    }


    return { block, endGame, scores, startGame, startBlock, showResults}
  }
}
</script>

<style >
  p{
    margin: 0 auto;
    text-align: center;
    color: aliceblue;
  }
  button{
    margin-left: 10px;
  }

  .boxController{
    position: relative;
  }
  .box{
    width: 50px;
    height: 50px;
    border-radius: 10px;
    background:red;
    position: absolute;
    animation: moving 3s ease infinite;
  }
  @keyframes moving {
    0%{left: 0;top: 0;transform: rotate(0deg);background: red;}
    25%{left: 200px;top: 0;transform: rotate(360deg);background: rgb(15, 255, 15);}
    50%{left: 200px;top: 200px;transform: rotate(180deg);background: rgb(255, 225, 0);}
    75%{left: 0;top: 200px;transform: rotate(360deg);background: rgb(0, 238, 255);}
    100%{left: 0;top: 0;transform: rotate(0deg);background: rgb(225, 0, 255);}
  }

  /* catch box css */

</style>