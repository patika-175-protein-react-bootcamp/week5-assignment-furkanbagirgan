import React, { useState } from "react";
import { useFormik } from "formik";
import clsx from "clsx";

import { RegisterSchema } from "../constants/YupSchema";
import LoadingIcon from "../constants/Loading";
import LightIcon from "../constants/Light";
import DarkIcon from "../constants/Dark";
import Info from "../components/Info";

export default function Register() {
  //Here are the states for loading waiting and mode switching.
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState(true);

  //Here, the formic hook and the form that will appear on the screen are linked to the formic hook.
  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      name: "",
      surname: "",
      email: "",
      userName: "",
      password: "",
      passwordConfirmation: "",
      agreement: false,
    },
    validationSchema: RegisterSchema,
    onSubmit: (auth) => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        alert(
          JSON.stringify(
            "Hoşgeldiniz " + auth.userName + ", Kaydınız başarıyla oluşturuldu."
          )
        );
      }, 3000);
    },
  });

  return (
    <div className="container">
      {/*Here, the left part that will appear on the register screen comes from the Info component.*/}
      <Info mode={mode} />
      {/*Here is the registration form part that will appear on the registration screen.*/}
      <div className="formContainer" mode={mode ? "light" : "dark"}>
        <div className="form">
          <h3 className="title">
            <strong mode={mode ? "light" : "dark"}>Kayıt</strong>
          </h3>

          <form>
            <div className="formGroup formGroup2">
              <div className={clsx("formGroup", { formError: !!errors.name })}>
                <label className="title" mode={mode ? "light" : "dark"}>
                  İSİM
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="İsmini gir"
                  value={values.name}
                  onChange={handleChange}
                  mode={mode ? "light" : "dark"}
                />
                <span>{errors.name}</span>
              </div>

              <div
                className={clsx("formGroup", { formError: !!errors.surname })}
              >
                <label className="title" mode={mode ? "light" : "dark"}>
                  SOYİSİM
                </label>
                <input
                  type="text"
                  name="surname"
                  placeholder="Soyismini gir"
                  value={values.surname}
                  onChange={handleChange}
                  mode={mode ? "light" : "dark"}
                />
                <span>{errors.surname}</span>
              </div>
            </div>

            <div className={clsx("formGroup", { formError: !!errors.email })}>
              <label className="required title" mode={mode ? "light" : "dark"}>
                E-POSTA
              </label>
              <input
                type="text"
                name="email"
                placeholder="E-posta adresini gir"
                value={values.email}
                onChange={handleChange}
                mode={mode ? "light" : "dark"}
              />
              <span>{errors.email}</span>
            </div>

            <div
              className={clsx("formGroup", { formError: !!errors.userName })}
            >
              <label className="required title" mode={mode ? "light" : "dark"}>
                KULLANICI ADI
              </label>
              <input
                type="text"
                name="userName"
                placeholder="Kullanıcı adını gir"
                value={values.userName}
                onChange={handleChange}
                mode={mode ? "light" : "dark"}
              />
              <span>{errors.userName}</span>
            </div>

            <div
              className={clsx("formGroup", { formError: !!errors.password })}
            >
              <label className="required title" mode={mode ? "light" : "dark"}>
                ŞİFRE
              </label>
              <input
                type="password"
                name="password"
                placeholder="Şifreni gir"
                value={values.password}
                onChange={handleChange}
                mode={mode ? "light" : "dark"}
              />
              <span>{errors.password}</span>
            </div>

            <div
              className={clsx("formGroup", {
                formError: !!errors.passwordConfirmation,
              })}
            >
              <label className="required title" mode={mode ? "light" : "dark"}>
                ŞİFRENİ TEKRAR GİR
              </label>
              <input
                type="password"
                name="passwordConfirmation"
                placeholder="Şifreni doğrula"
                value={values.passwordConfirmation}
                onChange={handleChange}
                mode={mode ? "light" : "dark"}
              />
              <span>{errors.passwordConfirmation}</span>
            </div>

            <div
              className={clsx("formGroupAgreement", {
                formError: !!errors.agreement,
              })}
            >
              <div className="formAgreement">
                <input
                  type="checkbox"
                  name="agreement"
                  id="agreement"
                  checked={values.agreement}
                  onChange={handleChange}
                />
                <label className="title" htmlFor="agreement">
                  Sözleşmeyi kabul ediyorum
                </label>
              </div>
              <span>{errors.agreement}</span>
            </div>

            <div className="formGroup formButton">
              <button
                className="loginButton"
                type="submit"
                onClick={handleSubmit}
                disabled={loading}
                mode={mode ? "light" : "dark"}
              >
                {loading ? <LoadingIcon size={30} color="white" /> : "KAYIT OL"}
              </button>
              <span></span>
            </div>
          </form>
        </div>

        <div
          className="header"
          onClick={() => {
            setMode((prev) => !prev);
          }}
        >
          <div className="mode">
            {mode ? (
              <DarkIcon width="34" height="37" color="#3C3C3C" />
            ) : (
              <LightIcon width="24" height="24" color="#FEFEFE" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
