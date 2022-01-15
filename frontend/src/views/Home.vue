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
        Groupomania vous souhaite une bonne année 2022! Nous avons pour cette occasion le plaisir de
        vous proposer un réseau social afin que chaque collaborateur puisse interagir avec les autres,
        partager, proposer... N'attendez plus pour vous inscrire et commencer à en profiter!
      </div>
    </section>
    <section>
      <div>{{ copyright }}</div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import { mapGetters, mapState } from "vuex";

export default {
  name: "Home",
  components: {
    Header,
  },
  computed: {
    ...mapGetters({
      copyright: "copyright",
    }),
    ...mapState({
      organismeDeFormation: "OpenClassRooms",
    }),
  },
};
</script>

<style scoped lang="scss">
@import "./styles/main.scss";

.welcomeAnim {
  display: flex;
  width: 100%;
  @include tablet {
    flex-direction: column;
  }
}

.welcomeMessage {

  font-size: 1.5rem;
  font-weight: bold;
  margin: 0 5rem 5rem 2rem;

  @include mobile {
      font-size: 1rem;
      margin: 0 2rem 2rem 2rem;

  }
}

.home {
  &__bigLogo {
    max-width: 400px;
    width: 50%;
    animation: spinner-rotate-logo 3000ms linear infinite;
    margin: 5rem;
    @include tablet {
      display: none;
      animation: none;
    }
  }
  &__smallLogo {
    max-width: 400px;
    width: 25%;
    animation: spinner-opacity-logo 3000ms linear infinite;
    @include tablet {
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
