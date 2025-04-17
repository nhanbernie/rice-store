import * as Yup from 'yup'
import { AUTH_ERROR_MESSAGE } from '@/common/constants/messages/error-message..constants';

const AUTH_PASSWORD = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{6,}$/
const AUTH_CODE_VERIFICATION =  /^[0-9]+$/

const validatorSchema = {
  login: Yup.object().shape({
    email: Yup.string()
      .email(AUTH_ERROR_MESSAGE.EMU001)
      .required(AUTH_ERROR_MESSAGE.EMU002),
    password: Yup.string()
      .min(12, AUTH_ERROR_MESSAGE.EMU003)
      .required(AUTH_ERROR_MESSAGE.EMU004),
  }),
  register: Yup.object().shape({
    username: Yup.string()
      .min(3, AUTH_ERROR_MESSAGE.EMU005)
      .required(AUTH_ERROR_MESSAGE.EMU006),
    email: Yup.string()
      .email(AUTH_ERROR_MESSAGE.EMU001)
      .required(AUTH_ERROR_MESSAGE.EMU002),
    password: Yup.string()
      .min(12, AUTH_ERROR_MESSAGE.EMU003)
      .matches(AUTH_PASSWORD, AUTH_ERROR_MESSAGE.EMU009)
      .required(AUTH_ERROR_MESSAGE.EMU004),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], AUTH_ERROR_MESSAGE.EMU007)
      .required(AUTH_ERROR_MESSAGE.EMU008),
  }),
  forgotPassword: Yup.object().shape({
    email: Yup.string()
      .email(AUTH_ERROR_MESSAGE.EMU001)
      .required(AUTH_ERROR_MESSAGE.EMU002),
    codeVerification: Yup.string()
      .length(6, AUTH_ERROR_MESSAGE.EMU010)
      .matches(AUTH_CODE_VERIFICATION, AUTH_ERROR_MESSAGE.EMU011)
      .required(AUTH_ERROR_MESSAGE.EMU012),
  }),
  changePassword: Yup.object().shape({
    oldPassword: Yup.string()
      .required(AUTH_ERROR_MESSAGE.EMU013)
      .min(12, AUTH_ERROR_MESSAGE.EMU003)
      .matches(AUTH_PASSWORD, AUTH_ERROR_MESSAGE.EMU009),
    newPassword: Yup.string()
      .required(AUTH_ERROR_MESSAGE.EMU014)
      .min(12, AUTH_ERROR_MESSAGE.EMU003)
      .matches(AUTH_PASSWORD, AUTH_ERROR_MESSAGE.EMU009)
      .notOneOf([Yup.ref('oldPassword')], AUTH_ERROR_MESSAGE.EMU015),
    confirmPassword: Yup.string()
      .required(AUTH_ERROR_MESSAGE.EMU016)
      .oneOf([Yup.ref('newPassword')], AUTH_ERROR_MESSAGE.EMU017)
  })
}
export default validatorSchema;