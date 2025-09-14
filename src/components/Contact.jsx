import { useState } from 'react';
import { 
  Box, 
  Typography, 
  Container, 
  Grid, 
  TextField, 
  Button, 
  Paper, 
  InputAdornment,
  FormHelperText,
  Alert,
  CircularProgress
} from '@mui/material';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import SendIcon from '@mui/icons-material/Send';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [showGeneralError, setShowGeneralError] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  const validate = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validate()) {
      setShowGeneralError(false);
      setLoading(true);

      try {
        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        const templateParams = {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'anithapalaniyappan2@gmail.com',
          // Alternate keys to match any legacy template variables
          name: formData.name,
          email: formData.email,
          title: 'Contact Us',
          contact: 'Contact Us',
          Contact: 'Contact Us'
        };

        const result = await emailjs.send(
          serviceId,
          templateId,
          templateParams,
          publicKey
        );

        if (result.status === 200) {
          setSubmitStatus('success');
          setFormData({
            name: '',
            email: '',
            message: '',
          });
        } else {
          setSubmitStatus('error');
          setShowGeneralError(true);
        }
      } catch (error) {
        setSubmitStatus('error');
        setShowGeneralError(true);
        console.error('Error sending email with EmailJS:', error);
      } finally {
        setLoading(false);
      }
    } else {
      setShowGeneralError(true);
    }
  };

  return (
    <Box
      id="contact"
      sx={{
        py: 10,
        bgcolor: '#f9f9f9',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Animated background elements */}
      <Box sx={{ position: 'absolute', width: '100%', height: '100%', zIndex: 0 }}>
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            style={{
              position: 'absolute',
              background: 'rgba(0, 128, 128, 0.04)',
              width: Math.random() * 200 + 50,
              height: Math.random() * 200 + 50,
              borderRadius: '30%',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 50 - 25],
              y: [0, Math.random() * 50 - 25],
              rotate: [0, Math.random() * 60 - 30],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
          />
        ))}
      </Box>

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            align="center"
            gutterBottom
            sx={{
              fontWeight: 700,
              mb: 6,
              position: 'relative',
              display: 'inline-block',
              left: '50%',
              transform: 'translateX(-50%)',
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
            Contact Me
          </Typography>
        </motion.div>

        <Grid container spacing={5}>
          {/* Contact Info */}
          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
                Get In Touch
              </Typography>
              <Typography variant="body1" paragraph sx={{ mb: 4 }}>
                Feel free to contact me for any questions or opportunities. I'm always open
                to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </Typography>

              <Box sx={{ mb: 4 }}>
                <Paper 
                  elevation={0} 
                  sx={{ 
                    p: 3, 
                    mb: 3, 
                    borderRadius: 2, 
                    border: '1px solid #eaeaea',
                    transition: '0.3s',
                    '&:hover': {
                      boxShadow: '0 5px 15px rgba(0, 128, 128, 0.1)',
                      transform: 'translateY(-3px)',
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box 
                      sx={{ 
                        borderRadius: '50%', 
                        backgroundColor: 'rgba(0, 128, 128, 0.1)', 
                        width: 40, 
                        height: 40,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mr: 2
                      }}
                    >
                      <EmailIcon sx={{ color: 'primary.main' }} />
                    </Box>
                    <Box>
                      <Typography variant="body2" color="text.secondary">
                        Email
                      </Typography>
                      <Typography variant="body1" sx={{ fontWeight: 500 }}>
                        <a 
                          href="mailto:anithapalaniyappan2@gmail.com" 
                          style={{ color: '#008080', textDecoration: 'none' }}
                        >
                          anithapalaniyappan2@gmail.com
                        </a>
                      </Typography>
                    </Box>
                  </Box>
                </Paper>

                <Paper 
                  elevation={0} 
                  sx={{ 
                    p: 3, 
                    mb: 3, 
                    borderRadius: 2, 
                    border: '1px solid #eaeaea',
                    transition: '0.3s',
                    '&:hover': {
                      boxShadow: '0 5px 15px rgba(0, 128, 128, 0.1)',
                      transform: 'translateY(-3px)',
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box 
                      sx={{ 
                        borderRadius: '50%', 
                        backgroundColor: 'rgba(0, 128, 128, 0.1)', 
                        width: 40, 
                        height: 40,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mr: 2
                      }}
                    >
                      <LocationOnIcon sx={{ color: 'primary.main' }} />
                    </Box>
                    <Box>
                      <Typography variant="body2" color="text.secondary">
                        Location
                      </Typography>
                      <Typography variant="body1" sx={{ fontWeight: 500 }}>
                        Namakkal, Tamil Nadu, India
                      </Typography>
                    </Box>
                  </Box>
                </Paper>

                <Paper 
                  elevation={0} 
                  sx={{ 
                    p: 3, 
                    borderRadius: 2, 
                    border: '1px solid #eaeaea',
                    transition: '0.3s',
                    '&:hover': {
                      boxShadow: '0 5px 15px rgba(0, 128, 128, 0.1)',
                      transform: 'translateY(-3px)',
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box 
                      sx={{ 
                        borderRadius: '50%', 
                        backgroundColor: 'rgba(0, 128, 128, 0.1)', 
                        width: 40, 
                        height: 40,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mr: 2
                      }}
                    >
                      <LinkedInIcon sx={{ color: 'primary.main' }} />
                    </Box>
                    <Box>
                      <Typography variant="body2" color="text.secondary">
                        LinkedIn
                      </Typography>
                      <Typography variant="body1" sx={{ fontWeight: 500 }}>
                        <a 
                          href="https://www.linkedin.com/in/anitha-palaniyappan-4159a0298/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          style={{ color: '#008080', textDecoration: 'none' }}
                        >
                          linkedin.com/in/anitha-palaniyappan
                        </a>
                      </Typography>
                    </Box>
                  </Box>
                </Paper>
              </Box>
            </motion.div>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} md={7}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Paper
                component="form"
                onSubmit={handleSubmit}
                elevation={0}
                sx={{
                  p: { xs: 3, md: 4 },
                  borderRadius: 4,
                  border: '1px solid rgba(0, 128, 128, 0.2)',
                  background: 'linear-gradient(145deg, #ffffff, rgba(0, 128, 128, 0.05))',
                  position: 'relative',
                  overflow: 'hidden',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                }}
              >
                {/* Decorative elements */}
                <Box
                  sx={{
                    position: 'absolute',
                    width: '150px',
                    height: '150px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(0, 128, 128, 0.1) 0%, rgba(0, 128, 128, 0) 70%)',
                    top: '-50px',
                    right: '-50px',
                    zIndex: 0,
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(0, 128, 128, 0.08) 0%, rgba(0, 128, 128, 0) 70%)',
                    bottom: '-30px',
                    left: '-30px',
                    zIndex: 0,
                  }}
                />

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="content"
                  style={{ position: 'relative', zIndex: 1 }}
                >
                  <Box sx={{ mb: 4, display: 'flex', alignItems: 'center' }}>
                    <Box 
                      sx={{ 
                        borderRadius: '50%', 
                        background: 'linear-gradient(135deg, #008080 0%, #66CDAA 100%)',
                        width: 48, 
                        height: 48,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mr: 2,
                        boxShadow: '0 4px 10px rgba(0, 128, 128, 0.3)',
                      }}
                    >
                      <SendIcon sx={{ color: 'white' }} />
                    </Box>
                    <Typography 
                      variant="h4" 
                      sx={{ 
                        fontWeight: 600, 
                        background: 'linear-gradient(90deg, #008080 0%, #20B2AA 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        textShadow: '0 2px 4px rgba(0,0,0,0.1)'
                      }}
                    >
                      Send a Message
                    </Typography>
                  </Box>

                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                      >
                        <TextField
                          fullWidth
                          label="Your Name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          error={!!errors.name}
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <PersonIcon sx={{ color: 'primary.main' }} />
                              </InputAdornment>
                            ),
                          }}
                          variant="outlined"
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              borderRadius: '12px',
                              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#008080',
                                borderWidth: 2,
                              },
                              '&:hover .MuiOutlinedInput-notchedOutline': {
                                borderColor: 'rgba(0, 128, 128, 0.5)',
                              },
                              '& .MuiOutlinedInput-notchedOutline': {
                                borderColor: 'rgba(0, 128, 128, 0.2)',
                              },
                            },
                            '& .MuiInputLabel-root.Mui-focused': {
                              color: '#008080',
                            }
                          }}
                        />
                        {!!errors.name && (
                          <FormHelperText sx={{ color: '#8e24aa', mt: 0.5 }}>{errors.name}</FormHelperText>
                        )}
                      </motion.div>
                    </Grid>
                    <Grid item xs={12}>
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                      >
                        <TextField
                          fullWidth
                          label="Your Email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          error={!!errors.email}
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <EmailIcon sx={{ color: 'primary.main' }} />
                              </InputAdornment>
                            ),
                          }}
                          variant="outlined"
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              borderRadius: '12px',
                              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#008080',
                                borderWidth: 2,
                              },
                              '&:hover .MuiOutlinedInput-notchedOutline': {
                                borderColor: 'rgba(0, 128, 128, 0.5)',
                              },
                              '& .MuiOutlinedInput-notchedOutline': {
                                borderColor: 'rgba(0, 128, 128, 0.2)',
                              },
                            },
                            '& .MuiInputLabel-root.Mui-focused': {
                              color: '#008080',
                            }
                          }}
                        />
                        {!!errors.email && (
                          <FormHelperText sx={{ color: '#8e24aa', mt: 0.5 }}>{errors.email}</FormHelperText>
                        )}
                      </motion.div>
                    </Grid>
                    <Grid item xs={12}>
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                      >
                        <TextField
                          fullWidth
                          label="Your Message"
                          name="message"
                          multiline
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          error={!!errors.message}
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start" sx={{ mt: 1 }}>
                                <MessageIcon sx={{ color: 'primary.main' }} />
                              </InputAdornment>
                            ),
                          }}
                          variant="outlined"
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              borderRadius: '12px',
                              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#008080',
                                borderWidth: 2,
                              },
                              '&:hover .MuiOutlinedInput-notchedOutline': {
                                borderColor: 'rgba(0, 128, 128, 0.5)',
                              },
                              '& .MuiOutlinedInput-notchedOutline': {
                                borderColor: 'rgba(0, 128, 128, 0.2)',
                              },
                            },
                            '& .MuiInputLabel-root.Mui-focused': {
                              color: '#008080',
                            }
                          }}
                        />
                        {!!errors.message && (
                          <FormHelperText sx={{ color: '#8e24aa', mt: 0.5 }}>{errors.message}</FormHelperText>
                        )}
                      </motion.div>
                    </Grid>
                    <Grid item xs={12}>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button
                          type="submit"
                          variant="contained"
                          size="large"
                          endIcon={loading ? <CircularProgress size={24} color="inherit" /> : <SendIcon />}
                          sx={{
                            py: 1.8,
                            px: 4,
                            color: 'white',
                            fontWeight: 500,
                            borderRadius: '30px',
                            background: 'linear-gradient(135deg, #008080 0%, #20B2AA 100%)',
                            boxShadow: '0 10px 20px rgba(0, 128, 128, 0.3)',
                            '&:hover': {
                              background: 'linear-gradient(135deg, #006666 0%, #008B8B 100%)',
                              boxShadow: '0 15px 30px rgba(0, 128, 128, 0.4)',
                              transform: 'translateY(-2px)',
                            },
                            transition: 'all 0.3s ease',
                            textTransform: 'none',
                            fontSize: '1rem',
                            opacity: 1,
                            cursor: 'pointer',
                            position: 'relative',
                            overflow: 'hidden',
                          }}
                        >
                          {loading ? 'Sending...' : 'Send Message'}
                        </Button>
                      </motion.div>
                    </Grid>
                  </Grid>
                </motion.div>
                {showGeneralError && (
                  <Typography variant="caption" sx={{ color: '#8e24aa', display: 'block', mt: 2, textAlign: 'center' }}>
                    Please fill all required fields
                  </Typography>
                )}
                                 {submitStatus === 'success' && (
                   <Alert severity="success" sx={{ mt: 2, borderRadius: 2 }}>
                     Email sent successfully!
                   </Alert>
                 )}
                 {submitStatus === 'error' && (
                   <Alert severity="error" sx={{ mt: 2, borderRadius: 2 }}>
                     Failed to send email. Please try again later.
                   </Alert>
                 )}
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact; 