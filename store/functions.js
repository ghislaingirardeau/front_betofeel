/* FUNCTION UPPERCASE USER NAME  */

export function upperFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1) 
}

/* MAJ array share users */

export function updateUserShareArray(payload) {
  if(payload.newSharing != undefined){ /* si reponse rejeté renvoie undefined = pas besoin de mettre a jour le tableau */
    this.userShared.push(payload.newSharing) /* ajout user autorisé */
    this.userOndemand.splice(payload.indexElement, 1)
  }
  else if(payload.indexElement != undefined){ /* supprime le user du tableau de demande quelsoit accepter ou rejeter */
    this.userOndemand.splice(payload.indexElement, 1)
  }
  else if(payload.updateOneShare != undefined){ /* supprime le user du tableau de demande quelsoit accepter ou rejeter */
    this.userShared.splice(payload.updateOneShare, 1)
  }
}

/* DISCONNECTION */
export function disconnect() {
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('userId')
    sessionStorage.removeItem('pseudo')
    sessionStorage.removeItem('role')
}

/* APPEARS ELEMENT WITH DELAY */
export function revealAnimation(){
  setTimeout(function() {
    const eltSelection = document.getElementById('aside__selection')
    eltSelection.classList.add('reveal-1')
    const eltLegend = document.getElementById('aside__legend')
    eltLegend.classList.add('reveal-2')
}, 500)
}

/* TIMER DISABLE VALIDATE EVERY 6H */
export function timerSelectFeeling(){
  let dateNow = Math.round(Date.now() / 1000)
  let lastValidation = localStorage.getItem('lastValidation')
  
  if((dateNow - lastValidation) < 10 ) {
      /* 6h = 21600s */
      const boutonValidate = document.getElementById('btn-validate')
      boutonValidate.setAttribute("disabled", "")
  } 
}