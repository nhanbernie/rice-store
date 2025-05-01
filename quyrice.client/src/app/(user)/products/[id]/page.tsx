'use client'

import { Body } from '@/app/layouts'
import CommonButton from '@/components/button/CommonButton'
import { COMMON_ICON } from '@/common/constants/styles/icons/icon.constant'
import Icon from '@/components/icons/Icon'
import ProductCard from '@/components/product-card/ProductCard'
import ProductGallery from '@/components/product-gallery/ProductGallery'

const ProductDetail = () => {
  // Sample product images - replace with your actual product images
  const productImages = [
    'data:image/jpeg;base64,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',
    'https://c4.wallpaperflare.com/wallpaper/382/296/41/nature-food-wallpaper-preview.jpg',
    'https://media.gettyimages.com/id/1370684454/video/jasmine-brown-rice-pouring-from-wooden-spoon.jpg?s=640x640&k=20&c=ax7gsBoRci0qhUWYXOcisNchLzNoTijLGqnAySgdoMc=',
    'https://t4.ftcdn.net/jpg/00/91/51/91/360_F_91519135_DlbNcDSnqJAbD53UKqkddnFg0LV2gKSj.jpg',
  ]

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
                  styleButton="w-full bg-green-800 hover:bg-green-700 text-white py-3 rounded-xl transition-all"
                  idIcon={COMMON_ICON.ShoppingCartIcon}
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
        <ProductCard />
      </div>
    </Body>
  )
}

export default ProductDetail
