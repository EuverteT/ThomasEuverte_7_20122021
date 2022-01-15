<template>
  <div>
    <Header />
    <div class="post">
      <LeftNavbar />
      <CreatePost />
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import LeftNavbar from "../components/LeftNavbar.vue";
import CreatePost from "../components/CreatePost.vue";

export default {
  name: "Post",
  components: {
    Header,
    LeftNavbar,
    CreatePost,
  },

  
};


</script>

<style lang="scss" >
@import "./styles/main.scss";

.post {
  @include flex-global;
  
  @include mobile {
    flex-direction: column;
  }
}
</style>
