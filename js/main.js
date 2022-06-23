fetch('https://restcountries.com/v3.1/all')
.then(Response => Response.json())
.then(data => {
    renderCountries(data.slice(0, 50))
})

const elList = document.querySelector('.main__list')
const elTemplate = document.querySelector('.template').content
const elListItem = document.querySelector('.main__list-item')
const elItemLink = document.querySelector('.main__item-link')

const renderCountries = (data) => {
    console.log(data)
    // const {name, population, region, capital} = data
    const dataFragment = document.createDocumentFragment();
    const dataLength = data.slice(0, 50).length
    console.log(dataLength)
    

    data.forEach((dataLength) => {
        const newTemplate = elTemplate.cloneNode(true) 
        newTemplate.querySelector('.main__item-link-img').src = dataLength.flags.svg
        newTemplate.querySelector('.main__item-link-heading').textContent = dataLength.name.common
        newTemplate.querySelector('#desc1').textContent ="Population:" + ' ' +dataLength.population
        newTemplate.querySelector('#desc2').textContent ="Region:"+'  ' + dataLength.region
        newTemplate.querySelector('#desc3').textContent ="Capital:"+ '  ' + dataLength.capital 
        dataFragment.append(newTemplate)
        
        dataFragment.append(newTemplate)
        elList.append(dataFragment)
    })
    
}
