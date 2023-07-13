<template>
  <div class="back">
    <img src="assets/background.jpg" alt="">
    <div id="app">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
img{
  z-index: -1;
  width: 100%;
  
}
</style>