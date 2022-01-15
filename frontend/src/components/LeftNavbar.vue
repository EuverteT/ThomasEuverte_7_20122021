<template>
  <div class="options">
    <div class="special-desktop navbar__container--link">
      <HeureCourante />
    </div>
    <p class="special-desktop">Votre identifiant: {{ id }}</p>
    <p>Que souhaitez-vous faire aujourd'hui?</p>
    <a
      class="navbar__container--link"
      :href="'http://localhost:8080/#/user/' + id"
      >Consulter mon compte</a
    >
    <router-link class="navbar__container--link" to="/post"
      >Poster un article</router-link
    >
    <router-link class="navbar__container--link" to="/allPosts"
      >Voir tous les articles</router-link
    >
    <router-link class="navbar__container--link" to="/allAccounts"
      >Voir les comptes</router-link
    >
  </div>
</template>

<script>
import HeureCourante from "@/components/HeureCourante.vue";

export default {
  name: "LeftNavbar",
  components: {
    HeureCourante,
  },

  data: () => ({
    id: localStorage.getItem("userId"),
  }),
};
</script>

<style scoped lang="scss">
@import "./styles/main.scss";

.options {
  background-color: #f2f2f2;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

p {
  margin: 0.5rem;
}

.special-desktop {
  @include mobile {
    display: none;
  }
}
</style>
