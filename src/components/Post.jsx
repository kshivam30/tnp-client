import React, { useState } from 'react';
import { Card, CardContent, Typography, CardActions, IconButton, Button } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Post = ({ author, content, likes }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  // Truncate content to 100 words if not expanded
  const truncatedContent = content.split(' ').slice(0, 100).join(' ');
  const displayContent = expanded ? content : truncatedContent + '...';

  return (
    <Card sx={{ width: '50%', margin: '0 auto', marginBottom: '16px' }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {author}
        </Typography>
        <Typography variant="body1" paragraph>
          {displayContent}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {content.length > 100 && (
          <Button onClick={handleExpandClick} color="primary">
            {expanded ? 'Show Less' : 'Show More'}
          </Button>
        )}
        <IconButton aria-label="like">
          <FavoriteIcon color="primary" />
        </IconButton>
        <Typography>{likes}</Typography>
      </CardActions>
    </Card>
  );
};

export default Post;
