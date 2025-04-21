import React, { useState } from 'react';
import { Box, TextField, IconButton, Paper, Typography, List, ListItem, ListItemText } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const Messages = ({ cat }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;

    const userMessage = {
      text: newMessage,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString(),
    };

    setMessages([...messages, userMessage]);
    setNewMessage('');

    // Simulate bot response after 1 second
    setTimeout(() => {
      const botResponse = {
        text: generateBotResponse(newMessage),
        sender: 'bot',
        timestamp: new Date().toLocaleTimeString(),
      };
      setMessages(prevMessages => [...prevMessages, botResponse]);
    }, 1000);
  };

  const generateBotResponse = (message) => {
    const lowerMessage = message.toLowerCase();
    
    // Special response for 'talel'
    if (lowerMessage.includes('talel')) {
      return "3asba lih 😼";
    }
    
    // Flirty responses based on message content
    if (lowerMessage.includes('cute') || lowerMessage.includes('beautiful') || lowerMessage.includes('pretty')) {
      return "Purr... You're making me blush! 😻 I bet you say that to all the cats!";
    }
    if (lowerMessage.includes('play') || lowerMessage.includes('game')) {
      return "Meow! I love playing with you! But I might get distracted by your cute face... 😽";
    }
    if (lowerMessage.includes('cuddle') || lowerMessage.includes('snuggle')) {
      return "Mrrrp! I'd love to cuddle with you! I promise I won't hog all the blankets... maybe! 🥰";
    }
    if (lowerMessage.includes('food') || lowerMessage.includes('treat')) {
      return "Meow! I'd share my treats with you... but only if you promise to scratch behind my ears! 😋";
    }
    if (lowerMessage.includes('love') || lowerMessage.includes('like')) {
      return "Purr... You're making my tail twitch with excitement! I think I'm falling for you! 💕";
    }
    if (lowerMessage.includes('sleep') || lowerMessage.includes('nap')) {
      return "Meow... I'd love to take a nap with you! But I might steal all the pillows! 😴";
    }
    if (lowerMessage.includes('kiss') || lowerMessage.includes('hug')) {
      return "Purr... I'm usually very independent, but I wouldn't mind some extra affection from you! 😘";
    }
    if (lowerMessage.includes('date') || lowerMessage.includes('meet')) {
      return "Meow! I'd love to go on a date with you! Maybe we could watch the sunset together? 🌅";
    }
    if (lowerMessage.includes('miss') || lowerMessage.includes('think')) {
      return "Purr... I've been thinking about you too! You're always on my mind... and in my dreams! 💭";
    }
    if (lowerMessage.includes('forever') || lowerMessage.includes('always')) {
      return "Meow! I want to be with you forever! You're my favorite human! 💖";
    }

    // General flirty responses
    const responses = [
      "Meow! You're making my whiskers twitch with excitement! 😻",
      "Purr... I usually don't open up to humans, but you're special! 💕",
      "Meow! I'd let you scratch my belly... but only because it's you! 😽",
      "Purr... You have such a nice voice! It makes my tail curl! 🎵",
      "Meow! I'm usually very independent, but I wouldn't mind being your cat! 😘",
      "Purr... You're making me feel all warm and fuzzy inside! 🥰",
      "Meow! I think I'm falling for you... but don't tell the other cats! 🤫",
      "Purr... You're the cat's meow! I can't stop thinking about you! 💭",
      "Meow! I'd share my favorite sunspot with you! 🌞",
      "Purr... You're making my heart do backflips! 💖",
      "Meow! I usually don't like humans, but you're different! 😊",
      "Purr... I'd let you be my favorite human! 🏆",
      "Meow! You're making me want to show you my belly! 😻",
      "Purr... I think I'm in love with you! 💘",
      "Meow! I'd let you be my forever human! 🏡"
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  return (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Paper elevation={3} sx={{ p: 2, mb: 2, flexGrow: 1, overflow: 'auto' }}>
        <Typography variant="h6" gutterBottom>
          Chat with {cat?.name || 'this cat'}
        </Typography>
        <List>
          {messages.map((message, index) => (
            <ListItem
              key={index}
              sx={{
                justifyContent: message.sender === 'user' ? 'flex-end' : 'flex-start',
              }}
            >
              <Paper
                elevation={1}
                sx={{
                  p: 1,
                  backgroundColor: message.sender === 'user' ? '#ff4f8b' : '#7c4dff',
                  color: 'white',
                  maxWidth: '70%',
                }}
              >
                <ListItemText
                  primary={message.text}
                  secondary={message.timestamp}
                  sx={{ color: 'white' }}
                />
              </Paper>
            </ListItem>
          ))}
        </List>
      </Paper>
      <Box sx={{ display: 'flex', gap: 1 }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
        />
        <IconButton
          color="primary"
          onClick={handleSendMessage}
          disabled={!newMessage.trim()}
        >
          <SendIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Messages; 