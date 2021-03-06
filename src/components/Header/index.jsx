import { Close as CloseIcon, Menu as MenuIcon } from '@mui/icons-material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Button,
  Container,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import * as React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import Login from '../../features/Auth/components/Login';
import Register from '../../features/Auth/components/Register';
import { logout } from '../../features/Auth/userSlice';
import { cartItemsCountSelector } from '../../features/Cart/selectors';

const pages = [
  {
    name: 'Product',
    to: '/products',
  },
];

const MODE = {
  LOGIN: 'login',
  REGISTER: 'register',
};

function Header(props) {
  const user = useSelector((state) => state.user);
  const cartItemsCount = useSelector(cartItemsCountSelector);
  const dispatch = useDispatch();
  const { current } = user;
  const isLoggedIn = !!current.id;
  const history = useHistory();

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const anchorElOpen = Boolean(anchorEl);
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState(MODE.LOGIN);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // handle Menu's User
  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleClickOpenDialog = () => {
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };

  const handleLogoutClick = () => {
    const action = logout();
    dispatch(action);

    setAnchorEl(null);
  };

  const handleCartClick = () => {
    history.push('/cart');
  };

  return (
    <AppBar position='static'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Typography
            variant='h6'
            noWrap
            component='div'
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            <NavLink to='/' style={{ textDecoration: 'none', color: '#fff' }}>
              HappyShop
            </NavLink>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Typography textAlign='center'>
                    <NavLink to={page.to}>{page.name}</NavLink>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant='h6'
            noWrap
            component='div'
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            <NavLink to='/' style={{ textDecoration: 'none', color: '#fff' }}>
              HappyShop
            </NavLink>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Box
                key={page.name}
                sx={{
                  '& > a': {
                    textDecoration: 'none',
                  },
                }}
              >
                <NavLink to={page.to}>
                  <Button sx={{ color: '#fff' }}>{page.name}</Button>
                </NavLink>
              </Box>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {isLoggedIn && (
              <Tooltip title='Open settings'>
                <IconButton onClick={handleOpenMenu} sx={{ p: 0 }}>
                  <Avatar
                    alt={current.fullName}
                    src='/static/images/avatar/2.jpg'
                  />
                </IconButton>
              </Tooltip>
            )}

            <IconButton
              size='large'
              aria-label=''
              color='inherit'
              onClick={handleCartClick}
            >
              <Badge badgeContent={cartItemsCount} color='error'>
                <ShoppingCartIcon />
              </Badge>
            </IconButton>

            {!isLoggedIn && (
              <Button sx={{ color: '#fff' }} onClick={handleClickOpenDialog}>
                Login
              </Button>
            )}

            {/* Menu */}
            <Menu
              anchorEl={anchorEl}
              open={anchorElOpen}
              onClose={handleCloseMenu}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
            >
              <MenuItem onClick={handleCloseMenu}>My account</MenuItem>
              <MenuItem onClick={handleLogoutClick}>Logout</MenuItem>
            </Menu>

            {/* Dialog form */}
            <Dialog
              open={open}
              aria-labelledby='alert-dialog-title'
              aria-describedby='alert-dialog-description'
            >
              <IconButton
                aria-label='close'
                onClick={handleCloseDialog}
                sx={{
                  position: 'absolute',
                  right: 10,
                  top: 10,
                  color: (theme) => theme.palette.grey[500],
                }}
              >
                <CloseIcon />
              </IconButton>
              <DialogContent>
                {mode === MODE.REGISTER && (
                  <>
                    <Register onCloseDialog={handleCloseDialog} />

                    <Box textAlign='center'>
                      <Link
                        component='button'
                        variant='body1'
                        underline='none'
                        onClick={() => setMode(MODE.LOGIN)}
                      >
                        Already have an account? Login here.
                      </Link>
                    </Box>
                  </>
                )}

                {mode === MODE.LOGIN && (
                  <>
                    <Login onCloseDialog={handleCloseDialog} />

                    <Box textAlign='center'>
                      <Link
                        component='button'
                        variant='body1'
                        underline='none'
                        onClick={() => setMode(MODE.REGISTER)}
                      >
                        Don't have an account? Register here.
                      </Link>
                    </Box>
                  </>
                )}
              </DialogContent>
            </Dialog>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

Header.propTypes = {};

export default Header;
