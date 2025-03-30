import { COMMON_SIZE } from '@/sizes/common-sizes.constant'

const ProductCardSkeleton = () => {
  return (
    <div className="mb-16">
      <div
        className={`text-3xl font-bold ${COMMON_SIZE.TITLE_TO_CONTENT} animate-pulse bg-gray-200 h-8 w-48 rounded`}
      />

      <article className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3 mt-8">
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className="relative pb-12 flex flex-col justify-center items-center rounded-3xl border-[1px] border-slate-100 shadow-lg"
          >
            <div className="w-full aspect-[4/3] mb-5 rounded-t-3xl bg-gray-200 animate-pulse" />
            <div className="w-32 h-6 bg-gray-200 animate-pulse rounded mb-2" />
            <div className="w-20 h-6 bg-gray-200 animate-pulse rounded" />
          </div>
        ))}
      </article>
    </div>
  )
}

export default ProductCardSkeleton
