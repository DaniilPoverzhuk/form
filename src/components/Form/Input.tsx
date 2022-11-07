import React from "react";
import style from "./form.module.scss";

interface InputProps {
  register: any;
  index: number;
  img: any;
  value: string;
}

const Input: React.FC<InputProps> = ({ register, index, img, value }) => {
  return (
    <div className={style.form_Input}>
      <label htmlFor={`input-${index}`}>{img}</label>
      <input
        {...(register(value),
        {
          required: true,
        })}
        type="text"
        id={`input-${index}`}
        placeholder={value}
      />
    </div>
  );
};

export default Input;
