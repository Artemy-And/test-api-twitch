import Axios from "axios";

const clientId = "fy61dwerit08ydx5g38wn1o3na7m03"
const bearer = 'hzvnlnsyri7hyrpqfz3h6cxj0l51la'
export const api = Axios.create({
    baseURL: "https://api.twitch.tv/helix",
    headers: {
        "Client-Id": clientId,
        Authorization: `Bearer ${bearer}`,
    },
});
