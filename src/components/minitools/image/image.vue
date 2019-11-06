<template>
    <div>
        <b-form-file
            v-model="file"
            :state="Boolean(file)"
            placeholder="Choose a file or drop it here..."
            drop-placeholder="Drop file here..."
            ref="file-input"
            @change="fileChange"
        ></b-form-file>
        <b-button v-on:click="uploadFile()">Upload</b-button>
        <img :src="result" alt="Fluid image" v-if="result"/>
        <div> {{result}}</div>  
    </div>
</template>
<script>
export default {
  name: "image-upload",
  data() {
    return { 
        file: null,
        fileEvent: null,
        result: null
    };
  },
  methods: {
    fileChange(event) {
        this.fileEvent = event;
    },
    uploadFile() {
        var file = this.fileEvent.target.files[0];
        this.getFile(file).then((customJsonFile) => {
            this.$http.post(`/Common/PostFile`,customJsonFile).then(res => {
                this.result = 'http://'+res.data.result;
            })
        })
    },
    getFile(file) {
        var reader = new FileReader();
        return new Promise((resolve, reject) => {
            reader.onerror = () => { reader.abort(); reject(new Error("Error parsing file"));}
            reader.onload = function () {
                let bytes = Array.from(new Uint8Array(this.result));
                //if you want the base64encoded file you would use the below line:
                let base64StringFile = btoa(bytes.map((item) => String.fromCharCode(item)).join(""))
                //Resolve the promise with your custom file structure
                resolve({ 
                    // bytes: bytes,
                    fileBase64: base64StringFile,
                    fileName: file.name, 
                    // fileType: file.type
                })
            }
            reader.readAsArrayBuffer(file)
        })
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .self-center {
    align-self: center;
  }
</style>
