import { BrowserRouter } from "react-router-dom";
import { Router } from "./Components/Router/router";
import "./globalCSS/normalize.css";
import "./App.css";
function App() {
	return (
		<>
			<BrowserRouter>
				<Router />
			</BrowserRouter>
		</>
	);
}

export default App;
