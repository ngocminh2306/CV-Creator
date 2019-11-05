<template>
  <div>
      winter
  </div>
</template>
<script>
export default {
  name: 'winter-cv',
  props: [],
  data () {
    return {
      editorOption: {
        // some quill options
        theme: 'bubble',
        placeholder: 'Name',
        modules: {
          toolbar: [[], []]
        }
      },
      params: {
        title: 'Title from 6 to 260 characters',
        introduction: {
          name: 'MINH'
        }
      }
    }
  },
  computed: {},
  mounted () {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
