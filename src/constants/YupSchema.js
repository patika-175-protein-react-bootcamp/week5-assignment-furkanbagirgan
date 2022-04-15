import * as yup from 'yup';

//Here, the registration form is controlled by yup.
export const RegisterSchema = yup.object().shape({
  name: yup
    .string(),
  surname: yup
    .string(),
  email: yup
    .string()
    .email("Lütfen geçerli bir eposta adresi giriniz")
    .required("Eposta alanı zorunludur"),
  userName: yup
    .string()
    .required("Kullanıcı adı alanı zorunludur"),
  password: yup
    .string()
    .typeError("Şifrenizde sadece \"@/./+/-/_\" kullanabilirsin")
    .min(8, "Şifreniz 8 karakterden az olamaz")
    .max(32, "Şifreniz 32 karakterden fazla olamaz")
    .required("Şifre alanı zorunludur"),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref('password'), null], "Şifrelerin eşleşmesi gereklidir"),
  agreement: yup
    .boolean()
    .isTrue("Sözleşmeyi kabul ediniz"),
});