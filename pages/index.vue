<template>
  <main class="container text-center connection__bloc my-3">
    <header class="row my-4 justify-content-center">
      <h1>Be to Feel </h1>
    </header>

    <nav class="row border rounded mx-2">
      <div class="button__log col-12">
        <button class="m-3 p-2 button--show" @click="showLogin">Se connecter</button>

        <button class="m-3 p-2 button--show" @click="showSignup">S'inscrire</button>
      </div>

      <transition name="fade_log" mode="out-in">
        <login v-if="login" :key="login"/>
        <signup v-if="signup" :key="signup"/>
      </transition>
    </nav>

    <b-row align-h="center" class="m-2 p-2 border rounded">
      <h2 class="mb-4">Présentation du concept</h2>
      <p>Parce qu'il n'est jamais facile d'exprimer ces émotions... <br>
      Parce que nous n'avons pas la possibilité de visualiser notre évolution...<br>
      Ce projet a pour objectif très simple de proposer un outil permettant de visualiser sous la forme d'un avatar de couleur,
       vos émotions à travers le temps.
      </p>
    </b-row>

  

  </main>
</template>

<script>

export default {
  data () {
    return {
      login: true,
      signup: false,      
    }
  },
  methods: {/* switch component */
    showLogin() {
        this.login = true
        this.signup = false
    },
    showSignup() {
        this.login = false
        this.signup = true
    }
  },
}
</script>

<style>

</style>
