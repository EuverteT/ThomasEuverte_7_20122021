<template>
  <div>
    <Navbar />
    <h1>Bienvenue sur votre nouveau réseau social!</h1>

    <div class="home">
      <div class="welcomeAnim">
        <img
          class="home__bigLogo"
          alt="logo de Groupomania"
          src="../assets/icon.svg"
        />
        <img
          class="home__smallLogo"
          alt="logo de Groupomania"
          src="../assets/icon-left-font.svg"
        />
      </div>
    </div>
    <section>
      <div>{{ copyright }}</div>
      <div>Etudiant: {{ etudiant }}</div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import { mapGetters, mapState } from "vuex";

export default {
  name: "Home",
  components: {
    Navbar,
  },
  computed: {
    ...mapGetters({
      copyright: "copyright",
    }),
    ...mapState({
      organismeDeFormation: "OpenClassRooms",
      etudiant: "etudiant",
      projets: "projets",
    }),
  },
};
</script>

<style scoped lang="scss">
@import "./styles/main.scss";

h2 {
  //background-color: rgb(204, 148, 148);
  animation: spinner-opacity-logo 3000ms linear infinite;
  overflow: hidden;
  width: 25%;
  align-self: center;
  color: black;
  @include mobile {
    animation: spinner-opacity2-logo 4000ms linear infinite;
    width: 100%;
    max-height: 150px;
  }
}
.welcomeAnim {
  display: flex;
  width: 100%;
  @include mobile {
    flex-direction: column;
  }
}

.home {
  &__bigLogo {
    max-width: 400px;
    width: 50%;
    animation: spinner-rotate-logo 3000ms linear infinite;
    margin: 5rem;
    @include mobile {
      display: none;
      animation: none;
    }
  }
  &__smallLogo {
    max-width: 400px;
    width: 25%;
    animation: spinner-opacity-logo 3000ms linear infinite;
    @include mobile {
      animation: spinner-opacity2-logo 4000ms linear infinite;
      width: 100%;
      max-height: 200px;
    }
  }
}

@keyframes spinner-rotate-logo {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
@keyframes spinner-opacity-logo {
  0% {
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  100% {
  }
}
@keyframes spinner-opacity2-logo {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>
