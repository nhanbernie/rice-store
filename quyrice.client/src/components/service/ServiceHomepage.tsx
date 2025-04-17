import { COMMON_SIZE } from '@/common/constants/styles/sizes/common-sizes.constant'
import Icon from '../icons/Icon'

const ServiceHomepage = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000))

  return (
    <div className="container mx-auto mb-16">
      {/* container items */}
      <div className="service-preview w-full lg:w-[80%]">
        <h2 className={`text-3xl font-bold mb-8 ${COMMON_SIZE.TITLE_TO_CONTENT}`}>OUR SERVICE</h2>
        <div className="service-items grid grid-cols-1 gap-8 md:grid-cols-1 lg:grid-cols-3">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="service-item flex flex-col items-start mr-10">
              <div className="mb-4">
                <Icon id="chef-hat-icon" className="w-10 h-10 text-green-900" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Gạo Sạch</h3>
              <p className="text-gray-600">Cung cấp gạo chất lượng, không hóa chất. </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ServiceHomepage
