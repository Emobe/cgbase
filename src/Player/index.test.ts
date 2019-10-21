import test from 'tape';
import Player from '@/Player';

test('Player should initialise', t => {
  const result = new Player();
  t.true(result);
  t.end();
});
