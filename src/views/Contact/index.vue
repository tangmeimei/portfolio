<template>
  <div>
    <div class="top">
      <span>get in touch</span>
      <h5>contact</h5>
    </div>
    <div class="contactBox">
      <div class="left">
        <div class="wrapper">
          <font-awesome-icon
            :icon="['fas', 'location-arrow']"
            class="iconColor"
          ></font-awesome-icon>
          <span>{{ "china" }}</span>
        </div>
        <div class="wrapper">
          <font-awesome-icon
            :icon="['fas', 'envelope']"
            class="iconColor"
          ></font-awesome-icon>
          <div>
            <p>{{ "tangmeizhi1@gmail.com" }}</p>
            <p class="smallTitle">
              {{
                "interested in my work? leave a message or contact me for further info"
              }}
            </p>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="subtitle">How can I Help You</div>
        <transition name="fade">
          <div class="errorMessage" v-if="errorMessage">
            <font-awesome-icon :icon="['fas', 'marker']"></font-awesome-icon
            >{{ errorMessage }}
          </div>
         </transition>
        <form>
          <div style="width: 50%">
            <input
              type="text"
              placeholder="full name"
              name="fullName"
              v-model="form.fullName"
            />
            <input
              type="text"
              placeholder="email address"
              name="email"
              v-model="form.email"
            />
            <input
              type="text"
              placeholder="Subject"
              name="subject"
              v-model="form.subject"
            />
          </div>

          <textarea
            placeholder="message"
            name="message"
            v-model="form.message"
          />
        </form>
        <button class="btn" type="submit" @click="sendMessage">
          send message
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      form: {
        fullName: "",
        email: "",
        subject: "",
        message: "",
      },
      errorMessage: "",
      rule: {
        fullName: "请填写姓名",
        email: "请填写邮箱地址",
        subject: "请填写主题",
        message: "请填写内容",
      },
    };
  },
  methods: {
    async sendMessage() {
      this.errorMessage = "";
      let flag = true;
      Object.keys(this.form).some((key, index) => {
        if (this.form[key] == "") {
          this.errorMessage = this.rule[key];
          flag = false;
          return true;
        }
        if(key == 'email' ) {
            const  t  = /^[A-Za-zd0-9]+([-_.][A-Za-zd]+)*@([A-Za-zd]+[-.])+[A-Za-zd]{2,5}$/;
            flag =t.test(this.form[key])
            if(!flag) {
              this.errorMessage = '请填写正确的邮箱格式'
               return true;
            }
         }
      });
      setTimeout(() => {
        this.errorMessage = "";
      }, 1000);
      if (flag) {
        const res = await axios({
          method: "post",
          url: "/api/email",
          data: this.form,
        });
       if(res.data.iRet == 1) {
         alert('我已收到您的邮件，我会尽快回复您的')
         this.form = {}
       }
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>