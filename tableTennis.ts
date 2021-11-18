export type Team = "A"|"B";
export type Winner = undefined|Team;
export type Config = {
    StartingTeam:Team;
    ConsecutiveServes:number;
    NumberOfTeamPlayers:number;
    WinningScore:number;
}
export class Game {
    constructor(public playerServing: number,
        public playerReceiving: number,
        public winningTeam: Team) {}
  };
export type Score = {
    [key: string]: number;
}
export type ServersAndReceivers = {
    [key:number]:number;
}
export type Match = {
    winner:Winner;
    fouls:number;
}
export const returnOutcomeOfMatch = (config:Config, games:Game[]):Match => {
    let previousServe:string|undefined; 
    let serveCount = 0;
    let fouls = 0;
    let score:Score = {
        A:0,
        B:0
    };
    let winner:Winner;
    for (let i = 0; i < games.length; i++) {
        const serve = games[i].playerServing.toString() + games[i].playerReceiving.toString();
        (previousServe && previousServe === serve) ? serveCount++ : serveCount = 1;
        previousServe = serve;
        const actualGameWinner:Team = (  serveCount > 2 
                                    || !isLegalReceiver((config.NumberOfTeamPlayers*2),games[i].playerServing, games[i].playerReceiving))
                                        ? getOppositeTeam(games[i].winningTeam)
                                        : games[i].winningTeam;
        if (actualGameWinner !== games[i].winningTeam) {
            fouls++;
        }
        score[actualGameWinner] = score[actualGameWinner] + 1;
        if (!winner && score[actualGameWinner] === config.WinningScore) {
            winner = actualGameWinner;
        }
    };
    return { winner, fouls };
}
export const isLegalReceiver = (numOfPlayers: number, server:number, receiver:number):boolean => {
    return (server <= numOfPlayers) 
        ? (server === numOfPlayers)
            ? (receiver === 1)
            : (server === (receiver - 1))
        : false;
}
export const getOppositeTeam = (team:Team):Team => (team === "A") ? "B" : "A";