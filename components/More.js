"use client";

import React, { useEffect, useState } from "react";
// import styles from './more.module.css'; // agar styling bo‘lsa

const modalsData = [
  {
    title: "Лапароскопическая, полостная хирургия",
    image: "./img/serv01.jpg",
    content: "Bu laparoskopik va polostnaya xirurgiya haqida to‘liq ma’lumot.",
  },
  {
    title: "БАРИАТРИЯ",
    image: "./img/serv02.jpg",
    content:
      "К БАРИАТРИЧЕСКИМ РЕДУКЦИОННЫМ ОПЕРАЦИЯМ ВКЛЮЧАЮТСЯ ОПЕРАЦИИ, ПРОВОДИМЫЕ ПРИ САХАРНОМ ДИАБЕТЕ.  ОШКОЗОН ХАЖМИНИ КИСКАРТИРИШ ОПЕРАЦИЯЛАРИ. \n" +
      "    СЛИВ РЕЗЕКЦИЯ, ГАСТРОШУНТИРОВАНИЕ",
  },
  {
    title: "РОБОТ-АССИСТИРОВАННАЯ ХИРУРГИЯ",
    image: "./img/serv03.jpg",
    content: "Bu intervension xirurgiya haqida to‘liq ma’lumot.",
  },
];

const More = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const openModal = (index) => {
    setActiveIndex(index);
  };

  const closeModal = () => {
    setActiveIndex(null);
  };

  return (
    <div className="services">
      {modalsData.map((item, index) => (
        <a
          key={index}
          onClick={() => openModal(index)}
          className="block pop bg-transparent"
          style={{ cursor: "pointer" }}
        >
          <div className="pic">
            <img src={item.image} alt={item.title} />
          </div>
          <span className="title">{item.title}</span>
          <span className="more">
            <span>ПОДРОБНЕЕ</span>
          </span>
        </a>
      ))}

      {/* Modal */}
      {activeIndex !== null && (
        <div className="modal-overlay " onClick={closeModal}>
          <div
            className="modal-content bg-white "
            style={{ borderRadius: "20px" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <h5 className="modal-title">{modalsData[activeIndex].title}</h5>
              <button
                type="button"
                className="close bg-transparent border-0"
                onClick={closeModal}
              >
                &times;
              </button>
            </div>
            <div className="modal-body">
              <p>{modalsData[activeIndex].content}</p>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={closeModal}>
                Закрывать
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default More;
