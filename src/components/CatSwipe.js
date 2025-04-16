import React, { useState } from 'react';
import { Box, Typography, Card, CardMedia, CardContent, IconButton, Snackbar, Alert } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CloseIcon from '@mui/icons-material/Close';
import { useSpring, animated } from '@react-spring/web';

const cats = [
  {
    id: 1,
    name: 'Luna',
    age: 2,
    breed: 'Persian',
    bio: 'Loves sleeping in sunspots and playing with yarn',
    imageUrl: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    likeMessage: 'Purr... I like you too! Let\'s take a nap together! 😺',
  },
  {
    id: 2,
    name: 'Oliver',
    age: 1,
    breed: 'Siamese',
    bio: 'Energetic and playful, seeking a friend for adventures',
    imageUrl: 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    likeMessage: 'Meow! You\'re fun! Want to play with my favorite toy? 🎯',
  },
  {
    id: 3,
    name: 'Milo',
    age: 3,
    breed: 'Maine Coon',
    bio: 'Gentle giant who enjoys cuddles and treats',
    imageUrl: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    likeMessage: 'Mrrrp! You seem like a great cuddle buddy! 🤗',
  },
  {
    id: 4,
    name: 'Bella',
    age: 2,
    breed: 'British Shorthair',
    bio: 'Sophisticated lady looking for a refined companion',
    imageUrl: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    likeMessage: 'How delightful! You have excellent taste. Shall we have tea? 🫖',
  },
  {
    id: 5,
    name: 'Leo',
    age: 4,
    breed: 'Bengal',
    bio: 'Adventurous explorer with a wild side',
    imageUrl: 'https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    likeMessage: 'Rawr! You\'re as adventurous as me! Let\'s explore together! 🌟',
  },
  {
    id: 6,
    name: 'Nala',
    age: 1,
    breed: 'Ragdoll',
    bio: 'Sweet and affectionate, loves to be held',
    imageUrl: 'https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    likeMessage: 'Aww, you\'re so sweet! Can I sit in your lap? 🥰',
  },
  {
    id: 7,
    name: 'Simba',
    age: 3,
    breed: 'Abyssinian',
    bio: 'Playful and curious, always exploring new things',
    imageUrl: 'https://images.unsplash.com/photo-1511044568932-338cba0ad803?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    likeMessage: 'Meow! You\'re interesting! Want to see what I found? 🔍',
  },
  {
    id: 8,
    name: 'Lily',
    age: 2,
    breed: 'Scottish Fold',
    bio: 'Quirky and charming with adorable folded ears',
    imageUrl: 'https://images.unsplash.com/photo-1606214174585-fe31582dc6ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    likeMessage: '*perks ears* You\'re cute! Want to see my collection of shiny things? ✨',
  },
  {
    id: 9,
    name: 'Max',
    age: 5,
    breed: 'Russian Blue',
    bio: 'Calm and intelligent, enjoys quiet time and puzzles',
    imageUrl: 'https://images.unsplash.com/photo-1615789591457-74a63395c990?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    likeMessage: 'Hmm, you seem intelligent. Care to solve a puzzle with me? 🧩',
  },
  {
    id: 10,
    name: 'Bella',
    age: 1,
    breed: 'Sphynx',
    bio: 'Unique and loving, needs lots of cuddles to stay warm',
    imageUrl: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    likeMessage: 'Brrr! You\'re warm! Can we cuddle? I promise I\'m extra soft! 🥺',
  },
  {
    id: 11,
    name: 'Charlie',
    age: 4,
    breed: 'Norwegian Forest Cat',
    bio: 'Majestic and independent, loves climbing and exploring',
    imageUrl: 'https://images.unsplash.com/photo-1519052537078-e6302a4968d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    likeMessage: 'Meow! You look like you could keep up with my adventures! 🏔️',
  },
  {
    id: 12,
    name: 'Daisy',
    age: 2,
    breed: 'Burmese',
    bio: 'Social butterfly who loves making new friends',
    imageUrl: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    likeMessage: 'Yay! A new friend! Want to hear about all my other friends? 🐱',
  }
];

const CatSwipe = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [likedCats, setLikedCats] = useState([]);
  const [showMessage, setShowMessage] = useState(false);
  const [currentMessage, setCurrentMessage] = useState('');

  const currentCat = cats[currentIndex];

  const [{ x, rotate }, api] = useSpring(() => ({
    x: 0,
    rotate: 0,
    config: { tension: 300, friction: 20 }
  }));

  const handleLike = () => {
    setLikedCats([...likedCats, currentCat]);
    setCurrentMessage(currentCat.likeMessage);
    setShowMessage(true);
    api.start({
      x: 500,
      rotate: 20,
      onRest: () => {
        setCurrentIndex((prev) => (prev + 1) % cats.length);
        api.start({ x: 0, rotate: 0 });
      }
    });
  };

  const handlePass = () => {
    api.start({
      x: -500,
      rotate: -20,
      onRest: () => {
        setCurrentIndex((prev) => (prev + 1) % cats.length);
        api.start({ x: 0, rotate: 0 });
      }
    });
  };

  const handleCloseMessage = () => {
    setShowMessage(false);
  };

  const AnimatedCard = animated(Card);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        mt: 4,
        px: 2,
        height: '80vh',
      }}
    >
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }}>
        {currentIndex === cats.length - 1 ? 'Last Cat!' : `Cat ${currentIndex + 1} of ${cats.length}`}
      </Typography>
      
      <Box sx={{ position: 'relative', width: '100%', maxWidth: 345, height: '100%' }}>
        <AnimatedCard
          style={{
            transform: x.to((x) => `translateX(${x}px) rotate(${rotate}deg)`),
            position: 'absolute',
            width: '100%',
            height: '100%',
          }}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            borderRadius: 3,
            boxShadow: 3,
          }}
        >
          <CardMedia
            component="img"
            height="60%"
            image={currentCat.imageUrl}
            alt={currentCat.name}
            sx={{ objectFit: 'cover' }}
          />
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
              {currentCat.name}, {currentCat.age}y
            </Typography>
            <Typography variant="body1" color="text.secondary" gutterBottom>
              {currentCat.breed}
            </Typography>
            <Typography variant="body2" paragraph>
              {currentCat.bio}
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-around', mt: 2 }}>
              <IconButton
                onClick={handlePass}
                sx={{
                  bgcolor: 'error.main',
                  color: 'white',
                  '&:hover': { bgcolor: 'error.dark' },
                  width: 60,
                  height: 60,
                }}
              >
                <CloseIcon />
              </IconButton>
              <IconButton
                onClick={handleLike}
                sx={{
                  bgcolor: 'primary.main',
                  color: 'white',
                  '&:hover': { bgcolor: 'primary.dark' },
                  width: 60,
                  height: 60,
                }}
              >
                <FavoriteIcon />
              </IconButton>
            </Box>
          </CardContent>
        </AnimatedCard>
      </Box>

      {likedCats.length > 0 && (
        <Typography variant="body1" sx={{ mt: 2, color: 'text.secondary' }}>
          You've liked {likedCats.length} cat{likedCats.length !== 1 ? 's' : ''}!
        </Typography>
      )}

      <Snackbar
        open={showMessage}
        autoHideDuration={4000}
        onClose={handleCloseMessage}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleCloseMessage} 
          severity="success" 
          sx={{ 
            width: '100%',
            bgcolor: 'primary.light',
            color: 'primary.contrastText',
            '& .MuiAlert-icon': {
              color: 'primary.contrastText'
            }
          }}
        >
          {currentMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default CatSwipe; 