import { useState } from 'react';
import Router from './components/Router'
import Header from "components/Header";

import { app } from 'firebaseApp';
import { getAuth } from 'firebase/auth';

function App() {
	// auth 정보를 불러오는 함수 (app)이 꼭 들어가야함.
	const auth = getAuth(app)
	
	// !!auth?.currentUser : auth의 currentUser가 있는지 없는지 => true or false
	// firebase Auth가 인증되었으면 true로 변경해주는 로직 추가
	const [isAuthenticated, setIsAuthenticated] = useState<boolean>(!!auth?.currentUser);
  return (
		<>
			<div className="wrap">
				<Header />
				<div className="contents">
					<div className="contents__inner">
						<Router isAuthenticated={isAuthenticated} />
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
