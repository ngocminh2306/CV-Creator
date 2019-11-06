<template>
  <div class="content-my-profile">
    <div class="content">
      <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide v-for="template in templates">
          <b-img src="http://genknews.genkcdn.vn/2019/7/30/photo-1-15644709408241026395635.png" fluid class="image-tamplate" v-on:click="slideClick(template)"></b-img>
          <div style="color:red">Lượt xem: {{template.viewCount}}</div>
        </swiper-slide>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
      <div class="d-flex justify-content-center mb-3" v-if="templates.length === 0"><b-spinner  label="Loading..."></b-spinner></div>
      <b-container>
        <form>
          <div class="title">
            <b-form-input placeholder="Title from 6 to 250 characters" v-model="params.title">
            </b-form-input>
          </div>
          <div v-bind:style="backgroundImage?{ 'background-image': 'url(' + backgroundImage + ')' }:{ 'background-color': 'white' }" class="cv" ref="cv" id="cv">
            <cvtemplate :data="params" :type="type" :key="keyTemplate"></cvtemplate>
          </div>
        </form>
      </b-container>
      <div style="padding: 1vh 0px 10vh 0px;">
        <b-button variant="warning" size="lg" v-on:click="createPDF()">Tạo CV</b-button>
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
      backgroundImage: '',
      keyTemplate: 0,
      type: "default/default-cv",
      params: {
        title: "Title from 6 to 260 characters"
      },
      templates: [],
      swiperOption: {
        slidesPerView: 3,
        slidesPerColumn: 1,
        spaceBetween: 5,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    };
  },
  methods: {
    slideClick(template) {
      this.type = template.path;
      this.backgroundImage = 'http://'+template.preview_img;
      this.params.title = template.title;
      this.keyTemplate++;
    },
    createPDF() {
      let width = this.$refs["cv"].clientWidth;
      let height = this.$refs["cv"].clientHeight;
      
      html2canvas(this.$refs["cv"], { width: width, height: height }).then(
        canvas => {
          let pdf = new jsPDF();

          var hratio = height/width;

          var w = pdf.internal.pageSize.width;    
          var h = w * hratio;

          pdf.addImage(canvas.toDataURL("image/png"), "PNG", 0, 0, w, h);
          pdf.save(this.params.title + ".pdf");
        }
      );
    }
  },
  mounted() {
    this.$http.get(`/CVTemplate/GetTemplates`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    }).then(res => {
      this.templates = res.data.result.items;
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media only screen and (max-width: 768px) {
  .swiper-container {
    margin: 10px 10px !important;
    min-height: 20px !important;
  }
  .image-tamplate {
      height: 100px !important;
      width: calc(100px * 3/3) !important;
  }
}
.swiper-container {
  margin: 40px 40px 20px 40px;
  min-height: 40px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.19);
}
.title {
  text-align: left;
  margin-bottom: 12px;
}
.cv {
  min-height: 100%;
  min-width: 50%;
  background-position: center;
  background-size: cover;
}
.image-tamplate {
  cursor: pointer; 
  height: 150px; 
  width: calc(150px * 3/3);
}

</style>
