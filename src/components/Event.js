import React from "react";
import Calendar from "../containers/Calendar"
const Event = props => {
	console.log(props);
	return (
		<div className="event-div">
			<li className="event-li">
				<h3>{props.event.title}</h3>
				<p>{props.event.description}</p>
			</li>
		</div>
)
}
export default Event
