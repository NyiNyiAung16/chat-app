<template>
  <div class="text">
    <p>Opps! Don't have todo lists. Pls write your todo lists.</p>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    .text{
        margin: 15px 0px;
    }
    .text > p{
        color: aquamarine;
        font-size: 18px;
        font-style: italic;
        font-weight: bold;
    }
    @media (max-width: 400px) {
      .text > p {
        font-size: 15px;
        font-weight: normal;
        font-style: normal;
        color: rgb(7, 199, 202);
      }
    }
</style>