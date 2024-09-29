import express from "express";

const router = express.Router();

// TODO: When more routes are added, split up into an index router file and multiple
// route files corresponding to the REST objects

router.get("/account/:accountId", (req, res) => {
  const accountId = req.params.accountId;

  if (accountId !== req.camtData.account.accountNumber) {
    res.status(404).send("Account not found");
    return;
  }

  res.send(req.camtData.account.getPublicData());
});

// Would have returned all accounts if we had more than one account
router.get("/accounts", (req, res) => {
  res.send(req.camtData.account.getPublicData());
});

router.get("/account/:accountId/transactions", (req, res) => {
  // TODO: Check for account existence middleware
  const accountId = req.params.accountId;

  if (accountId !== req.camtData.account.accountNumber) {
    res.status(404).send("Account not found");
    return;
  }

  res.send(req.camtData.getPublicTransactionsData());
});

export default router;
