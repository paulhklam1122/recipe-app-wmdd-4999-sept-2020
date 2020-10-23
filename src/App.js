import React from 'react'
import './App.css'
import RecipesContainer from './containers/RecipesContainer'

const App = () => (
  <div className='App'>
    <header className='App-header'>
      <h1>Recipe Search</h1>
    </header>
    <RecipesContainer />
  </div>
)

export default App
