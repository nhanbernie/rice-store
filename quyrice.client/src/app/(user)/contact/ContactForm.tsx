'use client'
import FormProvider from '@/components/form/AuthProvider'
import validatorSchema from '@/libs/validator/form.validator'
import InputField from '@/components/input/InputField'
import Textarea from '@/components/input/Textarea'

const ContactForm = () => {
  const inputField = [
    { name: 'name', type: 'text', placeholder: 'Your Name' },
    { name: 'email', type: 'email', placeholder: 'Your Email' },
    { name: 'message', type: 'text', placeholder: 'Your Message' },
  ]

  return (
    <div className="form md:w-full max-md:mb-16 lg:w-[50em] w-full">
      <FormProvider onSubmit={() => {}} validatorSchema={validatorSchema['contact']}>
        <div className="flex flex-col shadow-2xl px-7 pt-6 pb-10 rounded-3xl">
          <h2 className="text-4xl font-semibold mb-2">Get in Touch</h2>
          <p className="text-base text-gray-500 mb-8">We would love to hear from you!</p>
          <InputField name="name" type="text" placeholder="Your Name" />
          <InputField name="email" type="email" placeholder="Your Email" />
          <Textarea name='message'placeholder='Send your message' />
          <button type="submit" className="w-full mt-4 bg-green-900 text-white py-4 rounded-3xl">
            Start
          </button>
        </div>
      </FormProvider>
    </div>
  )
}

export default ContactForm
