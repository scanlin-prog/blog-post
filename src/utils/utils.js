import post01 from '../images/post-01.png';
import post02 from '../images/post-02.png';
import post03 from '../images/post-03.png';
import user01 from '../images/user-01.png';
import user02 from '../images/user-02.png';
import user03 from '../images/user-03.png';

export const posts = [
	{
		image: post01,
		tags: [
			'Product',
			'Culture'
		],
		title: 'The quick brown fox jumped over the lazy dog.',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		user: {
			userImage: user01,
			username: 'Alexandra Smith',
			date: 'Jan 7, 2020'
		}
	},
	{
		image: post02,
		tags: [
			'Engineering'
		],
		title: 'The quick brown fox jumped over the lazy dog.',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		user: {
			userImage: user02,
			username: 'Lisa Crockett',
			date: 'Jan 4, 2020'
		}
	},
	{
		image: post03,
		tags: [
			'Design',
			'Tutorials and articles'
		],
		title: 'The quick brown fox jumped over the lazy dog.',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		user: {
			userImage: user03,
			username: 'Anton Sebastian',
			date: 'Jan 2, 2020'
		}
	},
]

export const tagColors = {
	'product': 'tag_theme-product',
	'engineering': 'tag_theme-engineering',
	'culture': 'tag_theme-culture',
	'design': 'tag_theme-design',
	'tutorials and articles': 'tag_theme-tutorials-and-articles',
}