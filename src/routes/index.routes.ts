import { Router } from "express";

const router = Router();

router.route("/").get((req, res) => res.json("Welcome to My API"));

export default router;
