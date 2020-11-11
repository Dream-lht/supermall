<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:'TabBar'
}
</script>

<style>
  .tab-bar{
    display: flex;
    height: 49px;
    background-color: #f6f6f6;
    position: fixed;
    right: 0;
    left: 0;
    bottom: 0;
    box-shadow: 0 -2px 3px rgba(100,100,100,.3);
  }
</style>