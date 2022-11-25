import { useEffect, useState } from "react";
import "./App.css";
import Dice from "./assets/icon-dice.svg";
import Divider from "./assets/pattern-divider-desktop.svg";

function App() {
	const [advice, setAdvice] = useState();
	const [adviceId, setAdviceId] = useState();

	useEffect(() => {
		const loadAdvice = async () => {
			try {
				const result = await fetch("https://api.adviceslip.com/advice").then(
					(res) => res.json()
				);

				setAdvice(result.slip.advice);
				setAdviceId(result.slip.id);
			} catch {
				console.log("Error");
			}
		};
		loadAdvice();
	}, []);

	const getAdvice = async () => {
		try {
			const result = await fetch("https://api.adviceslip.com/advice").then(
				(res) => res.json()
			);

			setAdvice(result.slip.advice);
			setAdviceId(result.slip.id);
		} catch {
			console.log("Error");
		}
	};

	return (
		<div className="App">
			<div className="AdviceCard">
				<main className="Quote">
					<p id="adviceId">Advice #{adviceId}</p>
					<p id="advice">"{advice}"</p>
				</main>
				<footer>
					<div className="divider">
						<img src={Divider} alt="dividerHere" />
					</div>
					<div
						className="Btn"
						onClick={() => {
							getAdvice();
						}}
					>
						<input
							type="image"
							src={Dice}
							alt="randomize"
							onClick={() => {
								getAdvice();
							}}
						/>
					</div>
				</footer>
			</div>
		</div>
	);
}

export default App;

