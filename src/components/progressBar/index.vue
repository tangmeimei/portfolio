<template>
  <div>
    <div class="progressInfo">
      <span>{{ name }}</span>
      <span>{{ `${valueNum}%` }}</span>
    </div>
    <div class="progress">
      <div class="bar"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: "",
    },
    valueNum: {
      type: Number,
      default: 0,
    },
  },
  created() {},
  mounted() {
    let barEl = this.$el.querySelector(".bar");
    barEl.style.width = `${this.valueNum}%`;
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/_handle.scss";
.progressInfo {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.8rem;
  font-size: 1.3rem;
}
.progress {
  border: 0.2rem solid #444044;
  @include border-color("border_color", "");
  margin-bottom: 1.5rem;
  border-radius: 1.5rem;
  overflow: hidden;
  .bar {
    width: 80%;
    height: 1rem;
    @include background_color("icon_back_color");
  }
}
</style>