import React from 'react';
import classes from '../App.module.css';
import logo from '../img/logo.png';
import likeIcon from '../img/like.png';

import SearchForm from '../containers/SearchForm';
import LikedRecipes from './LikedRecipe/LikedRecipes';

const Header =({onQuerySubmit, likedRecipes, onRecipeClick}) => {
  return (
    <header className={classes.header}>
      <img src={logo} alt='Logo' className={classes.header__logo} />
      <SearchForm onQuerySubmit={onQuerySubmit} />
      <div className={classes.likes}>
        <div className={classes.likes__field}>
          <img className={classes.likes__icon} src={likeIcon} alt='Like' />
        </div>
        <div className={classes.likes__panel}>
          <LikedRecipes likedRecipes={likedRecipes} onRecipeClick={onRecipeClick}/>
        </div>
      </div>
    </header>
  );
};

export default Header;
