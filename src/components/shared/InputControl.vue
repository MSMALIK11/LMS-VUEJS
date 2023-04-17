<template>
    <div>
    <input type="text" v-model="value"  :placeholder="props.placeholder">

    </div>
</template>

<script setup>
import {defineProps,computed} from 'vue';
const props=defineProps(["placeholder",'value',"modelValue"])
const emit = defineEmits(['update:modelValue'])

const value = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})
</script>

<style  scoped>
input
{
    background: transparent;
    margin-bottom: 20px;
    padding: 5px 10px;
    outline: none;
    border-bottom: 3px solid rgb(201, 195, 195);
transition: 0.4s;

}

input:focus{
      border-bottom: 3px solid rgb(16, 192, 16);

}
::placeholder{
    color: #fff;
}
</style>