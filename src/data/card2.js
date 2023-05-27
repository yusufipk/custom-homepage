import jsonData from './source/card2.json';

export const card2 = jsonData.map((card) => (
    <a href={card.href}>{card.text}</a>
));
