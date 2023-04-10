import { Rule } from 'antd/es/form'
import Validator from 'validator'

export const requiredFormRule: Rule[] = [{ required: true, message: 'فیلد مورد نظر اجباریست' }]

export const emailFormRule: Rule[] = [
  { required: true, message: 'فیلد ایمیل اجباریست' },
  () => ({
    validator(_, value) {
      if (!value) return Promise.reject('')

      if (Validator.isEmail(value)) return Promise.resolve()

      return Promise.reject(new Error('ایمیل معتبر نمی باشد.'))
    },
  }),
]

export const passwordFormRule: Rule[] = [
  { required: true, message: 'فیلد رمز عبور اجباریست' },
  () => ({
    validator(_, value) {
      if (!value) return Promise.reject('')

      if (value.length < 8) return Promise.reject(new Error('رمز عبور حداقل باید 8 کاراکتر باشد'))

      return Promise.resolve()
    },
  }),
]

export const codeFormRule: Rule[] = [
  { required: true, message: 'وارد کردن کد اجباریست' },
  () => ({
    validator(_, value: string) {
      if (!value) return Promise.reject()

      if (value.split('_').join('').split(' ').join('').length === 6) return Promise.resolve()

      return Promise.reject(new Error('کد باید 6 رقمی باشد'))
    },
  }),
]

export const phoneNumberRule: Rule[] = [
  { required: true, message: 'شماره همراه خود را وارد کنید' },
  () => ({
    validator(_, value) {
      if (!value) {
        return Promise.resolve()
      }
      if (Validator.isMobilePhone(value, 'fa-IR')) {
        return Promise.resolve()
      } else {
        return Promise.reject(new Error('شماره همراه معتبر نمی باشد.'))
      }
    },
  }),
]

export const termAndConditionRule: Rule[] = [
  {
    validator: (_, value) => (value ? Promise.resolve() : Promise.reject(new Error('پذیرفتن شرایط و قوانین اجباریست'))),
  },
]

export const nationalCodeRule: Rule[] = [
  {
    required: true,
    message: 'کد ملی خود را وارد کنید',
  },
  {
    validator: (_, value) =>
      Number.isInteger(+value) && value.length === 10 ? Promise.resolve() : Promise.reject(new Error('فرمت کد ملی صحیح نمیباشد')),
  },
]

export const uploadRuleForm: Rule[] = [
  {
    required: true,
    message: 'بارگذاری تصویر الزامی میباشد',
  },
]
