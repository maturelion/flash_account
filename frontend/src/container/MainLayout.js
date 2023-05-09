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
    dispatch(getActivities({user: user.id}))
    dispatch(getWallet({user: user.id}))
  }, [dispatch, user.id])

  useEffect(() => {
    if(localStorage.getItem('token') === null) {
      navigate("/login")
    }
  }, [navigate])

  return (
    <>
        <Outlet/>
    </>
  )
}

export default MainLayout