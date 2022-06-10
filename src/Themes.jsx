import { useState, useEffect } from "react";

const changeTheme = () => {

    const [theme, setTheme] = useState('dark');
    const colorTheme = theme =='dark'?'light':'dark';

    useEffect(() =>{
        const root = window.document.documentElement;
        root.classList.remove(colorTheme);
        root.classList.add(theme);
    },[theme])

    return[colorTheme, setTheme];
}
 
export default changeTheme;