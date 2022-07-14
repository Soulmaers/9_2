import GameSavingLoader from '../GameSavingLoader';

test('проверка объекта', async () => {
  const res = await GameSavingLoader.load();
  const result = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: 'Hitman',
      level: 10,
      points: 2000,
    },
  };

  expect(res).toEqual(result);
});
