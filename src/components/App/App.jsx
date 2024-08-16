
import css from './App.module.css'
import React, { useState, useEffect } from "react";
import Description from "../Description/Description"
import LoginForm from "../Form/Form"
import LoginFormSecond from "../FormSecond/FormSecond"
import LoginForm3 from "../UzersId/UzersId"

export default function App() {

  const [clicks, setValues] = useState(() => {
    const savClicks = window.localStorage.getItem("m-click");
    return savClicks !== null ? JSON.parse(savClicks) : 0;
  });
  const handleLogin = (log) => {
    // Виконуємо необхідні операції з даними
    // return onLogin;
    console.log(log);

  };

  useEffect(() => {
    window.localStorage.setItem("m-click", JSON.stringify(clicks));
  }, [clicks]);

  return (
    <div className={css.container}>
      <>
        <Description />
        <LoginForm />
        <LoginFormSecond onLogin={handleLogin} />
        <LoginForm3 />
      </>

    </div>
  )
}

// Колбек-функція для обробки сабміту форми
// const handleLogin = (userData) => {
//   // Виконуємо необхідні операції з даними
//   console.log(userData);
// };

// return (
//   <div>
//     <h1>Please login to your account!</h1>
//     {/* Передаємо колбек як пропс форми */}
//     <LoginForm onLogin={handleLogin} />
//   </div>
// );

