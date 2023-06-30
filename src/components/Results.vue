<template>
  <div>
    <p>The results is {{ scores }} ms</p>
    <div v-if="scores<100">
        <p>Ohh ! It's awesome</p>
        <img src="../image/img.jpg" alt="img1">
    </div>
    <div v-if="scores>100 && scores<=500">
        <p>It's a little great!Try one if you want.</p>
        <img src="../image/img4.jpg" alt="img2">
    </div>
    <div v-if="scores>550  && scores<=2000">
        <p>It's too late! Try againg</p>
        <img src="../image/img2.jpg" alt="img3">
    </div>
  </div>
</template>

<script>
export default {
    props:['scores'],
}
</script>

<style scoped>
  p{
    color: rgb(123, 245, 24);
    margin-block: 10px;
  }
  img{
    margin: 20px auto;
    display: block;
    border-radius: 10px;
    width: 100px;
  }
</style>