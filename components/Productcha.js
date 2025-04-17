"use client";

import React, { useState, useEffect } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import axios from "axios";

import toast from "bootstrap/js/src/toast";
import Modalcha from "@/components/Modalcha";
import {API_PATH} from "@/components/const";

const Productcha = () => {

    const [cart, setCart] = useState([]); // localStorage o'chirildi
    const [products, setProducts] = useState([]);
    const [adress, setAdress] = useState([]);
    const [reg, setReg] = useState("");
    const [phone, setPhone] = useState("");
    const [name, setName] = useState("");

    // LocalStorage O‘RNIGA oddiy state orqali savatni yangilash
    const updateCart = (newCart) => {
        setCart(newCart);
    };

    const addToCart = (product) => {
        const existingProduct = cart?.find((item) => item.id === product.id);
        let updatedCart;
        if (existingProduct) {
            updatedCart = cart?.map((item) =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );
        } else {
            updatedCart = [...cart, { ...product, quantity: 1 }];
        }
        updateCart(updatedCart);
    };
    const increaseQuantity = (id) => {
        const updatedCart = cart?.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
        updateCart(updatedCart);
    };

    const decreaseQuantity = (id) => {
        const updatedCart = cart
            .map((item) =>
                item.id === id ? { ...item, quantity: item.quantity - 1 } : item
            )
            .filter((item) => item.quantity > 0);
        updateCart(updatedCart);
    };

    const removeFromCart = (id) => {
        const updatedCart = cart.filter((item) => item.id !== id);
        updateCart(updatedCart);
    };

    const totalPrice = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    const sendOrder = () => {
        axios
            .post(API_PATH + "order/", {
                client_name: name,
                phone_number: phone,
                status: "pn",
                region: reg,
                order_items: cart?.map((item) => {
                    return {
                        product_id: item.id,
                        quantity: item.quantity,
                    };
                }),
            })
            .then((res) => {
                toast.success("Заказ успешно отправлен!");
                setIsOpen(false);
            })
            .catch((err) => {
                toast.error("Ошибка");
            });
    };

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    useEffect(() => {
        axios.get(API_PATH + "product/").then((res) => {
            setProducts(res.data?.results);
        });

        axios.get(API_PATH + "regions-statuses/").then((res) => {
            setAdress(res.data?.regions);
        });
    }, []);

    return (
        <div>
            <header className='container' style={{ height: '80px' }}>
                <nav>
                    <ul>
                        <li>
                            <Link href="/">СПЕЦИАЛИЗАЦИЯ</Link>
                        </li>
                        <li>
                            <Link href="/">СЕРТИФИКАТЫ</Link>
                        </li>
                        <li><Link className="text-uppercase" href="/blog">Инструкция</Link></li>
                        <li><Link className="text-uppercase" href="/products">Продукция</Link></li>
                    </ul>
                    <span className="exit"></span>
                </nav>
            </header>

            <div className="bg-dark">
                <div className="container">
                    <h3 className="text-white pt-4 pb-4">Продукция</h3>
                </div>
            </div>

            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-8">
                        <div className="row">
                            {products.map((product) => (
                                <div key={product.id} className="col-md-6 pb-3">
                                    <div  className={styles.product}>
                                        <img src={product.photo} alt="image" />
                                        <div className={styles.productInfo}>
                                            <div>
                                                <h2 className={styles.productTitle}>{product.title}</h2>
                                                <p style={{textAlign: "justify"}} className={styles.productDescription}>{product.description}</p>
                                            </div>
                                            <div>
                                                <p style={{textAlign: "left", fontSize: "20px", borderTop: "1px solid black" }} className="fw-bold text-dark-emphasis mt-2 pt-2">{product.price?.slice(0, -3)} сум</p>
                                                <button className={styles.addToCart}   onClick={() => addToCart(product)}>
                                                    Добавить в корзину
                                                </button>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                            ))}
                        </div>
                        {/*<div className={styles.productList}>*/}
                        {/*    {products.map((product) => (*/}
                        {/*        <div key={product.id} className={styles.product}>*/}
                        {/*            <img src={product.img} alt={product.title} />*/}
                        {/*            <div className={styles.productInfo}>*/}
                        {/*               <div>*/}
                        {/*                   <h2 className={styles.productTitle}>{product.title}</h2>*/}
                        {/*                   <p style={{textAlign: "justify"}} className={styles.productDescription}>{product.description}</p>*/}
                        {/*                   <p style={{textAlign: "left"}}>{product.price} сум</p>*/}
                        {/*               </div>*/}
                        {/*                <button className={styles.addToCart}  style={{margin: "auto", display: "block"}} onClick={() => addToCart(product)}>*/}
                        {/*                    Добавить в корзину*/}
                        {/*                </button>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*    ))}*/}
                        {/*</div>*/}
                    </div>

                    <div className="col-md-4">
                        {cart.length > 0 && (
                            <div className={styles.cart}>
                                <h2>Корзина</h2>
                                {cart.map((item) => (
                                    <div key={item.id} className={styles.cartItem}>
                                       <span> <span>{item.name} - {item.price} сум</span>
                                        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "5px" }}>
                                            <button className="btn btn-outline-success fw-bold d-flex align-items-center justify-content-center p-0" style={{width: "26px", height: "26px"}} onClick={() => decreaseQuantity(item.id)}><span style={{marginTop: "-4px", fontSize: "20px"}}>-</span></button>
                                            <span>{item.quantity}</span>
                                            <button  className="btn btn-outline-success fw-bold d-flex align-items-center justify-content-center p-0" style={{width: "26px", height: "26px"}}  onClick={() => increaseQuantity(item.id)}><span style={{marginTop: "-4px", fontSize: "16px"}}>+</span></button>
                                        </div></span>
                                        <button className={styles.removeBtn} onClick={() => removeFromCart(item.id)}>Удалить</button>
                                    </div>
                                ))}

                                <p className="mt-3"><strong>Общая сумма: {totalPrice} сум</strong></p>
                                <button className={styles.orderButton} onClick={openModal}>Оформить заказ</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>


            <Modalcha
                modalIsOpen={modalIsOpen}
                closeModal={closeModal}
                adress={adress}
                setReg={setReg}
                setName={setName}
                setPhone={setPhone}
                phone={phone}
                name={name}
                reg={reg}
            />

            {/*<Modal*/}
            {/*    isOpen={modalIsOpen}*/}
            {/*    // onAfterOpen={afterOpenModal}*/}
            {/*    onRequestClose={closeModal}*/}
            {/*    style={customStyles}*/}
            {/*    contentLabel="Example Modal"*/}
            {/*>*/}

            {/*        <div className="d-flex justify-content-end">*/}
            {/*            /!*<h2 ref={(_subtitle) => (subtitle = _subtitle)}> </h2>*!/*/}
            {/*            <button onClick={closeModal} className="border-0 bg-transparent p-0" style={{width: "16px"}}>*/}
            {/*                <img className="w-100" src="/img/close.png" alt="...."/>*/}
            {/*            </button>*/}
            {/*        </div>*/}

            {/*    <div className="order-box mt-2" style={{width: "300px"}}>*/}
            {/*        <label className="form-label">Имя Фамилия</label>*/}
            {/*        <input type="text" className="form-control w-100 mt-1 mb-2" onChange={(e) => setName(e.target.value)}/>*/}
            {/*        <label className="form-label">Номер телефона</label>*/}
            {/*        <input type="text" className="form-control w-100 mt-1 mb-2" onChange={(e) => setPhone(e.target.value)}/>*/}
            {/*        <label className="form-label" >Адрес</label>*/}
            {/*        <select className="form-control mt-1 w-100" onChange={(e) => setReg(e.target.value)}>*/}
            {/*            <option></option>*/}

            {/*            {*/}
            {/*                adress.map((item, index) => (*/}
            {/*                    <option key={index} value={item.label}>{item?.name}</option>*/}
            {/*                ))*/}
            {/*            }*/}
            {/*        </select>*/}
            {/*        <button className="mt-4 w-100 btn btn-success" disabled={!reg || !name || !phone} onClick={() => sendOrder()}>Заказ</button>*/}
            {/*    </div>*/}
            {/*</Modal>*/}

        </div>
    );
};

export default Productcha;
