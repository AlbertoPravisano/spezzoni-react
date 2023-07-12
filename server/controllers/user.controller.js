import { StatusCodes } from "http-status-codes";
import pino from "pino";

const logger = pino();

import userService from "../services/user.services";

const STATUS = {
  success: true,
  failure: false,
};

/** Retreive all users */
const getAllUsers = (req, res) => {
  const users = userService.getAllUsers();

  if (users.length) {
    return res.status(StatusCodes.OK).send(users);
  }

  return res.status(StatusCodes.NOT_FOUND).send({
    status: STATUS.failure,
    message: "No users found.",
  });
};

/** Get userId from credentials if exist */
const getIdUserByCredentials = (req, res) => {
  const { usr, psw } = req.body;
  const user = userService.getUserIdFromCredentials(usr, psw);

  if (user) {
    logger.info(`Retrieving user ID ${user.id} `);

    return res.status(StatusCodes.OK).send(user);
  }

  return res.status(StatusCodes.NOT_FOUND).send({
    status: STATUS.failure,
    message: `User ${usr} is not found.`,
  });
};

/** Retrieve a user */
const getUser = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const user = userService.getUser(id);

  if (user) {
    logger.info(`Retrieving user ID ${id} `);

    return res.status(StatusCodes.OK).send(user);
  }

  return res.status(StatusCodes.NOT_FOUND).send({
    status: STATUS.failure,
    message: `User ${id} is not found.`,
  });
};

/** Add a user */
const addUser = (req, res) => {
  const { body: user } = req;

  const addedUser = userService.addUser(user);

  logger.info("Creating a user");

  return res.status(StatusCodes.CREATED).send({
    status: STATUS.success,
    user: addedUser,
  });
};

/** Update a user */
const updateUser = (req, res) => {
  const { body: user } = req;

  const id = parseInt(req.params.id, 10);

  const updatedUser = userService.updateUser(id, user);

  if (updatedUser) {
    logger.info(`Updating user ID ${id}`);

    return res.status(StatusCodes.OK).send({
      status: STATUS.success,
      user: updatedUser,
    });
  } else {
    return res.status(StatusCodes.NOT_FOUND).send({
      status: STATUS.failure,
      message: `User ${id} is not found.`,
    });
  }
};

/** Remove a user */
const removeUser = (req, res) => {
  const { params } = req;

  const id = parseInt(params.id);
  const user = userService.getUser(id);
  if (user) {
    userService.removeUser(id);

    logger.info(`Removing user ID ${id}`);

    return res.status(StatusCodes.OK).send({
      status: STATUS.success,
      message: `User ${id} has been deleted.`,
    });
  } else {
    return res.status(StatusCodes.NOT_FOUND).send({
      status: STATUS.failure,
      message: `User ${id} hasn't been found.`,
    });
  }
};

export default {
  getIdUserByCredentials,
  getAllUsers,
  getUser,
  addUser,
  updateUser,
  removeUser,
};
