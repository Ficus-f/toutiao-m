<template>
  <div class="layout-container">
      <router-view/>
      <!-- Tabbar -->
      <van-tabbar class="layout-tabbar" route>
        <van-tabbar-item to="/home">
            <template v-slot:icon>
                <i class="toutiao toutiao-shouye"></i>
            </template>
            <span class="text">首页</span>
        </van-tabbar-item>
        <van-tabbar-item to="/qa">
            <template v-slot:icon>
                <i class="toutiao toutiao-wenda"></i>
            </template>
            <span class="text">问答</span>
        </van-tabbar-item>
        <van-tabbar-item to="/video">
            <template v-slot:icon>
                <i class="toutiao toutiao-shipin"></i>
            </template>
            <span class="text">视频</span>
        </van-tabbar-item>
        <van-tabbar-item to="/my">
            <template v-slot:icon>
                <i class="toutiao toutiao-wode"></i>
            </template>
            <span class="text">{{ $store.state.user ? '我的' : '未登录' }}</span>
        </van-tabbar-item>
      </van-tabbar>
      <!-- /Tabbar -->
  </div>
</template>

<script>
export default {
  name: 'LayoutIndex',
  data () {
    return {
      // active: 2
    }
  }
}
</script>

<style lang="less" scoped>
.layout-container {
  .layout-tabbar {
    i.toutiao {
      font-size: 40px;
    }
    span.text {
      font-size: 20px;
    }
  }
}
</style>
