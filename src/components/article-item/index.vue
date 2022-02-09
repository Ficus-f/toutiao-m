<template>
  <van-cell
    class="article-item"
  >
    <template #title class="title">
      {{ article.title }}
    </template>
    <template #label>
      <div v-if="article.cover.type===3" class="cover-wrap">
        <div
          class="cover-item"
          v-for="(img, index) in article.cover.images"
          :key="index"
        >
          <van-image
            :src="img"
            width="100"
            height="100"
          />
        </div>
      </div>
      <div>
        <span>{{article.aut_name}}</span>
        <span>{{article.comm_count}}</span>
        <span>{{article.pubdate}}</span>
      </div>
    </template>
    <!-- 右插槽 -->
    <template #default>
      <van-image
        v-if="article.cover.type===1"
        width="100"
        height="100"
        :src="article.cover.images[0]"
      />
    </template>
  </van-cell>
</template>

<script>
export default {
  name: 'ArticleItem',
  components: {},
  props: {
    article: {
      type: Object,
      require: true
    }
  },
  data () {
    return {}
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {}
}
</script>

<style lang="less" scoped>
.article-item {
  .title {
    font-size: 32px;
    color: #3a3a3a,

  }

  .van-cell__value {
    flex: unset;
    width: 232px;
    height: 146px;
  }

}
</style>
