import jsonData from './source/card1.json';

export const cards = jsonData.map((card) => (
    <a href={card.href} target="">{card.text}</a>
));

