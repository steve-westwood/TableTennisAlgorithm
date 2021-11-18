import { Config, Game, returnOutcomeOfMatch } from "./tableTennis";

describe("tableTennis integration tests", ()=> {
    it("algorithm should return expected values", () => {
        const config = {
            StartingTeam: "A",
            ConsecutiveServes: 2,
            NumberOfTeamPlayers: 2,
            WinningScore: 11,
        } as Config;
        const games = [new Game(1,2,"A"),
            new Game(1,2,"A"),
            new Game(2,3,"B"),
            new Game(2,3,"B"),
            new Game(3,4,"A"),
            new Game(3,4,"B"),
            new Game(4,1,"B"),
            new Game(4,1,"B"),
            new Game(1,2,"A"),
            new Game(1,2,"A"),
            new Game(2,3,"A"),
            new Game(2,3,"B"),
            new Game(3,4,"A"),
            new Game(4,1,"A"),
            new Game(4,1,"A"),
            new Game(4,1,"B"),
            new Game(1,2,"B"),
            new Game(1,2,"B"),
            new Game(2,3,"A"),
            new Game(2,3,"A"),
            new Game(3,4,"A"),
            new Game(3,4,"A"),
            new Game(4,1,"B"),
            new Game(4,1,"B"),
            new Game(1,2,"B"),
            new Game(1,2,"B"),
            new Game(2,3,"B"),
            new Game(2,3,"B")];
        const response = returnOutcomeOfMatch(config, games);
        expect(response.fouls).toEqual(1);
        expect(response.winner).toEqual("A");
    });
});