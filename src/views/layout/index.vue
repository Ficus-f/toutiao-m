<template>
  <div class="layout-container">
      <router-view/>
      <!-- Tabbar -->
      <van-tabbar v-model="active">
        <van-tabbar-item>
            <template v-slot:icon>
                <i class="toutiao toutiao-shouye"></i>
            </template>
            <span class="text">首页</span>
        </van-tabbar-item>
        <van-tabbar-item>
            <template v-slot:icon>
                <i class="toutiao toutiao-wenda"></i>
            </template>
            <span class="text">问答</span>
        </van-tabbar-item>
        <van-tabbar-item>
            <template v-slot:icon>
                <i class="toutiao toutiao-shipin"></i>
            </template>
            <span class="text">视频</span>
        </van-tabbar-item>
        <van-tabbar-item>
            <template v-slot:icon>
                <i class="toutiao toutiao-wode"></i>
            </template>
            <span class="text">我的</span>
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
      active: 0
    }
  }
}
</script>

<style lang="less" scoped>
.layout-container {
  i.toutiao {
      font-size: 40px;
  }
  .text {
      font-size: 15px;
  }
}
</style>
