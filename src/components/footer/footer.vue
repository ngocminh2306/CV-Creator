<template>
  <div class="footer__main">
    <!-- <div class="footer__main_content"> -->
      <section>
        <ul>
          <li>Giới thiệu</li> 
          <li>Company</li> 
          <li>Địa chỉ</li> 
          <li>Liên hệ</li>
        </ul> 
        <ul>
          <li>Twitter</li>
          <li>Facebook</li>
          <li>Instagram</li>
        </ul>
        <ul>
          <h4>Newsletter:</h4> 
          <input/>
        </ul>
      </section>
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  name: "FooterMain",
  data() {
    return {
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer__main_content {
}
.footer__main {
  color: white;
  background-color: #2a2b50;
  height: 200px;
  max-height: 200px;
  display: flex;
}
ul {
  list-style: none;
  padding: 0;
}
input {
  width: 100%;
  box-sizing: border-box;
}
section {
    align-items: center;
    text-align: left;
    width: 80%;
    margin-left: 10%;
    display: grid;
    grid-template-columns: repeat(3,1fr);
}
</style>
