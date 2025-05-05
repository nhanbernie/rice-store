import { COMMON_SIZE } from '@/sizes/common-sizes.constant'
import Icon from '@/components/icons/Icon'
import { COMMON_ICON } from '@/icons/icon.constant'
import ContactForm from './ContactForm'

const Contact = () => {
  const type = 'login'
  const onSubmit = async (data: any) => {
    console.log('data', data)
    try {
      const res = await fetch('http://localhost:1901/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      const result = await res.json()
      if (result.success === true) {
        console.log('Login successful')
      }
    } catch (err) {
      console.log('Error: ', err)
    }
  }

  return (
    <div
      className={`container flex flex-col md:flex-row justify-between mx-auto max-sm:px-4 ${COMMON_SIZE.SPACE_TOP} lg:${COMMON_SIZE.SPACE_TOP_LARGE}`}
    >
      <div className="contact w-full mb-16 md:mb-0">
        <div className="mt-0 xl:mt-20">
          <h1 className="text-6xl font-semibold mb-4 drop-shadow-2xl">Contact Us</h1>
          <p className="text-sm text-gray-500 mb-10 w-full lg:w-1/2">
            If you have any questions or concerns, please feel free to reach out to us using the
            form below.
          </p>
          <div className="information-contact flex flex-col">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="flex flex-row items-end mb-5">
                <Icon
                  className="h-8 w-8 mr-4 fill-current text-green-800"
                  id={COMMON_ICON.FacebookIcon}
                />
                <p className="text-lg text-gray-500">facebook.com/QuyRice</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 xl:grid-cols-3 gap-4">
          {[...Array(3)].map((_, index) => (
            <div key={index}>
              <h2 className="text-2xl font-semibold mb-4">Customer support</h2>
              <p className="text-sm text-gray-500 mb-10">123 Main Street, City, Country</p>
            </div>
          ))}
        </div>
      </div>
      {/* Form Section */}
      <ContactForm />
    </div>
  )
}

export default Contact
