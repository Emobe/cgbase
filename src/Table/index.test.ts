import test from 'tape';
import Table from '@/Table';
import Player from '@/Player';

test.skip('Should add player to table', t => {
  const table = new Table(6);
  const player = new Player();

  table.addPlayer(player, 1);

  const actual = table.Players.size;
  const expected = 1;

  t.deepEqual(actual, expected);
  t.end();
});
