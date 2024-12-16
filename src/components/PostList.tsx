import { useState } from "react";
import { Link } from "react-router-dom";
interface PostListProps {
	// 타입 에러 체킹 가능
	hasNavigation?: boolean;
}

type TabType = "all" | "my";

export default function PostList({ hasNavigation = true }:PostListProps) {
	const [activeTab, setActiveTab] = useState<TabType>("all");
  return (
		<>
			{hasNavigation && (
				<div className="post__navigation">
					<div
						role="presentation"
						onClick={() => setActiveTab("all")}
						className={activeTab === "all" ? "post__navigation--active" : ""}
					>
						All
					</div>
					<div
						role="presentation"
						onClick={() => setActiveTab("my")}
						className={activeTab === "my" ? "post__navigation--active" : ""}
					>
						My Post
					</div>
				</div>
			)}
			<div className="post__list">
				{[...Array(10)].map((e, index) => (
					<div key={index} className="post__box">
						<Link to={`/posts/${index}`}>
							<div className="post__profile-box">
								<div className="post__profile"></div>
								<div className="post__author-name">패스트캠퍼스</div>
								<div className="post__date">2023.12.16 토요일</div>
							</div>
							<div className="post__title">게시글 타이틀입니다. {index}</div>
							<div className="post__text">
								Lorem ipsum dolor sit, amet consectetur adipisicing elit.
								Nesciunt alias nam incidunt voluptatum? At, sapiente, cupiditate
								neque alias numquam nulla, doloribus natus dolor nostrum
								repellat corporis odio impedit nesciunt amet
							</div>
							<div className="post__utils-box">
								<div className="post__delete">삭제</div>
								<div className="post__edit">수정</div>
							</div>
						</Link>
					</div>
				))}
			</div>
		</>
	);
}