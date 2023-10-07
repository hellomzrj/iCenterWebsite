import "./SingleProduct2.scss";

import React, { useState } from 'react';
import Images1 from "../../assets/products/mbp16-silver-gallery1.jpg";
import Images2 from "../../assets/products/mbp16-silver-gallery2.jpg";
import Images3 from "../../assets/products/mbp16-silver-gallery3.jpg";
import Images4 from "../../assets/products/mbp16-silver-gallery4.jpg";
import { FaCartPlus } from "react-icons/fa";
import { MdCall } from "react-icons/md";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { Context } from "../../utils/context";
import { BiChevronLeft, BiChevronRight} from "react-icons/bi";

const SingleProduct2 = () => {
    const [selectedImg, setSelectedImg] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const images = [
        Images1, Images2, Images3, Images4
    ]
    return (
        <div className="single-product">
            <div className="left">
                <div className="mainImg">
                    <img src={images[selectedImg]} alt="" />
                </div>
                <div className="images">
                    <BiChevronLeft />
                    <img src={images[1]} alt="" onClick={e => setSelectedImg(1)} />
                    <img src={images[2]} alt="" onClick={e => setSelectedImg(2)} />
                    <img src={images[3]} alt="" onClick={e => setSelectedImg(3)} />
                    <BiChevronRight />
                </div>
            </div>
            <div className="right">
                <h1>MacBook Pro 16-inch, Apple M2 Max with 12‑core CPU, 38‑core GPU, 16‑core Neural Engine
                </h1>
                <span className="price">&#2547; 475,000/-</span>
                <div className="desc">
                    Apple M2 Pro Chip, <br/>
                    12-Core CPU, <br/>
                    38-Core GPU, <br/>
                    32GB Unified Memory, <br/>
                    1TB SSD Storage, <br/>
                    16-core Neural Engine, <br/>
                    16-inch Liquid Retina XDR display, <br/>
                    Three Thunderbolt 4 ports, HDMI port, SDXC card slot, headphone jack, MagSafe 3 port, <br/>
                    Magic Keyboard with Touch ID, <br/>
                    Force Touch trackpad, <br />
                    140W USB-C Power Adapter

                </div>

                <div className="color-variant">
                    <span className="color-title">
                        Color : &nbsp;
                    </span>
                    <div className="color-info">
                        <div className="color-name">
                                <div className="color color1"></div>
                                <div className="color1-name">Space Gray</div>
                                
                        </div>
                        <div className="color-name">
                                <div className="color color2"></div>
                                <div className="color1-name">Silver</div>
                        </div>
                    </div>
                </div>
                <div className="storage-variant">
                    <span className="storage-title">
                        Storage : &nbsp;
                    </span>
                    <span className="storage-info">
                    <div className="storage-name">
                                <div className="storage1-name">128GB</div>
                        </div>
                        <div className="storage-name">
                                <div className="storage1-name">256GB</div>
                        </div>
                    </span>
                </div>
                <div className="quantity-cart">
                    <div className="quantity">
                        <button onClick={() => setQuantity((prev) => prev === 1 ? 1 : prev - 1)}> - </button>
                        <span>{quantity}</span>
                        <button onClick={() => setQuantity((prev) => prev + 1)}> + </button>
                    </div>
                    <button className="add">
                        <FaCartPlus /> ADD TO CART
                    </button>
                </div>
                <div className="product-category">
                    Category: <span>MacBook</span>
                </div>
                <div className="contacts">
                    <div className="contact-heading">
                        For Stock Update Please Call
                    </div>
                    <li><a href="tel:+8801678750350"><MdCall/>  +8801678750350</a>&nbsp; - Dhanmondi</li>
                    <li><a href="tel:+8801678750354"><MdCall/>  +8801678750354</a>&nbsp; - Jamuna Future Park</li>
                        
                </div>
            </div>
        </div>
    )
}

export default SingleProduct2