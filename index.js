const axios = require("axios");
var express = require("express");
require("dotenv").config();
const { fetchPosts } = require("./functions/fetchPosts");
const { fetchUsers } = require("./functions/fetchUser");
var app = express();

// routes
app.get("/topcomments/:numberOfPost?", async (req, res, next) => {
  let NumberOfPost = 10;
  if (req.params.numberOfPost) {
    NumberOfPost = req.params.numberOfPost;
  }
  try {
    let allUsers = [];
    fetchUsers()
      .then((result) => {
        allUsers = result;
      })
      .catch((err) => {
        console.log(
          "🚀 ~ file: index.js ~ line 16 ~ fetchUsers.then ~ err",
          err
        );
      });
    const response = await axios.get(process.env.COMMENTS_API);
    let returnData = [];
    if (response) {
      response.data.forEach((w) => {
        if (w.postId) {
          let postInArray = returnData.find((x) => x.post_id === w.postId);
          if (!postInArray) {
            returnData.push({
              post_id: w.postId,
              total_number_of_comments: 1,
            });
          } else {
            returnData = [
              ...returnData.filter((x) => x.post_id !== w.postId),
              {
                ...postInArray,
                total_number_of_comments:
                  postInArray.total_number_of_comments + 1,
              },
            ];
          }
        }
      });
    }
    returnData = returnData
      .slice(0, NumberOfPost)
      .sort((a, b) => a.total_number_of_comments - b.total_number_of_comments);

    if (returnData.length > 0) {
      returnData = await fetchPosts(returnData);
    }
    if (allUsers.length > 0) {
      returnData = returnData.map((w) => {
        let currentUserExists = allUsers.find((x) => x.id == w.userId);
        if (currentUserExists) {
          return {
            ...w,
            user_name: currentUserExists.name,
            user_email: currentUserExists.email,
            user_username: currentUserExists.username,
          };
        }
      });
    }

    res.status(200).json({
      data: returnData,
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

app.listen(process.env.PORT, function () {
  console.log(`Server running on port ${process.env.PORT}...`);
});
