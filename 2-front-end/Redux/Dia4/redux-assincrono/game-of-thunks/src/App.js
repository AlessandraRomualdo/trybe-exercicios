// import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { thunkFetch } from './redux/actions'
import './index.css'

class App extends Component {
  state = {
    name: '',
  };

  handleChange = ({target}) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  seekInformation = (character) => {
    const { dispatch } = this.props;
    dispatch(thunkFetch(character));
  };

  render() {
    const { name } = this.state;
    const { character, isLoading } = this.props;
    return (
      <div className='App'>
        <h1>Game of Thunks</h1>

        <input type="text" name="name" onChange={ this.handleChange } value={ name } />

        <div>
          <button type="button" onClick={ () => this.seekInformation(name)}>Search character</button>
        </div>

        <section>
          { isLoading && <p>Carregando ...</p> }
         { character && 
         <div>
           <h3>{ character.name}</h3>
           <p>{character.gender}</p>
           <p>{character.culture}</p>
           <ul type="none" >
            <strong>Titulos:</strong>
           {character.titles.map((title, index) => (
                  <li key={`${title}-${index}`}>{title}</li>
                ))}
           </ul>
           <ul type="none">
            <strong>Alianças:</strong>
           {character.aliases.map((aliase, index) => (
                  <li key={`${aliase}-${index}`}>{aliase}</li>
                ))}
           </ul>
         </div>}
        </section>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
  character: state.character,
});

export default connect(mapStateToProps)(App)