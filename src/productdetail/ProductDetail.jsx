import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css';
const shopItems = [
    {
        id: 1,
        name: "Product 1",
        discount: 10,
        imageSet: [
            { url: "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2021/1/22/873088/Ronaldo1.jpg" },
            { url: "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2021/1/22/873088/Ronaldo1.jpg" },
            { url: "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2021/1/22/873088/Ronaldo1.jpg" },
        ],
        price: 100000,
        detail: "Product 1 details",
        attribute: "Attribute 1",
        brand: "Brand 1",
        quantity: 10,
        sizes: [
            { name: "Small" },
            { name: "Medium" },
            { name: "Large" }
          ]
    },
    {
        id: 2,
        name: "Product 2", // Make sure each product has a unique name
        discount: 10,
        imageSet: [
            { url: "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2021/1/22/873088/Ronaldo1.jpg" },
            { url: "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2021/1/22/873088/Ronaldo1.jpg" },
            { url: "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2021/1/22/873088/Ronaldo1.jpg" },
        ],
        price: 100000,
        detail: "Product 2 details", // Change details for each product
        attribute: "Attribute 2", // Change attributes for each product
        brand: "Brand 2", // Change brands for each product
        quantity: 10,
        sizes: [
            { name: "Small" },
            { name: "Medium" },
            { name: "Large" }
          ]
    },
];


const ProductDetail = ({ addToCart }) => {
    
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
                <div className="main-image">
                {product.imageSet && product.imageSet.length > 0 && (
                <img
                    src={product.imageSet[0].url} 
                    alt={`Product ${id} - Main Image`} 
                    className="product-image"/>)}
                </div>
                    <div className="thumbnail-images">
                         {product.imageSet && product.imageSet.map((image, index) => (
                            <img
                                key={index} 
                                 src={image.url} 
                                    alt={`Product ${id} - Thumbnail ${index + 1}`} 
                                className="thumbnail-image" /> ))}
                        </div>
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
                    <p className="product-size">
                    
                        <strong>Size:</strong> 
                        {product.sizes && product.sizes.map((size, index) => (
                         <button key={index}>
                             {size.name}
                            </button>
                        ))}
                    </p>
                    <button onClick={() => addToCart(product)} className="add-to-cart-button">Thêm vào giỏ hàng</button>
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