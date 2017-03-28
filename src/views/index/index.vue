<template lang="jade">
.cp-index
  p leo
  ul
    li.one
    li.two
    li.three
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
    // })
  }
}
</script>
<style lang="sass">
@import './../../sass/config'
.cp-index
  p
    text-align: center
  ul
    margin: auto
    display: block
    width: r(240)
    height: r(120)
    opacity: 0.2
    li
      display: block
      float: left
      width: r(120)
    .one
      height: r(120)
      background: yellow
    .two
      height: r(60)
      background: cyan
    .three
      height: r(60)
      background: red
</style>
