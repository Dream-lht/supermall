<template>
  <div class="goodsmain">
    <goods-item v-for="(item,index) in goods" :key="index" :item="item"></goods-item>
  </div>
</template>

<script>
import GoodsItem from './GoodsItem'
export default {
  name:'GoodsMain',
  props:{
    goods:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components:{
    GoodsItem
  }
}
</script>

<style scoped>
.goodsmain{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>