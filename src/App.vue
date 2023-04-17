<script setup>
import { RouterView } from 'vue-router';
import { AbilityBuilder } from '@casl/ability'
import HeaderVue from './components/Header/Header.vue';

const {can,rules}=new AbilityBuilder();
   can('workspacePermissions', 'viewdashboardfolder')
console.log('can',can)

</script>

<template>
<div class="main">

  <RouterView />
</div>


</template>

<style >
body{
  margin: 0;
  padding: 0;
 background: #eee;
}
:root{
    --primary:#4ade80;
    --primary-alt:#22c55e;
    --grey:#64748b;
    --dark:#1e293b;
    --sidebar-width:300px;
    --light:#f1f5f9
}
.wraper{
 padding: 15px 100px;
}
.bg-success{
  background: #22c55e;
}
</style>
