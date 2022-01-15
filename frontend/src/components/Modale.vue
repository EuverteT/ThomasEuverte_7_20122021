<template>
  <div id="myModal" class="modal">
    <!-- Modal content -->
    <div class="modal-content">
      <div class="modalLineOne">
        <div>Etes-vous certain de vouloir vous déconnecter?</div>
        <span class="close">&times;</span>
      </div>
      <div class="modalLineTwo">
        <button @click="deleteAccount(user)">OUI</button> 
        <button id="noAnswer">NON</button>
      </div>
    </div>
    <!-- @click="deletePost(post)" -->
  </div>
</template>

<script>
export default {
  name: "Modale",
};
</script>

<style scoped lang="scss">
@import "./styles/main.scss";

/* The Modal (background) */
.modal {
  //display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}

/* Modal Content/Box */
.modal-content {
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  color: black;
  font-weight: bold;
}

/* Modal / The Close Button */
.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

.modalLineOne {
  display: flex;
  justify-content: space-between;
}

.modalLineOne div {
  align-self: center;
}

.modalLineTwo {
  display: flex;
  justify-content: space-around;
}
</style>
