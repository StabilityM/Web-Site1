const quotes = [
  {
    quote: "nowlegde is power and money.\n지식과 힘과 돈이다.",
    author: "Bill gates",
  },
  {
    quote:
      "he secret of getting ahead is getting started.\n앞서가는 방법의 비밀은 시작하는 것이다.",
    author: "Mark Twain",
  },
  {
    quote:
      "Don’t aim for success if you want it; just do what you love and believe in, and it will come naturally. \n만약 당신이 그것을 원한다면 성공을 목표로 하지 말고 당신이 사랑하고 믿는 것을 하면 그것은 자연스럽게 이루어질 것이다.",
    author: "David Frost",
  },
  {
    quote: "Habit is second nature.\n습관은 제2의 천성이다.",
    author: "Michel de Montaigne",
  },
  {
    quote:
      "Study without desire spoils the memory, and it retains nothing that it takes in.\n목적없는 공부는 기억에 해가 될 뿐이며, 머리속에 들어온 어떤 것도 간직하지 못한다.",
    author: "Leonardo da Vinci",
  },
  {
    quote:
      "The merit of an action lies in finishing it to the end.\n행동의 가치는 그 행동을 끝까지 이루는 데 있다.",
    author: "Genghis Khan",
  },
  {
    quote:
      "Education is what survives when what has been learned has been forgotten.\n교육은 배운 것이 잊혀졌을 때 살아 남는 것이다.",
    author: "B. F. Skinner",
  },
  {
    quote:
      "Learning is not compulsory… neither is survival.\n배움은 의무도, 생존도 아니다.",
    author: "Edwards Deming",
  },
  {
    quote:
      "Seeing much, suffering much, and studying much, are the three pillars of learning.\n많이 보고 많이 겪고 많이 공부하는 것은 배움의 세 기둥이다.",
    author: "Benjamin Disraeli",
  },
  {
    quote:
      "Learning is not attained by chance, it must be sought for with ardor and attended to with diligence.\n배움은 우연히 얻어지는 것이 아니라 열성을 다해 갈구하고 부지런히 집중해야 얻을 수 있는 것이다.",
    author: "Abigail Adams",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuotes = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuotes.quote;
author.innerText = todaysQuotes.author;
