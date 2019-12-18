import Settings from '../js/Settings.js';

test('Проверка значений default', () => {
  const received = new Settings();
  const expected = new Map([
    ['theme', 'dark'],
    ['music', 'trance'],
    ['difficulty', 'easy'],
  ]);
  expect(Object.fromEntries(received.settings)).toEqual(Object.fromEntries(expected));
});

test('Проверка значений пользователя', () => {
  const received = new Settings();
  received.settings = { theme: ['light'] };
  const expected = new Map([
    ['theme', 'light'],
    ['music', 'trance'],
    ['difficulty', 'easy'],
  ]);
  expect(Object.fromEntries(received.settings)).toEqual(Object.fromEntries(expected));
});

test('Проверка задаем не верные settings = свойство', () => {
  const received = new Settings();
  const expected = {
    them: ['dark'],
    music: ['rock'],
  };
  try {
    received.settings = expected;
  } catch (e) {
    expect(e.message).toEqual('Incorect input settings');
  }
});

test('Проверка задаем не верные settings = значение', () => {
  const received = new Settings();
  const expected = {
    theme: ['darks'],
    music: ['rock'],
  };
  try {
    received.settings = expected;
  } catch (e) {
    expect(e.message).toEqual('Incorect input settings');
  }
});
