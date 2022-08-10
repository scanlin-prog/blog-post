import React from 'react';
import './BlogPost.css';
import { posts } from '../../utils/utils.js';
import user00 from '../../images/user-00.png';
import MainImage from '../../images/main-image.png';
import articleImage from '../../images/news-inner-image.png';
import Blogs from '../Blogs/Blogs';
import PublicationData from '../PublicationData/PublicationData';
import BlogTags from '../BlogTags/BlogTags';
import ArticleContent from '../ArticleContent/ArticleContent';


function BlogPost() {

	return (
		<article className="blog-post">
			<div className="blog-post-header">
				<h1 className="blog-post-header__title">Designing a functional workflow at home.</h1>
				<p className="blog-post-header__subtitle">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</p>
				<div className="blog-post-header__container">
					<PublicationData user={{ userImage: user00, username: 'Chris Solerieu', date: 'Jan 19, 2020' }} />
					<BlogTags tags={['Product', 'Engineering']} />
				</div>
			</div>

			<img src={MainImage} className="blog-post-image" alt="image_main" />

			<ArticleContent articleImage={articleImage} />

			<div className="blogs">
				<h2 className="blogs-header">More from Open PRO</h2>
				<Blogs posts={posts} />
			</div>
		</article>
	)
}

export default BlogPost;