<template>
  <section class="article">
    <h1>article{{a}}</h1>
  </section>
</template>

<script>
export default {
  async asyncData() {},
  data() {
    return {
      a: 1
    };
  },
  head() {
    return {
      title: "article"
    };
  },
  mounted() {
    console.log();
  }
};
</script>
