<template>
  <div class="card-wraper">
    <div class="card">
      <div class="card-image">
        <img :src="props.course.uiConfigurations.iconUrl" alt="" />
      </div>
      <div class="card-title">
      <router-link :to="{  name: 'quize', params: { title: props.course.name } }">
{{ props.course.name }}
      </router-link>
        <p></p>
      </div>
      <div class="status">
        <p>In Progress</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['course'])
console.log('course', props)
</script>

<style scoped>
.card {
  width: 150px;

  background: #fff;
  display: flex;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  flex-direction: column;
  height: 210px;
}
.card-image {
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  width: 100px;
  height: 100px;
  border-radius: 50%;
}

.card-title {
  height: 50px;
  text-align: center;
}
p {
  margin: 0;
  padding: 0;
}
.status {
  text-align: center;
  color: orange;
}
</style>
