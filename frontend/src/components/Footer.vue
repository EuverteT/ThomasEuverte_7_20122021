<template>
  <footer class="footer">
    <div class="footer__content">A propos</div>
    <div class="footer__content">{{ copyright }}</div>
    <div class="footer__content">Assistance</div>
  </footer>
</template>

<script>
import { mapGetters, mapState } from "vuex";

export default {
  name: "Footer",
  
  computed: {
    ...mapGetters({
      copyright: "copyright",
    }),
    ...mapState({
      organismeDeFormation: "OpenClassRooms",
    }),
  },
}
</script>

<style lang="scss">
@import "./styles/main.scss";
</style>
