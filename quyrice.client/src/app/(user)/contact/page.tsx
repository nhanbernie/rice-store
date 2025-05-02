import React from 'react'
import { COMMON_SIZE } from '@/sizes/common-sizes.constant'
import Icon from '@/components/icons/Icon'
import { COMMON_ICON } from '@/icons/icon.constant'
const Contact = () => {
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
      <div className="form md:w-full max-md:mb-16 lg:w-[50em] w-full">
        <form className="flex flex-col shadow-2xl px-7 pt-6 pb-10 rounded-3xl ">
          {/* Header */}
          <h2 className="text-4xl font-semibold mb-2">Get in Touch</h2>
          <p className="text-base text-gray-500 mb-8">We would love to hear from you!</p>
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 h-[50px] rounded-full px-5 mb-4"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border border-gray-300 h-[50px] rounded-full px-5 mb-4"
          />
          <textarea
            placeholder="Your Message"
            className="border border-gray-300 rounded-3xl px-5 py-5 h-[200px] mb-4"
          />
          <button
            type="submit"
            className="bg-green-800 text-white rounded-3xl h-[50px] hover:bg-green-900 transition duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
