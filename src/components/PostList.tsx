import AuthContext from "context/AuthContext";
import { collection, deleteDoc, doc, getDocs, orderBy, query, where } from "firebase/firestore";
import { db } from "firebaseApp";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
interface PostListProps {
	// 타입 에러 체킹 가능
	hasNavigation?: boolean;
	defaultTab?: TabType | CategoryType
}

type TabType = "all" | "my";

export type CategoryType = 'Frontend' | "Backend" | "Web" | "Native";
export const CATEGORIES: CategoryType[] = ["Frontend", "Backend", "Web", "Native"]

export interface PostProps {
	id: string,
	title: string,
	email: string,
	summary: string,
	content: string,
	createdAt: string,
	updatedAt: string,
	uid: string,
	category: CategoryType
}

export default function PostList({ hasNavigation = true, defaultTab = "all" }:PostListProps) {
	const [activeTab, setActiveTab] = useState<TabType | CategoryType>(defaultTab);
	const [posts, setPosts] = useState<PostProps[]>([]);
	const {user} = useContext(AuthContext)
	
	const getPosts = async () => {
		// 초기화
		setPosts([]);

		let postsRef = collection(db, "posts");
		let postsQuery;

		if(activeTab === "my" && user) {
			// 나의 글만 필터링
			postsQuery = query(postsRef, where("uid", "==", user.uid), orderBy("createdAt", "desc"))
		} else if (activeTab === "all") {
			// 모든 글 보여주기
			postsQuery = query(postsRef, orderBy("createdAt", "desc"))
		} else{
			postsQuery = query(postsRef, where("category", "==", activeTab) , orderBy("createdAt", "desc"))
		}

		const datas= await getDocs(postsQuery)
		datas?.forEach((doc) => {
			// console.log(doc.data(), doc.id);
			const dataObj = {...doc.data() as PostProps, id: doc.id};
			setPosts((prev) => [...prev, dataObj as PostProps]);
		});
	}

	const handleDelete = async (id: string) => {
		const confirm = window.confirm('해당 게시글을 삭제하시겠습니까?');

		if(confirm && id) {
			await deleteDoc(doc(db, "posts", id));
			toast.success("게시글을 삭제했습니다.")

			// 변경된 포스트 리스트를 가져옴
			getPosts()
		}
	}
	
	useEffect(() => {
		getPosts()
	}, [activeTab])
  
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
					{CATEGORIES.map((category) => (
						<div
							key={category}
							role="presentation"
							onClick={() => setActiveTab(category)}
							className={activeTab === category ? "post__navigation--active" : ""}
						>
							{category}
						</div>
					))}
				</div>
			)}
			<div className="post__list">
				{posts?.length > 0 ? posts?.map((post, index) => (
					<div key={post?.id} className="post__box">
						<Link to={`/posts/${post?.id}`}>
							<div className="post__profile-box">
								<div className="post__profile"></div>
								<div className="post__author-name">{post?.email}</div>
								<div className="post__date">{post?.createdAt}</div>
							</div>
							<div className="post__title">{post?.title}</div>
						</Link>
						<div className="post__text">
							{post.summary}
						</div>
						{post?.email === user?.email && (
							<div className="post__utils-box">
							<div className="post__delete" role="presentation" onClick={() => handleDelete(post?.id as string)}>삭제</div>
							<div className="post__edit">
								<Link to={`/posts/edit/${post?.id}`}>수정</Link>
							</div>
						</div>)}
					</div>
				)) : (
					<div className="post__no-post">게시글이 없습니다.</div>
				)}
			</div>
		</>
	);
}