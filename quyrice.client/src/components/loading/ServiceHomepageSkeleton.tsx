import { COMMON_SIZE } from '@/common/constants/styles/sizes/common-sizes.constant'

const ServiceHomepageSkeleton = () => {
  return (
    <div className="container mx-auto mb-16">
      {/* container items */}
      <div className="service-preview w-full lg:w-[80%]">
        <h2 className={`bg-gray-200 h-8 w-48 text-3xl font-bold mb-8 animate-pulse ${COMMON_SIZE.TITLE_TO_CONTENT}`} />
        <div className="service-items grid grid-cols-1 gap-8 md:grid-cols-1 lg:grid-cols-3">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="service-item flex flex-col items-start mr-10">
              <div className="mb-4 h-10 w-10 rounded-lg animate-pulse bg-gray-200" />
              <h3 className="text-xl font-semibold w-80 h-8 bg-gray-200 mb-2 animate-pulse" />
              <p className="text-gray-600" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ServiceHomepageSkeleton
