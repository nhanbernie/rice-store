import CommonButton from '@/components/button/CommonButton'
import { hoverButton } from '@/common/constants/animations/common-animations.constant'
import './ServicesPage.scss'
import Icon from '@/components/icons/Icon'
import { COMMON_ICON } from '@/common/constants/styles/icons/icon.constant'
import { COMMON_SIZE } from '@/sizes/common-sizes.constant'

const Service = () => {
  return (
    <div className="service-container mb-16">
      {/* Banner */}
      <div className="relative shadow-2xl">
        <img
          src="https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/mexican_rice_89891_16x9.jpg"
          alt=""
          className="w-full h-[600px] object-cover"
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
              <Icon id={COMMON_ICON.IconDelivery} className="w-10 h-10 text-white" />
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
                <img
                  src="https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/mexican_rice_89891_16x9.jpg"
                  alt=""
                  className="w-full h-full object-cover"
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
                    <Icon id={COMMON_ICON.IconDelivery} className="w-24 h-24 text-white" />
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

          {/* Delivery */}
          <div className={`flex flex-row justify-between min-w-full ${COMMON_SIZE.SPACE_BOTTOM}`}>
            <h1 className="text-6xl font-semibold">
              Contact Us Here
              <br />
              <span className="text-green-900">Rice Store</span>
            </h1>

            <div className="flex items-center md:w-[21.5em] lg:w-[56em] w-full">
              <p className="text-2xl">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem fugiat
                laudantium odit reiciendis neque doloremque, corporis, voluptate, maiores ullam iure
                nulla numquam velit dolores sint reprehenderit. Delectus maxime iusto fugit?
              </p>
            </div>
          </div>

          {/*  */}
          <div className="flex flex-col items-center text-center">
            <h1 className="text-5xl font-bold mb-6">
              START YOUR NEW <span className="text-green-900">ADVANTURE</span> <br />
              AROUND THE WORLD
            </h1>
            <div className='w-1/4'>
              <p className="">
                There are still many amazing destinations scattered around the world, you should try
                to visit all of them
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service
