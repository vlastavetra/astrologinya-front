import * as Api from '../../api/main'
import * as Types from '../types/main'

export const getNatalAction = (data) => async (dispatch) => {
  dispatch({ type: Types.LOAD_NATAL_START })
  return Api.getNatalApi(data)
    .then((data) => {
      dispatch({
        type: Types.LOAD_NATAL_SUCCESS,
        payload: { data },
      })
    })
    .catch((error) => {
      dispatch({ type: Types.LOAD_NATAL_FAILED })
      console.log(error)
    })
}
