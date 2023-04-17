<template>
  <div v-if="course">


    <div class="course-details">
<div class="payment-card">
<PaymentCardVue :title="router.params.slug" :data="course"  /></div>
      <div class="details">
        <h1 class="course-title text-4xl">Vue.js Essentials: A Comprehensive Introduction</h1>
        <h3 class="course-desc mt-2">The course to get you started with Vue.js</h3>
        <div class="rating text-yellow-400">
<span class="rating-count bg-yellow-400 px-2 py-0  text-white rounded-md mr-1">4.1</span>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
<i class="fa-regular fa-star"></i>
</div>
        <span class="duration text-gray-300"> 3 hours+ of total content</span>
      <h5 class="course-creator">Course Creator : <span class="author">Adam Moris</span> </h5>
      <span class="text-gray-300">Last updated 15 hours ago</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import {onMounted, ref} from 'vue'
import { useRoute } from 'vue-router';


import PaymentCardVue from '../components/Course/PaymentCard.vue';
import { fetchSingleCourseDetails } from '../components/services';

const router = useRoute();
const course=ref(false)

const getSingleCourseDetails=async()=>{
  const res=await fetchSingleCourseDetails(router.params.slug);
  console.log('course details', res.data.course)
  course.value=res.data.course

}
onMounted(()=>{
  getSingleCourseDetails()

})

</script>

<style scoped>
.course-details {
  background: #555;
  width: 100%;
  height: 70vh;
  color: #ffffff;

padding-top:40px;

}
.details {
  padding: 20px 100px;
  width: 60%;
display: flex;
flex-direction: column;
gap: 10px;
  letter-spacing: 0.4px;
}
.course-title {
  font-family: 'Lora', serif;
  font-weight: bold;
  letter-spacing: 0.2px;
}
.author{
    text-decoration: underline;
    color: aqua ;
}
.payment-card{
    position: absolute;
    right: 100px;
    top: 60px;
    transition: 0.3s ease-in;
}
.dot{
    width: 5px;
    height: 5px;
    background: #000;

border-radius: 50%;
}
</style>