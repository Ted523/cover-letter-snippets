const express = require('express');
const router = express.Router();

const dbRoutes = require("./controllers/db-routes");
const jsonRoutes = require("./controllers/json-routes");


router.post('/connect-to-database', dbRoutes.connectToDatabase);
router.post('/get-json-data', jsonRoutes.getSnippets);

router.post('/add-snippet', dbRoutes.addSnippet);
router.post('/add-json-snippet', jsonRoutes.addSnippet);

router.put('/edit-snippet', );
router.put('/edit-json-snippet', );

router.delete('/delete-snippet', dbRoutes.deleteSnippet);
router.delete('/delete-json-snippet', );

module.exports = router;