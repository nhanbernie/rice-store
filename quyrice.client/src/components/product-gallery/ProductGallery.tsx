'use client'

import { useState, useRef, useCallback } from 'react'
import Image from 'next/image'
import styles from '@/app/(user)/products/[id]/ProductGallery.module.css'

interface ProductGalleryProps {
  images: string[]
  aspectRatio?: number
}

const ProductGallery = ({ images, aspectRatio = 1 }: ProductGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState(0)
  const [isZoomed, setIsZoomed] = useState(false)
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 })
  const imageRef = useRef<HTMLDivElement>(null)
  const [isLoading, setIsLoading] = useState(true)

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!isZoomed || !imageRef.current) return

      const rect = imageRef.current.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100

      setZoomPosition({ x, y })
    },
    [isZoomed],
  )

  const handleImageLoad = () => {
    setIsLoading(false)
  }

  return (
    <div className={styles.galleryContainer}>
      <div
        ref={imageRef}
        className={`relative w-full overflow-hidden bg-gray-100 dark:bg-zinc-900 rounded-2xl 
          ${styles.mainImage} ${isZoomed ? styles.zoomed : ''}`}
        style={{ aspectRatio: aspectRatio }}
        onMouseEnter={() => setIsZoomed(true)}
        onMouseLeave={() => setIsZoomed(false)}
        onMouseMove={handleMouseMove}
      >
        {isLoading && (
          <div className="absolute inset-0 bg-gray-200 dark:bg-zinc-800 animate-pulse" />
        )}

        <Image
          src={images[selectedImage]}
          alt={`Product image ${selectedImage + 1}`}
          fill
          quality={100}
          priority={selectedImage === 0}
          className={`object-cover transition-transform duration-200 ease-out
            ${isZoomed ? 'scale-150' : 'scale-100'}`}
          style={{
            objectPosition: isZoomed ? `${zoomPosition.x}% ${zoomPosition.y}%` : 'center',
          }}
          onLoad={handleImageLoad}
        />

        <div className={styles.zoomOverlay} />
      </div>

      <div className={`${styles.thumbnailContainer} hide-scrollbar`}>
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`relative min-w-[80px] aspect-square rounded-lg overflow-hidden transition-all
              ${styles.thumbnail} ${selectedImage === index ? styles.active : ''}
              hover:shadow-lg dark:hover:shadow-zinc-800`}
            aria-label={`View image ${index + 1}`}
          >
            <Image
              src={image}
              alt={`Thumbnail ${index + 1}`}
              fill
              sizes="80px"
              quality={100}
              className="object-cover transition-transform duration-300 hover:scale-110"
            />
          </button>
        ))}
      </div>
    </div>
  )
}

export default ProductGallery
