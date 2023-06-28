<template>
  <div class="chatMain"> 
    <div>
        <p class="time">30mins ago</p>
        <span class="displayName">NyiNyi</span>
        <span class="message">message</span>
    </div>
    <div>
        <p class="time">30mins ago</p>
        <span class="displayName">aungaung</span>
        <span class="message">message</span>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    .chatMain{
        max-width: 500px;
        background: rgb(237, 235, 235);
        margin: 0 auto;
        padding: 10px;
        border-top: 1px solid gray;
    }
    .chatMain p{
       text-align: start;
    }
    .time{
        display: block;
    }
    .displayName{
        margin-right: 10px;
    }
</style>