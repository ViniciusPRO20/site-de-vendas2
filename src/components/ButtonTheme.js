import "./ButtonTheme.css";

import { useEffect } from 'react';

const ButtonTheme = () => {
    const handleToggled = () => {
        document.body.classList.toggle("dark")
        localStorage.setItem(
            "dark",
            document.body.className
        )
    }
    useEffect(() => {
        if (localStorage.getItem("dark")) {
            document.body.classList.add("dark")
        }
    }, []);

  return (
    <div>
        <h3 className="theme">Tema:</h3>
        <label>
            <input className="button" type="checkbox" onClick={handleToggled} />
        <span className="switch">
            <span className="handle" />
        </span>
        </label>
    </div>
  )
}

export default ButtonTheme