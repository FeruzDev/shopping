"use client";
import React, {useEffect, useState} from "react";
import Link from "next/link";
import {Menu} from 'antd';
import axios from "axios";
import {API_PATH} from "@/components/const";
const BlogMain = () => {
    const [menus, setMenus] = useState([]);
    const [blogs, setBlogs] = useState({});

    const getBlogs = (id) => {
        axios.get(API_PATH + "blog/" + id + "/")
            .then(res => {
                setBlogs(res.data);
            })
    }

    const onClick = ({key}) => {
        let selectedSubMenu = null;

        for (const menu of menus) {
            if (menu.children) {
                const found = menu.children.find(child => child.key === key);
                if (found) {
                    selectedSubMenu = found;
                    break;
                }
            }
        }

        if (selectedSubMenu) {
            console.log("Bosilgan sub menu ID:", selectedSubMenu?.id);
        } else {
            console.log("Sub menu topilmadi yoki menu bosildi");
        }
        // getBlogs(selectedSubMenu?.id)
        getBlogs(selectedSubMenu?.id)
    }

    const getMenus = () => {
        axios.get(API_PATH + "menu/")
            .then(res => {
                setMenus(res.data);
            })
    }
    useEffect(() => {
        getMenus()
    }, [])
    return (
        <div>
            <section className="mb-0 w-100">
                <header className='container' style={{height: '80px'}}>
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
                        <h3 className="text-white   pt-4 pb-4">
                            Инструкция
                        </h3>
                    </div>
                </div>

                <div className="container mt-3">
                    <div className="row">
                        {/* Sidebar */}
                        <div className="col-md-3">
                            <div className="p-3 ins-menu">

                                <Menu
                                    onClick={onClick}
                                    style={{width: 256}}
                                    // defaultSelectedKeys={['1']}
                                    // defaultOpenKeys={['sub1']}
                                    mode="inline"
                                    items={menus}
                                />
                            </div>
                        </div>

                        {/* Main content */}
                        <div className="col-md-9">
                            {
                                blogs?.id > 0
                                    ?
                                    <div className="con-box">
                                        <h3 className="" >{blogs?.title }</h3>
                                        {
                                            blogs?.photo  ?
                                                <div className="row">
                                                    <div className="col-md-8"> <p className="mt-1 "  style={{textAlign: "justify"}} dangerouslySetInnerHTML={{ __html: blogs?.description }}></p></div>
                                                    <div className="col-md-4"><img src={blogs?.photo} alt="..."/></div>
                                                </div>
                                                :
                                                <div className="row">
                                                    <div className="col-md-12"> <p className="mt-1 " style={{textAlign: "justify"}} dangerouslySetInnerHTML={{ __html: blogs?.description }}></p></div>

                                                </div>
                                        }

                                    </div>
                                    :
                                    ""
                            }

                        </div>
                    </div>
                </div>

            </section>
        </div>


    );
};

export default BlogMain;
