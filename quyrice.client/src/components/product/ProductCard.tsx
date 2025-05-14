'use client'

import { BlockMotion } from '@/motions/index'
import CommonButton from '@/components/button/CommonButton'
import { COLOR_BUTTON, COLOR_CARD } from '@/colors/common-color.constant'
import Link from 'next/link'
import {
  hoverButton,
  tapScale,
  hoverImage,
} from '@/common/constants/animations/common-animations.constant'
import ImgMotion from '../aminations/ImgMotion'
import Icon from '../icons/Icon'

interface ProductCardProps {
  index: number
}

const ProductCard = ({ index }: ProductCardProps) => {
  return (
    <BlockMotion
      index={index}
      className="relative pb-12 flex flex-col justify-center items-center rounded-3xl border-[1px] border-slate-100 shadow-lg"
    >
      <div
        className={`absolute top-8 left-8 ${COLOR_BUTTON.ADD_PRODUCT} text-white text-base font-bold px-3 py-1 rounded-2xl z-10`}
      >
        25%
      </div>

      <CommonButton
        idIcon="heart-icon"
        styleButton="absolute top-8 right-8 z-20 px-0 py-0"
        className="w-8 h-8 mr-0 text-white"
        {...hoverButton}
        {...tapScale}
      />

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

      <button
        className={`absolute rounded-full p-3 ${COLOR_BUTTON.ADD_PRODUCT} ${COLOR_BUTTON.HOVER_ADD_PRODUCT} bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 transition duration-300 shadow-2xl`}
      >
        <Icon className="w-7 h-7 text-white" id="plus-icon" />
      </button>
    </BlockMotion>
  )
}

export default ProductCard
