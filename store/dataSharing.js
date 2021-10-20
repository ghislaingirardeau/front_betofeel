/* FUNCTION SHARING FEATURE */
import axios from "axios"
export function shareRequest() {
    const checkDemand = this.$parent.userOndemand.findIndex((element) => element.pseudo === this.searchPseudo.toLowerCase())
    const checkShared = this.$parent.userShared.findIndex((element) => element.pseudo === this.searchPseudo.toLowerCase())
    if(checkShared != -1){
      console.log('Ce pseudo est deja autorisé')
      this.searchResults = "Ce pseudo est deja autorisé ou en cours de demande"
    }
    else if(checkDemand != -1){
      console.log('Ce pseudo vous a envoyé une demande')
      this.searchResults = "Ce pseudo vous a envoyé une demande"
    } else {
        const token = sessionStorage.getItem('token')
        const user_id = sessionStorage.getItem('userId')
        const dataShare = {searchPseudo: this.searchPseudo, user_id: user_id}
          fetch("https://apigooddeeds.herokuapp.com/api/share/searchUser", {
              method: "POST",
              headers: {
              "content-type": "application/json",
              'Access-Control-Allow-Origin' : 'https://betofeel.netlify.app/',
              "Authorization" : 'Bearer ' + token
              },
              body: JSON.stringify(dataShare)
          })
          .then(response => {
              if(response.ok) {
                  response.json()
                  .then(data => {
                    if(data.message === 'undefined') {
                        this.searchResults = "Ce pseudo n'existe pas"
                    } else {
                      this.searchResults = "Votre demande a été envoyé"
                      const newSharing = {connectTo: data.idFind, pseudo: this.searchPseudo, status: "on demand"}
                      this.$emit('update-sharing', {newSharing})
                    }
                  })
              } else { 
                response.json()
                .then(data => {
                  console.log(data) 
                })
              }
          })
        }
}

export function responseDemand(res, idFrom, pseudo) {
    const user_id = sessionStorage.getItem('userId')
    const token = sessionStorage.getItem('token')
    const dataShare = {responseStatus: res, user_id: user_id, idFrom: idFrom}
    fetch("https://apigooddeeds.herokuapp.com/api/share/responseSharing", {
        method: "PUT",
        headers: {
        "content-type": "application/json",
        'Access-Control-Allow-Origin' : 'https://betofeel.netlify.app/',
        "Authorization" : 'Bearer ' + token
        },
        body: JSON.stringify(dataShare)
    })
    .then(response => {
        if(response.ok) {
            response.json()
            .then(data => {
              if(res === "authorized"){ /* si authorized alors je mets à jour le data des composants sans reload */
                /* met à jour le tableau share */
                const newSharing = {connectTo: idFrom, pseudo: pseudo, status: "authorized"}
                /* supprime le pseudo du tableau on demand  */
                const indexElement = this.userOndemand.findIndex((element) => element.pseudo === pseudo)
                this.$emit('update-sharing', {newSharing, indexElement})
              } else { /* si la reponse est un refus */
                console.log(data.message)
                const newSharing = undefined
                /* supprime le pseudo du tableau on demand  */
                const indexElement = this.userOndemand.findIndex((element) => element.pseudo === pseudo)
                this.$emit('update-sharing', {newSharing, indexElement})
              }
            })
        } else { 
          response.json()
          .then(data => {
            this.responseSharingResult = data.message
          })
        }
    })   
    this.$bvModal.hide('modal-demand')     
}

export function removeSharing(user) {
  const user_id = sessionStorage.getItem('userId')
  const userTo = `${user.connectTo}`
  const token = sessionStorage.getItem('token')
  const dataShare = {user_id: user_id, connectTo: userTo}
  const data = JSON.stringify(dataShare)
  
  axios.put("https://apigooddeeds.herokuapp.com/api/share/remove", data, {
    headers: {
      "content-type": "application/json",
      'Access-Control-Allow-Origin' : 'https://betofeel.netlify.app/',
      "Authorization" : 'Bearer ' + token
    },
  }) 
  .then(response => {
    console.log(response.data.message)
    const updateOneShare = this.userShared.findIndex((element) => element.connectTo === userTo)
    this.$emit('update-sharing', {updateOneShare})
  })
  .catch((error) => this.errorMessage = error.response.data.message)
}


/* END SHARING FEATURE */