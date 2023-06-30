<template>
    <nav class="Navbar">
    <div>
        <p >Chat-App</p>
    </div>
    <div>
        <router-link to="/home">Home</router-link>
        <router-link to="/chatroom">Group</router-link>
        <router-link to="/fun">For fun</router-link>
    </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style >
    .Navbar{
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #fff;
        padding: 10px;
    }
    .Navbar > div > p{
        font-size: 25px;
        color: aqua;
        font-weight: bold;
    }
    nav a {
        color: #fff;
        text-decoration: none;
        margin-left: 8px;
    }
    nav a.router-link-active:hover{
        color: rgb(41, 195, 215);
    }
    @media (max-width: 400px){
        .Navbar > div > p{
            font-size: 20px;
            font-weight: none;
        }
        nav a {
            font-size: 15px;
        }
    }
</style>