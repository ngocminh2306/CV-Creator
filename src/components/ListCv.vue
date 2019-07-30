<template>
  <div class="content-dashboard">
    <h1>{{ msg }}</h1>
    <h2>List cv</h2>
  </div>
</template>

<script>

export default {
  components: {
  },
  name: 'ListCv',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content-dashboard{
  
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
