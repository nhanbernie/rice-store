import { useSelector } from 'react-redux'
import {
  selectCurrentUser,
  selectIsAuthenticated,
  selectIsAdmin,
} from '@/redux/features/auth/authSlice'

export const useAuth = () => {
  const user = useSelector(selectCurrentUser)
  const isAuthenticated = useSelector(selectIsAuthenticated)
  const isAdmin = useSelector(selectIsAdmin)

  return {
    user,
    isAuthenticated,
    isAdmin,
  }
}
