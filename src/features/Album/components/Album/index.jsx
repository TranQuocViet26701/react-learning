import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

Album.propTypes = {
  album: PropTypes.object.isRequired,
};

function Album({ album }) {
  return (
    <div className="album">
      <img src={album.thumnailUrl} alt={album.title} />
      <h4>{album.title}</h4>
    </div>
  );
}

export default Album;
