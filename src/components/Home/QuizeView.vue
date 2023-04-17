<template>
  <div class="wraper">
    <div class="quize-wraper">
      <div class="quize">
        <div class="quize-lesson-title">
          {{ quizeQuestion.data.name }}
        </div>
      </div>
      <div class="info-box">
        <p class="info">
          Question No.{{ currentQuestion + 1 }} of {{ quizeQuestion.data.quizzesCount }}
        </p>
        <div class="bar">
          <div class="completion" :style="{width:`${barStatus}%`}"></div>
        </div>
        <div></div>
      </div>
    </div>
    <div class="quize-box">
      <!-- single-chouce type  question -->
      <div v-if="quizzes[currentQuestion].questionType === 'singleChoice'">
        <SingleChoiceVue :quize="quizzes[currentQuestion]" />
      </div>
      <div v-if="quizzes[currentQuestion].questionType === 'dragAndDrop'">
        <DragAndDropVue :quize="quizzes[currentQuestion]" />
      </div>

      <div class="action-box">
        <div class="action-button">
          <div class="back">
            <button v-if="currentQuestion > 0" class="btn" @click="handleprevQuestion">Back</button>
          </div>
          <div class="right-action">
            <button class="button-primary" @click="handleNextQuestion">Check</button>
            <button class="button-primary">Continue</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch ,computed} from 'vue'

import quizeQuestion from '../data/lessons.js'
import DragAndDropVue from './QuizzesTypeComponent/DragAndDrop.vue'
import SingleChoiceVue from './QuizzesTypeComponent/SingleChoice.vue'

let quizzes = quizeQuestion.data.quizzes
let currentQuestion = ref(1)
let barStatus=ref(`${currentQuestion.value/quizeQuestion.data.quizzes.length}`)
console.log('currentQuestion', currentQuestion.value)

const handleNextQuestion = (isCurrect) => {
  currentQuestion.value = currentQuestion.value + 1
}
const handleprevQuestion = () => {
  currentQuestion.value = currentQuestion.value - 1
}
watch(currentQuestion,()=>{

   barStatus.value=`${currentQuestion.value/quizeQuestion.data.quizzes.length*100}`

})
console.log('barPercentStatus',barStatus.value)
</script>

<style scoped>
.quize-wraper {
  margin-top: 20px;
}
.quize-box {
  width: 40vw;
  margin: 0 auto;
}
.quize-lesson-title {
  text-align: center;
}
.info {
  display: inline;
  background: indigo;
  padding: 5px 20px;
  border-radius: 10px 100px;
  color: #fff;
}

.action-button {
  display: flex;
  justify-content: space-between;
}

.right-action {
  display: flex;
  gap: 20px;
}
.info-box {
  display: flex;
  justify-content: space-between;

}
.info-box .bar {
  width: 500px;
  background:#fff;
  height: 20px;
  margin-top: 20px;
 border-radius: 20px;
}
.completion{
  background: #40af0c;
  width: 0%;
  height: 100%;
  border-radius: 20px;
}
</style>
