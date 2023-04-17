<template>
  <div>
    <div class="">
      <h1 class="text-center font-semi-bold">All Lectures ({{props.data?.length}})</h1>
      <hr />
      <div class="lec mt-2">
        <ul>
          <li v-for="lesson in props.data" :key="lesson.title">
            <i class="fa-solid fa-circle-play text-green-400"></i>
<router-link :to="`/course/${router.params.title}/${lesson.slug}`">
            <span>{{ lesson.title }}</span>
</router-link>
            <hr />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import {defineProps} from 'vue';
import {useRoute} from 'vue-router'

const props=defineProps(['data'])
const router=useRoute()
console.log('router',router.params.slug)
</script>

<style  scoped>
ul li {
  display: flex;

  gap: 10px;
  align-items: center;
  margin: 5px 0;
  text-transform: capitalize;
  font-family: jost;
  font-size: 16px;
  letter-spacing: 0.2px;
  transition: all 0.3s ease-in;
}
ul li i {
  color: red;
}
ul li span{
  cursor: pointer;
}


ul li:active{
  transform: scale(0.9);

}
</style>