import React, { useEffect, useState } from "react";
import "./create.css";

import noPhoto from '../img/icons/no-photo.png';

const CreatePage = () => {
    let newHero = [];
    let heroData = new FormData();

    const [newID, setNewID] = useState();

    const [imageAbil1, setImageAbil1] = useState();
    const [imageAbilURL1, setImageAbilURL1] = useState();
    const [imageAbil2, setImageAbil2] = useState();
    const [imageAbilURL2, setImageAbilURL2] = useState();
    const [imageAbil3, setImageAbil3] = useState();
    const [imageAbilURL3, setImageAbilURL3] = useState();
    const [imageAbil4, setImageAbil4] = useState();
    const [imageAbilURL4, setImageAbilURL4] = useState();

    const [image, setImage] = useState();
    const [imageURL, setImageURL] = useState();

    const [imageBig, setImageBig] = useState();
    const [imageBigURL, setImageBigURL] = useState();

    const fileReader = new FileReader();
    fileReader.onloadend = () => {
        // setImageURL(fileReader.result.replace("data:image/png;base64,", ''));
        setImageURL(fileReader.result);
    };

    const fileReader0 = new FileReader();
    fileReader0.onloadend = () => {
        // setImageBigURL(fileReader0.result.replace("data:image/png;base64,", ''));
        setImageBigURL(fileReader0.result);
    };

    const fileReader1 = new FileReader();
    fileReader1.onloadend = () => {
        setImageAbilURL1(fileReader1.result);
    };

    const fileReader2 = new FileReader();
    fileReader2.onloadend = () => {
        setImageAbilURL2(fileReader2.result);
    };

    const fileReader3 = new FileReader();
    fileReader3.onloadend = () => {
        setImageAbilURL3(fileReader3.result);
    };

    const fileReader4 = new FileReader();
    fileReader4.onloadend = () => {
        setImageAbilURL4(fileReader4.result);
    };

    const handleOnChange = (event) => {
        event.preventDefault();
        if (event.target.files && event.target.files.length) {
            const file = event.target.files[0];
            setImage(file);
            fileReader.readAsDataURL(file);
        }
    };

    const handleOnChange0 = (event) => {
        event.preventDefault();
        if (event.target.files && event.target.files.length) {
            const file = event.target.files[0];
            setImageBig(file);
            fileReader0.readAsDataURL(file);
        }
    };

    const handleOnChangeAbil1 = (event) => {
        event.preventDefault();
        if (event.target.files && event.target.files.length) {
            const file = event.target.files[0];
            setImageAbil1(file);
            fileReader1.readAsDataURL(file);
        }
    };
    const handleOnChangeAbil2 = (event) => {
        event.preventDefault();
        if (event.target.files && event.target.files.length) {
            const file = event.target.files[0];
            setImageAbil2(file);
            fileReader2.readAsDataURL(file);
        }
    };
    const handleOnChangeAbil3 = (event) => {
        event.preventDefault();
        if (event.target.files && event.target.files.length) {
            const file = event.target.files[0];
            setImageAbil3(file);
            fileReader3.readAsDataURL(file);
        }
    };
    const handleOnChangeAbil4 = (event) => {
        event.preventDefault();
        if (event.target.files && event.target.files.length) {
            const file = event.target.files[0];
            setImageAbil4(file);
            fileReader4.readAsDataURL(file);
        }
    };

    useEffect(() => {

        async function getLastID() {
            fetch("http://dota-book-php/getHeroes.php", {
                method: 'POST'
            })
                .then(response => response.json())
                .then(response => {
                    // console.log("NewID", response.length+1);
                    setNewID(response.length + 1);
                })
        }

        getLastID()

    })

    const handleOnClick = (event) => {
        event.preventDefault();

        newHero.push(newID)
        // console.log("ID ", newID)
        const name = document.getElementById('hero-name-input').value
        newHero.push(name)
        // console.log("Имя ", name)
        const role = document.getElementById('hero-role-input').value
        newHero.push(role)
        // console.log("Роль ", role)
        const desc = document.getElementById('hero-desc-input').value
        newHero.push(desc)
        // console.log("Описание ", desc)

        const atkTypeElement = document.getElementById('hero-atktype-select')
        const atkType = atkTypeElement.selectedIndex + 1;
        newHero.push(atkType)
        // console.log("Тип атаки ", atkType)
        const difElement = document.getElementById('hero-dif-select')
        const dif = difElement.selectedIndex + 1;
        newHero.push(dif)
        // console.log("Сложность ", dif)
        const typeElement = document.getElementById('hero-type-select')
        const type = typeElement.selectedIndex + 1;
        newHero.push(type)
        // console.log("Тип героя ", type)

        for (var i = 1; i < 5; i++) {
            var abil = document.getElementById(`hero-abil${i}-input`).value
            var abilDesc = document.getElementById(`abil${i}-textarea`).value
            newHero.push(abil)
            newHero.push(abilDesc)
            // console.log(`Способность ${i} `, abil)
            // console.log(`Описание способности ${i} `, abilDesc)

        }

        newHero.push(imageAbilURL1.replace("data:image/png;base64,", ""))
        // console.log(imageAbilURL1.replace("data:image/png;base64,",""))
        newHero.push(imageAbilURL2.replace("data:image/png;base64,", ""))
        // console.log(imageAbilURL2.replace("data:image/png;base64,",""))
        newHero.push(imageAbilURL3.replace("data:image/png;base64,", ""))
        // console.log(imageAbilURL3.replace("data:image/png;base64,",""))
        newHero.push(imageAbilURL4.replace("data:image/png;base64,", ""))
        // console.log(imageAbilURL4.replace("data:image/png;base64,",""))

        for (var i = 1; i < 11; i++) {
            var attr = document.getElementById(`hero-attr${i}-input`).value
            newHero.push(attr)
            // console.log(`Атрибут ${i} `, attr)
        }

        for (var i = 1; i < 10; i++) {
            var param = document.getElementById(`hero-param${i}-input`).value
            newHero.push(param)
            // console.log(`Парам ${i} `, param)
        }

        for (var i = 1; i < 10; i++) {
            var specc = document.getElementById(`hero-specc${i}-input`).value
            newHero.push(specc)
            // console.log(`Спек ${i} `, specc)
        }

        for (var i = 1; i < 9; i++) {
            var talant = document.getElementById(`hero-talant${i}-input`).value
            newHero.push(talant)
            // console.log(`Талант ${i} `, talant)
        }

        newHero.push(imageURL.replace("data:image/png;base64,", ""))
        // console.log("Def", imageURL)

        newHero.push(imageBigURL.replace("data:image/png;base64,", ""))
        // console.log("Big", imageBigURL)


        heroData.append("NewHero", JSON.stringify(newHero));

        console.log("Новый герой", JSON.stringify(newHero))

        // const test = new FormData();
        // test.append("Test", imageBigURL.replace("data:image/png;base64,",""));
        // console.log("TEST", test)

        // fetch("http://dota-book-php/test.php", {
        //     method: 'POST',
        //     body: test
        // })


        fetch("http://dota-book-php/createNewHero.php", {
            method: 'POST',
            body: heroData
        }).finally(f => {
            window.location.assign('/');
        })

        
    }

    return (
        <div className="container">
            <form className="hero-create">
                <div className=" hero-create-text">
                    <label
                        htmlFor="hero-name-input"
                        className="hero-name-title"
                    >
                        Имя героя
                    </label>
                    <input
                        id="hero-name-input"
                        type="text"
                        className="hero-name-text-input"
                    />

                    <label
                        htmlFor="hero-role-input"
                        className="hero-role-title"
                    >
                        Роль
                    </label>
                    <input
                        id="hero-role-input"
                        type="text"
                        className="hero-role-text-input"
                    />

                    <label
                        htmlFor="hero-desc-input"
                        className="hero-desc-title"
                    >
                        Описание
                    </label>
                    <input
                        id="hero-desc-input"
                        type="text"
                        className="hero-desc-text-input"
                    />

                    <label
                        htmlFor="hero-atktype-select"
                        className="hero-desc-title"
                    >
                        Тип атаки
                    </label>
                    <select
                        id="hero-atktype-select"
                        className="hero-atktype-text-select"
                    >
                        <option>Ближний бой</option>
                        <option>Дальний бой</option>
                    </select>

                    <label
                        htmlFor="hero-dif-select"
                        className="hero-dif-title"
                    >
                        Сложность
                    </label>
                    <select
                        id="hero-dif-select"
                        className="hero-dif-text-select"
                    >
                        <option>Простой</option>
                        <option>Средний</option>
                        <option>Сложный</option>
                    </select>

                    <label
                        htmlFor="hero-type-select"
                        className="hero-type-title"
                    >
                        Тип героя
                    </label>
                    <select
                        id="hero-type-select"
                        className="hero-type-text-select"
                    >
                        <option>Сила</option>
                        <option>Ловкость</option>
                        <option>Интеллект</option>
                        <option>Универсальный</option>
                    </select>

                    <div className="hero-ability-container">
                        <div className="hero-abil">
                            <label
                                htmlFor="hero-abil1-input"
                                className="hero-abil1-title"
                            >
                                Способность 1
                            </label>
                            <input
                                id="hero-abil1-input"
                                type="text"
                                className="hero-abil1-text-input"
                            />
                            <div className="hero-abil1-img">
                                <label
                                    htmlFor="abil1-loader-button"
                                    className="abil1-uploader-custom-button"
                                >
                                    Загрузить картинку героя
                                </label>
                                <input
                                    id="abil1-loader-button"
                                    type="file"
                                    className="abil1-uploader-upload-button"
                                    onChange={handleOnChangeAbil1}
                                />
                                <img
                                    src={imageAbilURL1 ? imageAbilURL1 : noPhoto}
                                    className="abil1-uploader-preview"
                                    alt="preview"
                                />
                                <div className="abil1-uploader-file-name">{imageAbil1 ? imageAbil1.name : ""}</div>
                            </div>
                            <div>
                                <label
                                    htmlFor="abil1-textarea"
                                    className="abil1-label">
                                    Описание
                                </label>
                                <textarea
                                    id="abil1-textarea"
                                    className="abil1-textarea-name"
                                />
                            </div>
                        </div>

                        <div className="hero-abil">
                            <label
                                htmlFor="hero-abil2-input"
                                className="hero-abil2-title"
                            >
                                Способность 2
                            </label>
                            <input
                                id="hero-abil2-input"
                                type="text"
                                className="hero-abil2-text-input"
                            />
                            <div className="hero-abil2-img">
                                <label
                                    htmlFor="abil2-loader-button"
                                    className="abil2-uploader-custom-button"
                                >
                                    Загрузить картинку героя
                                </label>
                                <input
                                    id="abil2-loader-button"
                                    type="file"
                                    className="abil2-uploader-upload-button"
                                    onChange={handleOnChangeAbil2}
                                />
                                <img
                                    src={imageAbilURL2 ? imageAbilURL2 : noPhoto}
                                    className="abil2-uploader-preview"
                                    alt="preview"
                                />
                                <div className="abil2-uploader-file-name">{imageAbil2 ? imageAbil2.name : ""}</div>
                            </div>
                            <div>
                                <label
                                    htmlFor="abil2-textarea"
                                    className="abil2-label">
                                    Описание
                                </label>
                                <textarea
                                    id="abil2-textarea"
                                    className="abil2-textarea-name"
                                />
                            </div>
                        </div>

                        <div className="hero-abil">
                            <label
                                htmlFor="hero-abil3-input"
                                className="hero-abil3-title"
                            >
                                Способность 3
                            </label>
                            <input
                                id="hero-abil3-input"
                                type="text"
                                className="hero-abil3-text-input"
                            />
                            <div className="hero-abil3-img">
                                <label
                                    htmlFor="abil3-loader-button"
                                    className="abil3-uploader-custom-button"
                                >
                                    Загрузить картинку героя
                                </label>
                                <input
                                    id="abil3-loader-button"
                                    type="file"
                                    className="abil3-uploader-upload-button"
                                    onChange={handleOnChangeAbil3}
                                />
                                <img
                                    src={imageAbilURL3 ? imageAbilURL3 : noPhoto}
                                    className="abil3-uploader-preview"
                                    alt="preview"
                                />
                                <div className="abil3-uploader-file-name">{imageAbil3 ? imageAbil3.name : ""}</div>
                            </div>
                            <div>
                                <label
                                    htmlFor="abil3-textarea"
                                    className="abil3-label">
                                    Описание
                                </label>
                                <textarea
                                    id="abil3-textarea"
                                    className="abil3-textarea-name"
                                />
                            </div>
                        </div>

                        <div className="hero-abil">
                            <label
                                htmlFor="hero-abil4-input"
                                className="hero-abil4-title"
                            >
                                Способность 4
                            </label>
                            <input
                                id="hero-abil4-input"
                                type="text"
                                className="hero-abil4-text-input"
                            />
                            <div className="hero-abil4-img">
                                <label
                                    htmlFor="abil4-loader-button"
                                    className="abil4-uploader-custom-button"
                                >
                                    Загрузить картинку героя
                                </label>
                                <input
                                    id="abil4-loader-button"
                                    type="file"
                                    className="abil4-uploader-upload-button"
                                    onChange={handleOnChangeAbil4}
                                />
                                <img
                                    src={imageAbilURL4 ? imageAbilURL4 : noPhoto}
                                    className="abil4-uploader-preview"
                                    alt="preview"
                                />
                                <div className="abil4-uploader-file-name">{imageAbil4 ? imageAbil4.name : ""}</div>
                            </div>
                            <div>
                                <label
                                    htmlFor="abil4-textarea"
                                    className="abil4-label" >
                                    Описание
                                </label>
                                <textarea
                                    id="abil4-textarea"
                                    className="abil4-textarea-name"
                                />
                            </div>
                        </div>

                    </div>

                    <div className="hero-attr-container">
                        <div>
                            <label
                                htmlFor="hero-attr1-input"
                                className="hero-attr1-title"
                            >
                                Атрибут 1
                            </label>
                            <input
                                id="hero-attr1-input"
                                type="text"
                                className="hero-attr1-text-input"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="hero-attr2-input"
                                className="hero-attr2-title"
                            >
                                Атрибут 2
                            </label>
                            <input
                                id="hero-attr2-input"
                                type="text"
                                className="hero-attr2-text-input"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="hero-attr3-input"
                                className="hero-attr3-title"
                            >
                                Атрибут 3
                            </label>
                            <input
                                id="hero-attr3-input"
                                type="text"
                                className="hero-attr3-text-input"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="hero-attr4-input"
                                className="hero-attr4-title"
                            >
                                Атрибут 4
                            </label>
                            <input
                                id="hero-attr4-input"
                                type="text"
                                className="hero-attr4-text-input"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="hero-attr5-input"
                                className="hero-attr5-title"
                            >
                                Атрибут 5
                            </label>
                            <input
                                id="hero-attr5-input"
                                type="text"
                                className="hero-attr5-text-input"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="hero-attr6-input"
                                className="hero-attr6-title"
                            >
                                Атрибут 6
                            </label>
                            <input
                                id="hero-attr6-input"
                                type="text"
                                className="hero-attr6-text-input"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="hero-attr7-input"
                                className="hero-attr7-title"
                            >
                                Атрибут 7
                            </label>
                            <input
                                id="hero-attr7-input"
                                type="text"
                                className="hero-attr7-text-input"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="hero-attr8-input"
                                className="hero-attr8-title"
                            >
                                Атрибут 8
                            </label>
                            <input
                                id="hero-attr8-input"
                                type="text"
                                className="hero-attr8-text-input"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="hero-attr9-input"
                                className="hero-attr9-title"
                            >
                                Атрибут 9
                            </label>
                            <input
                                id="hero-attr9-input"
                                type="text"
                                className="hero-attr9-text-input"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="hero-attr10-input"
                                className="hero-attr10-title"
                            >
                                Атрибут 10
                            </label>
                            <input
                                id="hero-attr10-input"
                                type="text"
                                className="hero-attr10-text-input"
                            />
                        </div>

                    </div>

                    <div className="hero-param-container">
                        <div>
                            <label
                                htmlFor="hero-param1-input"
                                className="hero-param1-title"
                            >
                                Парам 1
                            </label>
                            <input
                                id="hero-param1-input"
                                type="text"
                                className="hero-param1-text-input"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="hero-param2-input"
                                className="hero-param2-title"
                            >
                                Парам 2
                            </label>
                            <input
                                id="hero-param2-input"
                                type="text"
                                className="hero-param2-text-input"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="hero-param3-input"
                                className="hero-param3-title"
                            >
                                Парам 3
                            </label>
                            <input
                                id="hero-param3-input"
                                type="text"
                                className="hero-param3-text-input"
                            />

                        </div>

                        <div>
                            <label
                                htmlFor="hero-param4-input"
                                className="hero-param4-title"
                            >
                                Парам 4
                            </label>
                            <input
                                id="hero-param4-input"
                                type="text"
                                className="hero-param4-text-input"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="hero-param5-input"
                                className="hero-param5-title"
                            >
                                Парам 5
                            </label>
                            <input
                                id="hero-param5-input"
                                type="text"
                                className="hero-param5-text-input"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="hero-param6-input"
                                className="hero-param6-title"
                            >
                                Парам 6
                            </label>
                            <input
                                id="hero-param6-input"
                                type="text"
                                className="hero-param6-text-input"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="hero-param7-input"
                                className="hero-param7-title"
                            >
                                Парам 7
                            </label>
                            <input
                                id="hero-param7-input"
                                type="text"
                                className="hero-param7-text-input"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="hero-param8-input"
                                className="hero-param8-title"
                            >
                                Парам 8
                            </label>
                            <input
                                id="hero-param8-input"
                                type="text"
                                className="hero-param8-text-input"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="hero-param9-input"
                                className="hero-param9-title"
                            >
                                Парам 9
                            </label>
                            <input
                                id="hero-param9-input"
                                type="text"
                                className="hero-param9-text-input"
                            />
                        </div>
                    </div>

                    <div className="hero-specc-container">
                        <div>
                            <label
                                htmlFor="hero-specc1-input"
                                className="hero-specc1-title"
                            >
                                Спек 1
                            </label>
                            <input
                                id="hero-specc1-input"
                                type="text"
                                className="hero-specc1-text-input"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="hero-specc2-input"
                                className="hero-specc2-title"
                            >
                                Спек 2
                            </label>
                            <input
                                id="hero-specc2-input"
                                type="text"
                                className="hero-specc2-text-input"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="hero-specc3-input"
                                className="hero-specc3-title"
                            >
                                Спек 3
                            </label>
                            <input
                                id="hero-specc3-input"
                                type="text"
                                className="hero-specc3-text-input"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="hero-specc4-input"
                                className="hero-specc4-title"
                            >
                                Спек 4
                            </label>
                            <input
                                id="hero-specc4-input"
                                type="text"
                                className="hero-specc4-text-input"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="hero-specc5-input"
                                className="hero-specc5-title"
                            >
                                Спек 5
                            </label>
                            <input
                                id="hero-specc5-input"
                                type="text"
                                className="hero-specc5-text-input"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="hero-specc6-input"
                                className="hero-specc6-title"
                            >
                                Спек 6
                            </label>
                            <input
                                id="hero-specc6-input"
                                type="text"
                                className="hero-specc6-text-input"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="hero-specc7-input"
                                className="hero-specc7-title"
                            >
                                Спек 7
                            </label>
                            <input
                                id="hero-specc7-input"
                                type="text"
                                className="hero-specc7-text-input"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="hero-specc8-input"
                                className="hero-specc8-title"
                            >
                                Спек 8
                            </label>
                            <input
                                id="hero-specc8-input"
                                type="text"
                                className="hero-specc8-text-input"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="hero-specc9-input"
                                className="hero-specc9-title"
                            >
                                Спек 9
                            </label>
                            <input
                                id="hero-specc9-input"
                                type="text"
                                className="hero-specc9-text-input"
                            />
                        </div>
                    </div>

                    <div className="hero-talant-container">
                        <div>
                            <label
                                htmlFor="hero-talant1-input"
                                className="hero-talant1-title"
                            >
                                Талант 1
                            </label>
                            <input
                                id="hero-talant1-input"
                                type="text"
                                className="hero-talant1-text-input"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="hero-talant2-input"
                                className="hero-talant2-title"
                            >
                                Талант 2
                            </label>
                            <input
                                id="hero-talant2-input"
                                type="text"
                                className="hero-talant2-text-input"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="hero-talant3-input"
                                className="hero-talant3-title"
                            >
                                Талант 3
                            </label>
                            <input
                                id="hero-talant3-input"
                                type="text"
                                className="hero-talant3-text-input"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="hero-talant4-input"
                                className="hero-talant4-title"
                            >
                                Талант 4
                            </label>
                            <input
                                id="hero-talant4-input"
                                type="text"
                                className="hero-talant4-text-input"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="hero-talant5-input"
                                className="hero-talant5-title"
                            >
                                Талант 5
                            </label>
                            <input
                                id="hero-talant5-input"
                                type="text"
                                className="hero-talant5-text-input"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="hero-talant6-input"
                                className="hero-talant6-title"
                            >
                                Талант 6
                            </label>
                            <input
                                id="hero-talant6-input"
                                type="text"
                                className="hero-talant6-text-input"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="hero-talant7-input"
                                className="hero-talant7-title"
                            >
                                Талант 7
                            </label>
                            <input
                                id="hero-talant7-input"
                                type="text"
                                className="hero-talant7-text-input"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="hero-talant8-input"
                                className="hero-talant8-title"
                            >
                                Талант 8
                            </label>
                            <input
                                id="hero-talant8-input"
                                type="text"
                                className="hero-talant8-text-input"
                            />
                        </div>

                    </div>
                </div>

                <div className="hero-create-img">
                    <label
                        htmlFor="file-loader-button"
                        className="file-uploader-custom-button"
                    >
                        Загрузить картинку героя
                    </label>
                    <input
                        id="file-loader-button"
                        type="file"
                        className="file-uploader-upload-button"
                        onChange={handleOnChange}
                    />
                    <img
                        src={imageURL ? imageURL : noPhoto}
                        className="file-uploader-preview"
                        alt="preview"
                    />
                    <div className="file-uploader-file-name">{image ? image.name : ""}</div>
                </div>

                <div className="hero-create-big-img">
                    <label
                        htmlFor="big-file-loader-button"
                        className="big-file-uploader-custom-button"
                    >
                        Загрузить большую картинку героя
                    </label>
                    <input
                        id="big-file-loader-button"
                        type="file"
                        className="big-file-uploader-upload-button"
                        onChange={handleOnChange0}
                    />
                    <img
                        // src={imageBigURL ? `data:image/png;base64,${imageBigURL}` : noPhoto}
                        src={imageBigURL ? imageBigURL : noPhoto}
                        className="big-file-uploader-preview"
                        alt="preview"
                    />
                    <div className="big-file-uploader-file-name">{imageBig ? imageBig.name : ""}</div>
                </div>

                <button className="bg-create-img-button" onClick={handleOnClick}>
                    Сохранить
                </button>

            </form>
        </div>
    );
};

export default CreatePage