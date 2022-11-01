const PostModel = require("../models/post.models");
const UserModel = require("../models/user");
const { promisify } = require("util");
const pipeline = promisify(require("stream").pipeline);
const fs = require("fs");
const { default: mongoose } = require("mongoose");
const ObjetId = require("mongoose").Types.ObjectId;

const ObjectId = require("mongoose").Types.ObjectId;
// const {uploadErrors} = require('../utils/error.utils')

module.exports.readPost = async (req, res) => {
  // PostModel.find((err, docs) => {
  //   if (!err) res.send(docs);
  //   else console.log("Error to get data:" + err);
  // }).sort({ createdAt: -1 });

  let posts;
  try {
    posts = await PostModel.find().populate("posterId");
  } catch (error) {
    return console.log(error);
  }

  if (!posts) return res.status(404).json({ message: "Aucun post trouver" });
  else return res.status(200).json({ posts });
};
module.exports.userPost = async (req, res) => {
  if (!ObjetId.isValid(req.params.id)) {
    return res.status(400).send("Id Inconnue" + req.params.body);
  }

  PostModel.findById(req.params.id, (err, docs) => {
    if (!err) res.send(docs);
    else console.log("Id unknow" + err);
  });
};

module.exports.createPost = async (req, res) => {
  // let fileName;
  // if (req.file !== null) {
  //   try {
  //     if (
  //       req.file.detectedMineType !== "image/jpg" &&
  //       req.file.detectedMineType !== "image/png" &&
  //       req.file.detectedMineType !== "image/jpeg"
  //     )
  //       throw Error("Invalid File");

  //     if (req.file.size > 500000) throw Error("max size");
  //   } catch (error) {
  //     const errors = uploadErrors(error);
  //     res.status(200).json({ errors });
  //   }

  //   fileName = `${req.body.posterId}${Date.now()}.jpg`;
  //     await pipeline(
  //       req.file.stream,
  //       fs.createWriteStream(
  //         `${__dirname}/../../../client/public/uploads/posts/${fileName}`
  //       )
  //     );
  // }
  const { posterId, nom, prenom, activitePost, villePost, message, picture } =
    req.body;
  let existingUser;
  try {
    existingUser = await UserModel.findById(posterId);
  } catch (error) {
    return console.log(error);
  }

  if (!existingUser) {
    return res
      .status(400)
      .json({ message: "L'utilsateur avec cet id n'existe pas" });
  }
  const newPost = new PostModel({
    posterId,
    nom,
    prenom,

    activitePost,
    villePost,
    message,
    picture,
    // picture:req.file !== null ? "./uploads/posts/" + fileName : "",
    // video: req.body.video,
    likers: [],
    comments: [],
  });

  try {
    // const post = await newPost.save();
    const session = await mongoose.startSession();
    session.startTransaction();
    await newPost.save({ session });
    existingUser.posts.push(newPost);
    await existingUser.save({ session });
    await session.commitTransaction();
  } catch (error) {
    res.status(400).send(error);
  }
  return res.status(201).json({ newPost });
};

module.exports.updatePost = (req, res) => {
  try {
    if (!ObjectId.isValid(req.params.id)) {
      return res.status(400).send("Id Inconnue" + req.params.id);
    }
    const Upadatemessage = {
      message: req.body.message,
    };

    PostModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: Upadatemessage,
      },
      {
        new: true,
      },
      (error, docs) => {
        if (!error) res.send(docs);
        else res.status(500).json({ message: error });
      }
    ).select("-password");
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports.getByUserId = async (req, res, next) => {
  const id = req.params.id;

  let userpost;

  try {
    userpost = await UserModel.findById(id).populate("posts");
  } catch (error) {
    return console.log(error);
  }

  if (!userpost) return res.status(404).json({ message: "Aucun post trouver" });
  else return res.status(200).json({ posts: userpost });
};

module.exports.deletePost = async (req, res) => {
  const id = req.params.id;
  let post;
  try {
    post = PostModel.findByIdAndRemove(id).populate("posterId");
    await post.posterId.posts.pull(post);
    await post.posterId.save();
  } catch (error) {
    console.log(error);
  }

  if (!post) {
    return res
      .status(500)
      .json({ message: "Le message n'a pas été supprimer" });
  }
  return res.status(200).json({ message: "Message supprimer" });
  // if (!ObjectId.isValid(id)) {
  //   return res.status(400).send("Id Inconnue" + req.params.id);
  // }

  // PostModel.findByIdAndRemove((id).populate(), (err, docs) => {
  //   if (!err) res.send(docs);
  //   else console.log("Delete error" + err);
  // });
};

module.exports.likePost = async (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).json("Id Inconnue" + req.params.id);

  try {
    // Ajouter le like au publication
    PostModel.findByIdAndUpdate(
      req.params.id,
      {
        $addToSet: { likers: req.body.id },
      },
      { new: true, upsert: true },
      (error, docs) => {
        if (!error) res.status(201).json(docs);
        else return res.status(400).json(error);
      }
    );

    //Ajouter l'id au likes

    UserModel.findByIdAndUpdate(
      req.body.id,
      {
        $addToSet: { likes: req.params.id },
      },
      { new: true, upsert: true },
      (error, docs) => {
        if (error) return res.send(error);
      }
    );
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports.unlikePost = async (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).json("Id Inconnue" + req.params.id);

  try {
    // Ajouter le like au publication
    PostModel.findByIdAndUpdate(
      req.params.id,
      {
        $pull: { likers: req.body.id },
      },
      { new: true, upsert: true },
      (error, docs) => {
        if (!error) res.status(201).json(docs);
        else return res.status(400).json(error);
      }
    );

    //Ajouter l'id au likes

    UserModel.findByIdAndUpdate(
      req.body.id,
      {
        $pull: { likes: req.params.id },
      },
      { new: true, upsert: true },
      (error, docs) => {
        if (error) return res.send(error);
      }
    );
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports.commentPost = async (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).json("Id Inconnue" + req.params.id);
  try {
    return PostModel.findOneAndUpdate(
      req.params.id,
      {
        $push: {
          comments: {
            commenterId: req.body.commenterId,
            commenterPrenom: req.body.commenterPrenom,
            commenterNom: req.body.commenterNom,
            text: req.body.text,
            timestamp: new Date().getTime(),
          },
        },
      },
      {
        new: true,
      },
      (error, docs) => {
        if (!error) return res.send(docs);
        else return res.status(400).send(error);
      }
    ).clone();
  } catch (error) {
    return res.status(400).send(error);
  }
};
module.exports.editCommentPost = async (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).json("Id Inconnue" + req.params.id);
  try {
    return PostModel.findById(req.params.id, (error, docs) => {
      const theComment = docs.comments.find((comment) => {
        comment._id.equals(req.body.commenterId);
      });
      if (!theComment) return res.status(404).send("comment not found");
      theComment.text = req.body.text;

      return docs.save((error) => {
        if (!error) return res.status(200).docs;
        return res.status(500).send(docs);
      });
    });
  } catch (error) {
    return res.status(400).send(error);
  }
};
module.exports.deleteCommentPost = async (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).json("Id Inconnue " + req.params.id);
  try {
    return PostModel.findByIdAndUpdate(
      req.params.id,
      {
        pull: {
          comments: {
            _id: req.body.commenterId,
          },
        },
      },
      {
        new: true,
      },
      (error, docs) => {
        if (!error) return res.send(docs);
        else return res.status(400).send(error);
      }
    );
  } catch (error) {
    return res.status(400).send(error);
  }
};
