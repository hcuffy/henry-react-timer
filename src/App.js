import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			timer: null,
			counter: 0,
			hasStarted: false,
			initiated: false,
			speed: 1000
		};

		this.startOrStopTimer = this.startOrStopTimer.bind(this);
		this.incrementCounter = this.incrementCounter.bind(this);
		this.updateSpeed = this.updateSpeed.bind(this);
	}

	// TODO: How can we change the speed of the timer without having to first pause the timer?
	startOrStopTimer() {
		if (!this.state.hasStarted) {
			const timer = setInterval(this.incrementCounter, this.state.speed);
			this.setState({
				timer,
				hasStarted: true,
				initiated: true
			});
		} else {
			clearInterval(this.state.timer);
			this.setState({
				timer: null,
				hasStarted: false
			});
		}
	}

	incrementCounter() {
		let { counter } = this.state;
		counter++;
		this.setState({ counter });
	}

	updateSpeed(e) {
		clearInterval(this.state.timer);
		let timer = this.state.timer;
		timer = setInterval(this.incrementCounter, e.target.value);
		this.setState({
			timer,
			speed: e.target.value
		});
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to React</h1>
				</header>
				<button
					className="btn btn-primary Timer-btn"
					onClick={this.startOrStopTimer}>
					{this.state.hasStarted ? 'Pause Timer' : 'Start Timer'}
				</button>
				{this.state.initiated && <h1>{this.state.counter}</h1>}
				<div className="App-speed">
					<input
						type="range"
						min="1"
						max="2000"
						value={this.state.speed}
						onChange={this.updateSpeed}
					/>
				</div>
			</div>
		);
	}
}

export default App;
