import axios from 'axios'

export const getNatalApi = async (data) =>
  axios
    .post(
      `http://localhost:8004/natal`,
      data,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    .then((response) => response.data)
    .catch((exception) => {
      throw exception
    })
