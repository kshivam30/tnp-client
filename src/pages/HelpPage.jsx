import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, Card, CardContent, Avatar, TextField, Button } from '@mui/material';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import Layout from '../layout/Layout';
import { GoogleGenerativeAI } from '@google/generative-ai';
const API_KEY = "AIzaSyDglAXjJWGXJ3ggOSMv25jXfZP5VqdUK-U";
// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const companyData = [
  {
    jobTitle: 'Frontend Developer',
    companyName: 'Tech Solutions Inc.',
    logoUrl: '',
    location: 'San Francisco, CA',
    jobType: 'Full-time',
    role: 'Associate Engineer',
    salary: '₹4L PA',
    roundDate: '--',
    applied: false,
  },
  {
    jobTitle: 'Backend Developer',
    companyName: 'Data Analytics Corp.',
    logoUrl: '',
    location: 'New York, NY',
    jobType: 'Full-time',
    role: 'Associate Engineer',
    salary: '₹4L PA',
    roundDate: '--',
    applied: true,
  },
  {
    jobTitle: 'UI/UX Designer',
    companyName: 'Creative Studio',
    logoUrl: '',
    location: 'Remote',
    jobType: 'Contract',
    role: 'Associate Engineer',
    salary: '₹4L PA',
    roundDate: '--',
    applied: true,
  },
]
const summarizeCompanyData = (companyData) => {
  return companyData.map(company => {
    return `${company.jobTitle} at ${company.companyName}, Location: ${company.location}, Job Type: ${company.jobType}, Role: ${company.role}, Salary: ${company.salary}`;
  }).join("; ");
};

const companySummary = summarizeCompanyData(companyData);

const HelpPage = () => {
  const [messages, setMessages] = useState([{ id: 0, sender: 'Support Bot', text: 'Hey "username", how can I help you?', type: 'bot' }]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const handleSend = async () => {
    if (input.trim() === '') return;

    const newMessages = [...messages, { id: messages.length + 1, sender: 'Customer', text: input, type: 'user' }];
    setMessages(newMessages);
    setInput('');

    const aiResponse = await getAiResponse(input);
    setMessages((prevMessages) => [
      ...prevMessages,
      { id: prevMessages.length + 1, sender: 'Support Bot', text: aiResponse, type: 'bot' },
    ]);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSend();
    }
  };

  const getAiResponse = async (query) => {
    const prompt = `
      Act as a chatbot integrated into a training and placement center of a college. You will be given a summary of company details that have come for placement. Answer the questions based on this information. Provide short, concise, and to-the-point answers.

      Company data: ${companySummary}

      Query: ${query}
    `;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    return text;
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <Layout>
      <Box
        sx={{
          height: '80vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#f1f1f1',
        }}
      >
        <Box sx={{ flex: 1, overflowY: 'auto', padding: '20px' }}>
          {messages.map((message) => (
            <Card
              key={message.id}
              sx={{
                display: 'flex',
                alignItems: 'flex-start',
                marginBottom: '10px',
                backgroundColor: message.type === 'user' ? '#e0f7fa' : '#ffffff',
              }}
            >
              <Avatar
                sx={{ margin: '10px', backgroundColor: message.type === 'user' ? '#2196f3' : '#4caf50' }}
              >
                {message.type === 'user' ? <ChatBubbleOutlineIcon /> : <SupportAgentIcon />}
              </Avatar>
              <CardContent>
                <Typography variant="body2" color="textSecondary">
                  {message.sender}
                </Typography>
                <Typography variant="body1">{message.text}</Typography>
              </CardContent>
            </Card>
          ))}
          <div ref={messagesEndRef} />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', padding: '10px', backgroundColor: '#ffffff' }}>
          <TextField
            variant="outlined"
            fullWidth
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your query..."
          />
          <Button variant="contained" color="primary" onClick={handleSend} sx={{ marginLeft: '10px' }}>
            Send
          </Button>
        </Box>
      </Box>
    </Layout>
  );
};

export default HelpPage;
