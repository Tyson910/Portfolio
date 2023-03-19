type Stars = -3 | -2 | -1 | 0 | 1 | 2 | 3;
interface Rating {
  0: string;
  1: string;
  2: string;
  3: string;
  "-1": string;
  "-2": string;
  "-3": string;
}

const foodEmojis = {
  "grapes": "\u{1F347}",
  "melon": "\u{1F348}",
  "watermelon": "\u{1F349}",
  "tangerine": "\u{1F34A}",
  "lemon": "\u{1F34B}",
  "banana": "\u{1F34C}",
  "pineapple": "\u{1F34D}",
  "red apple": "\u{1F34E}",
  "green apple": "\u{1F34F}",
  "pear": "\u{1F350}",
  "peach": "\u{1F351}",
  "cherries": "\u{1F352}",
  "strawberry": "\u{1F353}",
  "kiwi fruit": "\u{1F95D}",
  "avocado": "\u{1F951}",
  "coconut": "\u{1F965}",
  "mango": "\u{1F96D}",
  "banana bread": "\u{1F96C}",
  "cupcake": "\u{1F9C1}",
  "birthday cake": "\u{1F382}",
  "shortcake": "\u{1F370}",
  "pie": "\u{1F967}",
  "chocolate bar": "\u{1F36B}",
  "candy": "\u{1F36C}",
  "lollipop": "\u{1F36D}",
  "custard": "\u{1F36E}",
  "popcorn": "\u{1F37F}",
  "doughnut": "\u{1F369}",
  "cookie": "\u{1F36A}",
  "peanuts": "\u{1F95C}",
  "blueberries": "\u{1FAD0}"
};

export const ratingObj: Rating = {
  "-3":
    ":nauseated_face: Do not try this. Ever. If they are out of everything else on the menu you should just go home.",
  "-2":
    "Awful. Would only recommend this if they are out of everything else on the menu ",
  "-1": "Bad. try this dish at your own risk",
  0: "Unremarkable. Wouldn’t recommend",
  1: "Good not great. Would recommend if you’re not sure what else to get",
  2: "Great. Would recommend to everyone to try at least once if they get a chance",
  3: "Excellent. Splendid. Marvelous. You should go out of your way to try this",
};

export interface MilkshakeReview {
  /** Between -3 and 3 */
  stars: -3 | -2 | -1 | 0 | 1 | 2 | 3;
  dishName: string;
  /** Explain why you gave the rating **/
  explanation: string;
  dateOfReview: Date;
  imgURL?: string;
}

export const milkshakeReviews: MilkshakeReview[] = [
  {
    stars: 0,
    dishName: `Banana ${foodEmojis['banana']} `,
    explanation:
      `Banana is a classic shake flavor but there's nothing about this shake that sticks out in my mind. Maybe it's just me, but I feel
  like banana shines best as a sidekick or complimentary flavor.`,
    dateOfReview: new Date(2023, 2, 10),
  },
  {
    stars: 2,
    dishName: `Classic Chocolate ${foodEmojis['chocolate bar']}`,
    explanation:
      "Timeless. Immortal. It’s a classic shake flavor for a reason.",
    dateOfReview: new Date(2023, 2, 13),
  },
  {
    stars: 2,
    dishName: `Banana Berry ${foodEmojis['banana']}${foodEmojis['blueberries']} `,
    explanation:
      `The shake has a nice balance of flavors between the sweet bananas and the tart berries,
     which create a unique and enjoyable taste. Overall, the Banana Berry shake is a pretty good option`,
    dateOfReview: new Date(2023, 2, 14),
  },
];
