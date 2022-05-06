const Reader = require("./lib/utils/Reader");
const explorers = Reader.readJsonFile("./explorers.json"); // retorna la lista de explorers del archivo
// console.log(explorers)

const ExplorerService = require("./lib/services/ExplorerService");
const FizzbuzzService = require("./lib/services/FizzbuzzService");

// console.log(ExplorerService.filterByMission(explorers, "node"))
// console.log(ExplorerService.getAmountOfExplorersByMission(explorers, "node"))
// console.log(ExplorerService.getExplorersUsernamesByMission(explorers, "node"))

const explorer1 = { name: "Explorer1", score: 1 };
FizzbuzzService.applyValidationInEXplorer(explorer1);

const explorer3 = { name: "Explorer3", score: 3 };
FizzbuzzService.applyValidationInEXplorer(explorer3);

const explorer5 = { name: "Explorer5", score:5 };
FizzbuzzService.applyValidationInEXplorer(explorer5);

const explorer15 = { name: "Explorer15", score: 15 };
FizzbuzzService.applyValidationInEXplorer(explorer15);

const explorer30 = { name: "Mauricio Reyes", score: 30 };
FizzbuzzService.applyValidationInEXplorer(explorer30);