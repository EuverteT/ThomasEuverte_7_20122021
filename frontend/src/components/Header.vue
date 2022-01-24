<template>
  <div class="navbar">
    <router-link to="/">
      <img
        class="navbar__smallLogo"
        alt="logo de Groupomania"
        src="../assets/icon-left-font.png"
      />
    </router-link>

    <img
      class="navbar__smallLogo"
      alt="logo de Groupomania"
      src="../assets/icon.png"
    />
    <div class="navbar__container">
      <router-link v-if="!id" class="navbar__container--link" to="/signup"
        >S'inscrire</router-link
      >

      <router-link v-if="!id" class="navbar__container--link" to="/login"
        >Se connecter</router-link
      >
      <a
        v-if="id"
        class="navbar__container--link"
        :href="'http://localhost:8080/#/user/' + id"
        >Mon compte</a
      >
      <button
        v-if="id"
        @click="showModal = !showModal"
        class="navbar__container--link"
      >
        Déconnexion
      </button>
      <LogoutModale v-show="showModal" class="modal" />
    </div>
  </div>
</template>

<script>
import LogoutModale from "@/components/LogoutModale.vue";

export default {
  name: "Navbar",
  components: {
    LogoutModale,
  },

  data: () => ({
    id: localStorage.getItem("userId"),
    showModal: false,
  }),
};
</script>

<style lang="scss">
@import "./styles/main.scss";

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  &__container {
    display: flex;
    flex-direction: column;

    @include tablet {
      flex-direction: row;
    }

    &--link {
      color: black;
      text-decoration: none;
      font-weight: bold;
      padding: 0.5rem;

      @include tablet {
        margin: 1rem 0;
      }

      @include desktop {
        margin: 1rem;
        padding: 0.9rem;
      }

      &:hover,
      &:focus {
        cursor: pointer;
        border: 1px;
        background-color: $rouge;
        border-radius: 5px;
      }
    }
  }
  &__smallLogo {
    max-height: 100px;
  }
}
</style>
