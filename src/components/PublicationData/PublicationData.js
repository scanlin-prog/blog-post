import React from 'react';
import './PublicationData.css'

function PublicationData(props) {
	return (
		<div className="publication-data">
			<img src={props.user.userImage} className="publication-data__user-image" alt="user-00" />
			<p className="publication-data__user-name">{props.user.username}<span className="publication-data__date">{props.user.date}</span></p>
		</div>
	)
}

export default PublicationData;