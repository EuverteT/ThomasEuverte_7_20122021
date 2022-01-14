<template>
  <div>
    {{ heureCourante() }}
  </div>
</template>

<script>
export default {
  name: "HeureCourante",
  
  created() {
    setInterval(() => this.$forceUpdate(), 1000); // tester avec la durée de connexion
  },
  methods: {
    heureCourante() {
      let now = new Date();
      let heure = ("0" + now.getHours()).slice(-2);
      let minute = ("0" + now.getMinutes()).slice(-2);
      let seconde = ("0" + now.getSeconds()).slice(-2);
      return `Il est: ${heure}h${minute} et ${seconde}s`;
    },
  },
};
</script>
