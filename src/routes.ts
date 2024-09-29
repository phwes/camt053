import express from "express";

const router = express.Router();

router.get("/account/:accountId", (req, res) => {
  const accountId = req.params.accountId;

  if (accountId !== req.camtData.account.accountNumber) {
    res.status(404).send("Account not found");
    return;
  }

  res.send(req.camtData.account.getPublicData());
});

export default router;
