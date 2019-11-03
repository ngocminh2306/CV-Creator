<template>
  <div class="education">
    <form>
      <div class="input-content">
        <div class="label">
          <label>
            School
            <span class="required">*</span>
          </label>
        </div>
        <input required v-model="education.school" placeholder="School">
      </div>
      <div class="input-content range-time">
        <div class="label">
          <label>
            Time
            <span class="required">*</span>
          </label>
        </div>
        <div class="input-row">
          <input class="From" type="date" required v-model="education.fromDate" placeholder="From">
          <span style="margin:auto 0">&nbsp;~&nbsp;</span>
          <input class="To" type="date" required v-model="education.toDate" placeholder="To">
          <i class="des">Leave the 'To' field blank if it is the current time!</i>
        </div>
      </div>
      <div class="input-content">
        <div class="label">
          <label>
            Study process
            <span class="required">*</span>
          </label>
        </div>
        <quill-editor v-model="education.studyProcess" :options="editorOption"></quill-editor>
      </div>
      <div class="add-button">
        <button type="button">New</button>
      </div>
      <div class="update-button">
        <button type="submit" v-on:click="commitCareerGoal()">Update</button>
      </div>
    </form>
    <div class="my-education">
      <div class="my-education-wapper">
        <div class="item">
          <div class="title-item">
          </div>
          <div class="content-item">           
          </div>
        </div>      
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Education",
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
      education: {
        school: "",
        fromDate: "",
        toDate: "",
        studyProcess: ""
      },
      myEducation: [
        {
          school: "Thang Long",
          fromDate: "7-2012",
          toDate: "7-2016",
          studyProcess: "Hoc sinh yeu kem"
        },
        {
           school: "Thang Long",
          fromDate: "7-2012",
          toDate: "7-2016",
          studyProcess: "Hoc sinh yeu kem"
        },
        {
          school: "Thang Long",
          fromDate: "7-2012",
          toDate: "7-2016",
          studyProcess: "Hoc sinh yeu kem"
        }
      ]
    };
  },
  mounted() {
    let userInfo = JSON.parse(localStorage.getItem('user'));
    this.education.school = userInfo.education.graduationPlace;
    this.education.studyProcess = userInfo.education.name;
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.education {
  width: 100%;
}
.education .input-content input {
  width: 100%;
}
.education .input-content .input-row {
  flex-flow: row wrap;
  display: flex;
}
.education .input-content .input-row .From {
  flex: 1;
}
.education .input-content .input-row .To {
  flex: 1;
}
.education .input-content .input-row .des {
  margin: auto 5px;
}
.label {
  text-align: left;
}
.label .required {
  color: red;
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
