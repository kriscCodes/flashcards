export default function Form(props){
    return (
			<>
				<div className="userForm">
					<form>
						<label>Take your best shot!
							<input
								value={props.value}
								onChange={props.onChange}
								type="text"
							></input>
                            <button onSubmit = {props.onSubmit}>Check</button>
						</label>
					</form>
				</div>
			</>
		);
}