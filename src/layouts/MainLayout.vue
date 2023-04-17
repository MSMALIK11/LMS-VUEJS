<template>
  <div class="container-wraper">
<header>
<slot name="header"></slot>
</header>
    <main>
      <slot></slot>
    </main>
    <!-- <footer class="flex">
      <p class="">footer</p>
    </footer> -->
  </div>
</template>

<script setup>

</script>

<style scoped>

@keyframes animate {
  0% {
    width: 10px;
  }
  50% {
    width: 80px;
  }
  0% {
    width: 10px;
  }
}

.logo span {
  font-weight: bold;

  letter-spacing: 0.2px;
  background: -webkit-linear-gradient(#13b328, rgba(8, 12, 226, 0.699));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

footer {
  position: absolute;
  bottom: 0;
  background: indigo;
  width: 100%;
  height: 30px;
  color: #fff;
}

.nav-link ul li{
  font-weight: bold;
  letter-spacing: 0.3px;

}
</style>
