<template lang="jade">
.cp-index
  p leo
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
    })
  }
}
</script>
<style lang="sass">
.cp-index
  width: 100%
  height: 100%
  background:
    image: url('~assets/test.jpg')
    size: cover
    position: center center
</style>
