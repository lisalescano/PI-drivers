const { Router } = require("express");
const { getDrivers, getByName, getDetail, createDriver } = require("../handlers/driverHandlers");
const { getTeams } = require("../handlers/teamHandlers")
const router = Router();

router.get('/drivers', getDrivers)

router.get('/teams', getTeams)

router.get('/drivers/name?', getByName)

router.get('/drivers/:id', getDetail)

router.post('/drivers', createDriver)

module.exports = router;
