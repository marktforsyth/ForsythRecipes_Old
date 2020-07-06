import React, { Component } from 'react'

import Recipe from './recipe'

import Recipes from '../data/recipes.json'

class HomePage extends Component {
  constructor() {
      super()

      this.state = {
        selectedRecipe: null
      }
  }

  render() {
    if (this.state.selectedRecipe !== null) {
      return (
        <div className='page-container'>
          <div className='middle-column'>
            <Recipe data={Recipes[this.state.selectedRecipe]} parentThis={this} />
          </div>
        </div>
      )
    }

    const recipeTitles = Object.keys(Recipes)

    return (
      <div>
        <div className='page-container'>
          <div className='middle-column'>
            {recipeTitles.map(title => {
              return (
                <div className='recipe-button-container'>
                  <button className='recipe-button' key={title} onClick={() => this.setState({
                    selectedRecipe: title
                  })}>{title}</button>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default HomePage
// Homework: spice up with css