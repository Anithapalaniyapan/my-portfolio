import { useState, useRef, useEffect } from 'react';
import { 
  Box, 
  Typography, 
  Container, 
  IconButton,
  Button, 
  Chip,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { motion, useAnimation } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Projects = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [imageError, setImageError] = useState({});
  const [activeProject, setActiveProject] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const projectsRef = useRef(null);
  const controls = useAnimation();

  const projects = [
    {
      id: 1,
      title: "Food Delivery Website",
      description: "This is my first Project using HTML and CSS. A modern, responsive landing page for a fictional food delivery subscription service.Built without any frameworks, it showcase best practices in responsive web design, accessibility, and clean coding.",
      image: "/project-food-dashboard.png",
      fallbackImage: `data:image/svg+xml,%3Csvg width='350' height='200' viewBox='0 0 350 200' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='350' height='200' fill='%23e0f2f2' /%3E%3Ccircle cx='175' cy='70' r='30' fill='%23008080' /%3E%3Crect x='120' y='120' width='110' height='15' fill='%23008080' /%3E%3Crect x='140' y='145' width='70' height='10' fill='%23008080' /%3E%3Crect x='155' y='165' width='40' height='15' rx='7.5' fill='%23008080' /%3E%3C/svg%3E`,
      technologies: ["HTML", "CSS"],
      liveLink: "https://anithapalaniyapan.github.io/Omnifood/",
      codeLink: "https://github.com/Anithapalaniyapan/Omnifood",
    },
    {
      id: 2,
      title: "Shopping Mall",
      description: "A responsive Shopping Mall landing page built with HTML and CSS showcasing modern design and layout.",
      image: "/Shopping_Mall.png",
      fallbackImage: `data:image/svg+xml,%3Csvg width='350' height='200' viewBox='0 0 350 200' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='350' height='200' fill='%23e0f2f2' /%3E%3Crect x='40' y='40' width='80' height='80' rx='5' fill='%23008080' /%3E%3Crect x='135' y='40' width='80' height='80' rx='5' fill='%23008080' /%3E%3Crect x='230' y='40' width='80' height='80' rx='5' fill='%23008080' /%3E%3Crect x='40' y='140' width='270' height='20' rx='5' fill='%23008080' /%3E%3C/svg%3E`,
      technologies: ["HTML", "CSS"],
      liveLink: " https://anithapalaniyapan.github.io/SM/",
      codeLink: "https://github.com/AnithaPalaniyappan/Mall",
    },
    {
      id: 3,
      title: "Class Commitee Meeting and Feedback Management System",
      description: "A role-based web application to manage class committee meetings and feedback between students, faculty, and directors. It ensures secure login, feedback submission, and meeting schedule management.",
      image: "/project-task-manager.png",
      fallbackImage: `data:image/svg+xml,%3Csvg width='350' height='200' viewBox='0 0 350 200' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='350' height='200' fill='%23e0f2f2' /%3E%3Crect x='40' y='40' width='80' height='80' rx='5' fill='%23008080' /%3E%3Crect x='135' y='40' width='80' height='80' rx='5' fill='%23008080' /%3E%3Crect x='230' y='40' width='80' height='80' rx='5' fill='%23008080' /%3E%3Crect x='40' y='140' width='270' height='20' rx='5' fill='%23008080' /%3E%3C/svg%3E`,
      technologies: ["HTML","JavaScript","React", "Material UI","Vite"],
      liveLink: "https://leet-code1-8mbb-g3yx1d8it-anitha-palaniyappans-projects.vercel.app",
      codeLink: "https://github.com/Anithapalaniyapan/Leet_Code1",
    },
    {
      id: 4,
      title: "My Portfolio Builder",
      description: "Developed the complete frontend for the landing page of an AI-based portfolio builder website.",
      image: "/Portfolio_Builder.png",
      fallbackImage: `data:image/svg+xml,%3Csvg width='350' height='200' viewBox='0 0 350 200' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='350' height='200' fill='%23e0f2f2' /%3E%3Crect x='40' y='40' width='80' height='80' rx='5' fill='%23008080' /%3E%3Crect x='135' y='40' width='80' height='80' rx='5' fill='%23008080' /%3E%3Crect x='230' y='40' width='80' height='80' rx='5' fill='%23008080' /%3E%3Crect x='40' y='140' width='270' height='20' rx='5' fill='%23008080' /%3E%3C/svg%3E`,
      technologies: ["HTML","JavaScript","React", "Material UI","Vite"],
      liveLink: "https://my-portfolio-builder-frontend-rhn5lsjto.vercel.app/",
      codeLink: "https://github.com/Anithapalaniyapan/my-portfolio-builder",
    },
    {
      id: 5,
      title: "Personal Portfolio",
      description: "A modern portfolio website showcasing my skills and projects. Features include responsive design, interactive UI elements, smooth animations, and 3D effects.",
      image: "/project-portfolio.jpg",
      fallbackImage: `data:image/svg+xml,%3Csvg width='350' height='200' viewBox='0 0 350 200' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='350' height='200' fill='%23e0f2f2' /%3E%3Crect x='75' y='30' width='200' height='20' rx='5' fill='%23008080' /%3E%3Crect x='50' y='70' width='250' height='10' rx='5' fill='%23008080' /%3E%3Crect x='50' y='90' width='250' height='10' rx='5' fill='%23008080' /%3E%3Crect x='50' y='110' width='250' height='10' rx='5' fill='%23008080' /%3E%3Crect x='130' y='140' width='90' height='30' rx='15' fill='%23008080' /%3E%3C/svg%3E`,
      technologies: ["React", "Material UI", "Framer Motion", "Vite"],
      liveLink: "https://my-portfolio-hazel-mu-59.vercel.app/",
      codeLink: "https://github.com/Anithapalaniyapan/my-portfolio",
    }
  ];

  const handleImageError = (id) => {
    setImageError(prev => ({ ...prev, [id]: true }));
  };

  const nextProject = () => {
    setActiveProject(prev => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setActiveProject(prev => (prev - 1 + projects.length) % projects.length);
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (projectsRef.current) {
        const { clientX, clientY } = e;
        const { width, height, left, top } = projectsRef.current.getBoundingClientRect();
        const x = (clientX - left) / width - 0.5;
        const y = (clientY - top) / height - 0.5;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);


  const stars = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    opacity: Math.random() * 0.7 + 0.3,
  }));

 
  const clouds = Array.from({ length: 5 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 70 + 15,
    scale: Math.random() * 0.3 + 0.7,
    opacity: Math.random() * 0.4 + 0.1,
  }));

  return (
    <Box
      id="projects"
      ref={projectsRef}
      sx={{
        py: 0,
        background: '#1a1a1a', 
        position: 'relative',
        overflow: 'hidden',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Stars background */}
      {stars.map(star => (
        <Box
          key={`star-${star.id}`}
          sx={{
            position: 'absolute',
            width: `${star.size}px`,
            height: `${star.size}px`,
            backgroundColor: '#ffffff',
            borderRadius: '50%',
            left: `${star.x}%`,
            top: `${star.y}%`,
            opacity: star.opacity,
          }}
        />
      ))}

      {/* Cloud elements */}
      {clouds.map(cloud => (
        <motion.div
          key={`cloud-${cloud.id}`}
          initial={{ x: `${cloud.x}%`, y: `${cloud.y}%`, opacity: cloud.opacity }}
          animate={{
            x: [`${cloud.x}%`, `${cloud.x + (Math.random() * 10 - 5)}%`],
            y: [`${cloud.y}%`, `${cloud.y + (Math.random() * 5 - 2.5)}%`],
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
          style={{
            position: 'absolute',
            width: '150px',
            height: '100px',
            zIndex: 0,
            transform: `scale(${cloud.scale})`,
          }}
        >
          <svg width="150" height="100" viewBox="0 0 150 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M36.5 22C45.6127 22 53 29.3873 53 38.5C53 47.6127 45.6127 55 36.5 55C27.3873 55 20 47.6127 20 38.5C20 29.3873 27.3873 22 36.5 22Z" fill="#333333" />
            <path d="M92.5 30C101.613 30 109 37.3873 109 46.5C109 55.6127 101.613 63 92.5 63C83.3873 63 76 55.6127 76 46.5C76 37.3873 83.3873 30 92.5 30Z" fill="#333333" />
            <path d="M64.5 15C73.6127 15 81 22.3873 81 31.5C81 40.6127 73.6127 48 64.5 48C55.3873 48 48 40.6127 48 31.5C48 22.3873 55.3873 15 64.5 15Z" fill="#333333" />
            <path d="M113.5 40C122.613 40 130 47.3873 130 56.5C130 65.6127 122.613 73 113.5 73C104.387 73 97 65.6127 97 56.5C97 47.3873 104.387 40 113.5 40Z" fill="#333333" />
            <rect x="20" y="50" width="110" height="30" rx="15" fill="#333333" />
          </svg>
        </motion.div>
      ))}

      {/* Navigation UI */}
      <Container 
        maxWidth={false}
        sx={{ 
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          px: { xs: 2, md: 5 }
        }}
      >
        {/* Left arrow */}
        <Box 
          sx={{ 
            position: 'absolute', 
            left: { xs: '10px', md: '5%', lg: '15%' },
            zIndex: 3 
          }}
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <IconButton
              onClick={prevProject}
              sx={{
                width: { xs: '40px', md: '60px' },
                height: { xs: '40px', md: '60px' },
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                color: 'white',
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                }
              }}
            >
              <ArrowBackIosNewIcon />
            </IconButton>
          </motion.div>
        </Box>

        {/* Project showcase */}
        <motion.div
          animate={{
            rotateY: mousePosition.x * 5,
            rotateX: -mousePosition.y * 5,
          }}
          transition={{ type: 'spring', stiffness: 50 }}
          style={{
            width: '100%',
            maxWidth: '800px',
            perspective: '1000px',
            transformStyle: 'preserve-3d',
          }}
        >
          <Box
            sx={{
              width: '100%',
              overflow: 'hidden',
              borderRadius: '12px',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.3)',
              backgroundColor: '#222',
              transform: 'translateZ(0)',
            }}
          >
            <Box 
              sx={{ 
                position: 'relative',
                width: '100%',
                height: { xs: '200px', sm: '300px', md: '400px' },
                overflow: 'hidden',
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                }}
              >
                <img
                  src={imageError[projects[activeProject].id] ? projects[activeProject].fallbackImage : projects[activeProject].image}
                  alt={projects[activeProject].title}
                  onError={() => handleImageError(projects[activeProject].id)}
                  style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    filter: 'brightness(0.7)',
                    left: 0,
                    top: 0,
                    zIndex: 1,
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.3) 100%)',
                    zIndex: 2,
                  }}
                />
              </Box>
            </Box>

            <Box sx={{ position: 'relative', p: { xs: 3, md: 4 } }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                key={activeProject} // Re-render on active project change
                transition={{ duration: 0.5 }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    color: 'white',
                    fontWeight: 600,
                    mb: 2,
                    textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                  }}
                >
                  {projects[activeProject]?.title}
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    color: 'rgba(255,255,255,0.8)',
                    mb: 3,
                    fontSize: { xs: '0.9rem', md: '1rem' },
                    lineHeight: 1.6,
                  }}
                >
                  {projects[activeProject]?.description}
                </Typography>

                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                  {projects[activeProject]?.technologies.map((tech, i) => (
                    <Chip
                      key={i}
                      label={tech}
                      size="small"
                      sx={{
                        bgcolor: 'rgba(0, 128, 128, 0.2)',
                        color: '#4ecdc4',
                        fontWeight: 500,
                        fontSize: '0.75rem',
                        height: '24px',
                      }}
                    />
                  ))}
                </Box>

                <Box
                  sx={{
                    display: 'flex',
                    gap: 2,
                  }}
                >
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      variant="contained"
                      startIcon={<OpenInNewIcon />}
                      href={projects[activeProject]?.liveLink}
                      target="_blank"
                      sx={{
                        bgcolor: '#008080',
                        color: 'white',
                        px: 2,
                        py: 1,
                        '&:hover': {
                          bgcolor: '#006666',
                        },
                      }}
                    >
                      Live Demo
                    </Button>
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      variant="outlined"
                      startIcon={<GitHubIcon />}
                      href={projects[activeProject]?.codeLink}
                      target="_blank"
                      sx={{
                        borderColor: '#008080',
                        color: '#4ecdc4',
                        px: 2,
                        py: 1,
                        '&:hover': {
                          borderColor: '#4ecdc4',
                          bgcolor: 'rgba(0, 128, 128, 0.1)',
                        },
                      }}
                    >
                      View Code
                    </Button>
                  </motion.div>
                </Box>
              </motion.div>
            </Box>
          </Box>
        </motion.div>

        {/* Right arrow */}
        <Box 
          sx={{ 
            position: 'absolute', 
            right: { xs: '10px', md: '5%', lg: '15%' },
            zIndex: 3 
          }}
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <IconButton
              onClick={nextProject}
              sx={{
                width: { xs: '40px', md: '60px' },
                height: { xs: '40px', md: '60px' },
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                color: 'white',
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                }
              }}
            >
              <ArrowForwardIosIcon />
            </IconButton>
          </motion.div>
        </Box>
      </Container>

      {/* Project indicator */}
      <Box
        sx={{
          position: 'absolute',
          bottom: '30px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: 1.5,
          zIndex: 2,
        }}
      >
        {projects.map((project, index) => (
          <Box
            key={`indicator-${project.id}`}
            onClick={() => setActiveProject(index)}
            sx={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              backgroundColor: index === activeProject ? '#4ecdc4' : 'rgba(255,255,255,0.3)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: index === activeProject ? '#4ecdc4' : 'rgba(255,255,255,0.5)',
                transform: 'scale(1.2)',
              },
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Projects; 