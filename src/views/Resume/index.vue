<template>
  <div>
    <div class="top">
      <span>6 year of experience</span>
      <h5>resume</h5>
    </div>
    <div class="contextBox">
      <time-line title="education" :data="educationList" />
      <time-line title="experience" :data="experienceList" />
    </div>

    <div class="contextBox" style="margin: 4rem 0px">
      <div>
        <div class="subtitle">coding skills</div>
        <div class="progressBox">
          <progress-bar name="javaScript" :valueNum="80" />
          <progress-bar name="html / css" :valueNum="90" />
          <progress-bar name="vuejs" :valueNum="80" />
          <progress-bar name="react" :valueNum="60" />
          <progress-bar name="SQL" :valueNum="80" />
          <progress-bar name="java" :valueNum="80" />
        </div>
      </div>
      <div>
        <div class="subtitle">interest</div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
import progressBar from "../../components/progressBar/index.vue";
import timeLine from "../../components/timeLine/index.vue";
export default {
  components: {
    progressBar,
    timeLine,
  },
  data() {
    return {
      educationList: [
        {
          time: "2011-2015",
          subtitle: "湖南工业大学",
          desTitle: "专业:信息管理与信息系统",
          desInfo:
            "完成专业课程，英语四级。C语言二级证书。完成专业课程，英语四级。C语言二级证书。",
        },
      ],
      experienceList: [
        {
          time: "2021/03-current",
          subtitle: "拓保软件",
          desTitle: "Toms产品组",
          desInfo:
            "负责二期前端页面开发负责二期前端页面开发负责二期前端页面开发负责二期前端页面开发负责二期前端页面开发负责二期前端页面开发",
        },
        {
          time: "2019/07-2021/03",
          subtitle: "长亮科技",
          desTitle: "数据管控",
          desInfo:
            "负责二期前端页面开发负责二期前端页面开发负责二期前端页面开发负责二期前端页面开发负责二期前端页面开发负责二期前端页面开发",
        },
        {
          time: "2021/03-current",
          subtitle: "拓保软件",
          desTitle: "Toms产品组",
          desInfo:
            "负责二期前端页面开发负责二期前端页面开发负责二期前端页面开发负责二期前端页面开发负责二期前端页面开发负责二期前端页面开发",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>