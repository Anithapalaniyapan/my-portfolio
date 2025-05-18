import { Box, Typography, Container, Button } from '@mui/material';
import { motion } from 'framer-motion';
import DownloadIcon from '@mui/icons-material/Download';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf'; 
    link.download = 'Anitha_Palaniyappan_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Box
      id="about"
      sx={{
        py: { xs: 8, md: 10 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Enhanced animated background elements */}
      <Box sx={{ position: 'absolute', width: '100%', height: '100%', zIndex: 0 }}>
        {/* Large gradient shape in background */}
        <Box 
          sx={{
            position: 'absolute',
            width: '70vw',
            height: '70vw',
            maxWidth: '1000px',
            maxHeight: '1000px',
            borderRadius: '40% 60% 60% 40% / 60% 30% 70% 40%',
            background: 'radial-gradient(circle, rgba(0,128,128,0.04) 0%, rgba(0,128,128,0.01) 70%, rgba(255,255,255,0) 100%)',
            left: '-30vw',
            top: '20vh',
            zIndex: -1,
            transform: 'rotate(45deg)',
          }}
        />
        
        {/* Animated floating shapes */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            style={{
              position: 'absolute',
              borderRadius: i % 3 === 0 ? '50%' : i % 3 === 1 ? '30% 70% 70% 30% / 30% 30% 70% 70%' : '20%',
              background: `rgba(0, 128, 128, 0.0${Math.floor(Math.random() * 4) + 1})`,
              width: Math.random() * 200 + 50,
              height: Math.random() * 200 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              zIndex: -1,
            }}
            animate={{
              x: [0, Math.random() * 50 - 25],
              y: [0, Math.random() * 50 - 25],
              rotate: [0, Math.random() * 360],
            }}
            transition={{
              duration: Math.random() * 25 + 15,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
          />
        ))}
        
        {/* Code-like floating elements */}
        {!isMobile && [...Array(4)].map((_, i) => (
          <motion.div
            key={`code-${i}`}
            style={{
              position: 'absolute',
              color: 'rgba(0, 128, 128, 0.07)',
              fontSize: `${Math.random() * 40 + 20}px`,
              left: `${Math.random() * 90 + 5}%`,
              top: `${Math.random() * 90 + 5}%`,
              fontFamily: 'monospace',
              zIndex: -1,
            }}
            animate={{
              y: [0, Math.random() * 30 - 15],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          >
            {['{ }', '< />', '( )', '// ...'][i % 4]}
          </motion.div>
        ))}
      </Box>

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className={isMobile ? 'mobile-center' : ''}
        >
          <Typography
            variant="h2"
            align="center"
            gutterBottom
            sx={{
              fontWeight: 700,
              mb: { xs: 4, md: 6 },
              position: 'relative',
              display: 'inline-block',
              left: '50%',
              transform: 'translateX(-50%)',
              fontSize: { xs: '2.2rem', md: '2.5rem' },
              '&:after': {
                content: '""',
                position: 'absolute',
                width: '80px',
                height: '4px',
                bottom: '-10px',
                left: '50%',
                transform: 'translateX(-50%)',
                backgroundColor: 'primary.main',
              },
            }}
          >
            About Me
          </Typography>
        </motion.div>

        {/* Main about section with simplified content */}
        <Box 
          sx={{ 
            maxWidth: '800px', 
            mx: 'auto', 
            textAlign: 'center',
            mb: 6
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Typography 
              variant="body1" 
              paragraph
              sx={{ 
                fontSize: { xs: '1.1rem', md: '1.2rem' },
                lineHeight: 1.8,
                mb: 3
              }}
            >
              I'm a detail-oriented Frontend Developer with a strong foundation in React, JavaScript, HTML5, and CSS3. My passion lies in creating responsive, intuitive, and visually appealing web applications that provide exceptional user experiences. During my 6-month Inplant Training, I developed practical skills building interactive interfaces and collaborating with design and backend teams.
            </Typography>

            <Typography 
              variant="body1" 
              paragraph
              sx={{ 
                fontSize: { xs: '1.1rem', md: '1.2rem' },
                lineHeight: 1.8,
                mb: 3
              }}
            >
              My technical toolkit includes React.js, Redux for state management, Material UI and Tailwind CSS for styling, and responsive design principles. I'm proficient with modern JavaScript (ES6+), and have experience with version control using Git. I'm particularly interested in frontend animation libraries like Framer Motion to create engaging, dynamic user interfaces.
            </Typography>

            <Typography 
              variant="body1" 
              paragraph
              sx={{ 
                fontSize: { xs: '1.1rem', md: '1.2rem' },
                lineHeight: 1.8,
                mb: 3
              }}
            >
              I'm committed to continuous learning and staying updated with the latest web technologies and best practices. As I begin my professional journey, I'm eager to join a collaborative team where I can contribute my skills, learn from experienced developers, and grow into a well-rounded frontend specialist.
            </Typography>

            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  startIcon={<DownloadIcon />}
                  onClick={handleDownloadResume}
                  sx={{ 
                    borderRadius: '30px',
                    px: 3,
                    py: 1.5,
                    boxShadow: '0 10px 20px rgba(0, 128, 128, 0.2)',
                    '&:hover': {
                      boxShadow: '0 15px 30px rgba(0, 128, 128, 0.3)',
                    },
                    transition: 'all 0.3s ease'
                  }}
                >
                  Download Resume
                </Button>
              </motion.div>
            </Box>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default About; 