<template>
    <div class="admin-wraper form-wraper">

<div class="add-course">
{{title}}
<h1>Add Course </h1>
<InputControlVue name="title" :modelValue="title" placeholder="Enter Course Title" @emitInput="handleChage()"  label="Course Title*" />
<input type="text" class="slug shadow-md" placeholder="slug">
<textarea cols="4" rows="5" placeholder="Enter Course Description" class="shadow-sm" />
<div class="add-cat">

<select name="" id=""  class="shadow-lg px-3 py-3 rounded-sm">
<option>Choose Category</option>
<option>Web Developemnt</option>
<option>Software Developemnt</option>
<option>Android Developemnt</option>
</select>

</div>
<div class="upload px-3 py-4">
<div class="action-btn ">
<label for="fileInput">Video Upload</label>

<span class="text-gray-400 text-sm text-center">File Format: .mp4</span>
</div>


</div>
<input type="file" id="fileInput"  :style="{display:'none'}" onChange="handleVideoChange">

<button class="bg-green-400 text-white py-2 shadow-lg hover:bg-green-500">Create </button>
</div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import InputControlVue from "../InputControl.vue";
const title=ref('');
const handleChage=(val,e)=>{
console.log('event',e)
console.log('val',val)
title.value=val


}
const handleVideoChange=(e)=>{
    console.log('image cjahe ',e.target.files)
}
const handleUpload=()=>{
    console.log('upload')
}
</script>

<style  scoped>
.add-course{

    display: flex;
    flex-direction: column;
    gap: 20px 0px;
}

.form-wraper{
    background: #fff;
    margin: 10px 20px;
    width: 50vw;
}
.slug{
padding: 5px;

}
textarea{
    border: 1px solid #e4d6d6;
    padding: 5px;
    outline: none;
}

.add-cat{
    display: flex;
    flex-direction: column;

}
select{
    outline: none;
}
option{
    background:#ffff;
    padding: 10px;
}
.upload{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 200px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
}
.upload label{
    border: 1px solid red;
    padding: 10px 20px;

}
.action-btn{
    display:flex;
    flex-direction: column;
}
</style>

