<template>
    <div>

    <div class="admin-layout-content">
    <!-- sidebar  -->
 <Sidebar />
 <div class="content">
 <!-- header  -->
   <header class="shadow-sm">WELCOME TO ADMIN DASHBOARD </header>

  <router-view/>

 </div>
    <!-- route -->
    </div>

    </div>
</template>

<script setup>

import Sidebar from '../AdminDashboard/components//SIdeBar.vue'

</script>

<style  scoped>

.admin-layout-content{
    display: flex;
height: 100vh;


}
.content{
    background:#eee;
    flex:1 1 0;



}
header{
    width: 100%;
    height: 40px;
    background:#333;
    display: flex;
    align-items: center;
    padding:0 10px;
    color:#fff;
    font-weight: bold;
    font-family:lora;
    letter-spacing:0.5px;


}
</style>