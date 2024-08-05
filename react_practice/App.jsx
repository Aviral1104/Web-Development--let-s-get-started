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

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
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
      <Container maxWidth="md">
        <Box sx={{ my: 4 }}>
          <Typography variant="h2" component="h1" gutterBottom>
            Aviral Asthana
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom color="text.secondary">
            Aspiring AI Professional
          </Typography>

          <Paper sx={{ mt: 3 }}>
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
        </Box>
      </Container>
    </ThemeProvider>
  );
};

const AboutMe = () => (
  <Box>
    <Typography variant="body1" paragraph>
      Driven by an insatiable curiosity and a commitment to continuous learning, I stay abreast of the latest
      advancements in machine learning and artificial intelligence.
    </Typography>
    <Card sx={{ mt: 3 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Contact
        </Typography>
        <Typography variant="body2">Aviral Asthana</Typography>
        <Typography variant="body2" gutterBottom>
          asthana.aviral0902@gmail.com
        </Typography>
        <Box sx={{ mt: 2 }}>
          <IconButton aria-label="LinkedIn" component={Link} href="https://linkedin.com/in/aviral-asthana-4393b4234" target="_blank">
            <LinkedInIcon />
          </IconButton>
          <IconButton aria-label="Twitter" component={Link} href="https://twitter.com/actual_aviral" target="_blank">
            <TwitterIcon />
          </IconButton>
          <IconButton aria-label="Medium" component={Link} href="https://medium.com/@AVIRAL.ASTHANA" target="_blank">
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
    <Grid item xs={12}>
      <Card>
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
    <Grid item xs={12}>
      <Card>
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