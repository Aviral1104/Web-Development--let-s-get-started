import React, { useState } from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Tabs, 
  Tab, 
  Paper, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia,
  List, 
  ListItem, 
  ListItemText,
  Link,
  IconButton
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import LanguageIcon from '@mui/icons-material/Language';
import BackgroundImage from 'D:/WEBDEV2/01tut/src/9966.jpg'; // Add your background image path here

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: '#f4f6f8',
    },
  },
  typography: {
    h2: {
      fontWeight: 700,
    },
    h5: {
      fontWeight: 500,
    },
  },
});

const Portfolio = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ 
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        py: 8,
      }}>
        <Container maxWidth="md">
          <Box sx={{ my: 4, textAlign: 'center', color: 'white' }}>
            <Typography variant="h2" component="h1" gutterBottom>
              Aviral Asthana
            </Typography>
            <Typography variant="h5" component="h2" gutterBottom>
              Aspiring AI Professional
            </Typography>
          </Box>

          <Paper sx={{ mt: 3, p: 2, backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
            <Tabs value={value} onChange={handleChange} centered>
              <Tab label="About Me" />
              <Tab label="Skills" />
              <Tab label="Projects" />
            </Tabs>
          </Paper>

          <Box sx={{ mt: 3 }}>
            {value === 0 && <AboutMe />}
            {value === 1 && <Skills />}
            {value === 2 && <Projects />}
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

const AboutMe = () => (
  <Box sx={{ textAlign: 'center' }}>
    <Card sx={{ mt: 3, backgroundColor: 'rgba(255, 255, 255, 0.9)' }}>
      <CardContent>
        <Typography variant="body1" paragraph>
          Driven by an insatiable curiosity and a commitment to continuous learning, I stay abreast of the latest
          advancements in machine learning and artificial intelligence.
        </Typography>
      </CardContent>
    </Card>
    <Card sx={{ mt: 3, backgroundColor: '#f4f6f8' }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Contact
        </Typography>
        <Typography variant="body2">Aviral Asthana</Typography>
        <Typography variant="body2" gutterBottom>
          asthana.aviral0902@gmail.com
        </Typography>
        <Box sx={{ mt: 2 }}>
          <IconButton aria-label="LinkedIn" component={Link} href="https://linkedin.com/in/aviral-asthana-4393b4234" target="_blank" sx={{ color: '#0077b5' }}>
            <LinkedInIcon />
          </IconButton>
          <IconButton aria-label="Twitter" component={Link} href="https://twitter.com/actual_aviral" target="_blank" sx={{ color: '#1da1f2' }}>
            <TwitterIcon />
          </IconButton>
          <IconButton aria-label="Medium" component={Link} href="https://medium.com/@AVIRAL.ASTHANA" target="_blank" sx={{ color: '#000' }}>
            <LanguageIcon />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  </Box>
);

const Skills = () => (
  <Grid container spacing={3}>
    <Grid item xs={12} sm={6}>
      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Machine Learning
          </Typography>
          <List dense>
            {['TensorFlow', 'PyTorch', 'Scikit-learn'].map((item) => (
              <ListItem key={item}>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </Grid>
    <Grid item xs={12} sm={6}>
      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Data Analysis
          </Typography>
          <List dense>
            {['Pandas', 'NumPy', 'Matplotlib'].map((item) => (
              <ListItem key={item}>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </Grid>
    <Grid item xs={12} sm={6}>
      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Web Development
          </Typography>
          <List dense>
            {['React', 'Node.js', 'Django'].map((item) => (
              <ListItem key={item}>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </Grid>
    <Grid item xs={12} sm={6}>
      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Languages
          </Typography>
          <List dense>
            {['Python', 'JavaScript', 'SQL'].map((item) => (
              <ListItem key={item}>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </Grid>
  </Grid>
);

const Projects = () => (
  <Grid container spacing={3}>
    <Grid item xs={12} sm={6}>
      <Card sx={{ height: '100%' }}>
        <CardMedia
          component="img"
          alt="AI-Powered Image Recognition"
          height="140"
          image="D:/WEBDEV2/01tut/src/24476769-bfe5-4aaf-ac6e-b214b2ac0e20.jpeg" // Add your image path here
        />
        <CardContent>
          <Typography variant="h6" gutterBottom>
            AI-Powered Image Recognition
          </Typography>
          <Typography variant="body2">
            Developed a deep learning model for image classification using CNN architecture.
          </Typography>
        </CardContent>
      </Card>
    </Grid>
    <Grid item xs={12} sm={6}>
      <Card sx={{ height: '100%' }}>
        <CardMedia
          component="img"
          alt="Natural Language Processing Chatbot"
          height="140"
          image="D:/WEBDEV2/01tut/src/NLP.jpeg" // Add your image path here
        />
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Natural Language Processing Chatbot
          </Typography>
          <Typography variant="body2">
            Created an intelligent chatbot using NLP techniques and transformer models.
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  </Grid>
);

export default Portfolio;
