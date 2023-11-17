// ProductDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css';

const ProductDetail = ({ shopItems, addToCart }) => {


    const [comments, setComments] = useState([]);
    const [reviews, setReviews] = useState([]);


    const { id } = useParams();
    const [product, setProduct] = useState({});


    const [newComment, setNewComment] = useState("");

    const submitComment = () => {
        if (newComment.trim() !== "") {
            const currentDate = new Date();
            const formattedDate = currentDate.toLocaleString();

            const newCommentObject = {
                user: "Tên Người Dùng", // Thay bằng thông tin tên người dùng thực tế
                rating: 5, // Thay bằng số sao thực tế
                comment: newComment,
                time: formattedDate,
            };

            setComments([...comments, newCommentObject]);
            setNewComment("");
        }
    };
    useEffect(() => {
        const selectedProduct = shopItems.find(item => item.id === parseInt(id, 10));
        setProduct(selectedProduct || {});
    }, [id, shopItems]);

    return (
        <>
            <div className="product-detail-container">
                <div className="product-image-container">
                    {product.imageSet && (
                        <img src={product.imageSet[0].url} alt={`Product ${id}`} className="product-image" />
                    )}
                </div>
                <div className="product-info-container">
                    <h2 className="product-name">{product.name}</h2>
                    <p className="product-price">${product.price}</p>
                    <p className="product-description">{product.detail}</p>
                    <p className="product-attribute">
                        <strong>Attribute:</strong> {product.attribute}
                    </p>
                    <p className="product-brand">
                        <strong>Brand:</strong> {product.brand}
                    </p>
                    <p className="product-quantity">
                        <strong>Quantity:</strong> {product.quantity}
                    </p>
                    <button onClick={() => addToCart(shopItems)} className="add-to-cart-button">Thêm vào giỏ hàng</button>
                </div>

            </div>
            <div className="product-comments-container">
                <h3>Bình Luận và Đánh Giá</h3>
                <ul>
                    {comments.map((comment, index) => (
                        <li key={index}>
                            <p><strong>{comment.user}</strong></p>
                            <p>{comment.rating} sao</p>
                            <p>{comment.comment}</p>
                            <p>{comment.time}</p>
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
        </>
    );
};

export default ProductDetail;
