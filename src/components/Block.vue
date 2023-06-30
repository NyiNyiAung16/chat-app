<template>
  <div>
      <div v-if="show">
        <div class="box2"  @click="showBox">
          <span>{{time}}</span>
        </div>
      </div>
    </div>
</template>

<script>
import { onMounted, ref, resolveDirective } from 'vue';
export default {
    setup(props,context){
    let show=ref(false);
    let score=ref(0);
    let time=ref(2000+Math.random()*5000);
    let timer=ref(null);

    //settime out
    onMounted(()=>{
      setTimeout(()=>{
      show.value=true,
      scoerr()
    },time.value)
    })

      //set Interval
      let scoerr=()=>{
        timer.value=setInterval(() => {
        score.value+=50
      }, 50)
      }
      //clear Interval
      let showBox=()=>{
        clearInterval(timer.value);
        context.emit('endGame',score.value)
      }


      return {show, time, score, showBox}
    }
}
</script>

<style>
      .box2{
    width: 200px;
    height: 200px;
    background: yellow;
    border-radius: 10px;
    margin: 10px auto;
  }
</style>