import React from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Avatar,
  TextField,
  Paper,
  Button,
} from "@mui/material";

const TestimonialCard = ({ name, role, testimonial, avatarSrc }) => (
  <Card>
    <CardContent
      sx={{ display: "flex", alignItems: "center", flexDirection: "column", textAlign:"center" }}
    >
      <Avatar alt={name} src={avatarSrc} sx={{ width: 80, height: 80 }} />
      <Typography variant="h6" color="primary">
        {name}
      </Typography>
      <Typography variant="subtitle2" color="textSecondary">
        {role}
      </Typography>
      <Typography variant="body2">"{testimonial}"</Typography>
    </CardContent>
  </Card>
);

const FeaturedProduct = ({ name, description, imageSrc }) => (
  <Paper elevation={3} style={{ padding: '20px', textAlign: 'center' }}>
    <img src={imageSrc} alt={name} style={{ width: '100%', marginBottom: '10px' }} />
    <Typography variant="h6" color="primary" mb={2}>
      {name}
    </Typography>
    <Typography variant="body2">
      {description}
    </Typography>
  </Paper>
);

const ContactForm = () => (
  <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
    <Typography variant="h5" color="primary" mb={3}>
      Contact Us
    </Typography>
    <form>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField label="Your Name" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Your Email" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Your Message" variant="outlined" multiline rows={4} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" type="submit">
            Send Message
          </Button>
        </Grid>
      </Grid>
    </form>
  </Paper>
);

const Home = () => {
  const testimonials = [
    {
      name: "John Doe",
      role: "Customer",
      testimonial: "I love the products and services. Highly recommended!",
      avatarSrc: "https://example.com/avatar1.jpg",
    },
    {
      name: "Jane Smith",
      role: "Client",
      testimonial: "Exceptional quality and excellent customer support.",
      avatarSrc: "https://example.com/avatar2.jpg",
    },
    {
      name: "Alice Johnson",
      role: "Partner",
      testimonial:
        "Working with this company has been a pleasure. Great collaboration!",
      avatarSrc: "https://example.com/avatar3.jpg",
    },
  ];

  const featuredProducts = [
    { name: 'Product 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', imageSrc: 'https://example.com/product1.jpg' },
    { name: 'Product 2', description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', imageSrc: 'https://example.com/product2.jpg' },
    { name: 'Product 3', description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.', imageSrc: 'https://example.com/product3.jpg' },
  ];

  return (
    <Container>
      <Typography variant="h3" align="center" mt={4} mb={4} color="primary">
        Welcome to Our Website
      </Typography>

      <Typography variant="h4" mt={4} color="primary">
        About Us
      </Typography>
      <Typography variant="body1" paragraph>
        We are dedicated to providing high-quality products and services to our
        customers. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Typography>
      <Typography variant="body1" paragraph>
        Our reach extends to various regions, and we take pride in serving our
        diverse customer base.
      </Typography>

      <Typography variant="h4" mt={4} mb={2} color="primary">
        Customer Testimonials
      </Typography>
      <Grid container spacing={3}>
        {testimonials.map((testimonial, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <TestimonialCard {...testimonial} />
          </Grid>
        ))}
      </Grid>

            {/* Featured Products Section */}
            <Typography variant="h4" mt={4} mb={2} color="primary">
        Featured Products
      </Typography>
      <Grid container spacing={3}>
        {featuredProducts.map((product, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <FeaturedProduct {...product} />
          </Grid>
        ))}
      </Grid>

      {/* Contact Form Section */}
      <ContactForm />
    </Container>
  );
};

export default Home;
