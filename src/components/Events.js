import React from "react";

const Events = props => {
console.log(props);
	return(
	<div>
		<ul>
			{props.user}
			{props.title}
			<li>
			{props.description}
			</li>
		</ul>
	 </div>
 )
}
export default Events
