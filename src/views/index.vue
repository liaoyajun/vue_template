<template lang="jade">
.cp-index
  h1 leo
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
    App.api.test().then(res => {
      console.log(res)
      App.log(res)
      App.logc(res.data[0].desc)
    })
  }
}
</script>
<style lang="sass">
@import 'config'
.cp-index
  width: 100%
  height: 100%
  background:
    image: url('~assets/test.jpg')
    size: cover
    position: center center
  h1
    width: r(100)
    height: r(40)
    background:
      image: linear-gradient(to right bottom, #F00,  #F60,  #FF0,  #0C0,  #699,  #06C, #909)
      size: 100% 100%
    color: transparent
    // -webkit-background-clip: text
    font-size: r(20)
</style>
