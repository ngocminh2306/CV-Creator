<template>
   <div>
        <div style="display: flex" class="block">
            <h2 style="text-align: left; flex: 1">WORK EXPERIENCE</h2>
            <b-button class="add-button" @click="addElement()">Thêm</b-button>
        </div>
        <div v-for="(item, index) in editorData" :key="index">
            <ckeditor :editor="editor" v-model="editorData[index].data" :config="editorConfig">
            </ckeditor>
        </div>
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
        editor: InlineEditor,
        editorData: [{
            data: `<h4>Chăm sóc khách hàng</h4>
                <ul>
                    <li>Tên công ty: Công ty TNHH A</li>
                    <li>Thời gian bắt đầu: 20/5/2010</li>
                    <li>Thời gian kết thúc: 10/12/2018</li>
                    <li>Địa điểm làm việc: Hà Nội</li>
                    <li>
                        Nội dung công việc:
                        <ul>
                            <li>Chăm sóc khách hàng ...</li>
                            <li>Tìm kiếm khách hàng ...</li>
                        </ul>
                    </li>
            </ul>
            `
        }],
      editorConfig: {
          // The configuration of the editor.
      }
    };
  },
  methods: {
      addElement() {
          this.editorData.unshift({data: `Nhập thông tin`})
          console.log(this.editorData)
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .ck.ck-content:hover {
        background: #cdebf650;
    }
    .block .add-button {
        display: none;
    }
    .block:hover .add-button{
        display: inline-block;
    }
</style>
