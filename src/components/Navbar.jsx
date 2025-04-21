// c:\Users\habte\OneDrive\Desktop\New folder\src\components\Navbar.jsx
import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
  Link,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import HomeIcon from '@mui/icons-material/Home';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import InfoIcon from '@mui/icons-material/Info';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import PeopleIcon from '@mui/icons-material/People';
import { RiTiktokFill } from 'react-icons/ri';
import { useTheme } from '@mui/material/styles';

// Define pages WITH icons (assuming this is the intended version)
const pages = [
  { title: 'Home', path: '/', icon: <HomeIcon /> },
  { title: 'Services', path: '/services', icon: <MedicalServicesIcon /> },
  { title: 'About Us', path: '/about', icon: <InfoIcon /> },
  { title: 'Gallery', path: '/gallery', icon: <PhotoLibraryIcon /> },
  { title: 'Testimonials', path: '/testimonials', icon: <PeopleIcon /> },
  { title: 'Contact', path: '/contact', icon: <PhoneIcon /> },
];

// Define the Navbar component ONCE
function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md')); // Detect mobile screens

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box>
      {/* Second Header */}
      <Box
        sx={{
          bgcolor: '#6BA8A9',
          color: 'white',
          py: 0.5,
          position: 'fixed',
          top: 0,
          width: '100%',
          zIndex: 1100,
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          {/* Phone Number */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <PhoneIcon sx={{ fontSize: '1rem', mr: 0.5 }} />
            <Link
              href="tel:0921482071"
              sx={{
                color: 'white',
                textDecoration: 'none',
                fontSize: '0.875rem',
              }}
            >
              0921482071
            </Link>
          </Box>

          {/* Social Media Icons */}
          <Box sx={{ display: 'flex', gap: 1 }}>
            <IconButton
              href="https://facebook.com"
              target="_blank"
              rel="noopener"
              sx={{ color: 'white' }}
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              href="https://twitter.com"
              target="_blank"
              rel="noopener"
              sx={{ color: 'white' }}
            >
              <TwitterIcon />
            </IconButton>
            <IconButton
              href="https://instagram.com"
              target="_blank"
              rel="noopener"
              sx={{ color: 'white' }}
            >
              <InstagramIcon />
            </IconButton>
            <IconButton
              href="https://tiktok.com"
              target="_blank"
              rel="noopener"
              sx={{ color: 'white' }}
            >
              <RiTiktokFill size={24} />
            </IconButton>
          </Box>
        </Container>
      </Box>

      {/* Main Navigation */}
      <AppBar
        position="fixed"
        elevation={1}
        sx={{
          bgcolor: '#FFFFFF',
          top: '40px', // Adjust if you have a second header
          zIndex: 1099,
          height: '80px', // Set a fixed height for the header
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ height: '80px' }}>
            {/* Logo */}
            <Box
              component={RouterLink}
              to="/"
              sx={{
                mr: 2,
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none',
                height: '100%', // Ensures the logo aligns with the header height
              }}
            >
              <Box
                component="img"
                src="/images/logo.png"
                alt="Abenezer Dental Logo"
                sx={{
                  height: '100%', // Fills the height of the header
                  width: 'auto', // Maintains the aspect ratio
                }}
              />
            </Box>

            {/* Mobile Icon Buttons */}
            {isMobile && (
              <Box sx={{ display: 'flex', gap: 1, ml: 'auto' }}>
                {pages.map((page) => (
                  <IconButton
                    key={page.title}
                    component={RouterLink}
                    to={page.path}
                    sx={{
                      color: '#1E3A8A',
                      '&:hover': { color: '#DAA520' },
                    }}
                  >
                    {page.icon} {/* Ensure page array has icons */}
                  </IconButton>
                ))}
                 {/* Request Appointment Button for Mobile (Inside Icons section if desired) */}
                 {/* Consider if you want this button here or only in the hamburger menu */}
                 {/* <Button
                    component={RouterLink}
                    to="/contact"
                    variant="contained"
                    size="small" // Maybe smaller for mobile icon bar
                    sx={{
                      bgcolor: '#1E3A8A',
                      '&:hover': { bgcolor: '#2563EB' },
                      color: '#FFFFFF',
                      // Adjust styling as needed
                    }}
                  >
                    Book
                  </Button> */}
              </Box>
            )}


            {/* Hamburger Menu for Mobile */}
            <Box
              sx={{
                // flexGrow: 1, // Removed flexGrow to allow Mobile Icon Buttons and Hamburger to coexist better if needed
                display: { xs: 'flex', md: 'none' },
                justifyContent: 'flex-end',
                ml: isMobile ? 1 : 'auto', // Add some margin if mobile icons are present
              }}
            >
              <IconButton
                size="large"
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                sx={{
                  color: '#1E3A8A',
                }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right', // Changed to right to align with icon
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right', // Changed to right to align with icon
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem
                    key={page.title}
                    onClick={handleCloseNavMenu}
                    component={RouterLink}
                    to={page.path}
                  >
                    {/* Optionally add icons here too */}
                    {/* {page.icon && <ListItemIcon>{page.icon}</ListItemIcon>} */}
                    <Typography textAlign="center">{page.title}</Typography>
                  </MenuItem>
                ))}
                 {/* Add the button inside the hamburger menu for mobile */}
                 <MenuItem onClick={handleCloseNavMenu} sx={{ justifyContent: 'center', p: 1 }}>
                  <Button
                    component={RouterLink}
                    to="/contact"
                    variant="contained"
                    sx={{
                      bgcolor: '#1E3A8A',
                      '&:hover': { bgcolor: '#2563EB' },
                      color: '#FFFFFF',
                      width: '90%', // Make it slightly less than full width
                    }}
                  >
                    Request Appointment
                  </Button>
                </MenuItem>
              </Menu>
            </Box>

            {/* Desktop Menu */}
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: 'none', md: 'flex' },
                justifyContent: 'center', // Center the desktop links
                alignItems: 'center', // Vertically align items
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page.title}
                  component={RouterLink}
                  to={page.path}
                  onClick={handleCloseNavMenu} // Close menu if open (though unlikely needed here)
                  sx={{
                    mx: 1.5, // Adjust spacing
                    my: 2, // MUI default, keeps vertical alignment
                    color: '#1E3A8A',
                    display: 'block',
                    fontSize: '1rem', // Ensure consistent font size
                    fontWeight: 'medium', // Adjust weight if needed
                    '&:hover': {
                      color: '#DAA520',
                      backgroundColor: 'transparent', // Prevent default hover background
                     },
                  }}
                >
                  {page.title}
                </Button>
              ))}
            </Box>

            {/* Request Appointment Button for Desktop */}
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}> {/* Wrap button for consistent layout */}
              <Button
                  component={RouterLink}
                  to="/contact"
                  variant="contained"
                  sx={{
                    bgcolor: '#1E3A8A',
                    '&:hover': { bgcolor: '#2563EB' },
                    color: '#FFFFFF',
                    ml: 2, // Keep margin from nav links
                  }}
                >
                  Request Appointment
              </Button>
            </Box>

          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}

// Export the component ONCE
export default Navbar;
