/* FUNCTION COLORS LEAVES ON MOUNTED */

export function emotionsColor (emotion) {
    let index = 0 /* envoie l'index a l'objet */
    const object = document.getElementsByClassName(`Vector`)
    /* Ajout une class appear a chaque index tant que index est inferieur au nombre d'emotions */
        
    do {
        object[index].classList.add("appear")
        object[index].style.animationDelay = `${index * 0.1}s`;
        /* envoie une couleur suivant emotion negative */
        
        switch (emotion[index].toLowerCase()) {
            /*colors HSV: primary 98%, 82% \ secondary 69%, 87% \ third 39%, 92%*/
            case 'fear' : object[index].setAttribute('fill', '#d11c04') /* red  */
            break;
            case 'scared':
            case 'terrifier':    
            case 'insecure':
            case 'nervous':
            case 'horrfied': object[index].setAttribute('fill', '#de5745')
            break;
            case 'dreadful':
            case 'mortified':
            case 'anxious':
            case 'worried':
            case 'inadequate':    
            case 'inferior':
            case 'hysterical':
            case 'panicked':
            case 'helpless':
            case 'frightened': object[index].setAttribute('fill', '#eb9a8f')
            
            case 'anger': object[index].setAttribute('fill', '#d17c04') /* orange */
            break;
            case 'disgusted':
            case 'enraged':    
            case 'irritable':
            case 'exasperated':
            case 'jealous': object[index].setAttribute('fill', '#de9e45')
            break;
            case 'revolted':
            case 'contemptuous':
            case 'envious':
            case 'resentful':
            case 'aggravated':    
            case 'annoyed':
            case 'frustrated':
            case 'agitated':
            case 'hostile':
            case 'hateful': object[index].setAttribute('fill', '#ebc58f')

            case 'sadness': object[index].setAttribute('fill', '#d1bd04') /* yellow */
            break;
            case 'hurt':
            case 'unhappy':    
            case 'disappointed':
            case 'shameful':
            case 'gloomy':
            case 'lonely': object[index].setAttribute('fill', '#d1c341') 
            break;
            case 'depressed':
            case 'hopeless':    
            case 'neglected':
            case 'isolated':
            case 'guilty':
            case 'regretful':
            case 'displeased':    
            case 'dismayed':
            case 'disheartened':
            case 'miserable':
            case 'disturbed':
            case 'agonized': object[index].setAttribute('fill', '#ebe08f')
            break;
            
            case 'surprise': object[index].setAttribute('fill', '#0408d1') /* blue */
            break;  
            case 'confused':
            case 'overcome':    
            case 'stunned':
            case 'amazed':
            case 'moved': object[index].setAttribute('fill', '#4548de') 
            break;
            case 'touched':
            case 'stimulated':    
            case 'astounded':
            case 'speechless':
            case 'awe-struck':
            case 'astonished':
            case 'perplexed':    
            case 'disillusioned':
            case 'bewildered':
            case 'shocked': object[index].setAttribute('fill', '#8f91eb')
            break;
            
            case 'joy': object[index].setAttribute('fill', '#37d104') /* green */
            break;
            case 'euphoric':
            case 'excited':    
            case 'optimistic':
            case 'proud':
            case 'cheerful':    
            case 'peaceful':
            case 'content':
            case 'happy': object[index].setAttribute('fill', '#6bde45')
            break;
            case 'jubilant':
            case 'elated':    
            case 'zealous':
            case 'enthusiastic':
            case 'hopeful':
            case 'eager':
            case 'illustrious':
            case 'triumphant':    
            case 'playful':
            case 'amused':
            case 'delighted':
            case 'jovial':
            case 'pleased':    
            case 'satisfied':
            case 'serene':
            case 'tranquil': object[index].setAttribute('fill', '#a6eb8f')
            break;

            case 'love': object[index].setAttribute('fill', '#04d1c3') /* turquoise */
            break;
            case 'sentimental':
            case 'affectionate':    
            case 'romantic':
            case 'enchanted':
            case 'grateful': object[index].setAttribute('fill', '#45ded4')
            break;
            case 'thankful':
            case 'appreciative':    
            case 'nostalgic':
            case 'tender':
            case 'compassionate':
            case 'warmhearted':
            case 'enamored':    
            case 'passionate':
            case 'rapturous':
            case 'enthralled': object[index].setAttribute('fill', '#8febe5')
            break;
        }
        
        index++
    } while(index < (emotion.length))
}

