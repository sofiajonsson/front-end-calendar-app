import React from "react";
import Calendar from "../containers/Calendar"
const Events = props => {
console.log(props);
	return(
	<div>
		<ul>
			<li>
			<h3>{props.title}</h3>
			<p>{props.description}</p>
			</li>
		</ul>
	 </div>
 )
}
export default Events
