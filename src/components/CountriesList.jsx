import React from 'react'

function CountriesList({country}) {

  const [name, alpha3Code] = country;



  return (
    <div>
      <div>
        <h3>{name.common}</h3>
      </div>
    </div>
  )
}

export default CountriesList