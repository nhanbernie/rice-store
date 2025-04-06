import { socialLinks } from '@/common/constants/footer/social.constant'
import { addressData } from '@/common/constants/footer/social.constant'
import { COMMON_SIZE } from '@/common/constants/styles/sizes/common-sizes.constant'
import Icon from '@/components/icons/Icon'

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-[#292929] rounded-t-2xl">
      <div className={`w-full lg:${COMMON_SIZE.PY}`}>
        {/* Top footer */}
        <div className="container mx-auto max-sm:px-4 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="mb-6 md:mb-0">
            <h1 className="font-extrabold md:text-4xl mb-16 dark:text-white text-3xl">
              How to reach us
            </h1>
            <div className="grid grid-cols-1 gap-8 sm:gap-6">
              {addressData.map((data, index) => (
                <div key={index} className="mb-6">
                  <h2 className="mb-1 text-sm font-bold text-gray-900 uppercase dark:text-white">
                    {data.title}
                  </h2>
                  <p>For question about my service</p>
                  <div className='flex items-center mt-2 space-x-2'>
                    <Icon id="icon-mail" className="h-6 w-6 text-green-900" />
                    <p>ricestore@gmail.com</p>
                  </div>
                  {/* <ul className="text-gray-500 dark:text-gray-400 font-medium">
                    <li className="mb-4">
                      <a href="https://flowbite.com/" className="hover:underline">
                        Flowbite
                      </a>
                    </li>
                    <li>
                      <a href="https://tailwindcss.com/" className="hover:underline">
                        Tailwind CSS
                      </a>
                    </li>
                  </ul> */}
                </div>
              ))}
            </div>
          </div>

          {/* Map */}
          <div className="max-lg:hidden">
            <h1 className="font-extrabold md:text-4xl mb-16 dark:text-white text-3xl">
              Our Location
            </h1>
            <iframe
              className="rounded-3xl border-none w-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2990.274257380938!2d-70.56068388481569!3d41.45496659976631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e52963ac45bbcb%3A0xf05e8d125e82af10!2sDos%20Mas!5e0!3m2!1sen!2sus!4v1671220374408!5m2!1sen!2sus"
              width="600"
              height="450"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        {/* End top footer */}
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

        {/* Bottom footer */}
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2025{' '}
            <a href="https://flowbite.com/" className="hover:underline">
              Bernie™
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0 space-x-4">
            {socialLinks.map((data, index) => (
              <a
                key={index}
                href={data.href}
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                {data.icon}
                <span className="sr-only">{data.name}</span>
              </a>
            ))}
          </div>
        </div>
        {/* End bottom footer */}
      </div>
    </footer>
  )
}

export default Footer
