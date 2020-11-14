<template>
  <div class="goodsitem">
    <img :src="item.showLarge.img">
    <div class="text">
      <p class="title">{{ item.title}}</p>
      <span class="price">{{ item.price}}</span>
      <span class="star"> {{ item.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name:'GoodsItem',
  props:{
    item:{
      type:Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style scoped>
  .goodsitem{
    width: 48%;
  }
  .goodsitem img{
    width: 100%;
    /* padding: 10px; */
    border-radius: 15px;
  }

  .text{
    width: 100%;
    text-align: center;

  }
  .title{
    width:100%;
    word-break:keep-all;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis; 
  }
  .price,.star{
    color: pink;
  }
</style>