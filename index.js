const Reader = require('./lib/utils/Reader')
const explorers = Reader.readJsonFile("./explorers.json") // retorna la lista de explorers del archivo
// console.log(explorers)

const ExplorerService = require('./lib/services/ExplorerService')

// console.log(ExplorerService.filterByMission(explorers, "node"))
console.log(ExplorerService.getAmountOfExplorersByMission(explorers, "node"))