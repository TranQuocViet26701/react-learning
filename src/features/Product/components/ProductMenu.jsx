import { Box, Link } from '@mui/material';
import React from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';

function ProductMenu() {
  const { url } = useRouteMatch();

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Box
        component="ul"
        sx={{
          display: 'flex',
          padding: 0,
          listStyleType: 'none',
          justifyContent: 'space-between',
          width: '50%',
          '& > li > a': {
            textDecoration: 'none',
            color: '#000',
            fontSize: '18px',
            fontWeight: '400',
          },

          '& > li > a.active': {
            textDecoration: 'underline',
            color: 'blue',
          },
        }}
      >
        <li>
          <Link exact component={NavLink} to={url}>
            Description
          </Link>
        </li>
        <li>
          <Link component={NavLink} to={`${url}/additional`}>
            Additional
          </Link>
        </li>
        <li>
          <Link component={NavLink} to={`${url}/reviews`}>
            Reviews
          </Link>
        </li>
      </Box>
    </Box>
  );
}

ProductMenu.propTypes = {};

export default ProductMenu;
