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
      <router-link class="navbar__container--link" to="/signup"
        >S'inscrire</router-link
      >
      <router-link class="navbar__container--link" to="/login"
        >Se connecter</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
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
    @include mobile {
      flex-direction: column;
    }

    &--link {
      color: black;
      text-decoration: none;
      margin: 1rem;
      font-weight: bold;
      padding: 0.9rem;

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
