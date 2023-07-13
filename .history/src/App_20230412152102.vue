<template>
  <div class="back">
    <img src="assets/background.jpg" alt="">
    <div id="app">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
.back {
  background-image: url("assets/background.jpg");
  background-size: cover;
  width: 100%;
  height: 100%;
}
</style>