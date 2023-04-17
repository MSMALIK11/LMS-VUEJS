<template>
    <div class="tab-wraper bg-white">
    <div class="tab px-3 py-4 shadow-lg">
 <div class="tab-action-button">

 <button  v-for="(_,tab) in tabs" :key="tab"   :class="{active:activeTab===tab}" @click="setTab(tab)">{{tab}}</button>


 </div>
 <div class="tab-body mt-3">
 <!-- <Transition name="slide-fade"> -->

 <component :is="tabs[activeTab]" v-bind:data="props.lessons"></component>
<!-- </Transition> -->
 </div>
    </div>

    </div>
</template>

<script setup>
import {ref,defineProps, computed} from 'vue'
import Content from './component/Content.vue'
import Notes from './component/Notes.vue'
import Review from './component/Review.vue';
let allLessons=ref({})
const tabs={
    Content,
    Notes,
    Review
}

const activeTab=ref('Content')
const setTab=(tab)=>{
    activeTab.value=tab
}


const props=defineProps(['lessons'])


</script>

<style  scoped>
.tab{
    width:350px;
    height: auto;
}
.tab-action-button{
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid rgba(213, 179, 179, 0.305);
}

button{

transition: 0.4s ease-in;
   border-bottom: 2px solid transparent;
}
.active{
    color: indigo;
      border-bottom: 2px solid indigo;

}
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s ;
}

.slide-fade-enter-from,
.slide-fade-leave-to {

  opacity: 0;
}

</style>