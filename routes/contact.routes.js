// JS

// express server specific imports
import express from "express";
import validate from "../middleware/validate.js";

// import for contact form routes controller
import ContactController from "../controllers/contact.controllers.js";

const router = express.Router({ mergeParams: true})

router.post("/", (req, res) => {
  const controller = new ContactController(req, res);
  controller.sendContactForm();
});

export default router;