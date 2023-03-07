//eslint-disable-next-line no-console
//console.log(getLong('1234', 4))

const ARRAY_LENGTH = 25;

const AVATAR_COUNT = 6;

const LIKE_MIN_COUNT = 15;

const LIKE_MAX_COUNT = 200;

const COMMENT_COUNT = 20;

const DESCRIPTIONS = [
  'Тысячное фото моего любимого котика',
  'Зажигаем!',
  'А вы тоже счётчики фотографируете?',
  'О дивный новый мир!',
  'В пути!',
  'Скучали?'
];

const USERS_NAMES = [
  'Элиас Канетти',
  'Самюэль Хантингтон',
  'Патрик Бьюкенен',
  'Арнольд Тойнби',
  'Джаред Даймонд'
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

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

const generateCommentId = createIdGenerator();

const createMessage = () =>
  Array.from({ length: getRandomInteger(1,2) }, () =>
    getRandomArrayElement(MESSAGES)
  ).join('');

//шаблон для отдельного комента
const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInteger(1, AVATAR_COUNT)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(USERS_NAMES),
});

const createPicture = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(LIKE_MIN_COUNT, LIKE_MAX_COUNT),
  comments: Array.from(
    { length: getRandomInteger(0, COMMENT_COUNT) },
    createComment
  ),
});

const getPictures = () =>
  Array.from({length: ARRAY_LENGTH }, (_, pictureIndex) =>
    createPicture(pictureIndex + 1)
  );
getPictures();
