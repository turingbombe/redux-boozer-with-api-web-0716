import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

function CocktailsIndex (props) {
  const renderCocktails = (cocktail) => {
    return (<li key={cocktail.id}>
      <Link to={`/cocktails/${cocktail.id}`}>
        {cocktail.name}
      </Link>
    </li>)
  }

  return (
  <div>
    <div className='col-md-4'>
      <Link to='/cocktails/new'>Add A New Cocktail</Link>
      <ul>
        {props.cocktails.map(renderCocktails)}
      </ul>
    </div>
    <div className='col-md-8'>
      {props.children}
    </div>
  </div>
)
};

function mapStateToProps(state){
  return {
    cocktails: state.cocktails
  }
}

const componentCreator = connect(mapStateToProps)
export default componentCreator(CocktailsIndex);
