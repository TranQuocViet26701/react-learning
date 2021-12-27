import React from 'react';
import Album from '../Album';
import PropTypes from 'prop-types';
import './styles.scss';

AlbumList.propTypes = {
  albums: PropTypes.array.isRequired,
};

function AlbumList({ albums }) {
  return (
    <div>
      <h2>Lựa Chọn Hôm Nay</h2>
      <div className="album-list">
        {albums.map((album) => (
          <Album key={album.idx} album={album} />
        ))}
      </div>
    </div>
  );
}

export default AlbumList;
