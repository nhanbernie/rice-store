import { useGoogleLogin } from '@react-oauth/google'
import { useRouter } from 'next/navigation'

const AuthLoginButton = () => {
  const router = useRouter()
  const login = useGoogleLogin({
    onSuccess: async (codeResponse) => {
      const userInfoResponse = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
        headers: {
          Authorization: `Bearer ${codeResponse.access_token}`,
        },
      })
      const userInfo = await userInfoResponse.json()
      if (userInfo.email_verified) {
          router.push("/")
      }
    },
    onError: (error) => console.log('Login Failed:', error),
    scope: 'profile email',
  })
  return (
    <div className="flex items-center justify-center space-x-4 my-4">
      <button className="bg-gray-100 p-2 rounded-full">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg"
          className="w-5 h-5"
        />
      </button>
      <button className="bg-gray-100 p-2 rounded-full" onClick={() => login()}>
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
export default AuthLoginButton
