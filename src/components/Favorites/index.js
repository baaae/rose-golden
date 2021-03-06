import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'grommet';
import { Star } from 'grommet-icons';

const Favorites = ({ onClick, isShowingFavorites }) => {

  return (
    <Button
      plain
      hoverIndicator
      color="dark-1"
      title="Toggle Favorites"
      icon={<Star color={isShowingFavorites ? "gold" : null}/>}
      label="Favorites"
      onClick={ onClick }
      margin={{left: "small"}}
      gap="xsmall"
      active={isShowingFavorites ? true : false}
    />
  )
}

Favorites.propTypes = {
  onClick: PropTypes.func.isRequired,
  isShowingFavorites: PropTypes.bool.isRequired
}

export default Favorites
