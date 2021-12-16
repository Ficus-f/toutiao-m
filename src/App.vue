<template>
  <div id="app">
    <router-view/>
    <h1>Ficus头条</h1>
    <div>
      <i  class="toutiao toutiao-wenda"></i>
    </div>
    <van-button type="default">默认按钮</van-button>
    <van-cell-group>
      <van-cell title="单元格" value="内容" />
      <van-cell title="单元格" value="内容" label="描述信息" />
    </van-cell-group>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">

</style>
