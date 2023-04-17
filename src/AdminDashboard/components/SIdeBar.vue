<template>
    <aside :class="`${is_expended && 'isExpended'}`">
    <div class="sidebar-header">
<div class="admin-profile">
<div class="avatar" v-if="!is_expended">MS</div> <span v-if="is_expended">Mr. Shoaib</span></div>

<div class="toggle" @click="toggleMenu">
<i class="fa-solid fa-angles-left"></i>
</div>

    </div>
    <nav>
 <ul>
 <li v-for="link in routeLink" :key="link.name">
  <i :class="link.icon"></i>
   <span v-if="is_expended">
   <router-link :to="link.path"> {{link.name}}</router-link>

 </span> </li>

 <!-- <span v-if="is_expended">
 {{link.name}}jj
 </span> -->

 </ul>
    </nav>

    </aside>
</template>

<script setup>
import {ref} from 'vue'
const is_expended=ref(true)
 const routeLink=[
    {
        path:'/admin',
        name:'Admin',
        icon:'fa-solid fa-gauge'
    },
    {
        path:'/admin/course',
        name:'Course',
        icon:'fa-solid fa-play-circle'
    },
    {
        path:'/add',
        name:'Add',
        icon:'fa-solid fa-plus'
    }

 ]

 const toggleMenu=()=>{

    is_expended.value=!is_expended.value
 }

</script>

<style scoped>
aside{
    width:58px;
background:#111;

color: #fff;
position: relative;
transition: 0.3s ease-out;
}
.toggle{
    position: absolute;
    right: 10px;
    top: 1px;
    cursor: pointer;
}
.admin-profile{
    display: flex;
    align-items: center;
height: 40px;
justify-content: center;
background: #333;


}
ul{

    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
    transition: 0.3s ease-in;
    margin-top: 20px;
}

ul li{
    display: flex;
    align-items: center;
    gap: 10px;
padding: 5px 10px;
    transition: 0.2s ease-in;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;

}
ul li:hover{
background:#444;
}

.isExpended{
    width:150px;
}
.toggle{
    font-size: 20px;
    top: 37px;
    left: 10px;
}

.isExpended .toggle i {
    color: red;
}

.avatar{
    width: 32px;
    height: 32px;
    background: green;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    letter-spacing: 0.3px;
}

ul li i{
    font-size: 16px;
}



</style>