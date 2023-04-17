<template>
  <div class="payment-card-wraper shadow-md">
    <div class="course-image">
      <img src="../../assets/images/v.webp" alt="" />
    </div>
    <div class="details">
      <div class="buy mb-1">
        <div class="dot"></div>
        <h4 class="text-gray-400">Buy Course</h4>
        <hr class="bg-gray-500">
      </div>
      <div class="buy-plan">
        <div class="dot"></div>
        <h1  class="text-[22px] text-indigo-700">Subscibe to pro</h1>
        <hr>
            </div>
        <div class="details">
        <span
        class="text-gray-400"
          >Get access to this course and all the other courses on the website for a
          subscription</span
        >
          <p class="text-2xl text-black mt-2" >199/month</p>
<div class="action-button mb-2">
          <button class="text-white bg-indigo-500 shadow-md hover:bg-indigo-400">Upgrade To Pro</button>
     <button class="bg-green-400 hover:bg-green-500 text-white shadow-md "><router-link :to="`/course/${props.title}/${slug}`"> Start Free </router-link></button>

</div>
          <p class="text-center py-2"> 7 Days Money-Back Guarantee</p>
          <h1 class="font-semibold">What you will get:</h1>
          <div class="content">
            <ul>
              <li><i class="fa-solid fa-play-circle"></i> <span> 3 hours+ on-demand video content</span></li>
              <li><i class="fa-solid fa-laptop-code"></i> <span>This + all other courses access (Pro) </span></li>
              <li><i class="fa-solid fa-headset"></i> <span>24 &times; 7 membership available </span></li>
              <li><i class="fa-brands fa-codepen"></i> <span>In-browser IDe to practice </span></li>
              <li><i class="fa-solid fa-certificate"></i><span>Certificate of completion </span></li>

            </ul>
            <hr>
            <div class="payment-method">
            <span>  </span>
            </div>
          </div>
        </div>

    </div>
  </div>
</template>

<script setup>
import {defineProps,onMounted,ref} from 'vue'
const props=defineProps(['title','data']);
const slug=ref('')
const setFirstLectureSlug=()=>{
  slug.value=props?.data?.lessons[0]?.slug;
  console.log('slug',slug)
}

onMounted(()=>{
  setFirstLectureSlug()
})
</script>

<style scoped>
.payment-card-wraper {
  background: #ffffff;
  color: #111;
  width: 360px;
}
.course-image {
  width: 100%;
  height: 170px;
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.details{
    padding:10px 15px;
}
button{
    border: none;
    outline:none;
    padding: 5px 10px;
border-radius: 5px;
letter-spacing: 0.3px;
}
.buy{
    display: flex;
    align-items: center;
    gap: 5px;
}

.buy-plan{
      display: flex;
    align-items: center;
    gap: 5px;


}
.dot{
    width: 5px;
    height: 5px;
    background: #c1a9a9;
    border-radius: 50%;
    box-shadow: 0 0 10px #c1a9a9,0 0 20px #c1a9a9;
}
.buy-plan.dot{
    background: indigo;
}


.action-button{
    display: flex;
    flex-direction: column;
    gap: 10px;
}
ul li{
    display: flex;
    gap: 10px;
    margin: 5px 0;
}
ul li span{
    color: gray;
}


</style>