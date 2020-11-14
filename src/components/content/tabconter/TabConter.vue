<template>
  <div class="tab-conter">
    <div
      class="tab-conter-item" 
      v-for="(item,index) in title" :key="index"
      :class="{active: index === currentIndex}"
      @click="isActive(index)">
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name:"TabConter",
  props:{
    title:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return{
      currentIndex: 0
    }
  },
  methods:{
    isActive(index){
      this.currentIndex = index
      // 子组件传递数据到父组件
      this.$emit('tabclick',index)
    }
  }
}
</script>

<style scoped>
  .tab-conter{
    display: flex;
    height: 44px;
    line-height: 44px;
    /* padding: 10px 0 0 0; */
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: #fff;
  }
  .tab-conter-item{
    text-align: center;
    flex: 1;
  }
  .active{
    color:pink;
  }
  .active span{
    padding: 3px 0;
    border-bottom: 4px solid pink;
  }
</style>