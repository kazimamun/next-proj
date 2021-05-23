import React from 'react';
import { useSelector } from 'react-redux';
import ShowBlog from './ShowBlog';

const ShowBlogContainer = () => {
    const blogPosts = useSelector(state=>state.blogs)
    return <ShowBlog blogs={blogPosts} />
}
export default ShowBlogContainer;