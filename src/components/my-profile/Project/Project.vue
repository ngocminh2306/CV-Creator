<template>
  <div class="project">
   <form>
      <div class="input-content">
        <div class="label">
          <label>
            Name
            <span class="required">*</span>
          </label>
        </div>
        <input required v-model="project.name" placeholder="Name">
      </div>
      <div class="input-content range-time">
        <div class="label">
          <label>
            Time
            <span class="required">*</span>
          </label>
        </div>
        <div class="input-row">
          <input class="From" type="date" required v-model="project.fromDate" placeholder="From">
          <span style="margin:auto 0">&nbsp;~&nbsp;</span>
          <input class="To" type="date" required v-model="project.toDate" placeholder="To">
          <i class="des">Leave the 'To' field blank if it is the current time!</i>
        </div>
      </div>
         <div class="input-content">
        <div class="label">
          <label>
            Link
            <span class="required">*</span>
          </label>
        </div>
        <input required v-model="project.link" placeholder="Link">
      </div>
      <div class="input-content">
        <div class="label">
          <label>
            Description
            <span class="required">*</span>
          </label>
        </div>
        <quill-editor v-model="project.description" :options="editorOption"></quill-editor>
      </div>
      <div class="add-button">
        <button type="button">New</button>
      </div>
      <div class="update-button">
        <button type="submit" v-on:click="commitCareerGoal()">Update</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Project",
  data() {
    return {
      editorOption: {
        // some quill options
        placeholder: "Study process",
        modules: {
          toolbar: [
            ["bold", "italic", "underline", "strike"],
            [{ list: "ordered" }, { list: "bullet" }]
          ]
        }
      },
      project: {
        name: "",
        fromDate: "",
        toDate: "",
        studyProcess: ""
      }
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.project {
  width: 100%;
}
.project .input-content input {
  width: 100%;
}
.label {
  text-align: left;
}
.update-button {
  display: flex;
}
.update-button button {
  z-index: 100;
  width: 80px;
  height: 30px;
  border-radius: 12px;
  border: 1px solid #5488c7;
  background-color: #5488c7;
  color: #fff;
  font-size: 15px;
  cursor: pointer;
}
.add-button {
  display: flex;
}
.add-button button {
  z-index: 100;
  width: 80px;
  height: 30px;
  border-radius: 12px;
  border: 1px solid #069c06;
  background-color: #069c06;
  color: #fff;
  font-size: 15px;
  cursor: pointer;
}
</style>
