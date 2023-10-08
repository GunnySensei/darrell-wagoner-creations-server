import express from "express"
import contactRoutes from "./contact.routes.js";

const router = express.Router({ mergeParams: true})

router.use("/contact", contactRoutes);

export default router;