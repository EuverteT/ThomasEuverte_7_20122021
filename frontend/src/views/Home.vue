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
        <h2>En cours de construction....</h2>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";

export default {
  name: "Home",
  components: {
    Navbar,
  },
};
</script>

<style scoped lang="scss">
h1 {
  background-color: rgb(226, 220, 220);
}
h2 {
  //background-color: rgb(204, 148, 148);
  animation: spinner-translate-logo 3000ms linear infinite;
  overflow: hidden;
  width: 25%;
  align-self: center;
  color: black;
  &:hover {
    animation-play-state: paused;
  }
  @media (max-width: 1025px) {
    animation: none;
    transform: translateY(-400px);
    width: 100%;
  }
}
.welcomeAnim {
  display: flex;
  width: 100%;
  @media (max-width: 1025px) {
    flex-direction: column;
  }
}

.home {
  &__bigLogo {
    max-width: 400px;
    width: 50%;
    animation: spinner-rotate-logo 3000ms linear infinite;
    margin: 5rem;
  }
  &__smallLogo {
    max-width: 400px;
    width: 25%;
    animation: spinner-translate-logo 3000ms linear infinite;
    @media (max-width: 900px) {
      animation: spinner-translateY-logo 4000ms linear infinite;
      width: 100%;
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
@keyframes spinner-translate-logo {
  0% {
    transform: translate(100%);
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  100% {
    transform: translate(0%);
  }
}
@keyframes spinner-translateY-logo {
  0% {
    transform: translateY(-380px);
    opacity: 0;
  }
  25% {
    opacity: 0.3;
  }
  50% {
    opacity: 1;
    transform: translateY(-300px);
  }

  80% {
    opacity: 0;
  }
  100% {
    transform: translateY(-280px);
    opacity: 0;
  }
}
</style>
