import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  render() {
    const petCards = this.props.pets.map(pet => (
      <Pet key={pet.id} pet={pet} onAdoptPet={this.props.onAdoptPet} />
    ))
    return <div className="ui cards">
      {petCards}  
    </div>
  }

  // renderPets = () =>{
  //   return this.props.pets.map(petObj => {
  //     return <Pet key={petObj.id} id={petObj.id} pet={petObj} {...petObj}  onAdoptPet ={this.props.onAdoptPet}/>
  //   })
  // }
  
  
}

export default PetBrowser
