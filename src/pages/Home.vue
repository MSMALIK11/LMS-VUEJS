<template>
  <div>
    <MainLayout>

      <template v-slot:header>
            <Header />
       </template>
      <template>
            <HeroSectionVue />

       </template>

    </MainLayout>
  </div>
</template>
<script setup>
import HeroSectionVue from "../components/Home/HeroSection.vue";
import Header from '../components/Header/Header.vue'
import MainLayout from '../layouts//MainLayout.vue';

</script>