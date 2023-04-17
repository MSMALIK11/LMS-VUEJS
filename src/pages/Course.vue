<template>
<div>
<Banner/>
    <div class="wraper">
<h1 class="text-3xl text-center">All Courses</h1>
<template v-if="courses">
<div class="course-container">
<CardVue v-for="course in courses" :key="course.title" :course="course" />
</div>
</template>

    </div>
</div>
</template>

<script setup>
import {onMounted, ref} from 'vue'
import CardVue from "../components/Course/Card.vue";
import Banner from '../components/Banner.vue'
import { fetchAllCourse } from "../components/services";
import MainLayoutVue from "../layouts/MainLayout.vue";
let courses=ref(null)


onMounted(async()=>{
 const res=await fetchAllCourse();
if(res?.data.success){

    courses.value=res?.data.course

}
})


</script>

<style  scoped>
.course-container{
display: flex;
flex-wrap: wrap;
justify-content: center;
gap: 20px;
}

</style>