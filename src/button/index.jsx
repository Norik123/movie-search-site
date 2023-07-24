import React from "react";
import style from "./style.module.css";

export default function Buttonn({ children, className, ...props } ) {
  return (
    <button className={style.myButton + " " + className} {...props}>
      {children}
    </button>
  );
}
