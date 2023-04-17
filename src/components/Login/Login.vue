<template>
    <div>
<div class="login-wraper">
<div class="login">
<p class="title">
signup
</p>
<div class="input-container">
<InputControlVue placeholder="Email..." v-model="user.email"  />
<InputControlVue placeholder="Password"  v-model="user.password"   />
<div class="security flex gap-2">
<input type="checkbox" name="" id="">
<label for="">i accept terms & conditions</label>
</div>
<div class="action">
<button class="signup-button" @click="handleLogin" >Login</button>
</div>
<div class="action-button">
<p>Signup</p>
</div>
</div>
</div></div>
    </div>
</template>

<script setup>
import { reactive } from "vue";
import InputControlVue from "../shared/InputControl.vue";
import {loginUser} from '../services';
import { useRouter } from "vue-router";
const router=useRouter()
const user=reactive({
    email:'adam@gmail.com',
    password:'12341234'
})
const handleLogin=async()=>{

try {
     const res=await loginUser(user);

    if(res?.data?.success){
        alert(res?.data?.message)
        router.push('/course/all')
    }else{
        alert(res?.message)
    }
} catch (error) {
    console.log(error.message)

}

}



</script>

<style  scoped>
.login-wraper{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
}
.login{
    width: 440px;
height: 400px;
background:#2493df;
display: flex;
flex-direction: column;
align-items: center;
gap: 20px;

position: relative;
overflow: hidden;
border-radius: 10px;
}

.input-container{
    z-index: 99999;
}
.login .title{
    font-weight: bold;
letter-spacing:3px;
text-transform: capitalize;
padding: 15px 0;
color: #fff;

}
.signup-button{
    border:none;
   width: 250px;
color: #fff;
background:#0707c5cb;
border-radius: 5px;
margin: 10px 0;
}
.signup-button:hover{

background:#0707c588;

}
.action-button{
    position: absolute;
    bottom: 0;
background: #fff;
width: 100%;
height:150px;
display: flex;
justify-content: center;
left: 0;
bottom: -20%;
border-top-left-radius: 100%;
border-top-right-radius: 100%;

}
.action-button p{
    display:inline;
    margin-top: 20px;
    cursor:pointer;
    font-weight: bold;
    text-transform: capitalize;
    letter-spacing: 0.3px;
}


</style>