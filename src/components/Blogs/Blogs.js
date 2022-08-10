import React from 'react';
import './Blogs.css';
import Blog from '../Blog/Blog';

function Blogs(props) {
	return (
		<div className="blogs-container">
			{
				props.posts.map((post, i) => {
					return (
						<Blog key={i} post={post} />
					)
				})
			}
		</div>
	)
}

export default Blogs;