import React from 'react';
import { Container, Box, Typography, Button, TextField, Avatar, Divider } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import Hero from '../../../Hero/Hero';
import Testimonials from '../../../Testimonials/Testimonials';

function Livechat() {
  return (
    <Container maxWidth={false} sx={{ padding: '3rem 0', backgroundColor: '#f0f0f0' }}>
      {/* Header Section */}
      <Hero/>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <ChatIcon sx={{ fontSize: 48, color: '#111', mb: 1 }} />
        <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold' }}>
          Live Chat Support
        </Typography>
        <Typography variant="body1" sx={{ color: 'gray', mt: 1 }}>
          Chat with our experts for any assistance you need.
        </Typography>
      </Box>

      {/* Chat Box Section */}
      <Container maxWidth="md" sx={{ backgroundColor: '#f5f5f5', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
        {/* Example Chat Bubble - Customer */}
        <Box sx={{ display: 'flex', justifyContent: 'flex-start', width: '100%', mb: 2 }}>
          <Avatar sx={{ bgcolor: '#111', mr: 2 }}>C</Avatar>
          <Box sx={{ backgroundColor: '#fff', padding: '1rem', borderRadius: '12px', maxWidth: '70%' }}>
            <Typography variant="body2">
              Hi! I need help with my recent order.
            </Typography>
          </Box>
        </Box>

        {/* Example Chat Bubble - Support */}
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', width: '100%', mb: 2 }}>
          <Box sx={{ backgroundColor: '#111', color: '#fff', padding: '1rem', borderRadius: '12px', maxWidth: '70%' }}>
            <Typography variant="body2">
              Sure! How can we assist you with that?
            </Typography>
          </Box>
          <Avatar sx={{ bgcolor: '#111', ml: 2 }}>S</Avatar>
        </Box>

        {/* Input Section */}
        <Divider sx={{ width: '100%', my: 2 }} />
        <TextField 
          fullWidth 
          label="Type your message here..." 
          multiline 
          rows={3} 
          sx={{ marginBottom: '1rem', maxWidth: '100%' }} 
        />
        <Button 
          variant="contained" 
          color="primary" 
          sx={{ 
            textTransform: 'none', 
            backgroundColor: '#111', 
            ':hover': { backgroundColor: '#333' },
            width: '100%'
          }}
        >
          Send Message
        </Button>
      </Container>
      <Testimonials/>
    </Container>
  );
}

export default Livechat;
