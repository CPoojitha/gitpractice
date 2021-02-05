//const fetch =require('node-fetch')
class CountryStateService{

    
    getCountryStates=()=>{
       return fetch(`http://localhost:8086/countrystates`)
        .then(response=>response.json())

    }

}

// some updated code
let countryStateService = new CountryStateService();
let countryStates =[]
countryStateService.getCountryStates().then(data=>countryStates = data)

document.getElementById('countries').addEventListener('change',()=>{
    countryStates.forEach(countryStates=>{
        let option = new Option(countryStates.country,countryStates.country)
        document.getElementById('countries').appendChild(option)

    })
})
