<template>
  <div class="content-my-profile">
    <div class="content">
      <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide v-for="(template,index) in templates" v-bind:key="index">
          <b-img
            :src="template.preview_img"
            fluid
            class="image-tamplate"
            v-on:click="slideClick(template)"
          ></b-img>
          <div style="color:red">Lượt xem: {{template.viewCount}}</div>
        </swiper-slide>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
      <div class="d-flex justify-content-center mb-3" v-if="templates.length === 0">
        <b-spinner label="Loading..."></b-spinner>
      </div>
      <b-container>
        <form>
          <div class="title">
            <b-form-input placeholder="Title from 6 to 250 characters" v-model="params.title"></b-form-input>
          </div>
          <div class="cv" ref="cv" id="cv">
            <cvtemplate style="background: white" :data="getUser" :type="type" :key="keyTemplate"></cvtemplate>
          </div>
        </form>
      </b-container>
      <div style="padding: 5vh 0px 10vh 0px;">
        <b-button style="width: 15%" variant="warning" size="lg" v-on:click="createPDF()">Tạo CV</b-button>
      </div>
    </div>
  </div>
</template>

<script>
import cvtemplate from "@/components/templates/cvtemplate";
import html2canvas from "html2canvas";
import {Vuex,mapState, mapGetters}  from 'vuex'
export default {
  components: { cvtemplate },
  name: "createCV",
  data() {
    return {
      backgroundImage: "",
      keyTemplate: 0,
      type: "default/default-cv",
      data: mapGetters(['getUser']),
      params: {
        title: "Title from 6 to 260 characters",
        editorOption: {
          placeholder: "Nhập thông tin",
          modules: {
            toolbar: [[], []]
          },
          theme: "bubble"
        },
        introduction: {
          fullName: "Nguyễn Văn A",
          birthday: "23-12-1990",
          phonenumber: "Số điện thoại",
          email: "email@gmail.com",
          address: "Việt Nam"
        },
        education: [{
          graduationPlace: "Đại học của bạn",
          name: "Đại học",
          rankings: "10/10"
        }],
        experience: [{
          company:"Công ty TNHH A",
          from:"10/10/2010",
          to: "10/10/2018",
          position:"Ha Noi",
          desscription:"Chi tiết"
        }]
      },
      templates: [],
      swiperOption: {
        slidesPerView: 3,
        slidesPerColumn: 1,
        spaceBetween: 5,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  },
  methods: {
    slideClick(template) {
      this.type = template.path;
      this.backgroundImage = "http://" + template.preview_img;
      this.params.title = template.title;
      this.keyTemplate++;
    },
    createPDF() {
      let width = this.$refs["cv"].clientWidth;
      let height = this.$refs["cv"].clientHeight;
      html2canvas(this.$refs["cv"], { width: width, height: height }).then(
        canvas => {
          let pdf = new jsPDF('', 'mm', [width, height]);

          var w = pdf.internal.pageSize.width;
          var h = pdf.internal.pageSize.height;
          if(height/width *w > h) {
            h = height/width *w;
          }
          pdf.addImage(canvas.toDataURL("image/png",0.5), "PNG", 0, 0,w,h,"a","FAST");
          pdf.setProperties({
            title: this.params.title
          });
          // window.open(); 
          // pdf.save(this.params.title + ".pdf");
          pdf.output('dataurlnewwindow')
          // console.log(pdf.output('datauristring'))
          // let pdfWindow = window.open(pdf.output('datauristring'), "MsgWindow")
          // pdfWindow.document.write("<iframe width='100%' height='100%' src='" +  + "'></iframe>")
        }
      );
    }
  },
  mounted() {
    this.$http
      .get(`/CVTemplate/GetTemplates`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token")
        }
      })
      .then(res => {
        this.templates = res.data.result.items;
      });
  },
  computed: {
    ...mapGetters(['getUser'])
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
    width: calc(100px * 3 / 4) !important;
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
  height: 200px;
  width: calc(200px * 3 / 4);
}
</style>
