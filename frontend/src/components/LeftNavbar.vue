<template>
  <div class="options">
    <HeureCourante />
    <HeureCouranteV2 />

    <router-link class="navbar__container--link" to="/account/"
      >Mon compte</router-link
    >
    <router-link class="navbar__container--link" to="/post"
      >Poster un article</router-link
    >
    <router-link class="navbar__container--link" to="/allPosts"
      >Tous les articles</router-link
    >
    <router-link class="navbar__container--link" to="/allAccounts"
      >Tous les comptes</router-link
    >
  </div>
</template>

<script>
import HeureCourante from "@/components/HeureCourante.vue";
import HeureCouranteV2 from "@/components/HeureCouranteV2.vue";

export default {
  name: "LeftNavbar",
  components: {
    HeureCourante,
    HeureCouranteV2,
  },
  data() {
    return {
      isAdmin: localStorage.getItem("isAdmin"),
    };
  },
};
</script>

<style lang="scss">
@import "./styles/main.scss";

.options {
  background-color: #f2f2f2;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
</style>
