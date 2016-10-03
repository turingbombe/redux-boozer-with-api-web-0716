import React from 'react';
import * as actions from '../actions'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

class CocktailsNew extends React.Component{
	
	onCocktailAdd(event){
		event.preventDefault()
		console.log(this.refs.name.value)
		const cocktail = {name: this.refs.name.value, description: this.refs.desc.value, instructions: this.refs.inst.value, source: this.refs.source.value}
		this.props.actions.createCocktail(cocktail)
	}

	render(){
		return(
			<div>
				<form onSubmit= {this.onCocktailAdd.bind(this)}>
					<h3>Enter your new cocktail</h3> <br />
					<label>Name:</label>
					<input type = 'text' ref='name' /> <br />
					<label>Description:</label>
					<input type ='text' ref = 'desc' /> <br />
					<label>Instructions:</label>
					<input type= 'text' ref = 'inst' /> <br />
					<label>Source:</label>
					<input type = 'text' ref = 'source' /> <br />
					<input type= 'submit' />
				</form>
			</div>
		)
	}
}

function mapDispatchToProps(dispatch){
	return {actions: bindActionCreators(actions, dispatch)}
}

const componentCreator = connect(null, mapDispatchToProps)
export default componentCreator(CocktailsNew)