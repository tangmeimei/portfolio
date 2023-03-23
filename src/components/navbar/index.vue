<template>
  <div class="nav_contanier">
    <div class="nav">
      <div class="avatar">
        <div class="logo">{{ "唐" }}</div>
        <span style="cursor: pointer" @click="handlerClick">{{
          "Tangmeimei"
        }}</span>
      </div>
      <div style="display: flex">
        <div class="themes">
          <span data-theme="default" @click="changeTheme"></span>
          <span data-theme="light" @click="changeTheme"></span>
          <span data-theme="grey" @click="changeTheme"></span>
        </div>
        <ul class="navgation">
          <li><router-link to="/about">about me</router-link></li>
          <li><router-link to="/resume">resume</router-link></li>
          <li><router-link to="/portfolio">portfolio</router-link></li>
          <li><router-link to="/contact">contact</router-link></li>
        </ul>
      </div>
    </div>
    <div class="nav2">
      <div class="avatar">
        <div class="logo">{{ "唐" }}</div>
        <div class="hamburgerIcon" @click="showMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div style="display: flex" class="menus">
        <div class="themes">
          <span data-theme="default" @click="changeTheme"></span>
          <span data-theme="light" @click="changeTheme"></span>
          <span data-theme="grey" @click="changeTheme"></span>
        </div>
        <ul class="navgation2">
          <li><router-link to="/about">about me</router-link></li>
          <li><router-link to="/resume">resume</router-link></li>
          <li><router-link to="/portfolio">portfolio</router-link></li>
          <li><router-link to="/contact">contact</router-link></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handlerClick() {
      this.$router.push("/");
    },
    changeTheme(e) {
      const theme = e.target.dataset.theme;
      window.document.documentElement.setAttribute("data-theme", theme);
    },
    showMenu(e) {
      let el = e.target;
      if (e.target.nodeName == "SPAN") {
        el = e.target.parentNode;
      }
      if (el.classList.contains("active")) {
        el.classList.remove("active");
      } else {
        el.classList.add("active");
      }
      const menuEl = document.querySelector(".menus");
      if (menuEl.classList.contains("active")) {
        menuEl.classList.remove("active");
      } else {
        menuEl.classList.add("active");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/_handle.scss";
.nav_contanier {
  @include font_color("font_color1");
  @include background_color("background_color1");
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;
  .avatar {
    @include dflex(row, center, center);
    font-size: 1.6rem;
    .logo {
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
      @include background_color("icon_back_color");
      @include dflex(row, center, center);
      margin-right: 2.5rem;
      font-size: 1.6rem;
      cursor: pointer;
      @include font_color("font_color3");
    }
  }
  .themes {
    margin-right: 2rem;
    span {
      width: 2rem;
      height: 2rem;
      display: inline-block;
      border: 0.2rem solid white;
      border-radius: 50%;
      margin-right: 1rem;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
    }
    span:hover {
      transform: scale(1.2);
    }
    span:nth-of-type(1) {
      background-color: #242124;
    }
    span:nth-of-type(2) {
      background-color: white;
    }
    span:nth-of-type(3) {
      background-color: #3d4d5a;
    }
  }
  .nav {
    height: 9rem;
    display: flex;
    border-bottom-width: 0.2rem;
    border-bottom-style: solid;
    @include border-color("border_color", "bottom");
    @include dflex(row, space-between, center);
    margin: 0px 6rem;

    .navgation {
      display: flex;
      li a {
        margin-right: 2.5rem;
        font-size: 1.6rem;
        text-transform: capitalize;
        font-weight: 500;
        @include font_color("font_color2");
      }
      a.router-link-exact-active {
        @include font_color("font_color1");
      }
    }
  }

  .nav2 {
    display: none;
    .avatar {
      padding: 3rem;
      display: flex;
      justify-content: space-between;
      .hamburgerIcon {
        position: absolute;
        z-index: 2;
        right: 5rem;
        top: 4.8rem;
        cursor: pointer;
      }
      .hamburgerIcon span {
        width: 2.5rem;
        height: 0.2rem;
        /* background-color: white; */
        @include background-color("font_color1");
        display: block;
        transition: all 0.3s ease-in-out;
        transform-origin: 7px center;
        margin-bottom: 0.5rem;
      }
      .hamburgerIcon.active span:nth-of-type(1) {
        transform: rotate(45deg);
      }
      .hamburgerIcon.active span:nth-of-type(2) {
        display: none;
      }
      .hamburgerIcon.active span:nth-of-type(3) {
        transform: rotate(-45deg);
      }
    }
    .menus {
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      height: 100vh;
      transition: all 0.3s ease-in-out;
      flex-direction: column;
      align-items: center;
      padding: 10rem 5rem 4rem 5em;
      @include background-color("background_color2");
      transform: translateX(50rem);
    }
    .menus.active {
      transform: translateX(0rem);
    }
    .themes {
      margin-bottom: 2rem;
    }
    .navgation2 {
      display: flex;
      flex-direction: column;
      @include font_color("font_color2");
      li a {
        @include font_color("font_color2");
        font-size: 1.6rem;
        text-transform: capitalize;
        font-weight: 500;
        display: inline-block;
        margin-bottom: 2rem;
      }
      a.router-link-exact-active {
        @include font_color("font_color1");
      }
    }
  }
}
@media only screen and (max-width: 768px) {
  .nav_contanier .nav {
    display: none;
  }
  .nav_contanier .nav2 {
    display: block;
  }
}
</style>