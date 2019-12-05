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
  name: "education",
  props: ['data'],
  data() {
    return {
        selectedFile: null,
        defaultData: this.data?this.data.map(x=>{
            return `<h4>${x.name}</h4>
                <ul>
                    <li>
                        ${x.graduationPlace}
                    </li>
                    <li>
                        ${x.rankings}
                    </li>
            </ul>
        `
        }):[''],
        editor: InlineEditor,
        editorData: [this.data[0]?`<h4>${this.data[0].name}</h4>
                <ul>
                    <li>
                        ${this.data[0].graduationPlace}
                    </li>
                    <li>
                        ${this.data[0].rankings}
                    </li>
            </ul>
        `:['']
        ],
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
