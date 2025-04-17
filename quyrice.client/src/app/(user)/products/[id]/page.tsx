'use server'

import { Body } from '@/app/layouts'
import CommonButton from '@/components/button/CommonButton'
import { COMMON_ICON } from '@/common/constants/styles/icons/icon.constant'
import Icon from '@/components/icons/Icon'
import ProductCard from '@/components/product-card/ProductCard'

const ProductDetail = () => {
  return (
    <Body>
      <div className="flex flex-col md:flex-row md:px-24 px-6 mb-10 pt-16">
        {/* right side */}
        <div className="flex flex-1 flex-col px-6">
          <div className="flex flex-col">
            {/* image */}
            <div className=""></div>
            {/* comment */}
            <div className=""></div>
          </div>
        </div>
        {/* left side */}
        <div className="flex flex-col md:w-[21.5em] lg:w-[26em] w-full">
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col">
              {/* title product */}
              <div className="flex flex-row justify-between mb-3">
                <div className="flex flex-col">
                  <h2 className="text-base font-semibold mb-1">
                    Watermelon Glow Niacinamide Hue Drops
                  </h2>
                  <div className="flex flex-row">
                    {[...Array(4)].map((_, index) => (
                      <Icon
                        key={index}
                        id={COMMON_ICON.StarIcon}
                        className="w-3 h-3 mr-1 fill-current text-yellow-500"
                      />
                    ))}
                    <Icon
                      id={COMMON_ICON.StarIcon}
                      className="w-3 h-3 fill-current text-yellow-500 [clip-path:inset(0_50%_0_0)]"
                    />
                  </div>
                </div>
                <div>
                  <div className="rounded-full border-slate-200 border-[1px] p-2 hover:cursor-pointer hover:bg-slate-200 transition-all">
                    <Icon id={COMMON_ICON.HeartIcon} className="w-5 h-5" />
                  </div>
                </div>
              </div>
              {/* end title product */}

              {/* price */}
              <div className="price-detail">
                <span className="text-sm font-semibold">$34.00</span>
              </div>

              {/* Quantity */}
              <div className="flex flex-row justify-between mt-8">
                <span className="font-semibold">Quantity</span>
                <div className="flex flex-row items-center bg-[#F2F4F5] rounded-lg overflow-hidden shadow-lg">
                  <div className="flex items-center h-full w-full cursor-pointer hover:bg-zinc-300 transition-all px-2">
                    <Icon id={COMMON_ICON.MinusIcon} className="" />
                  </div>
                  <p className="px-2 text-xs">1</p>
                  <div className="flex items-center h-full w-full cursor-pointer hover:bg-zinc-300 transition-all px-2">
                    <Icon id={COMMON_ICON.PlusIcon} className="" />
                  </div>
                </div>
              </div>

              {/* group button */}
              <div className="mt-8">
                <CommonButton
                  text="Add to cart"
                  styleButton="bg-green-800 text-white px-5 rounded-[10px] w-full py-2 hover:bg-green-700 transition-all"
                />
                <CommonButton
                  text="Buy now"
                  styleButton="bg-black text-white mt-3 px-5 rounded-[10px] w-full py-2 hover:bg-gray-800 transition-all"
                />
              </div>

              <div className="mt-16">
                <h2 className="font-bold">Description</h2>
                <p className="mt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum asperiores,
                  doloribus possimus repudiandae architecto eos eveniet. Error esse beatae adipisci
                  unde, ratione accusamus incidunt, similique possimus id officia dicta? Vitae?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ProductCard />
    </Body>
  )
}

export default ProductDetail
