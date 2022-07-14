import GameSavingLoader from './GameSavingLoader';

(async () => {
  try {
    const result = await GameSavingLoader.load();
    return result;
  } catch (e) {
    throw new Error(e);
  }
})();
