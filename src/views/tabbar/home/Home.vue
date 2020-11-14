<template>
  <div>
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper class="home-swiper" :banners="banners"></home-swiper>
    <recommend :recommends="recommends"></recommend>
    <feature-view></feature-view>
    <tab-conter :title="['流行','新款','精选']" class="tab-conter" @tabclick="tabclick"/>
    <goods-main :goods="showgoods"></goods-main>
    <ul>
      <li>数据</li>
      <li>数据</li>
      <li>数据</li>
      <li>数据</li>
      <li>数据</li>
      <li>数据</li>
      <li>数据</li>
      <li>数据</li>
      <li>数据</li>
      <li>数据</li>
      <li>数据</li>
      <li>数据</li>
      <li>数据</li>
      <li>数据</li>
      <li>数据</li>
      <li>数据</li>
      <li>数据</li>
      <li>数据</li>
      <li>数据</li>
      <li>数据</li>
      <li>数据</li>
      <li>数据</li>

    </ul>
  </div>
</template>

<script>
// Home下面的私有组件
import HomeSwiper from './childscompons/HomeSwiper'
import Recommend from './childscompons/Recommend'
import FeatureView from './childscompons/FeatureView'

// 公共的组件
import NavBar from 'components/common/navbar/NavBar'
import TabConter from 'components/content/tabconter/TabConter'
import GoodsMain from 'components/content/goods/GoodsMain'

// 引入的方法
import {getHomeMultidata,getHomeGoods} from 'network/home.js'


export default {
  name:'Home',
  components:{
    NavBar,
    HomeSwiper,
    Recommend,
    FeatureView,
    TabConter,
    GoodsMain
  },
  data(){
    return{
      // result:null
      banners:[],
      recommends:[],
      // 获取商品数据
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]}
      },
      currenttype:'pop'
    }
  },
  created(){
    // 调用封装的getHomeMultidata函数
    this.getHomeMultidata()
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')


    // 
  },
  methods:{
    /*
      以下是home当中的方法
     */
    tabclick(index){
      // console.log(index);
      switch(index){
        case 0:
          this.currenttype = 'pop'
          break
        case 1:
          this.currenttype = 'new'
          break
        case 2:
          this.currenttype = 'sell'
      }
      
    },
    /*
      以下是网络请求的方法
     */
    // 对getHomeMultidata函数进行深度封装，使他可以调用多次
    getHomeMultidata(){
      getHomeMultidata().then( res => {
      this.banners = res.data.data.banner.list;
      this.recommends = res.data.data.recommend.list;
      // this.result = res
    })
    },
    getHomeGoods(type){
      const page = this.goods[type].page + 1
      getHomeGoods(type,page).then(res => {
        // console.log(res);
        // 把获取到的数据添加到goos当中
        // ...为push的特殊写法，个亿把res当中的数据一个一个提取出来饭后push到数组当中
        this.goods[type].list.push(...res.data.data.list)
        // 还有一种写法
        // for(let item of res.data.data.list){
        //   // console.log(item);
        //   this.goods.[type].list.push(item)
        // }
        this.goods[type].page += 1;
      })
    }
  },
  computed:{
    showgoods(){
      return this.goods[this.currenttype].list
    }
  }
}
</script>

<style scoped>
.home-nav{
  background-color: var(--color-tint);
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
}
.home-swiper{
  margin-top: 44px;
}
.tab-conter{
  position: sticky;
  top: 44px;
  z-index: 9;
}
</style>