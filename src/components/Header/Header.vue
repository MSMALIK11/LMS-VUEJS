<template >
    <div>
    <!-- <template v-slot:header>
    </template> -->
   <header>
      <div class="circle1"></div>
      <div class="header-wraper">
        <div class="logo">
          <span>Self-Learn</span>
        </div>
      <div class="nav-link">
        <ul class="flex gap-2">
        <li class="bg-green-400 px-3 text-white"><router-link to="/admin">Admin</router-link></li>
        <li><router-link to="/course/all">Course</router-link></li>
        <li><router-link to="/login">Login</router-link></li>
        </ul>
      </div>
      </div>
    </header>


    </div>
</template>

<script setup>

</script>

<style  scoped>
header {
  width: 100%;
  background: #fff;
  z-index: 9999;
  padding: 10px 100px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  height: 50px;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 9999;
  overflow: hidden;
  color: black;
}

.circle1 {
  position: absolute;
  width: 10px;
  height: 40px;
  background: #13b328;

  z-index: -1;
  animation: animate 4s ease-in infinite;
}
.header-wraper {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

</style>