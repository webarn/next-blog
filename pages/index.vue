<template>
  <section class="container">
    <navR>
      <navC :xs='24' :sm="8" class-name="dec">
        <div class="dec_top">
          <img src="http://placeimg.com/80/80" alt="头像">
          <h2>{{users}}</h2>
        </div>
        <div class="dec_bottom">
          <h2>introduction</h2>
          <h5>没有什么代码的执行速度比空代码更快</h5>
          <ul>
            <li class="hvr-glow">QQ : 527050688</li>
            <li class="hvr-glow">微信 : </li>
            <li class="hvr-glow">item3: </li>
            <li class="hvr-glow">item4</li>
            <li class="hvr-glow">item5</li>
          </ul>
        </div>
      </navC>
      <navC :xs='24' :sm="16" class-name="content">
        <nav>
          <ul>
            <li><nuxt-link :to="'/'"><Icon type="grid"></Icon> 全部</nuxt-link></li>
            <li><nuxt-link :to="'/articles/'+'HTML_CSS'"><Icon type="social-html5"></Icon> HTML/CSS</nuxt-link></li>
            <li><nuxt-link :to="'/articles/'+'JavaScript'"><Icon type="social-javascript"></Icon> JavaScript</nuxt-link></li>
            <li><nuxt-link :to="'/articles/'+'Node'"><Icon type="social-nodejs"></Icon> Node.js</nuxt-link></li>
            <li><nuxt-link :to="'/articles/'+'else'"><Icon type="android-restaurant"></Icon> 其他</nuxt-link></li>
          </ul>
        </nav>
        <nuxt-child/>
      </navC>
    </navR>    
  </section>
</template>

<script>
import axios from "~/plugins/axios";
export default {
  async asyncData() {
    let { data } = await axios.get("/api/users");
    return { users: data };
  },
  head() {
    return {
      title: "Webarn·Blog"
    };
  }
};
</script>

<style lang="scss" scoped>
.container {
  border-top: 1px dotted #ffffff;
}
.dec {
  padding: 20px;
}
.dec_top {
  width: 100%;
  margin-top: 100px;
  text-align: center;
  img {
    border-radius: 50%;
  }
  h2 {
    font-weight: 400;
  }
}
.dec_bottom {
  height: 300px;
  margin-top: 20px;
  padding: 20px;
  h5 {
    padding: 15px 0;
  }
  ul {
    margin-top: 15px;
    text-align: left;
    opacity: 0.6;
    li {
      padding: 5px;
      margin: 8px 0;
      border-radius: 3px;
    }
  }
}
.content {
  border-left: 1px solid #f2f2f2;
  padding: 0 10px;
  height: 700px;
}
nav {
  height: 50px;
  box-shadow: 0 3px 15px 0px #d5dbec;
  line-height: 50px;
  padding-left: 30px;
  display: flex;
  justify-content: flex-start;
  opacity: 0.7;
  ul {
    display: flex;
  }
  a {
    border-bottom: 1px solid #2098d1;
    padding: 10px 15px;
    margin-right: 20px;
  }
  .nuxt-link-exact-active {
    color: #2098d1;
    border-bottom: 2px solid #2098d1;
  }
}
@media (max-width: 768px) {
  .dec_top {
    margin-top: 0;
  }
  .dec_bottom {
    margin-top: 30px;
    ul {
      text-align: center;
    }
  }
  nav {
    display: none;
  }
}

/* Hovew */
.hvr-glow {
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px transparent;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: box-shadow;
  transition-property: box-shadow;
}
.hvr-glow:hover,
.hvr-glow:focus,
.hvr-glow:active {
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.6);
}
</style>
