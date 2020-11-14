<template>
  <div class="recommend">
    <div v-for="(item,index) in recommends" :key="index" class="recommenditem">
      <a :href="item.link">
        <img :src="item.image">
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name:'Recommend',
  props:{
    recommends:{
      type:Array,
      default(){
        return []
      }
    }
  },
}
</script>

<style scoped>
  .recommend{
    display: flex;
    padding: 10px 0 30px;
    border-bottom: 10px solid #eeeeee;
  }
  .recommenditem{
    text-align: center;
    flex: 1;
  }
  .recommenditem img{
    width: 80%;
  }
</style>