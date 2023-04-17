<template>
    <div class="input-control">
    <label for="">{{label}}</label>
    <input type="text" :value="modelValue" :placeholder="placeholder"
    @input="$emit('emitInput',$event.target.value)"

    >
    <span class="title-limit" v-if="name==='title'">60</span>

    </div>
</template>

<script setup>

defineProps(['modelValue','label','placeholder','name'])
defineEmits(['update:modelValue'])



</script>

<style  scoped>
.input-control{
    display: flex;
    flex-direction: column;
    width: 100%;
    position: relative;
}
input{
    outline: none;
    background: transparent;
    border-bottom: 2px solid rgba(224, 195, 195, 0.775);
    padding: 5px;
}
input:focus{
        border-bottom: 2px solid rgba(25, 44, 192, 0.794);

}

.title-limit{
    background: mediumspringgreen;
    position: absolute;
    right: 0;
    bottom: 0;
    padding: 5px 10px;
    color: #fff;

}

</style>