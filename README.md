# Table Tennis Scoring Test

## Overview

The task is to write a maintainable and extensible algorithm that takes data related to a table tennis game as an input and outputs both the winning team the number of breaches of the serving rules. We’ll refer to these breaches as faults, and will mean that the wrong player served or the service was to the wrong receiver. The algorithm will mean that we have a source of truth to settle any disputes as to who really won a game.


## Input: text file

The first line for the header, configuring the rules for the game.

The following lines each provide a number to indicate which player served, which player received and a character to indicate whether team `A` or team `B` was awarded the point.

## Output: text file

The first line should include a number to indicate how many faults were made in the game
The second line should have one letter to indicate which team won overall (`A` or `B`).

## Game Configuration

### Constants:

**Players 1-4:** The numbers of the players are equal to the order in which they initially serve in the game, hence for doubles (2 players per team) players 1 and 3 are on the same team.

**Teams A/B:** 
In doubles Team `A` are players 1 and 3 if team `A` goes first, otherwise they are players 2 and 4. For singles Team `A` is player 1 if team `A` goes first, otherwise team `A` is player 2.
	Variable:
The first line of the input file has the format: 
```
{StartingTeam},{ConsecutiveServes},{NumberOfTeamPlayers},{WinningScore}
```
Where StartingTeam can be `A` or `B`.

`ConsecutiveServes` is a positive integer.

`NumberOfTeamPlayers` is either `1` or `2` .

`WinningScore` is a positive integer.

## Game Rules
Each team has `ConsecutiveServes` serves each, before the serve switches to the next team. 

The same player serves `ConsecutiveServes` times in a row, for doubles the serving player on a team swaps after that team serves `ConsecutiveServes` times.

The following servers always serve to the following receivers :

- Player1 to Player2
- Player2 to Player3
- Player3 to Player4
- Player4 to Player1

The winner is the first team to score `WinningScore` points, further points played are ignored. The only case in which this rule is not followed is if the winning team is not yet winning by two clear points, in this case the game is won once additional points are scored such that this is the case (e.g. 12 - 10).

When there is a fault, the winner of the point will be the opposite team to who was supposed to serve (regardless of the actual winner of the point). This is because we assume that the serving team is responsible for ensuring that the serve is done correctly.

## Example Input

```
A,2,2,11
1,2,A
1,2,A
2,3,B
2,3,B
3,4,A
3,4,B
4,1,B
4,1,B
1,2,A
1,2,A
2,3,A
2,3,B
3,4,A
4,1,A
4,1,A
4,1,B
1,2,B
1,2,B
2,3,A
2,3,A
3,4,A
3,4,A
4,1,B
4,1,B
1,2,B
1,2,B
2,3,B
2,3,B
```

## Expected output
```
1
A
```


## Calculation

This example demonstrates that despite `B` scoring more, `A` will win as excess points scored outside of the game should be ignored.

It also demonstrates how the result of a point may be reversed if a fault occurs.

Finally, we can see in the worked calculation that the game is only considered won after one team wins by two clear points.


## Extension Rules

If the number of players per team is 2, once a team reaches `floor(WinningScore/2)` points then the current server immediately switches and the receivers for the remainder of the game also switch. Hence player 1 will be serving to player 4, player 2 to player 1, player 3 to player 2 and player 4 to player 3.

`ConsecutiveServes` should work for values other than 2 and 5.

`WinningScore` should work for values other than 11 and 21.

The algorithm should be extended to work for multiple games, once the game is won it should immediately start scoring the next game and the output should be extended to a list of letters indicating the winners of each of the games in order (e.g. A,B,A,A)
