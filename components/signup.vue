<template>

  <div>

    <h2 class="mx-1">Renseignez les informations pour valider votre inscription :</h2>

    <form class="col-12">
      <label class="col-12 col-md-6 my-2" for="pseudo" >Mon pseudo</label>
      <input class="col-12 col-md-6 my-2" for="pseudo" id="pseudo" type="text"  v-model="post.pseudo" required> <!-- copie les données dans le data post  -->

      <label class="col-12 col-md-6 my-2" for="email" >Mon email</label>
      <input class="col-12 col-md-6 my-2" for="email" id="email" type="email"  v-model="post.email" required> <!-- copie les données dans le data post  -->

      <label class="col-12 col-md-6 my-2" for="password" >Mon mot de passe</label>
      <input class="col-12 col-md-6 my-2" for="password" id="password" type="password" v-model="post.password" placeholder="Minimum 6 lettres et un chiffre" required> <!-- copie les données dans le data post  -->
    </form>

    <b-row align-h="center" class="mt-4">
      <b-col cols="11" class="mb-3">
        <h3>Choisis un avatar :</h3>
      </b-col>
      <b-col cols="5" md="4" class="my-2">
        <b-img class="card__signup" id="bird" @click="imagePicked" thumbnail fluid src="@/assets/public/images/1751300.svg" alt="Image oiseau"></b-img>
      </b-col>
      <b-col cols="5" md="4" class="my-2">
        <b-img class="card__signup" id="lotus" @click="imagePicked" thumbnail fluid src="@/assets/public/images/1817513.svg" alt="Image lotus"></b-img>
      </b-col>
      <b-col cols="5" md="4" class="my-2">
        <b-img class="card__signup" id="tree" @click="imagePicked" thumbnail fluid src="@/assets/public/images/1289280.svg" alt="Image arbre"></b-img>
      </b-col>
    </b-row>

    <div class="col-12">
      <button class="m-3 p-2 button--connect" @click="postConnection('signup', post, errorMessage)">M'inscrire</button>
      <p class="message--error">{{errorMessage}}</p>
    </div>

  </div>

</template>

<script>

import {postConnection} from '@/store/dataConnection'

export default {

  data () {
    return {
      post: {
        pseudo: null,
        email: null,
        password: null,
        avatar: null
      },
      errorMessage: null,
    }
  },
  methods: {
    postConnection,
    imagePicked(event) {
      let target = document.getElementById(`${event.target.id}`)
      let cards = document.getElementsByClassName('card__signup')
      for (var i = 0; i < cards.length; i++) {
        cards[i].classList.remove('card__signup--selected')
      }
      target.classList.add('card__signup--selected')
      this.post.avatar = event.target.id
    }
  }
}
</script>