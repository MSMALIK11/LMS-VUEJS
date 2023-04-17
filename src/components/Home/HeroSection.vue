<template>
    <div>
    <Banner />
    <div class="heading">
    All Coursesdd
    </div>
    <div class="course-wraper">
    <div class="course-container" v-for="course in courseData" :key="course.name">
<CardVue :course="course" />
    </div>
    </div>

    </div>
</template>

<script setup>
import CardVue from './Card.vue'
import courseData from '../data/course.js';
import Banner from '../../components/Banner.vue'
// let courses=JSON.parse(courseData)
// console.log("courseData,courseData)


</script>

<style scoped>
.heading{
    height: 30px;
    margin: 10px 0;
    text-align: center;
    font-size: 42px;
}
.course-container{

    display: flex;

}
.course-wraper{
   display: flex;
gap: 20px;
   overflow: auto;
   padding: 0 100px;
   height: 40vh;


margin: 60px 0;
}
::-webkit-scrollbar{
    background:rgba(9, 194, 9, 0.671);
    height: 10px;
}
::-webkit-scrollbar-thumb{
    background:rgb(110, 7, 228);
border-radius: 10px;
}

</style>