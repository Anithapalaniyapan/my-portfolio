import { Box, Typography, Container, Button, Grid, useMediaQuery, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import CodeIcon from '@mui/icons-material/Code';

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.2 } }
  };

  return (
    <Box
      id="home"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        py: { xs: 10, md: 0 },
        mt: { xs: 4, md: 0 },
      }}
    >
      {/* Enhanced animated background elements */}
      <Box sx={{ position: 'absolute', width: '100%', height: '100%', zIndex: 0 }}>
        {/* Large gradient circle in background */}
        <Box 
          sx={{
            position: 'absolute',
            width: '80vw',
            height: '80vw',
            maxWidth: '1200px',
            maxHeight: '1200px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,128,128,0.08) 0%, rgba(0,128,128,0.02) 70%, rgba(255,255,255,0) 100%)',
            left: '-20vw',
            bottom: '-20vh',
            zIndex: -1,
          }}
        />
        
        {/* Animated floating circles */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            style={{
              position: 'absolute',
              borderRadius: '50%',
              background: 'rgba(0, 128, 128, 0.05)',
              width: Math.random() * 200 + 50,
              height: Math.random() * 200 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              zIndex: -1,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [1, Math.random() * 0.2 + 0.9],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
          />
        ))}
        
        {/* Code-like elements floating in background */}
        {!isMobile && [...Array(6)].map((_, i) => (
          <motion.div
            key={`code-${i}`}
            style={{
              position: 'absolute',
              color: 'rgba(0, 128, 128, 0.1)',
              fontSize: `${Math.random() * 60 + 20}px`,
              left: `${Math.random() * 90 + 5}%`,
              top: `${Math.random() * 90 + 5}%`,
              fontFamily: 'monospace',
              zIndex: -1,
            }}
            animate={{
              y: [0, Math.random() * 30 - 15],
              opacity: [0.5, 0.7, 0.5],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          >
            {['<>', '</>', '{;}', '()', '[]', '//'][i % 6]}
          </motion.div>
        ))}
      </Box>

      <Container maxWidth="lg" sx={{ zIndex: 1 }}>
        <Grid 
          container 
          spacing={4} 
          alignItems="center" 
          direction={isTablet ? 'column-reverse' : 'row'}
          sx={{ 
            justifyContent: isTablet ? 'center' : 'space-between',
          }}
        >
          {/* Text content */}
          <Grid 
            item 
            xs={12} 
            md={7} 
            component={motion.div} 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className={isMobile ? 'mobile-center' : ''}
          >
            <motion.div variants={itemVariants}>
              <Typography
                variant="h5"
                gutterBottom
                sx={{
                  fontWeight: 500,
                  color: 'primary.main',
                  mb: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: isMobile ? 'center' : 'flex-start',
                  gap: 1,
                }}
              >
                <CodeIcon sx={{ fontSize: '1rem' }} /> Hello, I'm
              </Typography>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Typography
                variant="h1"
                gutterBottom
                sx={{
                  fontWeight: 700,
                  background: 'linear-gradient(90deg, #008080 0%, #00b3b3 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  mb: 1,
                  fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
                  textAlign: isMobile ? 'center' : 'left',
                }}
              >
                Anitha Palaniyappan
              </Typography>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Typography
                variant="h4"
                gutterBottom
                sx={{
                  fontWeight: 500,
                  color: 'text.secondary',
                  mb: 2,
                  fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2rem' },
                  textAlign: isMobile ? 'center' : 'left',
                }}
              >
                Frontend Developer
              </Typography>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Typography
                variant="body1"
                paragraph
                sx={{ 
                  maxWidth: '600px', 
                  mb: 3, 
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  mx: isMobile ? 'auto' : 0,
                  textAlign: isMobile ? 'center' : 'left',
                  lineHeight: 1.8,
                }}
              >
                A motivated and passionate Frontend Developer with experience in React, HTML, CSS, and JavaScript. 
                I'm eager to expand my skills, contribute to meaningful projects, and grow in a dynamic development environment.
              </Typography>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Box 
                sx={{ 
                  display: 'flex', 
                  gap: 2, 
                  mb: 4,
                  flexWrap: { xs: 'wrap', sm: 'nowrap' },
                  justifyContent: isMobile ? 'center' : 'flex-start',
                }}
                className={isMobile ? 'mobile-stack' : ''}
              >
                <Button
                  variant="contained"
                  size="large"
                  component={Link}
                  to="contact"
                  smooth={true}
                  duration={500}
                  color="primary"
                  sx={{ 
                    px: 4,
                    py: 1.5,
                    borderRadius: '30px',
                    fontSize: { xs: '0.9rem', md: '1rem' },
                    boxShadow: '0 10px 20px rgba(0, 128, 128, 0.2)',
                    '&:hover': {
                      transform: 'translateY(-3px)',
                      boxShadow: '0 15px 30px rgba(0, 128, 128, 0.3)',
                    },
                    transition: 'all 0.3s ease',
                    width: isMobile ? '100%' : 'auto',
                  }}
                >
                  Contact Me
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  component={Link}
                  to="projects"
                  smooth={true}
                  duration={500}
                  color="primary"
                  sx={{ 
                    px: 4,
                    py: 1.5,
                    borderRadius: '30px',
                    fontSize: { xs: '0.9rem', md: '1rem' },
                    borderWidth: 2,
                    '&:hover': {
                      borderWidth: 2,
                      transform: 'translateY(-3px)',
                      boxShadow: '0 8px 15px rgba(0, 128, 128, 0.1)',
                    },
                    transition: 'all 0.3s ease',
                    width: isMobile ? '100%' : 'auto',
                  }}
                >
                  View Projects
                </Button>
              </Box>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Box 
                sx={{ 
                  display: 'flex', 
                  gap: 2,
                  justifyContent: isMobile ? 'center' : 'flex-start',
                }}
              >
                <IconLink 
                  icon={<LinkedInIcon fontSize="large" />} 
                  href="https://www.linkedin.com/in/anitha-palaniyappan-4159a0298/" 
                  aria-label="LinkedIn"
                />
                <IconLink 
                  icon={<GitHubIcon fontSize="large" />} 
                  href="https://github.com/Anithapalaniyapan" 
                  aria-label="GitHub"
                />
                <IconLink 
                  icon={<EmailIcon fontSize="large" />} 
                  href="mailto:anithapalaniyappan2@gmail.com" 
                  aria-label="Email"
                />
              </Box>
            </motion.div>
          </Grid>

          {/* Profile image */}
          <Grid 
            item 
            xs={12} 
            md={5} 
            sx={{ 
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              mb: { xs: 4, md: 0 },
              mt: { xs: 2, md: 0 },
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                y: [0, -15, 0],
              }}
              transition={{
                duration: 0.8,
                y: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
              style={{
                background: 'linear-gradient(135deg, rgba(0, 128, 128, 0.1) 0%, rgba(0, 128, 128, 0.4) 100%)',
                borderRadius: '50%',
                padding: '20px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                aspectRatio: '1/1',
                position: 'relative',
                maxWidth: isMobile ? '280px' : '400px',
                width: '100%',
              }}
            >
              {/* Orbit effect */}
              <Box
                component={motion.div}
                animate={{ 
                  rotate: 360,
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear"
                }}
                sx={{
                  position: 'absolute',
                  width: '120%',
                  height: '120%',
                  borderRadius: '50%',
                  border: '1px dashed rgba(0, 128, 128, 0.3)',
                }}
              >
                <Box
                  component={motion.div}
                  sx={{
                    width: 15,
                    height: 15,
                    borderRadius: '50%',
                    background: 'rgba(0, 128, 128, 0.5)',
                    position: 'absolute',
                    top: '10%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    boxShadow: '0 0 15px rgba(0, 128, 128, 0.5)',
                  }}
                />
              </Box>

              <Box
                component="img"
                src="/hero-image.jpg"
                alt="Anitha Palaniyappan"
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  boxShadow: '0 20px 30px rgba(0, 0, 0, 0.1)',
                  border: '5px solid rgba(255, 255, 255, 0.8)',
                }}
              />
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

const IconLink = ({ icon, href, ariaLabel }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={ariaLabel}
    whileHover={{ scale: 1.1, boxShadow: '0 5px 15px rgba(0, 128, 128, 0.2)' }}
    whileTap={{ scale: 0.95 }}
    style={{
      color: '#008080',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '48px',
      height: '48px',
      borderRadius: '50%',
      backgroundColor: 'rgba(0, 128, 128, 0.1)',
      textDecoration: 'none',
      transition: 'all 0.3s ease',
    }}
  >
    {icon}
  </motion.a>
);

export default Home; 