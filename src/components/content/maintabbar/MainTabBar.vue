<template>
      <tab-bar>
      <tab-bar-item path="/home" Activecolor="blue">
        <img src="~assets/img/TabBar.icon/index.png" alt="" slot="icon">
        <img src="~assets/img/TabBar.icon/index-active.png" alt="" slot="icon-active">
        <div slot="text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/classify" Activecolor="pink">
          <img src="~assets/img/TabBar.icon/classify.png" alt="" slot="icon">
          <img src="~assets/img/TabBar.icon/classify-active.png" alt="" slot="icon-active">
          <div slot="text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/shopcar" Activecolor="red">
        <img src="~assets/img/TabBar.icon/shopCar.png" alt="" slot="icon">
        <img src="~assets/img/TabBar.icon/shopCar-active.png" alt="" slot="icon-active">
        <div slot="text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" Activecolor="skyblue">
        <img src="~assets/img/TabBar.icon/User.png" alt="" slot="icon">
        <img src="~assets/img/TabBar.icon/User-active.png" alt="" slot="icon-active">
        <div slot="text">我的</div>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
import TabBar from '../../common/tabbar/TabBar'
import TabBarItem from '../../common/tabbar/TabBarItem'
export default {
  name:'MainTabBar',
  components:{
    TabBar,
    TabBarItem
  }
}
</script>