<template>

  <div class="container align-items-center share_tree">

    <headerBar  :pseudo="pseudo">
        <div class="col-6">
          <b-button to="/home" variant="outline-primary">Accueil</b-button>
        </div>
        <div class="col-6">
          <b-button to="/" @click.native="disconnect" variant="outline-primary">Déconnexion</b-button>
        </div>
    </headerBar>

    <transition name="fadeShare" appear>
      <section class="row justify-content-center mb-3">
        <article class="col-11">
          <transition name="fade">
            <h2 v-if="dataLoad" class="col-12 mb-0 mb-lg-3 mt-2 text-center">Voici l'avatar de {{pseudoShare}}</h2>
          </transition>
            <emoImage :avatar="avatarShare" :emotion="emotion" :key="reload"/>
        </article> 
      </section>     
    </transition> 

  </div>
   
</template>

<script>
import { upperFirstLetter, disconnect } from '@/store/functions'

export default {
    data() {
        return {
            idUserShared: this.$route.params.id,
            reload: false,
            emotion: [],
            pseudoShare: '',
            pseudo: '',
            avatarShare: 'null',
            dataLoad: false
        }
    },
    methods: {
      disconnect
    },
    mounted () {
      
      const token = sessionStorage.getItem('token')
      this.pseudo = upperFirstLetter(sessionStorage.getItem('pseudo'))
      const userFeel = {user_id: this.idUserShared}
      
      fetch("https://apigooddeeds.herokuapp.com/api/share/feelingUser", {
          method: "POST",
          headers: {
          "content-type": "application/json",
          "Authorization" : 'Bearer ' + token
          },
          body: JSON.stringify(userFeel)
      })
      .then(response => {
          if(response.ok) {
            this.dataLoad = true /* affiche le composant lorsque la reponse arrive */
              response.json()
              .then(data => {
                /* Recupere toutes les emotions dans un tableau */
                data.results[0].forEach(element => {
                    this.emotion.push(element.feel)
                });
                const getUserElement = data.results[1]
                
                this.pseudoShare= upperFirstLetter(getUserElement[0].pseudo)
                this.avatarShare= `${getUserElement[0].avatar}`
                this.reload = !this.reload
              })
          } else { /* sinon j'envoie une erreur */
            response.json()
            .then(data => {
              console.log(data.message) /* renvoie error du backend sur le frontend */
            })
          }
      })
    },
}
</script>

