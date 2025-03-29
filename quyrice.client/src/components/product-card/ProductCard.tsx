'use server'

import { COLOR_BUTTON, COLOR_CARD } from '@/colors/common-color.constant'
import { COMMON_SIZE } from '@/sizes/common-sizes.constant'
import Icon from '../icons/Icon'
import Link from 'next/link'
import {
  titleAnimation,
  hoverButton,
  tapScale,
  hoverImage,
} from '@/common/constants/animations/common-animations.constant'
import { TitleMotion, BlockMotion } from '@/motions/index'
import ImgMotion from '../aminations/ImgMotion'
import CommonButton from '@/components/button/CommonButton'

const ProductCard = () => {
  return (
    <div className="mb-16">
      <TitleMotion
        className={`text-3xl font-bold ${COMMON_SIZE.TITLE_TO_CONTENT}`}
        variants={titleAnimation}
        title="LIST PRODUCTS"
      />
      {/* Grid Container */}
      <article className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
        {[...Array(13)].map((_, index) => (
          <BlockMotion
            key={index}
            index={index}
            // variants={productCardAnimation}
            className="relative pb-12 flex flex-col justify-center items-center rounded-3xl border-[1px] border-slate-100 shadow-lg"
          >
            <div
              className={`absolute top-8 left-8 ${COLOR_BUTTON.ADD_PRODUCT} text-white text-base font-bold px-3 py-1 rounded-2xl z-10`}
            >
              25%
            </div>

            {/* Favourite Button */}
            <CommonButton
              idIcon="icon-heart"
              styleButton="absolute top-8 right-8 z-20"
              className="w-8 h-8 text-white"
              {...hoverButton}
              {...tapScale}
            />
            {/* Product Link */}
            <Link href={`/products/${index}`}>
              <div className="text-center">
                <figure className="w-full aspect-[4/3] mb-5 rounded-t-3xl overflow-hidden">
                  <ImgMotion
                    src="https://www.allrecipes.com/thmb/RKpnSHLUDT2klppYgx8jAF47GyM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/52490-PuertoRicanSteamedRice-DDMFS-061-4x3-3c3da714aa614037ad1c135ec303526d.jpg"
                    className="w-full"
                    {...hoverImage}
                  />
                </figure>

                <header className="text-center mb-2">
                  <h2 className={`${COLOR_CARD.TEXT_PRODUCT} text-lg`}>Light Wooden Chair</h2>
                </header>
                <p className={`${COLOR_CARD.TEXT_PRICE} font-bold text-xl`} aria-label="Price">
                  $34.00
                </p>
              </div>
            </Link>

            {/* Add to Cart Button */}
            <button
              className={`absolute rounded-full p-3 ${COLOR_BUTTON.ADD_PRODUCT} ${COLOR_BUTTON.HOVER_ADD_PRODUCT} bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 transition duration-300 shadow-2x`}
            >
              <Icon className="w-7 h-7 text-white" id="icon-plus" />
            </button>
          </BlockMotion>
        ))}
      </article>
    </div>
  )
}

export default ProductCard
