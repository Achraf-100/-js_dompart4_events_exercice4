let cible = document.querySelector('#box')

cible.setAttribute('style','height: 500px; width: 500px; border: solid 4px black;')

let rond;
let rouge;

let arrondir = () => {
    cible.setAttribute('style','height: 500px; width: 500px; border: solid 4px black; border-radius: 100%; transition: 3s;')
    cible.setAttribute('id','rond')
    rond = document.querySelector('#rond')
    let rougee = () => {
        cible.setAttribute('style','height: 500px; width: 500px; border: solid 4px black; border-radius: 100%; transition: 3s; background-color: red;')
        cible.setAttribute('id','rouge')
        rouge = document.querySelector('#rouge')
        let back = () => {
            cible.setAttribute('style','height: 500px; width: 500px; border: solid 4px black; transition: 3s;')
            cible.setAttribute('id','box')
            console.log(cible);
            cible = document.querySelector('#box')
            cible.addEventListener('dblclick',arrondir)
        }
        rouge.addEventListener('click', back)
    }
    rond.addEventListener('click',rougee)
}
cible.addEventListener('click',arrondir)