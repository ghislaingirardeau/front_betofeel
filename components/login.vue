<template>

  <div class="col-12">
    <b-overlay 
      :show="loaderShow" 
      variant="transparent"
      spinner-variant="warning"
    >

    <h2 class="m-3">Espace de connexion</h2>
    <!-- TEST NUXT AUTH <h2 v-if="$auth.loggedIn">{{$auth.user.data.pseudo}} {{$auth.user.data.avatar}}</h2> -->

    <form class="col-12">
      <label class="col-12 col-md-6 my-2" for="pseudo" >Mon pseudo</label>
      <input class="col-12 col-md-6 my-2" for="pseudo" id="pseudo" type="text"  v-model="post.pseudo" required> <!-- copie les données dans le data post  -->

      <label class="col-12 col-md-6 my-2" for="password" >Mot de passe</label>
      <input class="col-12 col-md-6 my-2" for="password" id="password" type="password" v-model="post.password" required> <!-- copie les données dans le data post  -->
    </form>  

    <div >
      <button class="m-3 p-2 button--connect" @click="postConnection('login', post)">Me connecter</button>
      <p class="message--error">{{errorMessage}}</p>
    </div>

    <p>Si vous n'avez pas de compte cliquer sur "s'inscrire"</p>

    </b-overlay>
  </div>

</template>

<script>
import {postConnection} from '@/store/dataConnection'

export default {

  data () {
    return {
      post: {
        pseudo: null,
        password: null
      },
      errorMessage: null,
      loaderShow: false
    }
  },
  methods: {
    postConnection,
  },
  mounted() {
  }
}
</script>