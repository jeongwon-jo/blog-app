import { Route, Routes, Navigate, } from "react-router-dom";
import Home from "pages/home";
import PostListPage from "pages/posts";
import PostDetailPage from "pages/posts/detail";
import PostNewPage from "pages/posts/new";
import PostEditPage from "pages/posts/edit";
import ProfilePage from "pages/profile";
import LoginPage from "pages/login";
import SignupPage from "pages/signup";

interface RouterProps {
	isAuthenticated: boolean
}

export default function Router({isAuthenticated}: RouterProps) {
	return (
		<>
			<Routes>
				{isAuthenticated ? (
					<>
					<Route path="/" element={<Home />}></Route>
					<Route path="/posts" element={<PostListPage />}></Route>
					<Route path="/posts/:id" element={<PostDetailPage />}></Route>
					<Route path="/posts/new" element={<PostNewPage />}></Route>
					<Route path="/posts/edit/:id" element={<PostEditPage />}></Route>
					<Route path="/profile" element={<ProfilePage />}></Route>
					<Route path="/login" element={<LoginPage />}></Route>
					<Route path="/signup" element={<SignupPage />}></Route>
					<Route path="*" element={<Navigate replace to="/"></Navigate>}></Route>
					</>
				) : (
					<>
						<Route path="/login" element={<LoginPage />}></Route>
						<Route path="/signup" element={<SignupPage />}></Route>
						<Route path="*" element={<Navigate replace to="/login"></Navigate>}></Route>
					</>
				)}
				
			</Routes>
		</>
	);
}
