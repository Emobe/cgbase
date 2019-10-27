import test from 'tape';
import Game from '@/Game';
import Table from '@/Table';
import { Player } from '..';
import GameState from '@/GameState';

class TestTable extends Table {
  constructor() {
    super(6);
  }
}

// tslint:disable-next-line: max-classes-per-file
class NewGame extends Game<TestTable> {
  constructor() {
    super(TestTable, 2);
  }
}

test('Game should initialise', t => {
  const result = new NewGame();
  t.true(result);
  t.end();
});

test('Game.add should add player to game', t => {
  const game = new NewGame();
  const player = new Player();
  game.add('test', player);
  const actual = game.Players;
  const expected = new Map([['test', player]]);
  t.deepEqual(actual, expected);
  t.end();
});

test('Game should deal when player count of 2 has reached', t => {
  const game = new NewGame();
  const expected = 2;
  game.add('test', new Player());
  game.add('ey', new Player());
  game.Players.forEach(player => {
    t.deepEqual(
      player.Hand.length,
      2,
      `Player has ${expected} amount of cards`
    );
  });
  t.end();
});
