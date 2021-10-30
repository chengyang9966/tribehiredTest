const axios = require("axios");
const fetchPosts = (array) => {
  return Promise.all(
    array.map((post, index) => {
      return axios.get(
        process.env.SINGLE_POST_API.replace("{post_id}", post.post_id)
      );
    })
  ).then((posts) => {
    let newArray = [];
    if (posts && posts.length > 0) {
      newArray = array.map((w) => {
        let currentItem = posts.find((x) => x.data.id == w.post_id).data;

        if (currentItem) {
          return {
            ...w,
            post_title: currentItem.title,
            post_body: currentItem.body,
            post_user_id: currentItem.userId,
          };
        } else {
          return w;
        }
      });
    }

    return newArray;
  });
};
module.exports = {
  fetchPosts,
};
