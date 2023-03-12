
// Возвращает случайное рандомное целое число в заданном диапазоне, которое будет являться индексом в масиве
const getRandomInteger = (a, b) => {
  const min = Math.ceil(Math.min(a, b));
  const max = Math.floor(Math.max(a, b));
  const result = Math.random() * (max - min + 1) + min;
  return Math.floor(result);
};

//Получает рандомный элемент из массива
const getRandomArrayElement = (array) =>
  array[getRandomInteger(0, array.length - 1)];

const createIdGenerator = () => {
  let lastGeneratedId = 0;

  return () => {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
};

export { getRandomInteger, getRandomArrayElement, createIdGenerator };

