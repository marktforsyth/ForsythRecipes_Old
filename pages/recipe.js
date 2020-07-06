import React, { Component } from 'react'

class Recipe extends Component {
    render() {
        window.scrollTo(0, 0)

        return (
            <div>
                <h1>{this.props.data.title}</h1>
                
                <pre>
                    {this.props.data.body}
                </pre>

                <br />
  
                <p>Created by: {this.props.data.creator}</p>
                <p>Created on: {this.props.data.created}</p>
                <p>Last Edited on: {this.props.data.modified}</p>

                <br />
  
                <button className='return-button' onClick={() => this.props.parentThis.setState({
                  selectedRecipe: null
                })}>
                    <i className='fas fa-arrow-left'></i>
                    <div className='return-home-text'>
                        Return home
                    </div>
                </button>
            </div>
        )
    }
  }

export default Recipe