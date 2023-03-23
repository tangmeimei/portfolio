<template>
  <div>
    <div class="subtitle">{{ title }}</div>
    <div class="timeLine" v-if="data.length > 0">
      <div class="step" v-for="(item, index) in data" :key="index">
        <div>
          <span class="time">{{ item.time }}</span>
          <span class="company">{{ item.subtitle }}</span>
        </div>
        <div class="projectList">
          <h5 class="projectName">{{ item.desTitle }}</h5>
          <p>{{ item.desInfo }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    data: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../../styles/_handle.scss";
.timeLine {
  margin: 2rem 0rem 0rem 2rem;
  .step {
    .time {
      padding: 0.8rem;
      display: inline-block;
      border: 0.2rem solid #017ffe;
      @include border-color("icon_back_color", "");
      border-radius: 1.6rem;
      margin-right: 0.8rem;
    }
    span.company {
      color: #c1bebe;
    }
    .projectList {
      padding: 2rem 0rem 2rem 2rem;
      border-left: 1px solid #444044;
      @include border-color("border_color", "left");
      margin-left: 2rem;
      .projectName {
        font-size: 1.4rem;
        padding-bottom: 1rem;
      }
      p {
        font-size: 1.3rem;
        line-height: 2.5rem;
        letter-spacing: 0.1rem;
        padding-bottom: 2rem;
        border-bottom: 1px solid #444044;
        @include border-color("border_color", "bottom");
        color: #c1bebe;
      }
    }
  }
}
</style>