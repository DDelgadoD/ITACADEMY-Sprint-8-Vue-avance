<template>
    <div class="dfx">
        <div class="logo-box"><img class="logo" src=../assets/img/starWarsLogo.png></div>
        <div class="auth"> <router-link :to="{name:'Login'}">LOG IN</router-link> // <router-link :to="{name:'Signup'}">SIGNUP </router-link></div>
    </div>
    <div class="dfx mini">
        <router-link class="mini-el" :to="{name:'Home'}">HOME</router-link>
        <router-link class="mini-el" :to="{name:'List'}">STARSHIPS</router-link>
    </div>
</template>
<script setup>
</script>
<style scoped>
a{
    color: rgba(109, 106, 106, 0.87);
    text-decoration: none;
}
.logo{
    width:20%;
    margin-left: 25% ;
}
.logo-box{ 
    width: 80%; 
}
.dfx{
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    background-color: black;
}
.stick{
    position:sticky;
    top:0;
}
.auth{
    justify-self: end; 
    padding:0 2%;
}
.mini{
   border-top: 1px  solid grey;
   border-bottom: 0.5px  solid grey;
   justify-content: center;
}

.mini-el{
    border-left:0.5px  solid grey;
    border-right:0.5px  solid grey;
    padding: 0.75% 1%;
}
.mini-el:hover{
    font-weight: bold;
    border-bottom: 4px  solid cyan;
    color:white
}

@media only screen and (max-width: 800px) {
    .logo{
    width:40%;
    margin-left: 0% ;
    
}
.logo-box{ 
    width: 60%; 
}
}
</style>