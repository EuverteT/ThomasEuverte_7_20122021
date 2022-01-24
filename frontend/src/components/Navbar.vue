<template>
  <div class="options">
    <div class="options__container--clock">
      <HeureCourante />
    </div>
    <a
      class="options__container--link"
      :href="'http://localhost:8080/#/user/' + id"
      >Gérer mon compte</a
    >
    <router-link class="options__container--link" to="/post"
      >Poster un article</router-link
    >
    <router-link class="options__container--link" to="/allPosts"
      >Tous les articles</router-link
    >
    <router-link class="options__container--link" to="/allAccounts"
      >Tous les utilisateurs</router-link
    >
  </div>
</template>

<script>
import HeureCourante from "@/components/HeureCourante.vue";

export default {
  name: "Navbar",
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
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;

  &__container {
    
    &--link {
      color: black;
      text-decoration: none;
      margin: 0.3rem;
      font-weight: bold;
      padding: 0.5rem;

       @include tablet {
        margin: 1rem;
         padding: 0.9rem;
       }
      
    }
    &--clock {
      color: black;
      margin: 0.3rem;
      padding: 0.5rem;
      @include tablet {
      margin: 1rem;
      padding: 0.9rem;
      }
    }
  }
}

p {
  margin: 0.5rem;
}
</style>
