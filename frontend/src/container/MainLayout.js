import React, {
  useEffect
} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet, 
  useNavigate
} from 'react-router-dom'
import { getUser } from '../feature/user/UserActions'
import { getActivities } from '../feature/activity/ActivityActions'
import { getWallet } from '../feature/wallet/WalletActions'

const MainLayout = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {user} = useSelector(state => state.user)

  useEffect(() => {
    dispatch(getUser({}))
    Object.keys(user).length && dispatch(getActivities({user: user.id}))
    Object.keys(user).length && dispatch(getWallet({user: user.id}))
  }, [dispatch, user])

  useEffect(() => {
    if(localStorage.getItem('token') === null) {
      navigate("/")
    }
  }, [navigate])

  return (
    <>
        <Outlet/>
    </>
  )
}

export default MainLayout