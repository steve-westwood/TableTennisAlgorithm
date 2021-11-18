import { isLegalReceiver } from "./tableTennis";

describe("Unit tests", ()=> {
    test.each([
        [2,1,2,true],
        [2,2,1,true],
        [2,1,1,false],
        [2,2,2,false],
        [4,1,2,true],
        [4,2,3,true],
        [4,3,4,true],
        [4,4,1,true],
        [4,1,1,false],
        [4,1,3,false],
        [4,1,4,false],
        [4,2,1,false],
        [4,2,2,false],
        [4,2,4,false],
        [4,3,1,false],
        [4,3,2,false],
        [4,3,3,false],
        [4,4,2,false],
        [4,4,3,false],
        [4,4,4,false],
    ])(
      "given the number of players is %p and player %p serves to player %p, the legality of the serve resolves to %p",
      (numOfPlayers, server, receiver, expectedResult) => {
        const result = isLegalReceiver(numOfPlayers, server, receiver);
        expect(result).toEqual(expectedResult);
      }
    );
})