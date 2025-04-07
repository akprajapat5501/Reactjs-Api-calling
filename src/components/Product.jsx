

import { use, useEffect, useState } from "react";

const Product = () => {
    const [x, setX] = useState([]);
    const [liked, setLiked] = useState([]);
    // console.log(x);


    const products = async () => {
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();
        console.log(data);
        setX(data.products);

    };

    // products();
    useEffect(() => {
        products();
    }, []);

    const toggleLike = (id) => {
        setLiked((prev) => ({ ...prev, [id]: !prev[id] }));
    }

    return (
        <>
            <div style={{
                display: "flex",
                flexWrap: 'wrap',
                gap: "30px",
                justifyContent: "center",
                padding: "40px",
                backgroundColor: "#f8f9fa",
                fontFamily: "Segoe Ul',Tahoma,Geneva,Verdana,sans-serif",
            }}>
                {x.map((data, index) => {
                    console.log(data);
                    return (
                        <div style={{
                            position: "relative",
                            backgroundColor: "#fff",
                            borderRadius: "20px",
                            width: "280px",
                            padding: "10px",
                            boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                            cursor: "pointer",
                        }}
                        >
                            <div
                                onClick={() => toggleLike(data.id)}
                                title={liked[data.id] ? "Unlike" : "Like"}
                                style={{
                                    position: "absolute",
                                    top: "15px",
                                    right: "15px",
                                    fontSize: "20px",
                                    color: liked[data.id] ? "#e74c3c" : "white",
                                    transform: liked[data.id] ? "scale(1.2)" : "scale(1)",
                                    transition: "transform .2s ease,color .3s ease",
                                    zndex: "2",
                                    cursor: "pointer",
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.tansform = "scale(1.4)";
                                }}
                            >
                                {liked[data.id] ? "❤" : "🤍"}
                            </div>

                            <img src={data.thumbnail} alt="" />
                            <h3>{data.title}</h3>
                            <p>{data.description}</p>
                            <div style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                marginTop: "10px",
                            }}>
                                <span style={{
                                    color: "green",
                                    fontWeight: "bold",
                                }}>${data.price}</span>

                                <span style={{
                                    color: "#ffc107"
                                }}>⭐ {data.rating}</span>
                            </div>
                            <button style={{
                                marginTop: "15px",
                                width: "100%",
                                padding: "10px",
                                border: "none",
                                borderRadius: "10px",
                                cursor: "pointer",
                                backgroundColor: "lightblue",
                            }}>View detalis</button>
                        </div>
                    )

                })}
            </div>
        </>
    )
};


export default Product;