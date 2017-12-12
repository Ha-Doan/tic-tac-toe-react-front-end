import API from '../../api/client'
import {
  APP_LOADING,
  APP_DONE_LOADING,
  LOAD_ERROR,
  LOAD_SUCCESS
} from '../loading'
const api = new API()

export const takeTile = (game, index, currentPlayer) => {
  return (dispatch) => {
    api.patch(`/games/play/${game._id}`,{game, index, currentPlayer})
    .then(() => {
      dispatch({ type: APP_DONE_LOADING })
      dispatch({ type: LOAD_SUCCESS })
      console.log("clickTile index is " + index)

    })
    .catch((error) => {
      dispatch({ type: APP_DONE_LOADING })
      dispatch({
        type: LOAD_ERROR,
        payload: error.message
      })
    })
}
}
