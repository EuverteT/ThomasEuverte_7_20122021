<template>
  <div>
    <Header />
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
      <div class="welcomeMessage">
        Groupomania vous souhaite une Bonne Année 2022! Nous avons pour cette
        occasion le plaisir de vous proposer un réseau social afin que chaque
        collaborateur puisse interagir avec les autres, partager, proposer...
        N'attendez plus pour vous inscrire et commencer à en profiter!
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    Header,
    Footer,
  },
};
</script>

<style scoped lang="scss">
@import "./styles/main.scss";

.welcomeAnim {
  @include desktop {
    display: flex;
    justify-content: space-around;
  }
}

.welcomeMessage {
  font-size: 1rem;
  font-weight: bold;
  margin: 0 2rem 2rem 2rem;

  @include tablet {
    font-size: 1.5rem;
    margin: 0 5rem 5rem 2rem;
  }
}

.home {
  &__bigLogo {
    display: none;
    @include desktop {
      max-width: 400px;
      width: 50%;
      margin: 5rem;
      display: flex;
      animation: spinner-rotate-logo 3000ms linear infinite;
    }
  }
  &__smallLogo {
    width: 100%;
    max-height: 200px;
    animation: spinner-opacity2-logo 4000ms linear infinite;

    @include tablet {
      animation: spinner-opacity-logo 3000ms linear infinite;
      max-width: 400px;
      width: 25%;
      align-self: center;
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
