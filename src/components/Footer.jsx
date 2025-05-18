import { Box, Container, Typography, IconButton, Divider } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        bgcolor: '#f5f5f5',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Typography 
              variant="h6" 
              component="div" 
              sx={{ 
                fontWeight: 'bold', 
                color: '#008080',
                mb: { xs: 2, md: 0 },
              }}
            >
              Anitha Palaniyappan
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton 
                href="https://www.linkedin.com/in/anitha-palaniyappan/"
                target="_blank"
                aria-label="LinkedIn"
                sx={{ 
                  color: '#008080',
                  '&:hover': {
                    backgroundColor: 'rgba(0, 128, 128, 0.1)',
                  },
                }}
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton 
                href="https://github.com/"
                target="_blank"
                aria-label="GitHub"
                sx={{ 
                  color: '#008080',
                  '&:hover': {
                    backgroundColor: 'rgba(0, 128, 128, 0.1)',
                  },
                }}
              >
                <GitHubIcon />
              </IconButton>
              <IconButton 
                href="mailto:anithapalaniyappan2@gmail.com"
                aria-label="Email"
                sx={{ 
                  color: '#008080',
                  '&:hover': {
                    backgroundColor: 'rgba(0, 128, 128, 0.1)',
                  },
                }}
              >
                <EmailIcon />
              </IconButton>
            </Box>
          </motion.div>
        </Box>

        <Divider sx={{ my: 3, borderColor: 'rgba(0, 128, 128, 0.1)' }} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              justifyContent: 'space-between',
              alignItems: 'center',
              textAlign: { xs: 'center', sm: 'left' },
            }}
          >
            <Typography variant="body2" color="text.secondary">
              © {currentYear} Anitha Palaniyappan. All rights reserved.
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: { xs: 1, sm: 0 } }}>
              Made with ❤️ using React and Material UI
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Footer; 