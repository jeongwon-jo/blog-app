import Router from './components/Router'
import Header from "components/Header";

function App() {
  return (
		<>
			<div className="wrap">
				<Header />
				<div className="contents">
					<div className="contents__inner">
						<Router />
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
