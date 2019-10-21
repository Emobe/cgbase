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

test('Game should have state `PreDeal` when player count has reached', t => {
  const game = new NewGame();
  game.add('test', new Player());
  game.add('ey', new Player());

  const actual = game.State;
  const expected = GameState.PreDeal;
  t.deepEqual(actual, expected);
  t.end();
});

test('Game should call pre-deal', t => {
  t.end();
});
