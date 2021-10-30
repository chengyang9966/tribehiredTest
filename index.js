const axios = require("axios");
var express = require("express");
const { NUMBER_OF_POST, CURRENT_PAGE_NUMBER } = require("./Constants/constant");
require("dotenv").config();
const { fetchPosts } = require("./functions/fetchPosts");
const { fetchUsers } = require("./functions/fetchUser");
const paginator = require("./functions/pagination");
const { isNumeric } = require("./functions/validationNumeric");
var app = express();

// routes
app.get("/topcomments/:numberOfPost?", async (req, res, next) => {
  let NumberOfPost = NUMBER_OF_POST;
  /**
   * @param {number} numberOfPost total post to return
   * Default value is 10
   */
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
        res.status(500).json({ message: err });
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
      returnData = returnData.map((post) => {
        let currentUserExists = allUsers.find(
          (user) => user.id == post.post_user_id
        );

        if (currentUserExists) {
          return {
            ...post,
            post_user_name: currentUserExists.name,
            post_user_email: currentUserExists.email,
            post_user_username: currentUserExists.username,
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

app.get("/", (req, res, next) => {
  /**
   * @param {number} limit - total numbers of item to return can be empty
   * Default limit is 10
   * @param {number} pageNumber - current page number can be empty
   * @param {boolean} pagination - able pagination can be empty
   */
  try {
    let totalNumberOfDataToReturn = NUMBER_OF_POST;
    let pageNumber = CURRENT_PAGE_NUMBER;
    if (req.query.limit && isNumeric(req.query.limit)) {
      totalNumberOfDataToReturn = Number(req.query.limit);
    }
    if (req.query.pageNumber && isNumeric(req.query.pageNumber)) {
      pageNumber = Number(req.query.pageNumber);
    }

    axios.get(process.env.COMMENTS_API).then((result) => {
      if (result.data.length > 0) {
        let arrayOfObjectKeys = Object.keys(result.data[0]);

        if (req.query.q) {
          let queryParameter = req.query.q.toLowerCase();
          let newArray = [];
          result.data.map((comment, index) => {
            arrayOfObjectKeys.map((key) => {
              if (
                comment[key].toString().toLowerCase().includes(queryParameter)
              ) {
                newArray.push(comment);
              }
            });
          });
          let returnData = newArray.slice(0, totalNumberOfDataToReturn);
          if (req.query.pagination) {
            returnData = paginator(
              newArray,
              pageNumber,
              totalNumberOfDataToReturn
            );
          }
          res.status(200).json(returnData);
        } else {
          res.status(500).json({
            message: "Please porvide query text",
          });
        }
      }
    });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
});

app.listen(process.env.PORT, function () {
  console.log(`Server running on port ${process.env.PORT}...`);
});
