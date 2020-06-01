import React from "react";
import Axios from "axios";
import { Jumbotron, Button, Container, Row, Col } from "react-bootstrap";

class Game extends React.Component {
	constructor(props) {
		super(props);

		this.handleStart = this.handleStart.bind(this);
		this.handleEnd = this.handleEnd.bind(this);
		this.handleReset = this.handleReset.bind(this);
		this.handleOptionChange = this.handleOptionChange.bind(this);
		this.handleAnswer = this.handleAnswer.bind(this);
		this.createQuestion = this.createQuestion.bind(this);

		this.state = {
			points: 10,
			currentName: "",
			currentGender: "",
			start: true,
			selectedOption: "",
			status: "",
		};
	}

	createQuestion() {
		Axios.get("http://localhost:4000/fetchName/").then((response) => {
			if (response.data.success) {
				this.setState({
					currentName: response.data.info.firstName,
					currentGender: response.data.info.gender,
				});
			}
		});
	}

	componentWillMount() {
		this.createQuestion();
	}

	handleStart() {
		this.setState({
			start: false,
		});
		this.createQuestion();
	}

	handleReset() {
		this.setState({
			points: 10,
			currentName: "",
			currentGender: "",
		});
		this.createQuestion();
	}
	handleEnd() {
		alert("Your score is " + this.state.points);
		this.setState({
			points: 10,
			currentName: "",
			currentGender: "",
			start: true,
		});
	}

	handleOptionChange(changeEvent) {
		this.setState({
			selectedOption: changeEvent.target.value,
		});
	}

	handleAnswer() {
		let currentPoints = 1;
		if (this.state.selectedOption === "") {
			alert("Please select an answer to submit the question!");
		} else {
			if (this.state.selectedOption === this.state.currentGender) {
				currentPoints = 1;
			} else {
				currentPoints = -1;
			}
			this.setState(
				{
					points: this.state.points + currentPoints,
					selectedOption: "",
				},
				() => {
					if (this.state.points === 0) {
						alert("You Lost the Game!");
						this.setState({
							points: 10,
							currentName: "",
							currentGender: "",
							start: true,
							selectedOption: "",
							status: "",
						});
					} else if (this.state.points === 20) {
						alert("You won the Game!");
						this.setState({
							points: 10,
							currentName: "",
							currentGender: "",
							start: true,
							selectedOption: "",
							status: "",
						});
						console.log(this.state);
					} else {
						this.createQuestion();
					}
				}
			);
		}
	}

	render() {
		return (
			<div>
				<Jumbotron style={{ backgroundColor: "white" }}>
					<h1>Guess the Name!!</h1>
					<p>
						For any given first name if you can guess the right gender you get 1
						point else -1. Reach to 20 points to win the game and if your score
						is zero, you will lose the game.
					</p>
					{this.state.start ? (
						<div>
							<Button
								variant="outline-primary"
								id="button1"
								onClick={this.handleStart}
							>
								Start Game
							</Button>
						</div>
					) : (
						<div>
							<h3>Points: {this.state.points}</h3>

							<Button
								variant="outline-primary"
								id="button1"
								onClick={this.handleReset}
							>
								Reset
							</Button>
							<Button
								variant="outline-primary"
								id="button2"
								onClick={this.handleEnd}
							>
								End
							</Button>
							<Container>
								<Row>
									<Col lg={3}></Col>
									<Col lg={6}>
										<div className="question">
											<h1>{this.state.currentName}</h1>
										</div>
										<div className="center">
											<form>
												<Container>
													<Row>
														<Col lg={1}></Col>
														<Col lg={5}>
															<div className="radio">
																<label className="radio-inline">
																	{" "}
																	<input
																		type="radio"
																		value="male"
																		className="radioButton"
																		checked={
																			this.state.selectedOption === "male"
																		}
																		onChange={this.handleOptionChange}
																	/>
																	Male
																</label>
															</div>
														</Col>
														<Col lg={5}>
															<div className="radio radioButton">
																<label className="radio-inline control-label">
																	{" "}
																	<input
																		type="radio"
																		className="radioButton"
																		value="female"
																		checked={
																			this.state.selectedOption === "female"
																		}
																		onChange={this.handleOptionChange}
																	/>
																	Female
																</label>
															</div>
														</Col>
														<Col lg={1}></Col>
													</Row>
												</Container>

												<Button
													variant="outline-secondary"
													id="button1"
													onClick={this.handleAnswer}
												>
													Submit
												</Button>
											</form>
										</div>
									</Col>
									<Col lg={3}></Col>
								</Row>
							</Container>
						</div>
					)}
				</Jumbotron>
			</div>
		);
	}
}

export default Game;
