import { Box, Typography, Container, Grid, Paper, Tooltip, useMediaQuery, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import LanguageIcon from '@mui/icons-material/Language';
import CodeIcon from '@mui/icons-material/Code';
import ConstructionIcon from '@mui/icons-material/Construction';

const Skills = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  const technicalSkills = [
   
    { name: "TypeScript", level: 75, icon: "🔷", color: "#3178C6" },
    { name: "React JS", level: 85, icon: "⚛️", color: "#61DAFB" },
    { name: "Next.js", level: 70, icon: "⚡", color: "#000000" },
    { name: "HTML", level: 90, icon: "🌐", color: "#E34F26" },
    { name: "CSS", level: 85, icon: "🎨", color: "#1572B6" },
    { name: "JavaScript", level: 80, icon: "📜", color: "#F7DF1E" },
    { name: "Node.js", level: 60, icon: "🟢", color: "#339933" },
    { name: "Express.js", level: 65, icon: "🚀", color: "#000000" },
    { name: "PostgreSQL", level: 55, icon: "🐘", color: "#336791" },
    { name: "MySQL", level: 60, icon: "🛢️", color: "#4479A1" },
    { name: "Material-UI", level: 80, icon: "🎨", color: "#0081CB" },
  ];

  const tools = [
    { name: "Visual Studio", icon: "🖥️", color: "#5C2D91", description: "Primary code editor for development" },
    { name: "Version Control (GitHub)", icon: "📚", color: "#181717", description: "For code management and collaboration" },
    { name: "MySQL Workbench", icon: "🛢️", color: "#4479A1", description: "Database design and administration" },
    { name: "PostgreSQL", icon: "🐘", color: "#336791", description: "Relational database management" },
  ];

  const languages = [
    { name: "Tamil", level: "Native", icon: "🗣️", color: "#007FFF" },
    { name: "English", level: "intermediate", icon: "🌎", color: "#DC143C" },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  // Custom hexagon component
  const HexSkillCard = ({ skill, index, category }) => {
    const delay = index * 0.1;
    
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
        viewport={{ once: true }}
        whileHover={{ 
          scale: 1.05,
          rotateZ: [0, -5, 5, 0],
          transition: { 
            scale: { duration: 0.2 },
            rotateZ: { duration: 0.5, repeat: 0 }
          }
        }}
        style={{ 
          position: 'relative',
          margin: '10px',
          width: isMobile ? '120px' : isTablet ? '135px' : '150px',
          height: isMobile ? '130px' : isTablet ? '155px' : '170px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 10,
        }}
      >
        <Tooltip title={category === 'technical' ? `${skill.level}% Proficiency` : (skill.description || skill.level)}>
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              height: '100%',
              '&:before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: `linear-gradient(135deg, ${skill.color}22 0%, ${skill.color}44 100%)`,
                clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                border: `1px solid ${skill.color}33`,
                transition: 'all 0.3s ease',
                zIndex: -1,
              },
              '&:hover:before': {
                boxShadow: `0 8px 25px ${skill.color}33`,
                transform: 'translateY(-5px)',
              },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '10px',
              cursor: 'pointer',
            }}
          >
            <Typography 
              sx={{ 
                fontSize: isMobile ? '2rem' : '2.5rem', 
                mb: 1,
                filter: 'drop-shadow(0 2px 5px rgba(0,0,0,0.2))'
              }}
            >
              {skill.icon}
            </Typography>
            <Typography 
              variant="h6" 
              sx={{ 
                fontWeight: 600, 
                textAlign: 'center',
                fontSize: isMobile ? '0.9rem' : '1rem',
                color: '#333',
              }}
            >
              {skill.name}
            </Typography>
            {category === 'technical' && (
              <Box 
                sx={{ 
                  mt: 1,
                  width: '60%', 
                  height: '5px', 
                  borderRadius: '10px',
                  backgroundColor: 'rgba(0,0,0,0.1)',
                  overflow: 'hidden'
                }}
              >
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.3 + delay }}
                  viewport={{ once: true }}
                  style={{
                    height: '100%',
                    backgroundColor: skill.color,
                  }}
                />
              </Box>
            )}
            {category !== 'technical' && (
              <Typography 
                variant="body2" 
                sx={{ 
                  color: 'text.secondary',
                  fontSize: '0.8rem',
                  mt: 0.5,
                  textAlign: 'center'
                }}
              >
                {skill.level || skill.description?.split(' ').slice(0, 2).join(' ') + '...'}
              </Typography>
            )}
          </Box>
        </Tooltip>
      </motion.div>
    );
  };

  const CategoryTitle = ({ icon, title, delay = 0 }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      style={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: '20px',
        width: '100%'
      }}
    >
      <Box 
        sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          backgroundColor: 'rgba(0, 128, 128, 0.1)',
          py: 1.5,
          px: 3,
          borderRadius: '40px',
          boxShadow: '0 4px 15px rgba(0, 128, 128, 0.1)',
        }}
      >
        {icon}
        <Typography 
          variant="h4" 
          sx={{ 
            fontWeight: 600, 
            ml: 1.5,
            color: 'primary.main',
            fontSize: { xs: '1.5rem', md: '1.8rem' } 
          }}
        >
          {title}
        </Typography>
      </Box>
    </motion.div>
  );

  return (
    <Box
      id="skills"
      sx={{
        py: 10,
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#fafafa',
      }}
    >
      {/* Animated floating shapes */}
      <Box sx={{ position: 'absolute', width: '100%', height: '100%', zIndex: 0 }}>
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            style={{
              position: 'absolute',
              background: `rgba(0, 128, 128, ${0.02 + (i % 3) * 0.01})`,
              clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
              width: Math.random() * 70 + 30,
              height: Math.random() * 70 + 30,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.7,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              rotate: [0, 360],
            }}
            transition={{
              duration: Math.random() * 30 + 10,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'linear',
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
            Skills
          </Typography>
        </motion.div>

        <Box sx={{ mb: 6 }}>
          <CategoryTitle 
            icon={<CodeIcon sx={{ color: 'primary.main', fontSize: { xs: 24, md: 30 } }} />}
            title="Technical Skills"
          />
          
          <Box 
            sx={{ 
              display: 'flex', 
              flexWrap: 'wrap',
              justifyContent: { xs: 'center', md: 'flex-start' },
              ml: { xs: -1, md: 2 },
              mt: 3,
            }}
          >
            {technicalSkills.map((skill, index) => (
              <HexSkillCard key={skill.name} skill={skill} index={index} category="technical" />
            ))}
          </Box>
        </Box>

        <Box sx={{ mb: 6 }}>
          <CategoryTitle 
            icon={<ConstructionIcon sx={{ color: 'primary.main', fontSize: { xs: 24, md: 30 } }} />}
            title="Development Tools"
            delay={0.2}
          />
          
          <Box 
            sx={{ 
              display: 'flex', 
              flexWrap: 'wrap',
              justifyContent: { xs: 'center', md: 'flex-start' },
              ml: { xs: -1, md: 2 },
              mt: 3,
            }}
          >
            {tools.map((tool, index) => (
              <HexSkillCard key={tool.name} skill={tool} index={index} category="tools" />
            ))}
          </Box>
        </Box>

        <Box>
          <CategoryTitle 
            icon={<LanguageIcon sx={{ color: 'primary.main', fontSize: { xs: 24, md: 30 } }} />}
            title="Languages"
            delay={0.4}
          />
          
          <Box 
            sx={{ 
              display: 'flex', 
              flexWrap: 'wrap',
              justifyContent: { xs: 'center', md: 'flex-start' },
              ml: { xs: -1, md: 2 },
              mt: 3,
            }}
          >
            {languages.map((language, index) => (
              <HexSkillCard key={language.name} skill={language} index={index} category="languages" />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Skills; 