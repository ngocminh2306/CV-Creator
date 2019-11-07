<template>
  <div>
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="template in templates" style="">
        <div v-bind:style="{ 'background-image': 'url(' + require('@/assets/slide.jpg') + ')' }" class="background-bc" >
          <div>
            <span class="subtitle title">Tạo cv nhanh chóng với hàng chục mẫu cv miễn phí.</span>
            <div>
              <b-button class="button-get-now" variant="info" size="lg" href="#/create-cv">Tạo CV ngay</b-button>
            </div>
          </div>
        <!-- <img style="width: 100%;height: auto;visibility: hidden;" src="@/assets/slide.jpg"> -->
        </div>
        <div class="swiper-pagination" slot="pagination"></div>
        
      </swiper-slide>
      <!-- Optional controls -->
    </swiper>
    <b-container class="bv-example-row">
      <b-row class="text-center">
        <b-col>1 of 3</b-col>
        <b-col cols="8">2 of 3 (wider)</b-col>
        <b-col>3 of 3</b-col>
      </b-row>

      <b-row class="text-center">
        <b-col>1 of 3</b-col>
        <b-col cols="5">2 of 3 (wider)</b-col>
        <b-col>3 of 3</b-col>
      </b-row>
    </b-container>
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
.background-bc {
  background-size: contain;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: calc(100vw*700/1348);
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
    color: #fff;
    text-align: center;
}
.button-get-now {
}
.subtitle {
    font-size: 1.5em;
    font-weight: 500;
}
</style>
