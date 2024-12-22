import { useEffect, useState, useContext } from 'react';
import Router from './components/Router'
import Header from "components/Header";

import { app } from 'firebaseApp';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { ToastContainer } from "react-toastify";
import Loader from 'components/Loader';
import ThemeContext from 'context/ThemeContext';

function App() {
	const context = useContext(ThemeContext)
	// auth 정보를 불러오는 함수 (app)이 꼭 들어가야함.
	const auth = getAuth(app);
	// auth를 체크하기 전에 (initialize 전) loader 띄워주는 용도
	const [init, setInit] = useState<boolean>(false)

	// !!auth?.currentUser : auth의 currentUser가 있는지 없는지 => true or false
	// firebase Auth가 인증되었으면 true로 변경해주는 로직 추가
	const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
		!!auth?.currentUser
	);

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				setIsAuthenticated(true);
			} else {
				setIsAuthenticated(false);
			}
			setInit(true)
		});
	}, [auth]);

	return (
		<div className={context.theme === "light" ? "white" : "dark"}>
			{init ? 
			<div className="wrap">
				<Header />
				<div className="contents">
					<div className="contents__inner">
						<ToastContainer />
						<Router isAuthenticated={isAuthenticated} />
					</div>
				</div>
			</div> :
			<Loader />
			}
		</div>
	);
}

export default App;
