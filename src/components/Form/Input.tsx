import React from "react";
import style from "./form.module.scss";

interface InputProps {
  errors: any;
  register: any;
  index: number;
  img: any;
  value: string;
}

const Input: React.FC<InputProps> = ({
  errors,
  register,
  index,
  img,
  value,
}) => {
  console.log(errors[value]);

  return (
    <div className={style.form_Input}>
      <label htmlFor={`input-${index}`}>{img}</label>
      <input
        {...register(value, {
          required: `${value} is require field`,
          pattern: {
            value:
              value === "email"
                ? /^[_a-z0-9-+-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,})$/i
                : "",
            message: "Please enter a valid email",
          },
        })}
        type="text"
        id={`input-${index}`}
        placeholder={value}
      />
      {errors[value] && (
        <p className={style.form_Error}>{errors[value].message}</p>
      )}
    </div>
  );
};

export default Input;
