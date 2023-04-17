<template>
    <div class="wraper flex">
<div class="quizeWraper">

<Markdown :source="quize.description" />
<p>{{quize.question}}</p>
<div>

</div>
<div class="answer-box">
<div class="options" v-for="answer in quize.answerOptions" :key="answer.text">
<span>{{answer.text}}</span>
</div>
</div>
</div>
    </div>
</template>

<script setup>
import {defineProps} from 'vue'
import Markdown from 'vue3-markdown-it';
const props=defineProps(["quize"])
console.log('props',props.quize)
</script>

<style scoped>
.options{
    box-shadow: 0px 0 10px rgba(0,0,0,0.1);
    padding: 10px 20px;
    margin-bottom: 10px;
background: #fff;
border-radius: 5px;

}
.options span{
    font-weight:600;
    letter-spacing: 0.3px;

}
.answer-box{
    width: 40vw;
}
.currect{
    box-shadow: 0 4px 0 #40bf9c;
        background: #bde8e0;
    border-color: #40BF95;

}

</style>