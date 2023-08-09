console.log('%c HI', 'color: firebrick')
document.addEventListener('DOMContentLoaded', function() {
    
    //Challenge1
    fetch(`https://dog.ceo/api/breeds/image/random/4`)
    .then(res => res.json())
    .then(data => {
        let urls = data.message;
        urls.forEach(dogPhotoUrl => addImage(dogPhotoUrl))
        })
    

    function addImage(photoUrl){
        let images = document.createElement('img');
        images.src = `${photoUrl}`;
        images.height = '250'
        document.querySelector('#dog-image-container').appendChild(images);
    }

    //Challenge2
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(res => res.json())
    .then(data => {
        let breedObj = data.message;
        let breedArr = [];
        for (var breed in breedObj) {
            breedArr.push(`${breed}: ${breedObj[breed]}`)
            };
        breedArr.forEach(breed => {
            let list = document.createElement('li');
            list.innerHTML= breed;
        document.querySelector('#dog-breeds').appendChild(list);
        })
    })

//Challenge 3
    .then(() => {
        let breedlist = document.getElementById('dog-breeds').getElementsByTagName('li');
        for (const item of breedlist){
            item.addEventListener("click",()=>{
            item.style.color = 'red';
        })
        }
        })
 
    //Challenge4
    .then(() => {
        let pullDownSelected = document.querySelector('#breed-dropdown');
        pullDownSelected.addEventListener('change', () =>{
            const selectedLetter = pullDownSelected.value;
            let breedlist = document.getElementById('dog-breeds').getElementsByTagName('li');
        for(const item of breedlist){
            const breedName = item.textContent;
            if (breedName.startsWith(selectedLetter)){
                item.style.display = 'block';
            }else{
                item.style.display = 'none';
            }
        }
    })
})
})