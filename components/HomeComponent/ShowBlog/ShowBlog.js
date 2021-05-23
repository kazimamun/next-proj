import React from 'react';

const BlogPost = ({blog}) => {
    return(
        <div className="col-md-6 col-lg-4 col-xl-4">
                        <div className="blog-box">
                            <div className="blog-img">
                                <img className="img-fluid" src={`assets/images/${blog.img}.jpg`} alt="" />
                            </div>
                            <div className="blog-content">
                                <div className="title-blog">
                                    <h3>{blog.title}</h3>
                                    <p>{blog.post}</p>
                                </div>
                                <ul className="option-blog">
                                    <li><a href="#" data-toggle="tooltip" data-placement="right" title="Likes"><i className="far fa-heart"></i></a></li>
                                    <li><a href="#" data-toggle="tooltip" data-placement="right" title="Views"><i className="fas fa-eye"></i></a></li>
                                    <li><a href="#" data-toggle="tooltip" data-placement="right" title="Comments"><i className="far fa-comments"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
    )
}

const ShowBlog = ({blogs}) => {
    return (
        <div className="latest-blog">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="title-all text-center">
                            <h1>latest blog</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet lacus enim.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {
                        blogs.map(blog=><BlogPost key={blog.id} blog={blog} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default ShowBlog;