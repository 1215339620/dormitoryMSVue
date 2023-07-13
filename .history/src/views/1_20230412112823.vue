<template>
  <div>
    <div class="div">div</div>
    <br />
    类型: <input type="text" id="type" /> 内容:
    <input type="text" id="text" /> 字体大小:
    <input type="text" id="font" /> 背景颜色: <input type="text" id="color" />

    <button style="margin-left: 10px" id="add" onclick="add()">增加</button>
  </div>
</template>

<script>

    function add(){
      var newType = document.getElementById("type").value;
      var newText = document.getElementById("text").value;
      var newFont = document.getElementById("font").value;
      var newColor = document.getElementById("color").value;
      var div = document.getElementById("div");
      div.append(newType);
    }
</script>

<style>
</style>