import React, { useState, useEffect, useRef } from 'react';
import ThemeConstructor from './ThemeConstructor';
import themes from './assets/themes';
import modes from './assets/json/modes.json';
import languages from './assets/json/languages.json';
import text from './assets/json/text.json';
import { motion } from 'framer-motion'

function Settings() {

    const [lang, setLang] = useState(parseInt(localStorage.getItem("langMode")) || 0);
    const [theme, setTheme] = useState(parseInt(localStorage.getItem("theme")) || 0);
    
    const modal = useRef(null);
    const saveUpdate = useRef(null);

    useEffect(() => {
        document.title = text[lang].links[1];
        themes[theme]();
    }, [lang, theme]);

    function themeChange(event) {
        const mode = modes.indexOf(event.target.value);
        if (mode !== 3) {
            document.body.classList.add('theme-transition');
            setTimeout(() => {
                document.body.classList.remove('theme-transition');
            }, 500);
            themes[mode]();
            setTheme(mode);
            localStorage.setItem("theme", mode);
        }
        else {
            modal.current.showModal();
        }
    }

    function languageChange(event) {
        const newLang = languages.indexOf(event.target.value);
        setLang(newLang);
        localStorage.setItem("langMode", newLang);
    }

    return (
        <motion.div
            className='settings'
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.5}}
        >
            <h2>{text[lang].headings[1]}</h2>
            <div className="container">
                <label className="settingName">{text[lang].settings[0]}</label>
                <select onChange={themeChange} value={modes[theme]}>
                    <option value="system">{text[lang].mode[0]}</option>
                    <option value="light">{text[lang].mode[1]}</option>
                    <option value="dark">{text[lang].mode[2]}</option>
                    <option value="custom">{text[lang].mode[3]}</option>
                </select>
            </div>
            <div style={{ height: "3rem" }} />
            <ThemeConstructor constructor={modal} alert={saveUpdate} themeState={setTheme} />
            <div className="container">
                <label>{text[lang].settings[1]}</label>
                <select onChange={languageChange} value={languages[lang]}>
                    <option value="english">english</option>
                    <option value="русский">русский</option>
                </select>
            </div>
            <div style={{ height: "5rem" }} />
            <a href="/">{text[lang].back}</a>
        </motion.div>
    );
}

export default Settings;
