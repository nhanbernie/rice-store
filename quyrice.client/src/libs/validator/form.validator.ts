import * as Yup from 'yup'
import { AUTH_FORM_ERROR_MESSAGES } from '@/messages/error-message..constants'

const validatorSchema = {
  contact: Yup.object().shape({
    name: Yup.string().required(AUTH_FORM_ERROR_MESSAGES.EMU018),
    email: Yup.string().email(AUTH_FORM_ERROR_MESSAGES.EMU001).required(AUTH_FORM_ERROR_MESSAGES.EMU002),
    message: Yup.string().required(AUTH_FORM_ERROR_MESSAGES.EMU019),
  }),
}

export default validatorSchema