import test from 'tape';
import Table from '@/Table';
import Player from '@/Player';

test('Should add player to the speicfied seats', t => {
  const table = new Table(6);
  const player1 = new Player();
  const player2 = new Player();

  table.addPlayer(player1, 2);
  table.addPlayer(player2, 6);

  let actual = table.Players.get(2);
  let expected = player1;
  t.deepEqual(actual, expected, 'Player should be added to seat 2');
  actual = table.Players.get(6);
  expected = player2;
  t.deepEqual(actual, expected, 'Player should be added to seat 6');
  t.end();
});
