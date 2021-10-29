const axios = require("axios");
const fetchUsers = () => {
  return axios
    .get(process.env.USER_API)
    .then((result) => {
      if (result.data && result.data.length > 0) {
        return result.data;
      }
    })
    .catch((err) => {
      console.log("🚀 ~ file: fetchUser.js ~ line 9 ~ users ~ err", err);
    });
};

module.exports = {
  fetchUsers,
};
