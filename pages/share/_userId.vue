<template>

  <div class="container align-items-center share_tree">

    <headerBar :pseudo="pseudo">
      <NuxtLink to="/home" >home</NuxtLink>
      <NuxtLink to="/" @click.native="disconnect">Déconnexion</NuxtLink>
    </headerBar>

    <transition name="fadeShare" appear>
      <section>
        <article class="col-12">
            <h2 class="col-12 mb-5 mt-1 text-center">Voici l'avatar de {{pseudoShare}}</h2>
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
            pseudoShare: String,
            pseudo: '',
            avatarShare: 'null'
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
          'Access-Control-Allow-Origin' : 'https://betofeel.netlify.app/',
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

