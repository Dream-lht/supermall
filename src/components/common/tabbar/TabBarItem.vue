<template>
  <div class="tab-bar-item" @click="Active">
    <div v-if="!isActive">
      <slot name="icon"></slot>
    </div>
    <div v-else>
      <slot name="icon-active"></slot>
    </div>
    <div :style="ActiveColor">
      <slot name="text"></slot>
    </div>
    
  </div>
</template>

<script>
export default {
  props:{
    path:String,
    Activecolor:{
      title:String,
      default:'blue'
    }
  },
  name:'TabBarItem',
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path) !== -1
    },
    ActiveColor(){
      return this.isActive ? {color:this.Activecolor}: {}
    }
  },
  methods:{
    Active(){
      this.$router.replace(this.path)
      this.isActive = !this.isActive
    }
  }
}
</script>
<style>
  .tab-bar-item{
    text-align: center;
    flex: 1;
  }
  .tab-bar-item img{
    widows: 24px;
    height: 24px;
    vertical-align: middle;
    margin-bottom: 2px;
    margin-top: 3px;
  }
</style>