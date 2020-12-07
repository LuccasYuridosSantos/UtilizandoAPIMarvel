const timeStamp = '16073067782'
const apiKey = 'a3c287467be0472dce77d011135215aa'
const md5 = '1ffc79a34a61ed8f6412e0e97b3347b0'

fetch(`https://gateway.marvel.com:443/v1/public/characters?ts=${timeStamp}&apikey=${apiKey}&hash=${md5}&limit=6`
).then((response) => {
    return response.json();
}).then((jsonParsed) => {

    const divHero = document.querySelector('#herois');

    jsonParsed.data.results.forEach(element => {
        const srcImage = element.thumbnail.path + '.' + element.thumbnail.extension
        const nameHero = element.name

        createDivHero(srcImage, nameHero, divHero);
    });

    console.log(jsonParsed);
})

function createDivHero(srcImage, nameHero, divToAppend) {
    const divPai = document.createElement('div')
    const divFilho = document.createElement('div')
    const textName = document.createElement('text')
    const img = document.createElement('img')

    textName.textContent = nameHero
    img.src = srcImage

    divFilho.appendChild(img)
    divFilho.appendChild(textName)
    divPai.appendChild(divFilho)
    divToAppend.appendChild(divPai)

    divPai.classList.add("personagem")

}