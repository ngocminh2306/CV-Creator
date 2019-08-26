<template>
  <div class="content-my-profile">
    <div class="content">
      <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide>
          <img style="cursor: pointer;"  
            v-on:click="slideClick(1)"
            src="http://genknews.genkcdn.vn/2019/7/30/photo-1-15644709408241026395635.png"
            height="120px"
            width="120px"
          >
          <span>Spring cv</span>
        </swiper-slide>
        <swiper-slide>
          <img style="cursor: pointer;"  
            v-on:click="slideClick(2)"
            src="http://genknews.genkcdn.vn/2019/7/30/photo-1-15644709408241026395635.png"
            height="120px"
            width="120px"
          >
          <span>default cv</span>
        </swiper-slide>
        <swiper-slide>
          <img style="cursor: pointer;"  
            src="http://genknews.genkcdn.vn/2019/7/30/photo-1-15644709408241026395635.png"
            height="120px"
            width="120px"
          >
          <span>default cv</span>
        </swiper-slide>
        <swiper-slide>
          <img style="cursor: pointer;"  
            src="http://genknews.genkcdn.vn/2019/7/30/photo-1-15644709408241026395635.png"
            height="120px"
            width="120px"
          >
           <span>default cv</span>
        </swiper-slide>
        <swiper-slide>
          <img style="cursor: pointer;"  
            src="http://genknews.genkcdn.vn/2019/7/30/photo-1-15644709408241026395635.png"
            height="120px"
            width="120px"
          >
           <span>default cv</span>
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
      <form class="create-cvform">
        <div class="title">
          <label>Time</label>
          <input placeholder="Title from 6 to 250 characters" v-model="params.title">
        </div>
        <div ref="cv" id="cv">
          <cvtemplate :data="params" :type="type" :key="keyTemplate"></cvtemplate>
        </div>
      </form>
      <div style="padding: 44px">
        <button class="create-cv-btn" v-on:click="createPDF()">Tạo CV</button>
      </div>
    </div>
  </div>
</template>

<script>
import cvtemplate from "@/components/templates/cvtemplate";
import html2canvas from "html2canvas";
export default {
  components: { cvtemplate },
  name: "createCV",
  data() {
    return {
      keyTemplate: 0,
      type: "default/default-cv",
      params: {
        title: "Title from 6 to 260 characters",
        introduction: {
          name: "MINH"
        }
      },
      swiperOption: {
        slidesPerView: 6,
        slidesPerColumn: 1,
        spaceBetween: 20,
        pagination: {
          type: "progressbar",
          el: ".swiper-pagination",
          clickable: true
        }
      }
    };
  },
  methods: {
    slideClick(i) {
      if (i == 1) {
        this.type = "spring/spring-cv";
      } else {
        this.type = "default/default-cv";
      }
      this.keyTemplate++;
    },
    createPDF() {
      html2canvas(this.$refs["cv"], { width: 800, height: 1200 }).then(
        canvas => {
          let pdf = new jsPDF("p", "mm", "a4");
          pdf.addImage(canvas.toDataURL("image/png"), "PNG", 0, 0, 211, 298);
          pdf.save(this.params.title + ".pdf");
        }
      );
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content-my-profile {
  flex: 3 auto;
  display: block;
}
.content-my-profile .content {
  padding: 60px;
}
.swiper-container {
  max-width: 60%;
  margin: 44px auto;
}
.title {
  text-align: left;
  margin-bottom: 12px;
}
.create-cvform {
  margin: 44px auto;
  width: 80%;
  padding: 44px;
}
.create-cv-btn {
  display: inline-block;
  margin-bottom: 0;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  background-image: none;
  border: 1px solid transparent;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  border-radius: 4px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
