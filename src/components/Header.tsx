import { Link, NavLink } from "react-router-dom";
import Logo from "../asset/images/logo.png";
import { BsSun, BsMoonFill } from "react-icons/bs" 
import { IoHomeOutline } from "react-icons/io5";
import { CgNotes } from "react-icons/cg";
import { LuPencilLine } from "react-icons/lu";
import { FaRegUserCircle } from "react-icons/fa";
import { useContext } from "react";
import ThemeContext from "context/ThemeContext";

export default function Header() {
	const context = useContext(ThemeContext)


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
							isActive ? "link active" : "link"
						}>
							<IoHomeOutline />
						</NavLink>
					<NavLink
						to="/posts"
						className={({ isActive }) =>
							isActive ? "link active" : "link"
						}
					>
						<CgNotes />
					</NavLink>
					<div className="new">
						<NavLink
							to="/posts/new"
							className={({ isActive }) =>
								isActive ? "link active" : "link"
							}
						>
							<LuPencilLine />
						</NavLink>
					</div>
				</div>
				<div className="header__bottom">
					<div className="header__profile">
						<NavLink
							to="/profile"
							className={({ isActive }) =>
								isActive ? "link active" : "link"
							}
						>
							<FaRegUserCircle />
						</NavLink>
					</div>
					<div className="header__theme">
						{context.theme === "light" ? <BsSun onClick={context.toggleMode} className="theme__btn"/> : <BsMoonFill onClick={context.toggleMode} className="theme__btn dark"/>}
					</div>
				</div>
			</div>
		</header>
	);
}
