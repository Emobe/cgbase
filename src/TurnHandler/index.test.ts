import test from 'tape';
import TurnHandler from '.';
import { Dictionary } from '@emobe/ts-collections';
import { Player } from '..';

test('TurnHandler should handle turns', t => {
  const player1 = new Player();
  const player2 = new Player();
  const seats = new Dictionary<number, Player>([[0, player1], [1, player2]]);
  const handler = new TurnHandler(seats);
  handler.takeTurn((player, next) => {
    const actual = player;
    const expected = seats.get(0);
    t.deepEqual(actual, expected, 'Should be first seat');
    next();
  });
  handler.takeTurn((player, next) => {
    const actual = player;
    const expected = seats.get(1);
    t.deepEqual(actual, expected, 'Should be second seat');
    next();
  });
  t.end();
});

test('TurnHandler should return current turn', t => {
  const seats = new Dictionary<number, Player>([
    [1, new Player()],
    [2, new Player()]
  ]);
  const handler = new TurnHandler(seats);
  const actual = handler.Current;
  const expected = 0;
  t.deepEqual(actual, expected);
  t.end();
});
