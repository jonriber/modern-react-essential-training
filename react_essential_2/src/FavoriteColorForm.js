import React,{Component} from 'react';
//this new class uses value as state to update form
class FavoriteColorForm extends Component {
    state= {value:''}
  
    newColor = e => this.setState({value: e.target.value})
  
    submit = e => {
      console.log(`New color: ${this.state.value}`)
      e.preventDefault()
    }
  render() {
    return(
      <form onSubmit={this.submit}>
        <label>
          Favorite Color:
          <input type='color' onChange={this.newColor}/>
        </label>
        <button> Submit</button>
      </form>
    )
  }
  
  };

  export default FavoriteColorForm;