<template>
  <div class="about">
    <div class="box">
      <div class="imgBox">
        <img
          src="https://pic1.zhimg.com/v2-e0da528aeffd563ebf3fa641a1ff0c68_b.jpg"
          alt=""
        />
      </div>
      <div class="description">
        <h5 class="job">frontend-developer</h5>
        <h1 class="name">tangmeimei</h1>
        <p class="selfIntroduce">{{ selfIntroduce }}</p>
        <button class="btn" @click="contact">contact</button>
      </div>
    </div>
    <div class="bottomBox">
      <div class="subtitle">what i do</div>
      <div class="content">
        <div
          class="card"
          v-for="(item, index) in worksExperiences"
          :key="index"
        >
          <font-awesome-icon
            :icon="['fas', item.icon]"
            class="iconColor"
          ></font-awesome-icon>
          <div class="jobDesctiption">
            <h5 class="title">{{ item.jobTitle }}</h5>
            <p>
              {{ item.jobDesctiption }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="bottomBox">
      <div class="subtitle">what i offer</div>
      <div class="content cardBox">
        <div class="card2" v-for="(job, index) in expectJobs" :key="index">
          <font-awesome-icon
            :icon="['fas', job.icon]"
            class="icon"
          ></font-awesome-icon>
          <div class="label">{{ job.label }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selfIntroduce:
        " 欢迎来到我的网站，我是一名前端开发工程师。热爱前端。 欢迎来到我的网站，我是一名前端开发工程师。热爱前端。 欢迎来到我的网站，我是一名前端开发工程师。热爱前端。",
      worksExperiences: [
        {
          jobTitle: "java后端开发",
          icon: "pen",
          jobDesctiption:
            "了解业务需求并根据业务需求写后端接口，了解业务需求并根据业务需求写后端接口了解业务需求并根据业务需求写后端接口",
        },
        {
          jobTitle: "前端开发",
          icon: "desktop",
          jobDesctiption:
            "了解业务需求并根据业务需求写后端接口，了解业务需求并根据业务需求写后端接口了解业务需求并根据业务需求写后端接口",
        },
        {
          jobTitle: "数据仓库",
          icon: "house-damage",
          jobDesctiption:
            "了解业务需求并根据业务需求写后端接口，了解业务需求并根据业务需求写后端接口了解业务需求并根据业务需求写后端接口",
        },
        {
          jobTitle: "功能测试",
          icon: "list",
          jobDesctiption:
            "了解业务需求并根据业务需求写后端接口，了解业务需求并根据业务需求写后端接口了解业务需求并根据业务需求写后端接口",
        },
      ],
      expectJobs: [
        {
          icon: "check",
          label: "前端开发",
        },
        {
          icon: "check",
          label: "测试工程师",
        },
      ],
    };
  },
  methods: {
    contact() {
      this.$router.push("/contact");
    },
  },
};
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>