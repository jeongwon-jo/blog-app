import PostList from "components/PostList";
import Carousel from "components/Carousel";
import { Link } from "react-router-dom";

export default function Home() {
  return (
		<>
			<Carousel />
			<div className="btn__new">
				<Link to="/posts/new" className="link">
					<span>Keep up with the latest in any topic</span>
				</Link>
			</div>
			<PostList />
		</>
	);
}