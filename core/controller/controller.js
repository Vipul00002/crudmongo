import { toDoModel } from "../models/toDomodel.js";

export default {
  getToDoData(req, res) {
    try {
      toDoModel
        .find({})
        .then(() => {
          res
            .status(200)
            .send({ success: "true", message: "data send successfully" });
        })
        .catch(() => {
          res
            .status(400)
            .send({ success: "false", message: "failed to fetch data" });
        });
    } catch (error) {
      console.log("Error from ", req.method);
    }
  },
  postToDoData(req, res) {
    try {
      const saveToDo = new toDoModel({
        status: req.body.status,
        message: req.body.message,
      });
      saveToDo
        .save()
        .then(() => {
          res
            .status(201)
            .send({ success: "true", message: "data saved successfully" });
        })
        .catch(() => {
          res
            .status(401)
            .send({ success: "false", message: "failed to save data" });
        });
    } catch (error) {
      console.log("Error from ", req.method);
      res
        .status(401)
        .send({ success: "false", message: "failed to save data" });
    }
  },

  updateTodoData(req, res) {
    try {
      toDoModel
        .findByIdAndUpdate(req.params.id, {
          $set: { message: req.body.message, status: "success" },
        })
        .then((data) => {
          res
            .status(201)
            .send({ success: "true", message: "data Updated successfully" });
        })
        .catch((error) => {
          res.status(203).send({ success: "false", message: "invalid data" });
        });
    } catch (error) {
      console.log("error", error);
      res
        .status(401)
        .send({ success: "false", message: "failed to update data" });
    }
  },
  deleteData(req, res) {
    try {
        toDoModel
      .findByIdAndRemove(req.params.id)
      .then((data) => {
        console.log(req.params.id); 

        res
          .status(204)
          .send({
            success: true,
            mesage: `Data with id ${req.params.id} deleted successfully`,
          });
      })
      .catch((err) => {
        console.log("catch",req.params.id); 

        res
          .status(404)
          .send({
            success: true,
            mesage: `Data with id ${req.params.id} deleted successfully`,
          });
      });
        
    } catch (error) {
        console.log(error);
        
    }
  },
  async getOneuserData(req, res) {
    const data = await toDoModel.findById(req.params.id);
    if (data) {
      res
        .status(200)
        .send({ success: "true", message: "user data fetched successfully" });
    } else {
      res
        .status(400)
        .send({ success: "false", message: "failed to fetch user data" });
    }
  },
};
