<template>
  <div>
    <div>Il est {{ heureCourante() }}</div>
  </div>
</template>

<script>
export default {
  name: "HeureCourante",

  created() {
    setInterval(() => this.$forceUpdate(), 10000); //tester avec le statut connecté
  },
  methods: {
    heureCourante() {
      let now = new Date();
      let heure = ("0" + now.getHours()).slice(-2);
      let minute = ("0" + now.getMinutes()).slice(-2);
      return `${heure}h${minute}`;
    },
  },
};
</script>

<style lang="scss">
@import "./styles/main.scss";


</style>
