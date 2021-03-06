import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'grommet';
import { Star } from 'grommet-icons';

const Favorite = ({ onToggleFavorite, isFavorite }) => {
  const color = isFavorite ? "gold" : "white"

  return (
    <Box className="favorite-container scale-on-hover" title="favorite" onClick={onToggleFavorite}>
      <Star className="favorite-star" color={ color } />
    </Box>
  )
}

Favorite.propTypes = {
  onToggleFavorite: PropTypes.func.isRequired,
  isFavorite: PropTypes.bool.isRequired
}

export default Favorite
