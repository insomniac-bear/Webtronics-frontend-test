export interface IContent {
  id: number;
  title: string;
  text: string;
  img: string;
}

export const content = [
  {
    id: 0,
    title: 'Best courses ever',
    text: 'Good course, up to this point, still ongoing. The only downside, why I gave 4,5 stars, because the "teacher" sometimes feel like, he is lost, and takes up quite a time, to correct himself, and check back etc.',
    img: '/images/review-1.jpg'
  },
  {
    id: 1,
    title: 'Amazing teaching',
    text: 'The explanation is crazy it really doesn\'t have a structure to go from point A to point B. He starts to explain something then he change his mind and start with another thing an so on. If you try to learn pro active by doing the same thing with him all along you will get confused and start to loose interest.',
    img: '../images/review-2.jpg'
  },
  {
    id: 2,
    title: 'Simple and easy',
    text: 'I am really enjoying the experience of learning a new skill I used to believe that web design was way too complicated for me to learn but so far in this course I have been keeping up and having fun.',
    img: '/images/review-3.jpg'
  },
];