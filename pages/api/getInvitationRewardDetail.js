import axios from "axios";
import queryString from "query-string";

export default async function handler(req, res) {
  const queryStr = queryString.stringify(req?.query);
  const params = req?.body;

  try {
    const response = await axios.get(
      `https://api.maobey.com/m/invitation/reward_detail?${queryStr}`,
      params
    );

    res.status(200).json(response.data);
  } catch (error) {
    const { response } = error;

    res.status(response?.status).json(response?.data);
  }
}
