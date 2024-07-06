import React, { useState, useEffect } from "react";
import Layout from "../layout/Layout";
import Post from "../components/Post";
import { Box, Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from 'react-router-dom';

const BlogPage = () => {
    const [blogs, setBlogs] = useState([]);
    const backendServer = process.env.REACT_APP_BACKEND_SERVER || 'http://localhost:5000';
    const navigate = useNavigate();

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await fetch(`${backendServer}/getBlogs`);
                const data = await response.json();
                setBlogs(data);
            } catch (error) {
                console.error('Error fetching blogs:', error);
            }
        };

        fetchBlogs();
    }, [backendServer]);

    return (
        <Layout>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ width: '80%' }}>
                    {blogs.map((blog) => (
                        <Post
                            key={blog._id}
                            author={blog.name}
                            company={blog.company}
                            content={blog.text}
                            createdAt={blog.createdAt}
                            email={blog.email}
                            likes={0}
                        />
                    ))}
                </div>
                <Box sx={{ position: 'fixed', bottom: '16px', right: '16px' }}>
                    <Fab color="primary" aria-label="add blog" onClick={() => navigate('/addBlog')}>
                        <AddIcon />
                    </Fab>
                </Box>
            </Box>
        </Layout>
    );
};

export default BlogPage;
