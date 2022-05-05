class ExplorerService {
    static filterByMission(explorers, mission) {
    const explorerByMission = explorers.filter((explorer) => explorer.mission === mission)       
    return explorerByMission 
    }

    static getAmountOfExplorersByMission(explorers, mission) {
        const amountOfExplorersByMission = this.filterByMission(explorers, mission)
        return amountOfExplorersByMission.length
    }

    static getExplorersUsernamesByMission(explorers, mission) {

    }
}

module.exports = ExplorerService // exporta la clase vía commonJS