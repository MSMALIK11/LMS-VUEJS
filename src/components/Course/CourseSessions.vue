<template>
<div v-if="currentCourse">
    <div  class="sessions-container">
<div class="player">


<h1 class="mb-2">Dashboard  <i class="fa-solid fa-arrow-right"></i> Course <i class="fa-solid fa-arrow-right"></i> {{router.params.title}} </h1>
<div class="play shadow-xl text-center">
<div v-if="isLoading" class="overlay">
</div>
    <video-player
    :src="params?.link?.url"
    controls
    width="auto"
    :loop="true"
    :volume="0.6"
    class="shadow-xl video"
    />

  <div class="box"></div>
  <div class="stand"></div>
</div>
</div>
  <div class="right-tab">
  <CourseTab :lessons="allLessons" />
  </div>

    </div>
</div>
</template>

<script setup>
import {ref,onMounted,watch,computed} from 'vue';
import {useRoute} from 'vue-router'
import { VideoPlayer } from '@videojs-player/vue'
import 'video.js/dist/video-js.css'
import CourseTab from './ContentTab.vue'
import { fetchSingleCourseDetails } from '../services';
const router=useRoute()
const isLoading=ref(true);
const currentCourse=ref(false);
const currentLesson=ref('');
const allLessons=ref([])
const v_link=ref('')

setTimeout(()=>{
isLoading.value=!isLoading.value},2000)
// process data
const getSingleData=async()=>{
  const res=await fetchSingleCourseDetails(router?.params?.title);

  currentCourse.value=true
  return res?.data.course

}

onMounted(async()=>{
  const data= await getSingleData()
  currentLesson.value=data?.lessons?.filter((less)=>less.slug===router.params.slug)

//   v_link.value=currentLesson.value[0];
allLessons.value=data?.lessons;


});

const params=computed(()=>{
  // console.log('router.params.slug',router.params.slug)
  // console.log(allLessons.value);
    currentLesson.value=allLessons.value?.filter((less)=>less.slug===router.params.slug)
// console.log('video ', v_link.value)
// console.log(currentLesson.value[0]);
  return currentLesson.value[0];

})
// const params=computed(()=>{
//   console.log( router.params.slug);
//   return router.params.slug
// })


</script>

<style  scoped>



.sessions-container{
    width: 100%;
    height: 100vh;
    padding: 20px 100px;
    display: flex;
    gap: 50px;



}
.video{
  border-radius: 10px;
}
.play
{


  width:100%;
  border-radius: 10px;
  padding-top: 10px;
}

.play{
  background: #151414;
  border-bottom: 30px solid #d8d8d8;
  position: relative

}
.play:before{
  content: '';
  width: 70px;
  height: 110px;
  background: #bdbdbd;
  position: absolute;
  left: 50%;
  bottom: -100px;
   transform:perspective(100px) translateX(-50%) rotateX(25deg) skewX(7deg);
  z-index: -1;
  transform-origin: bottom;

}
.play:after{
  content: '';
  width: 140px;
  height: 20px;
  background: #d8d8d8;
  position: absolute;
  left: 39%;
  bottom: -100px;
  transform:perspective(100px) translateX(-50%,50%) rotateX(25deg);
  z-index: -1;
  transform-origin: bottom;

}

.overlay{
  position: absolute;
width: 100%;
height: 100%;
background: #111;
z-index: 9999;
overflow: hidden;
}
.overlay:before{
content:'';
position: absolute;
left: -30px;
top: -15px;
width: 60%;
height: 110%;
background:rgba(255,255,255,0.5);
z-index: 9999;
transform: skew(-5deg);
}

</style>