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

<style scoped lang="scss">
.navbar{
  display: flex;
  align-items: center;
  justify-content: space-between;

    &__container {
    display: flex;
    @media (max-width: 1025px) {
      flex-direction: column;
    }
    }
    &__smallLogo {
    max-height: 100px;
  }
}

</style>
