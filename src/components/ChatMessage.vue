<template>
 <div class="chatMain" ref="msgbox"> 
    <div v-for="message in filterMsg" :key="message.id">
        <p class="time">{{message.time}}</p>
        <span class="displayName">{{message.name}}</span>
        <span class="message">{{message.message}}</span>
    </div>
  </div>
</template>

<script>
import { computed, onUpdated, ref } from 'vue'
import { db } from "@/firebase/config"
import {formatDistanceToNow} from 'date-fns'
export default {
    setup(){
        let messages=ref([]);
        let msgbox=ref(null);
        // document fetch all with snapshot
         db.collection('message').orderBy('time').onSnapshot((snap)=>{
        let results=ref([]);
        snap.docs.forEach((doc)=>{
                let document={id:doc.id,...doc.data()};
                doc.data().time && results.value.push(document);
            })
            messages.value=results.value;
       })

        //change time 
       let filterMsg=computed(()=>{
            return messages.value.map((msg)=>{
                let formatTime=formatDistanceToNow(msg.time.toDate());
                return  {...msg,time:formatTime}
            })
       })

       //scroll repair
        onUpdated(()=>{
            msgbox.value.scrollTop=msgbox.value.scrollHeight
        })


       return { messages, filterMsg, msgbox}
    }
}
</script>

<style>
    .chatMain{
        max-width: 500px;
        background: rgb(237, 235, 235);
        margin: 0 auto;
        padding: 10px;
        border-top: 1px solid gray;
        max-height: 450px;
        overflow-y: scroll;        
    }
    .chatMain p{
       text-align: start;
    }
    .time{
        display: block;
        color: rgb(143, 181, 173);
        margin-bottom: 3px;
    }
    .displayName{
        margin-right: 10px;
        font-weight: bold;
        font-size: 18px;
    }
    ::-webkit-scrollbar{
        width: 10px;
    }
    ::-webkit-scrollbar-track{
        background: gray;
        border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb{
       background: rgb(2, 154, 152);
        border-radius: 15px;
    }
    ::-webkit-scrollbar-thumb:hover{
         background: linear-gradient(rgb(19, 189, 93),rgb(47, 234, 209));
        border-radius: 15px;
    }
</style>