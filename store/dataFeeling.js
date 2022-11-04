/*  CALL API FOR POSTFEELING */

export function postFeeling(feeling, kindOfFeel) {
  if (feeling != undefined) {
    let user_id = sessionStorage.getItem("userId");
    let token = sessionStorage.getItem("token");
    /* creer objet a envoyer */
    let postEmotion = { user_id: user_id, feeling: feeling };

    /* route qui varie suivant le type d'emotion pour avoir 2 tableau distinct coté sql */
    fetch(
      `https://web-production-b214.up.railway.app/api/feeling/${kindOfFeel}`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify(postEmotion),
      }
    ).then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          /* window.alert(data.message) */
        });
      } else {
        response.json().then((data) => {
          window.alert(data.message);
        });
      }
    });
    /* envoie la nouvelle emotion dans le tableau arbre et reload le composant */
    this.$parent.emotion.push(feeling);
    this.$parent.reload = !this.$parent.reload;
    /* compteur temps pour une prochaine activation des boutons */
    let timeValidation = Math.round(Date.now() / 1000);
    localStorage.setItem("lastValidation", timeValidation);
    this.feeling = undefined;
  } else {
    console.log("selectionner une emotion");
  }
}
