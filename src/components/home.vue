<template>
  <div>
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="template in templates">
          <img style="height:95vh;width:100vw" src="@/assets/slide.jpg">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
      <span class="subtitle title">Tạo cv nhanh chóng với hàng chục mẫu cv miễn phí.</span>
      <b-button class="button-get-now" variant="info" size="lg" href="#/create-cv">Tạo CV ngay</b-button>
    </swiper>
    <!-- <div class="title"> -->
        
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  components: {},
  name: "home",
  data() {
    return {
        templates: [1,2,3,4],
        swiperOption: {
        slidesPerView: 1,
        slidesPerColumn: 1,
        spaceBetween: 0,
      },
      logined: false
    };
  },
  mounted() {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content {
  display: block;
  margin: 5vh auto;
  width: 75%;
}
.title-list-cv {
  display: flex;
}
.title-list-cv label {
  text-align: left;
  flex: auto;
  color: #0ba25e;
  flex: 1;
  font-size: 24px;
  font-weight: 900;
}
@media only screen and (max-width: 768px) {
  .content {
    display: block;
    margin: 5vh auto;
    width: 100%;
  }
  .content-item .item-action button {
    background-color: transparent;
    border: 1px solid gray;
    border-radius: 4px;
    padding: 0;
    line-height: 28px;
    margin: 0;
    cursor: pointer;
  }
}

.title {
    position: absolute;
    right: 15%;
    top: 10vw;
    left: 15%;
    z-index: 10;
    color: #fff;
    text-align: center;
}
.button-get-now {
    position: absolute;
    top: 14vw;
    left: 45%;
    z-index: 10;
}
.subtitle {
    font-size: 5vh;
    font-weight: 500;
}
</style>
