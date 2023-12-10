import React, { useState, useEffect } from 'react';
import { FaStar } from "react-icons/fa";

const Comment = () => {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");

    useEffect(() => {
        // Load comments from local storage when component mounts
        const storedComments = JSON.parse(localStorage.getItem('comments')) || [];
        setComments(storedComments);
    }, []);

    useEffect(() => {
        // Save comments to local storage whenever comments change
        localStorage.setItem('comments', JSON.stringify(comments));
    }, [comments]);

    const submitComment = () => {
        if (newComment.trim() !== "") {
            const currentDate = new Date();
            const formattedDate = currentDate.toLocaleString();

            const newCommentObject = {
                img: "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2021/10/30/969136/Cristiano-Ronaldo4.jpg",
                user: "Nguyễn Dương Gia Bảo",
                rating: 5,
                product: "giày bóng đá",
                comment: newComment,
                time: formattedDate,
            };

            setComments([...comments, newCommentObject]);
            setNewComment("");
        }
    };

    return (
        <>
            <div className='comment'>
                <div className="product-comments-container">
                    <div className='header-comment'>
                        <h3 className="product-title">BÌNH LUẬN VÀ ĐÁNH GIÁ</h3>
                    </div>
                    <ul>
                        {comments.map((comment, index) => (
                            <li key={index} className="comment-item">
                                <div className="comment-header">
                                    {comment.img && <img className="comment-image" src={comment.img} alt="User Avatar" />}
                                    <div className="comment-details">
                                        <p><strong>{comment.user}</strong></p>
                                        <p>Đánh giá: {Array.from({ length: comment.rating }).map((_, index) => (
                                            <FaStar key={index} className="star-icon" />
                                        ))}</p>
                                        <p>Sản phẩm :{comment.product}</p>
                                    </div>
                                </div>
                                <p className="comment-content">{comment.comment}</p>
                                <p className="comment-content">{comment.time}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="user-feedback-container">
                    <h3>Thêm Bình Luận và Đánh Giá</h3>
                    <textarea
                        placeholder="Nhập bình luận của bạn..."
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                    />
                    <button onClick={submitComment}>Gửi Bình Luận</button>
                </div>
            </div>
        </>
    );
}

export default Comment;
