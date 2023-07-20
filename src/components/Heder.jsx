import React from 'react'
import { useState } from 'react';

function Header() {

    const [lang, setLang] = useState("Uzb")
    const changeLanguage = (e) => {
        setLang(e.target.value);

    }

    console.log(lang)


    return (
        <div className=" container mt-2 wrapper">
            <img
                width="150"
                height="30"
                src="https://asaxiy.uz/custom-assets/images/logos/asaxiy-logo.svg"
                alt="logo"
            />

            <div
                className="w-50 header-input d-flex justify-content-between rounded-3 bg-blue-700">
                <input
                    className="bg-white w-75 border-white rounded-3 div-input p-1"
                    type="search"
                    name="search"
                    id="search"
                    placeholder="Qidirish ..."
                />
                <label htmlFor="search"
                    className=" me-4  d-flex align-items: center; text-white">
                    <img
                        width="24"
                        height="24"
                        className="mx-1"
                        src="https://asaxiy.uz/custom-assets/images/search-icon.svg"
                        alt="lupa"
                    />
                    Qidirish
                </label>
            </div>
            <div className="wrapper-list">
                <a className="d-flex flex-column align-items-center  gap-1" href="#">
                    <img
                        width="25"
                        height="24"
                        src="https://asaxiy.uz/custom-assets/images/icons/header/payment.svg"
                        alt="To'lov"
                    />
                    <span>To'lov</span>
                </a>

                <a className="d-flex flex-column align-items-center gap-1" href="#">
                    <img
                        width="25"
                        height="24"
                        src="https://asaxiy.uz/custom-assets/images/icons/header/tracker.svg"
                        alt="Trek"
                    />
                    <span>Trek</span>
                </a>

                <a className="d-flex flex-column align-items-center gap-1" href="#">
                    <img
                        width="25"
                        height="24"
                        src="https://asaxiy.uz/custom-assets/images/icons/header/language.svg"
                        alt="language"
                    />
                    <select onChange={changeLanguage} name="language" id="select">
                        <option value="Uzb">Uzb</option>
                        <option value="Eng">Eng</option>
                        <option value="Rus">Rus</option>
                    </select>
                </a>

                <a className="d-flex flex-column align-items-center gap-1 relative" href="/">
                    <img
                        width="25"
                        height="24"
                        src="https://asaxiy.uz/custom-assets/images/icons/header/cart.svg"
                        alt="Savatcha"
                    />
                    <span>Savatcha</span>
                    <span className='text-white bg-blue-700 span-content absolute left-10 bottom-10'>0</span>
                </a>

                <a className="d-flex flex-column align-items-center gap-1 relative" href="/">
                    <img
                        width="25"
                        height="24"
                        src="https://asaxiy.uz/custom-assets/images/icons/header/heart.svg"
                        alt="Sevimlilar"
                    />
                    <span>Sevimlilar</span>
                    <span className='text-white bg-blue-700 span-content absolute left-10 bottom-10'>0</span>
                </a>

                <a className="d-flex flex-column align-items-center gap-1" href="#">
                    <img
                        width="28"
                        height="24"
                        src="https://asaxiy.uz/custom-assets/images/icons/header/avatar.svg"
                        alt="Kabinet"
                    />
                    <span>Kabinet</span>
                </a>
            </div>
        </div>
    );
}

export default Header