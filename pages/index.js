import React, { Component } from 'react'

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
        <div>
        <Recipe data={Recipes[this.state.selectedRecipe]} />
        <button onClick={() => this.setState({
          selectedRecipe: null
        })}>
          To return home, click here
        </button>
        </div>
      )
    }

    const recipeTitles = Object.keys(Recipes)

    return (
      <div>

        {recipeTitles.map(title => {
          return <button key={title} onClick={() => this.setState({
            selectedRecipe: title
          })}>{title}</button>
        })}
      </div>
    )
  }
}

class Recipe extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.data.title}</h1>
        <pre>
          {this.props.data.body}
        </pre>
        <div>Created by: {this.props.data.creator}</div>
        <p>Created on: {this.props.data.created}</p>
        <p>Last Edited on: {this.props.data.modified}</p>
      </div>
    )
  }
}

export default HomePage

// Homework: spice up with css