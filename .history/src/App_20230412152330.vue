<template>
  <div class="back">
    <img src="../public/photo/" alt="">
    <div id="app">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
img{
  z-index: -1;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
}
</style>