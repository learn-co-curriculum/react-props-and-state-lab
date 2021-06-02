import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType = (breed)=> {
    // console.log('onChangeType....',(e.target.value))
    this.setState({
      filters: {type: breed}     
    })
    // ,() => console.log(this.setState)

  }
     

  onFindPetsClick = () => {

    let endpoint = '/api/pets'
    if (this.state.filters.type !== 'all'){
      endpoint += `?type=${this.state.filters.type}`
    }
    //filtered endpoint ="/api/pets?type=cat"
    // to do add filter functionality
    fetch(endpoint)
    .then(res => res.json())
    .then(data => {
      this.setState({
        pets: data
      })
    })
  }

  onAdoptPet = (petId) => {
    //To do
    //find matching pet
    const updatedPets = this.state.pets.map(pet => {
      return pet.id === petId ? {...pet, isAdopted: true} : pet
    })
    this.setState({
      pets: updatedPets
    })

  }

  // componentDidMount(){
  //   this.onFindPetsClick()
  // }

  // onFindPetsClick = (e) =>{
  //   // console.log(' find pets on click...')
   
  //   const { type } = this.state.filters

  //   const url = (type === 'all') ? '/api/pets' : `/api/pets?type=${type}`
  //   fetch(url)
  //   .then(resp => resp.json())
  //   .then(petsArr=>{
  //     // console.log(data, '....')
  //     this.setState({
  //       pets: petsArr
  //     })
  //   })
  // }


 

  
  // onAdoptPet = (id) =>{
  //   console.log( 'adopt pet.......')
     
  //    const updatePets = this.state.pets.map(petObj => {
  //      if (petObj.id === id){
        
  //        return {
  //          ...petObj,
  //          isAdopted: true
  //        } 
  //       } else {
  //          return petObj
  //       }
  //    })

  //     this.setState({
  //         pets:updatePets
  //     })
       
  // }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters 
              onChangeType={this.onChangeType}
              onFindPetsClick={this.onFindPetsClick}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets}  onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App

