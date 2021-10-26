<template>
<div class="container align-items-center">
  <headerBar :pseudo="pseudo">
    <NuxtLink to="/" @click.native="disconnect">Déconnexion</NuxtLink>
  </headerBar>
  <nav class="row justify-content-center mx-xl-2">
    <searchUser :userShared="userShared" :userOndemand="userOndemand" @update-sharing="updateUserShareArray"/>
  </nav>

  <main class="row justify-content-around mx-2 my-3">

    <transition name="fade" appear>
      <article v-if="dataLoad" class="col-12 col-xl-7">

        <h2 class="mb-sm-5 mt-1 text-center">Mon avatar d'emotions</h2>
        <emoImage :avatar="avatar" :emotion="emotion" :key="reload"/>

      </article>
    </transition>

    <feelingManage /> 

  </main>
  
</div>
  
</template>

<script>
import { upperFirstLetter, disconnect, updateUserShareArray } from '@/store/functions'

export default {
    data () {
      return {
        emotion: [], /* Array 3 results call api */
        reload: false, /* reload tree component */
        dataLoad: false, /* a la reception des donnees de l'api */
        pseudo : '',
        userShared: [], /* Array 2 results call api */
        userOndemand: [], /* Array 3 results call api */
        avatar: String
      }
    },
    mounted () {
      
    this.pseudo = upperFirstLetter(sessionStorage.getItem('pseudo'))
    this.avatar = sessionStorage.getItem('avatar')

    let user_id = sessionStorage.getItem('userId')
    let token = sessionStorage.getItem('token')
    const userFeel = {user_id: user_id}

    fetch("https://apigooddeeds.herokuapp.com/api/feeling/", {
      method: "POST",
      headers: {
      "content-type": "application/json",
      "Authorization" : 'Bearer ' + token,
    },
      body: JSON.stringify(userFeel)
    })
    
    .then(response => {
      if(response.ok) {
          response.json()
          .then(data => {
            this.dataLoad = true 
            data.results[0].forEach(element => {
                this.emotion.push(element.feel)
            });
            this.userShared = data.results[1]
            this.userOndemand = data.results[2]
            this.reload = !this.reload
          })
      } else { 
        response.json()
        .then(data => {
          console.log(data) 
        })
      }
    })
      
    },
    methods: {
      disconnect,
      updateUserShareArray
    }
}
</script>

