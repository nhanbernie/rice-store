'use server'

import { Body } from '@/app/layouts'
import CommonButton from '@/components/button/CommonButton'
import { COMMON_ICON } from '@/common/constants/styles/icons/icon.constant'
import Icon from '@/components/icons/Icon'
import ProductPageSection from '@/components/product/ProductPageSection'
import ProductGallery from '@/components/product-gallery/ProductGallery'

const ProductDetail = () => {
  const productImages = [
    'https://images.unsplash.com/photo-1741850820683-b25798ff3164?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://c4.wallpaperflare.com/wallpaper/382/296/41/nature-food-wallpaper-preview.jpg',
    'https://media.gettyimages.com/id/1370684454/video/jasmine-brown-rice-pouring-from-wooden-spoon.jpg?s=640x640&k=20&c=ax7gsBoRci0qhUWYXOcisNchLzNoTijLGqnAySgdoMc=',
    'https://t4.ftcdn.net/jpg/00/91/51/91/360_F_91519135_DlbNcDSnqJAbD53UKqkddnFg0LV2gKSj.jpg',
  ]
  // Product details
  return (
    <Body>
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Product Images Section */}
          <div className="lg:w-2/3">
            <ProductGallery images={productImages} aspectRatio={1} />
          </div>

          {/* Product Info Section */}
          <div className="lg:w-1/3">
            <div className="sticky top-24">
              {/* Product Title and Favorite */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h1 className="text-2xl font-bold mb-2">Premium Japanese Rice</h1>
                  <div className="flex items-center gap-1">
                    {[...Array(4)].map((_, index) => (
                      <Icon
                        key={index}
                        id={COMMON_ICON.StarIcon}
                        className="w-4 h-4 text-yellow-500"
                      />
                    ))}
                    <Icon
                      id={COMMON_ICON.StarIcon}
                      className="w-4 h-4 text-yellow-500 [clip-path:inset(0_50%_0_0)]"
                    />
                    <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                      (150 reviews)
                    </span>
                  </div>
                </div>
                <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors">
                  <Icon id={COMMON_ICON.HeartIcon} className="w-6 h-6" />
                </button>
              </div>

              {/* Price */}
              <div className="mb-8">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold">$34.00</span>
                  <span className="text-lg text-gray-500 line-through">$40.00</span>
                  <span className="text-green-600 font-semibold">15% OFF</span>
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="mb-8">
                <label className="block text-sm font-medium mb-2">Quantity</label>
                <div className="flex items-center gap-2 w-32 bg-gray-100 dark:bg-zinc-800 rounded-lg p-1">
                  <button className="p-2 hover:bg-gray-200 dark:hover:bg-zinc-700 rounded-md transition-colors">
                    <Icon id={COMMON_ICON.MinusIcon} className="w-4 h-4" />
                  </button>
                  <span className="flex-1 text-center">1</span>
                  <button className="p-2 hover:bg-gray-200 dark:hover:bg-zinc-700 rounded-md transition-colors">
                    <Icon id={COMMON_ICON.PlusIcon} className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-4">
                <CommonButton
                  text="Add to Cart"
                  styleButton="w-full items-center py-3 flex justify-center bg-green-800 hover:bg-green-700 text-white py-3 rounded-xl transition-all"
                  idIcon={COMMON_ICON.ShoppingCartIcon}
                  className="h-5 w-5 mr-4"
                />
                <CommonButton
                  text="Buy Now"
                  styleButton="w-full bg-black hover:bg-gray-800 text-white py-3 rounded-xl transition-all"
                />
              </div>

              {/* Product Description */}
              <div className="mt-12">
                <h2 className="text-lg font-semibold mb-4">Product Description</h2>
                <div className="prose prose-sm dark:prose-invert">
                  <p>
                    Premium Japanese rice carefully selected for its exceptional quality and taste.
                    Perfect for sushi, rice bowls, and other traditional Japanese dishes.
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li>100% authentic Japanese short-grain rice</li>
                    <li>Perfectly polished for optimal cooking</li>
                    <li>Rich in nutrients and naturally sweet</li>
                    <li>Ideal for both traditional and modern recipes</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16">
        <ProductPageSection />
      </div>
    </Body>
  )
}

export default ProductDetail
