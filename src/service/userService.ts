import instance from '../util/http'

export const logoutHandler = (): void => {
  // const dispatch = useDispatch()

  instance
    .get('/logout')
    .then(() => {
      // dispatch(logoutAction())
    })
    .catch(err => {
      console.log(err)
    })
}
