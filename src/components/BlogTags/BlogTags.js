import React from 'react';
import './BlogTags.css';
import BlogTag from '../BlogTag/BlogTag';

function BlogTags(props) {
	return (
		<div className="blog-tags">
			{
				props.tags.map((tag, i) => {
					return (
						<BlogTag key={i} tagTitle={tag}/>
					)
				})
			}
		</div>
	)
}

export default BlogTags;