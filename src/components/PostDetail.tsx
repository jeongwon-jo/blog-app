import { Link } from "react-router-dom";

export default function PostDetail() {
  return (
		<>
			<div className="post__detail">
				<div className="post__box">
					<div className="post__title">
						Lorem, ipsum dolor sit amet consectetur adipisicing elit.
					</div>
					<div className="post__profile-box">
						<div className="post__profile"></div>
						<div className="post__author-name">패스트캠퍼스</div>
						<div className="post__date">2023.12.16 토요일</div>
					</div>
					<div className="post__utils-box">
						<div className="post__delete">삭제</div>
						<div className="post__edit">
							<Link to={`/posts/edit/1`}>수정</Link>
						</div>
					</div>
					<div className="post__text">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
						alias nam incidunt voluptatum? At, sapiente, cupiditate neque alias
						numquam nulla, doloribus natus dolor nostrum repellat corporis odio
						impedit nesciunt amet Lorem ipsum dolor sit, amet consectetur
						adipisicing elit. Nesciunt alias nam incidunt voluptatum? At,
						sapiente, cupiditate neque alias numquam nulla, doloribus natus
						dolor nostrum repellat corporis odio impedit nesciunt amet Lorem
						ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt alias
						nam incidunt voluptatum? At, sapiente, cupiditate neque alias
						numquam nulla, doloribus natus dolor nostrum repellat corporis odio
						impedit nesciunt amet Lorem ipsum dolor sit, amet consectetur
						adipisicing elit. Nesciunt alias nam incidunt voluptatum? At,
						sapiente, cupiditate neque alias numquam nulla, doloribus natus
						dolor nostrum repellat corporis odio impedit nesciunt amet
					</div>
				</div>
			</div>
		</>
	);
}