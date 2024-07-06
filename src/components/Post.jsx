import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

const Post = ({ author, company, content, createdAt, email, likes }) => {
    return (
        <Card sx={{ marginBottom: 2, width: '100%', backgroundColor: 'white', color: '#fff' }}>
            <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography variant="h6" color="textSecondary" sx={{ fontWeight: 'bold', marginRight: 1 }}>
                            {author}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            placed at {company}
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                        <Typography variant="body2" color="textSecondary">
                            {new Date(createdAt).toLocaleString()}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            {email}
                        </Typography>
                    </Box>
                </Box>
                <Typography variant="body1" sx={{ marginTop: 1 }} color="textSecondary">
                    {content}
                </Typography>
                <Box sx={{ marginTop: 1 }}>
                    <Typography variant="body2" color="textSecondary">
                        Likes: {likes}
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
};

export default Post;
