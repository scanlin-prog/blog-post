import React from 'react';
import './Blog.css';
import BlogTags from '../BlogTags/BlogTags';
import PublicationData from '../PublicationData/PublicationData';

function Blog(props) {
	return (
		<div className="blog">
			<div className="blog__image">
				<img src={props.post.image} alt="blog_image" />
			</div>
			<BlogTags tags={props.post.tags} />
			<h3 className="blog__title">{props.post.title}</h3>
			<p className="blog__text">
				{props.post.text}
			</p>
			<PublicationData user={props.post.user} />
		</div>
	)
}

export default Blog;