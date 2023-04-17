<template>
    <div>

  <div class="main-dashboard p-5">
<div class="left-container">
<h1>Dashboard</h1>
<div class="analytics-data">
<Card />

</div>


</div>
<!-- <div class="right-widget-area">
manage widget
</div> -->

  </div>

    </div>
</template>

<script setup>
import Card from './Analytics/Card.vue'

</script>

<style  scoped>
.main-dashboard{
    display: grid;
grid-template-columns: 4fr 1fr;
}

.left-container{

    flex: 1;
    height:100vh;
}
.right-widget-area{
    background: yellow;
}

</style>