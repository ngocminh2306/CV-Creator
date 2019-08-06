<template>
  <div class="header__main">
  <div class="header__main_content">
    <ul>
      <li>
        <a
          href="#/"
        >
        <img src="src/assets/logo.png">
        </a>
      </li>
      <li>
        <a
          href="#/"
        >
          My CV
        </a>
      </li>
      <li>
        <a
          href="#/my-profile"
        >
          My Profile
        </a>
      </li>
      <li>
        <a
          href="#/create-cv"
        >
          Create CV
        </a>
      </li>
      <li style="float: right;">
      <a>
       <img src="src/assets/logo.png">
          Me
      </a>
      </li>
    </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderMain',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header__main_content{
    height: 64px;
    padding: 0 10%;
}
.header__main{
    background: #2a2b50;
    display: block;
    z-index: 1;
    position: fixed;
    width: 100%;
    top: 0px;
}
h1, h2 {
  font-weight: normal;
}
ul {
  width:100%;
  margin: 0px;
  list-style-type: none;
  padding: 0;
  line-height: 64px;
}
li {
  display: inline-block;
  padding: 0 20px;
}
a {
  text-decoration: none;
  display: block;
  color: white;
}
</style>
