import { Link, NavLink } from "react-router-dom";
import Logo from "../asset/images/logo.png";

export default function Header() {
	const activeStyle = {
		background: "grey",
		color: "white",
	};

	return (
		<header>
			<div className="header__inner">
				<Link to="/" className="header__logo">
					<img src={Logo} alt="로고" />
				</Link>
				<div className="header__menu">
					<NavLink
						to="/"
						className={({ isActive }) =>
							isActive ? "link link_home active" : "link link_home"
						}
					></NavLink>
					<NavLink
						to="/posts"
						className={({ isActive }) =>
							isActive ? "link link_post active" : "link link_post"
						}
					></NavLink>
					<div className="new">
						<NavLink
							to="/posts/new"
							className={({ isActive }) =>
								isActive ? "link link_post_new active" : "link link_post_new"
							}
						></NavLink>
					</div>
				</div>
				<div className="header__profile">
					<NavLink
						to="/profile"
						className={({ isActive }) =>
							isActive ? "active" : ""
						}
					></NavLink>
				</div>
			</div>
		</header>
	);
}
