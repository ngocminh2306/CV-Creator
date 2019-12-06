<template>
   <div>
        <b-row>
            <b-col class="col-content" cols="6"  v-for="(item, index) in editorData" :key="index">
                <b-button class="remove-button" @click="removeElement(index)" variant="danger">Remove</b-button>
                <ckeditor :editor="editor" v-model="editorData[index]" :config="editorConfig"></ckeditor>
            </b-col>
        </b-row>
    </div>
</template>
<script>
import InlineEditor from '@ckeditor/ckeditor5-build-inline';

export default {
  name: "expericence",
  props: ['data'],
  data() {
    return {
        selectedFile: null,
        defaultData: this.data?this.data.map(x=>{
            return `<h4>Chăm sóc khách hàng</h4>
                <ul>
                    <li>Tên công ty: ${x.office}</li>
                    <li>Thời gian bắt đầu: ${x.from}</li>
                    <li>Thời gian kết thúc: ${x.to}</li>
                    <li>Địa điểm làm việc: ${x.work_location_info}</li>
                    <li>
                        Nội dung công việc:
                        <ul>
                            <li>Chăm sóc khách hàng ...</li>
                            <li>Tìm kiếm khách hàng ...</li>
                        </ul>
                    </li>
            </ul>
        `
        }):'',
        editor: InlineEditor,
        editorData: this.data?[this.data[0]?`<h4>Chăm sóc khách hàng</h4>
                <ul>
                    <li>Tên công ty: ${this.data[0].company}</li>
                    <li>Thời gian bắt đầu: ${this.data[0].from}</li>
                    <li>Thời gian kết thúc: ${this.data[0].to}</li>
                    <li>Địa điểm làm việc: ${this.data[0].position}</li>
                    <li>
                        Nội dung công việc:
                        <ul>
                            <li>Chăm sóc khách hàng ...</li>
                            <li>Tìm kiếm khách hàng ...</li>
                        </ul>
                    </li>
            </ul>
        `:'']:[''],
      editorConfig: {
          // The configuration of the editor.
      }
    };
  },
  methods: {
      removeElement(index) {
          this.editorData.splice(index, 1)
      },
      addElement() {
          this.editorData.unshift(this.defaultData?this.defaultData[0]:'')
      }
  },
  mounted() {
      console.log(this.data)
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .ck.ck-content:hover {
        background: #cdebf650;
    }
    .remove-button {
        position: absolute;
        top: 5px;
        right: 20px;
    }
    .col-content .remove-button {
        display: none;
    }
    .col-content:hover .remove-button {
        display: inline-block;
    }
</style>
