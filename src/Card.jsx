import './App.css'
export default function Card (props) {
    return (
			<>
				<div onClick={props.onClick} className={props.className}>
					<div className="testInner">
						<h3>{props.text}</h3>
					</div>
				</div>
			</>
		);
}