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
      <button v-if="id" @click="disconnect" class="navbar__container--link">
        Déconnexion
      </button>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  components: {},

  data: () => ({
    id: localStorage.getItem("userId"),
  }),

  methods: {
    disconnect() {
      localStorage.clear();
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss">
@import "./styles/main.scss";

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__container {
    display: flex;
    @include tablet {
      flex-direction: column;
    }

    &--link {
      color: black;
      text-decoration: none;
      margin: 1rem;
      font-weight: bold;
      padding: 0.9rem;

      @include tablet {
        padding: 0.5;
        margin: 1rem 0;
      }

      @include mobile {
        padding: 0;
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
