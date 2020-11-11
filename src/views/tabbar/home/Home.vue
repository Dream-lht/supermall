<template>
  <div>
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend :recommends="recommends"></recommend>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import HomeSwiper from './childscompons/HomeSwiper'
import Recommend from './childscompons/Recommend'
import {getHomeMultidata} from 'network/home.js'

export default {
  name:'Home',
  components:{
    NavBar,
    HomeSwiper,
    Recommend
  },
  data(){
    return{
      // result:null
      banners:[],
      recommends:[]
    }
  },
  created(){
    getHomeMultidata().then( res => {
      this.banners = res.data.data.banner.list;
      this.recommends = res.data.data.recommend.list;
      // this.result = res
    })
  }
}
</script>

<style scoped>
.home-nav{
  background-color: var(--color-tint);
  color: white;
}
</style>