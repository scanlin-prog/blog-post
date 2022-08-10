import React from 'react';
import './BlogTag.css';
import { tagColors } from '../../utils/utils.js';

function BlogTag(props) {

	const [color, setColor] = React.useState('');

	React.useEffect(() => {
		setBackgoundColor()
	})

	function setBackgoundColor() {
		const tagColor = Object.keys(tagColors).find((tag) => tag === props.tagTitle.toLowerCase());
		setColor(tagColors[tagColor])
	}

	return (
		<div className={`tag ${color}`}>
			<p className="tag__title">{props.tagTitle}</p>
		</div>
	)
}

export default BlogTag;