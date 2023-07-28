import React from 'react'
import Banner from '../Banner'
import CardsList from '../CardsList'

function Home() {
  return (
    <div>
      <Banner activeLink="Accueil" />
      <CardsList />
    </div>
  )
}

export default Home
