import React from 'react';
import './ArticleContent.css';

function ArticleContent(props) {
	return (
		<div className="article">
			<p className="article__text-main">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis scelerisque fermentum. Neque sodales ut etiam sit amet. Ligula ullamcorper malesuada proin libero nunc consequat interdum varius. Quam pellentesque nec nam aliquam sem et tortor consequat. Pellentesque adipiscing commodo elit at imperdiet. Semper auctor neque vitae tempus quam pellentesque nec. Amet dictum sit amet justo donec enim diam. Varius sit amet mattis vulputate enim nulla aliquet porttitor. Odio pellentesque diam volutpat commodo sed. Elit sed vulputate mi sit amet mauris commodo quis imperdiet.
			</p>
			<blockquote className="article__text-main article__blockquote">
				Greg Korshak, a journalist for the New York Times, reported that e-commerce audience will reach 380 million worldwide this year, comprising 250 dedicated fans and 215 occasional viewers. New York Times projected that the e-commerce industry would generate $905 million in revenue in 2020.
			</blockquote>
			<p className="article__text-main">
				Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Eget sit amet tellus cras adipiscing enim eu. Neque aliquam vestibulum morbi blandit cursus risus.
			</p>
			<figure className="article__image-container">
				<img src={props.articleImage} className="article__image" alt="article_image" />
				<p className="article__image-label">Photo by Helena Lopes on Unsplash</p>
			</figure>
			<h3 className="article__title article__title-large">Challenges of designing for masses</h3>
			<p className="article__text-main">
				Aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat. Auctor urna nunc id cursus metus aliquam eleifend. Arcu dictum varius duis at consectetur lorem donec massa sapien. Sed risus ultricies tristique nulla aliquet. Morbi tristique senectus et netus et, nibh nisl condimentum id venenatis a condimentum vitae sapien.
			</p>
			<h4 className="article__title article__title-small">Here’s what we discovered:</h4>
			<p className="article__text-main">
				Aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat. Auctor urna nunc id cursus metus aliquam eleifend. Arcu dictum varius duis at consectetur lorem donec massa sapien. Sed risus ultricies tristique nulla aliquet. Morbi tristique senectus et netus et, nibh nisl condimentum id venenatis a condimentum vitae sapien.
			</p>
			<p className="article__text-main">
				Non nisi est sit amet facilisis magna etiam, aliquet porttitor lacus luctus accumsan tortor posuere. Habitasse platea dictumst quisque sagittis purus sit amet volutpat consequat. Id velit ut tortor pretium viverra.
			</p>
			<p className="article__text-main">
				Tempor commodo ullamcorper a lacus vestibulum sed arcu non odio tristique senectus et netus et. Nibh nisl condimentum id venenatis:
			</p>
			<h4 className="article__title article__title-middle">1. The quick brown fox jumped over the lazy dog.</h4>
			<p className="article__text-main">
				Tempor commodo ullamcorper a lacus vestibulum sed arcu non odio tristique senectus et netus et. Nibh nisl condimentum id venenatis:
			</p>
			<h4 className="article__title article__title-middle">2. The quick brown fox jumped over the lazy dog.</h4>
			<p className="article__text-main">
				Sed risus ultricies tristique nulla aliquet morbi tristique senectus et netus et. Nibh nisl condimentum, id venenatis a condimentum vitae sapien.
			</p>
			<p className="article__text-main">
				Bibendum enim facilisis gravida neque convallis. Convallis posuere morbi leo urna molestie turpis in eu mi bibendum neque egestas. Est ante in nibh mauris cursus mattis molestie aliquam purus sit amet luctus vulputate sapien nec sagittis aliquam enim nec dui nunc mattis enim, sit amet nulla facilisi morbi tempus iaculis urna id. Blandit cursus risus at ultrices mi tempus imperdiet nulla.
			</p>
			<h3 className="article__title article__title-large">Conclusions</h3>
			<p className="article__text-main">
				Sapien nec sagittis aliquam malesuada orci sagittis eu volutpat odio facilisis mauris sit amet massa, consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo, purus viverra accumsan in nisl nisi scelerisque. Vel pharetra vel turpis nunc eget lorem malesuada bibendum arcu vitae elementum curabitur vitae nunc sed velit. Tempus quam pellentesque nec nam aliquam sem et tortor consequat.
			</p>

			<div className="article__links">
				<p className="article__text-main article__links-text">Originally published at <a className="article__links-link" href="https://cruip.com/">https://cruip.com/</a>.</p>
				<div className="article__icons">
					<a href="#" className="article__link" target="_blank">
						<div className="article__icon article__icon-twitter"></div>
					</a>
					<a href="#" className="article__link" target="_blank">
						<div className="article__icon article__icon-facebook"></div>
					</a>
					<a href="#" className="article__link" target="_blank">
						<div className="article__icon article__icon-linkedln"></div>
					</a>
				</div>
			</div>
		</div>
	)
}

export default ArticleContent;