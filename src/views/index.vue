<template lang="jade">
.cp-index
  h1 my-vue-frame-master
</template>
<script>
export default {
  data () {
    return {}
  },
  computed: {
  },
  methods: {
  },
  created () {
  },
  mounted (){
    // App.api.test().then(res => {
    //   console.log(res)
    //   App.log(res)
    //   App.logc(res.data[0].desc)
    // })
  }
}
</script>
<style lang="sass">
@import 'config'
.cp-index
  width: 100%
  height: 100%
  padding-top: r(60)
  background:
    image: url('~assets/test.jpg')
    size: cover
    position: center center
  h1
    margin: auto
    width: r(700)
    height: r(100)
    line-height: r(100)
    font-size: r(60)
    text-align: center
    background:
      image: linear-gradient(to right bottom, #F00,  #F60,  #FF0,  #0C0,  #699,  #06C, #909)
      size: 100% 100%
    color: transparent
    -webkit-background-clip: text
</style>
