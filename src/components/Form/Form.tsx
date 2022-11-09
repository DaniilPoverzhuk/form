import React from "react";
import data from "./data";
import Input from "./Input";
import style from "./form.module.scss";
import "react-hook-form";
import { SubmitHandler, useForm } from "react-hook-form";
import { IField } from "./form.interface";

const Form: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IField>();

  const onSubmit: SubmitHandler<IField> = (data) => {
    reset();
  };

  return (
    <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={style.form_Inner}>
        <div className={style.form_Title}>Registra il tuo account gratuito</div>
        <div className={style.form_Inputs}>
          {data.map((item, index) => (
            <Input
              register={register}
              errors={errors}
              index={index}
              key={index}
              {...item}
            />
          ))}
        </div>
        <div className={style.form_Info}>
          Iscrivendoti confermi di aver letto e accettato i
          <span> Termini e Condizioni</span> e la <span>Privacy Policy</span>
        </div>
        <button className={style.form_Button}>Send</button>
      </div>
    </form>
  );
};

export default Form;
