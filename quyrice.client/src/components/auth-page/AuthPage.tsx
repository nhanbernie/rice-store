import Image from 'next/image'
import { IAuthPageProps } from '@/common/models/auth/auth.model'

const AuthPage = ({ children }: IAuthPageProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <BackgroundLayer />

      <div className="w-full max-w-7xl bg-white shadow-lg rounded-[50px] overflow-hidden flex flex-col md:flex-row md:justify-between z-10 transition-transform delay-700">
        <div className="md:w-3/5 w-full xl:px-20 md:px-10 px-5 py-16 flex flex-col text-center justify-center">
          {/* Auth Banner Section */}
          <IntroBanner />

          {/* Auth login button */}
          <AuthLoginButton />
          <div className="text-gray-400 text-sm mb-4">or</div>

          {/* Auth Form */}
          {children}

          <p className="text-sm text-gray-500 mt-6">
            Already have an account?{' '}
            <a href="#" className="font-semibold text-black">
              Log in
            </a>
          </p>
        </div>

        {/* Auth Banner Form */}
        <AuthBanner />
      </div>
    </div>
  )
}

const BackgroundLayer = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full -z-0 blur-sm">
      <Image
        src="/images/login-banner.jpg"
        alt="Background Image"
        className="h-full w-full object-cover"
        width={1000}
        height={1000}
      />
    </div>
  )
}

const IntroBanner = () => {
  return (
    <div className="mb-10">
      <h1 className="text-2xl font-bold text-gray-800 mb-3">
        <span className="text-green-900">Gringo</span>
      </h1>
      <p className="text-5xl leading-snug font-bold text-gray-800">
        Start your
        <br />
        <span>Perfect rice</span>
      </p>
    </div>
  )
}

const AuthBanner = () => {
  return (
    <div className="w-full relative overflow-hidden p-2 transition-all delay-700">
      <Image
        src="/images/login-banner.jpg"
        alt="Trail"
        width={1000}
        height={1000}
        className="h-full w-full rounded-[50px] object-cover"
      />
      <div className="absolute top-10 left-10 bg-gray-700 bg-opacity-60 text-white px-4 py-2 rounded-lg text-sm">
        <div className="font-light">Garsia Village</div>
        <div className="font-bold">Villa Mexico</div>
      </div>

      <div className="absolute top-1/2 left-10 transform -translate-y-1/2 bg-gray-700 bg-opacity-60 text-white px-4 py-2 rounded-lg text-sm">
        <div className="font-bold">1.2 km</div>
        <div className="text-xs font-light">left to your accommodation</div>
      </div>

      <div className="absolute bottom-10 left-10 bg-white px-4 py-1 rounded-full text-sm font-semibold text-gray-800 shadow-md">
        Gringo Trail
      </div>
    </div>
  )
}

const AuthLoginButton = () => {
  return (
    <div className="flex items-center justify-center space-x-4 my-4">
      <button className="bg-gray-100 p-2 rounded-full">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg"
          className="w-5 h-5"
        />
      </button>
      <button className="bg-gray-100 p-2 rounded-full">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
          className="w-5 h-5"
        />
      </button>
      <button className="bg-gray-100 p-2 rounded-full">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg"
          className="w-5 h-5"
        />
      </button>
    </div>
  )
}

export default AuthPage
