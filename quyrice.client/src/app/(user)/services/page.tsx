import CommonButton from '@/components/button/CommonButton'
import { hoverButton } from '@/common/constants/animations/common-animations.constant'
import './ServicesPage.scss'
import Icon from '@/components/icons/Icon'
import { COMMON_ICON } from '@/common/constants/styles/icons/icon.constant'
import { COMMON_SIZE } from '@/sizes/common-sizes.constant'
import Image from 'next/image'

const Service = () => {
  return (
    <div className="service-container mb-16">
      {/* Banner */}
      <div className="relative shadow-2xl">
        <Image
          src={
            'https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/mexican_rice_89891_16x9.jpg'
          }
          alt="Quy Service Image"
          className="w-full h-[600px] object-cover"
          width={500}
          height={500}
          quality={100}
          priority={true}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50" />

        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white z-0">
          <h1 className="text-7xl font-bold opacity-60">Services</h1>
          <p className="text-3xl mt-4 opacity-60">We provide a wide range of services</p>
          <CommonButton
            text="Read more"
            styleButton="gap-2 rounded-xl py-2 mt-10 px-3 text-white bg-[#A3B18A] opacity-80 hover:opacity-100"
            {...hoverButton}
          />
        </div>

        {/* <div className="service-intro flex space-x-10 py-14 px-14 absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-[#A3B18A] text-white transition duration-300">
          {[...Array(4).keys()].map((item) => (
            <div key={item} className="flex flex-col justify-center items-center">
              <Icon id={COMMON_ICON.DeliveryIcon} className="w-10 h-10 text-white" />
              <p>SHIPING</p>
            </div>
          ))}
        </div> */}
      </div>
      {/* Container service content */}
      <div className="container max-w-screen-2xl mx-auto mt-16">
        {/* History */}
        <div className="container mx-auto">
          <div
            className={`service-history grid grid-cols-2 max-md:grid-cols-1 justify-between ${COMMON_SIZE.SPACE_BOTTOM}`}
          >
            <div className=" pr-8">
              <h1 className="text-6xl font-semibold">Our history</h1>
              <div className="py-8">Test</div>
              <p className="text-2xl mt-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint odit asperiores
                cupiditate magni nemo. Voluptates, soluta voluptatibus ipsa dicta cumque placeat
                illum? Vitae praesentium similique, hic animi accusantium a. Ut?
              </p>
            </div>
            <div className="flex justify-end max-md:hidden w-full">
              <div className="service-history__image transition duration-300 overflow-hidden">
                <Image
                  src={
                    'https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/mexican_rice_89891_16x9.jpg'
                  }
                  alt="Quys Service Image"
                  className="w-full h-full object-cover"
                  width={500}
                  height={500}
                  quality={100}
                />
              </div>
            </div>
          </div>

          {/* Delivery */}
          <div className={`flex flex-col min-w-full ${COMMON_SIZE.SPACE_BOTTOM}`}>
            <div className="flex flex-row-reverse justify-between">
              <h1 className={`text-6xl font-semibold ${COMMON_SIZE.TITLE_TO_CONTENT}`}>
                Benefit of rate
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro fugiat repellendus
              </p>
            </div>

            <div className="grid grid-cols-3 gap-32 max-xl:grid-cols-1 max-2xl:gap-10">
              {[...Array(3).keys()].map((item) => (
                <div
                  key={item}
                  className="flex flex-col text-center text-black rounded-3xl shadow-[0_35px_35px_rgba(0,0,0,0.12)] hover:shadow-neutral-400 xl:p-16 max-xl:mb-10 p-20 transition-all duration-500 ease-in-out"
                >
                  <div className="flex justify-center mb-4">
                    <Icon id={COMMON_ICON.DeliveryIcon} className="w-24 h-24 text-white" />
                  </div>
                  <h2 className="text-3xl font-semibold mb-6">Payment</h2>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis dolores
                    voluptate voluptatum amet sit magni optio adipisci provident modi alias vel eum
                    facere ipsum, saepe quisquam illo aperiam libero atque?
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Us Section */}
          <div
            className={`relative py-20 px-8 bg-gradient-to-r from-green-50 to-white dark:from-zinc-900 dark:to-black rounded-3xl shadow-lg ${COMMON_SIZE.SPACE_BOTTOM}`}
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-10">
              <div className="md:w-1/2">
                <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
                  Contact Us Here at{' '}
                  <span className="text-green-900 dark:text-green-500 block mt-2">Rice Store</span>
                </h1>
                <div className="mt-8 space-y-4">
                  <div className="flex items-center space-x-4">
                    <Icon
                      id={COMMON_ICON.EmailIcon}
                      className="w-6 h-6 text-green-800 dark:text-green-500"
                    />
                    <p className="text-lg">ricestore@gmail.com</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Icon
                      id={COMMON_ICON.PhoneIcon}
                      className="w-6 h-6 text-green-800 dark:text-green-500"
                    />
                    <p className="text-lg">+84 123 456 789</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Icon
                      id={COMMON_ICON.ShopIcon}
                      className="w-6 h-6 text-green-800 dark:text-green-500"
                    />
                    <p className="text-lg">123 Rice Street, Ho Chi Minh City</p>
                  </div>
                </div>
              </div>

              <div className="md:w-1/2">
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
                  We are here to assist you with any questions about our products and services. Our
                  team is dedicated to providing you with the highest quality rice and excellent
                  customer service.
                </p>
                <CommonButton
                  text="Get in touch"
                  styleButton="mt-8 bg-green-800 hover:bg-green-700 text-white px-8 py-3 rounded-xl transition-all duration-300"
                  idIcon={COMMON_ICON.EmailIcon}
                />
              </div>
            </div>

            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-green-100 dark:bg-green-900/20 rounded-full blur-3xl"></div>
          </div>

          {/* Adventure Section */}
          <div className="relative py-24 text-center">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight dark:text-gray-300">
                START YOUR NEW{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-900 dark:from-green-400 dark:to-green-600">
                  ADVENTURE
                </span>{' '}
                <br />
                WITH PREMIUM RICE
              </h1>

              <div className="max-w-2xl mx-auto">
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Experience the finest quality rice from around the world. Our carefully selected
                  varieties will enhance your culinary adventures and bring authentic flavors to
                  your table.
                </p>
                <div className="mt-10 flex justify-center gap-4">
                  <CommonButton
                    text="Explore Products"
                    styleButton="bg-green-800 hover:bg-green-700 text-white px-8 py-3 rounded-xl transition-all duration-300"
                    idIcon={COMMON_ICON.SearchIcon}
                  />
                  <CommonButton
                    text="Learn More"
                    styleButton="border-2 border-green-800 hover:bg-green-50 dark:hover:bg-green-900/20 text-green-800 dark:text-green-500 px-8 py-3 rounded-xl transition-all duration-300"
                  />
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -z-10 top-0 left-0 w-[300px] h-[300px] bg-green-100 dark:bg-green-900/20 rounded-full blur-3xl"></div>
            <div className="absolute -z-10 bottom-0 right-0 w-[250px] h-[250px] bg-green-50 dark:bg-green-900/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service
