// Custom Disney Questions

const placeholderQuestions = [
    {
      category: "",
      question: "List all of the Wishes people made over the course of the movie Aladdin.",
      answer: "Aladdin- make me a prince, save my life, free the Genie. Jafar- make me sultan, make me the most powerful sorceror in the world, make Jasmine fall desperate in love with me (not granted), become an all-powerful genie",
    },
    {
      category: "",
      question: "In Aladdin, what are the wishes Genie cannot grant?",
      answer: "1- kill someone, 2- make two people fall in love, 3- bring people back from the dead, 4- no extra wishes (ig snay on the wishing for more wishes)",
    },
    {
      category: "",
      question: "In Alice in Wonderland, what color is the flamingo that the Queen of Hearts uses in the game of croquet?",
      answer: "Green",
    },
    {
      category: "",
      question: "In Alice in Wonderland, what does the card stuck in the Mad Hatter's top hat have written on it?",
      answer: "10/6",
    },
    {
      category: "",
      question: "What is Bambi's first word?",
      answer: "Bird",
    },
    {
      category: "",
      question: "In Beauty and the Beast, what book was Belle given to keep by the Bookseller because it was her favorite?",
      answer: "Beauty and the Beast",//(ironic, right?)
    },
    {
      category: "",
      question: "In Cinderella, what does the King dream about before the royal ball?",
      answer: "Being a grandfather",
    },
    {
      category: "",
      question: "In Cinderella, what piece of music do Cinderella's step-sisters successfully sing?",
      answer: "None, they fail at Sing, Sweet Nightengale",
    },
    {
      category: "",
      question: "What is the name of Dumbo's mouse friend?",
      answer: "Timothy Q. Mouse",
    },
    {
      category: "",
      question: "In Frozen, what is the official name of the location where Anna and Kristoff first meet?",
      answer: "Wandering Oaken's Trading Post and Sauna",
    },
    {
      category: "",
      question: "In Hercules, who are Hades' two henchmen?",
      answer: "Pain and Panic",
    },
    {
      category: "",
      question: "In Home on the Range, How does the villain steal cattle so easily?",
      answer: "through mind-control yodelling", // I'm not even joking
    },
    {
      category: "",
      question: "Name the dogs that are Lady's neighbors, in Lady and the Tramp.",
      answer: "Jock and Trusty",
    },
    {
      category: "",
      question: "In Lilo & Stitch, what flavor of ice cream falls off the fat guy's cone after Lilo takes a picture of him?",
      answer: "Mint-Chocholate Chip", // something green with black speckles
    },
    {
      category: "",
      question: "In Lilo & Stitch, what storybook does Stitch read?",
      answer: "The Ugly Ducking",
    },
    {
      category: "",
      question: "In the Lion King, where is Simba forbidden to go?",
      answer: "The Elephant Graveyard, a shadowy place that is beyond the boarders of the Pride Lands.",
    },
    {
      category: "",
      question: "In the Lion King, why did all the animals bow down as Raffiki lifted Simba over his head?",
      answer: "To honor the new king or because Pumba farted.",
    },
    {
      category: "",
      question: "In the Little Mermaid, How many daughters does King Triton have?",
      answer: "Seven daughters",
    },
    {
      category: "",
      question: "In the Little Mermaid, which of King Triton's daughters is Ariel, age-wise?",
      answer: "Ariel is the youngest",
    },
    {
      category: "",
      question: "In the Little Mermaid prequal, what does King Triton outlaw after his wife dies?",
      answer: "King Triton bans singing and music because it reminds him of his wife.",
    },
    {
      category: "",
      question: "In the Little Mermaid prequal, who organizes an underground society to continue to partake in this banned action?",
      answer: "Sebastion runs a nightclub where people come to sing.",
    },
    {
      category: "",
      question: "Who died in Mary Poppins?",
      answer: "The Elder Mr. Dawes.", // Senior
    },
    {
      category: "",
      question: "How did the character die in Mary Poppins?",
      answer: "He died laughing.",
    },
    {
      category: "",
      question: "What did Mulan name her dog?",
      answer: "Little Brother",
    },
    {
      category: "",
      question: "What objects does grandma give Mulan before she meets the matchmaker?",
      answer: "an Apple (for serenity), a Pendant (for balance), Beads of Jade (for beauty) & a Cricket (just for Luck)",
    },
    {
      category: "",
      question: "In One Hundred and One Dalmatians, what is the network dogs use to communicate over great distances called?",
      answer: "The Twilight Bark",
    },
    {
      category: "",
      question: "In Peter Pan, What is the name of the Darling's dog?",
      answer: "Nana",
    },
    {
      category: "",
      question: "In Pete's Dragon, what is the name of the family that had a Bill of Sale for Pete?",
      answer: "The Gogan's",
    },
    {
      category: "",
      question: "What is the name of Pinocchio's friend who convinces him to drink and smoke on Pleasure Island?",
      answer: "Lampwick",
    },
    {
      category: "",
      question: "What kind of life does Honest John advocate for Pinocchio?",
      answer: "An Actor's Life",
    },
    {
      category: "",
      question: "What does Pocahontas mistake the ship's sails for?",
      answer: "Clouds, strange clouds",
    },
    {
      category: "",
      question: "Who is Pocahontas's best friend?",
      answer: "Nakoma",
    },
    {
      category: "",
      question: "In Pocahontas, who eventually becomes Batman?",
      answer: "Thomas", // voiced by Christian Bale
    },
    {
      category: "",
      question: "In Robin Hood, who are the Sherrif of Nottingham's two vulture guards?",
      answer: "Trigger and Nutsy",
    },
    {
      category: "",
      question: "Who is the narrator in Disney's Robin Hood?",
      answer: "Alan-a-Dale (a rooster)",
    },
    {
      category: "",
      question: "In Sleeping Beauty, what are the gifts that the fairies give Princess Aurora?",
      answer: "Flora- The Gift of Beauty, Fauna- the Gift of Song, Merryweather- a Ray of Hope (not Death, only Sleep)",
    },
    {
      category: "",
      question: "List each of the seven dwarfs from Snow White and the Seven Dwarfs and what musical instrument they play.",
      answer: "Doc-Upright Bass, Dopey-Percussion, Sleepy-Clarinet, Sneezy-Lute, Grumpy-Organ, Bashful-Accordian, Happy- Yodels",
    },
    {
      category: "",
      question: "What kind of pie did Snow White bake for Grumpy?",
      answer: "Gooseberry Pie",
    },
    {
      category: "",
      question: "In Song of the South, what character sings Zip-a-dee-do-da?",
      answer: "Uncle Remus",
    },
    {
      category: "",
      question: "What ride in the Magic Kingdom amusement park was inspired by Song of the South?",
      answer: "Splash Mountain", // based off the brair patch
    },
    {
      category: "",
      question: "In Tangled, what is the name of the pub that Flynn and Rapunzle go to?",
      answer: "The Snuggly Duckling",
    },
    {
      category: "",
      question: "In The Adventures of Ichabod and Mr. Toad, who are Toad's four closest friends and what kinds of animals are they?",
      answer: "Angus MacBadger (a badger), Moley (a mole), Ratty (a water rat), Cyril (a horse)",
    },
    {
      category: "",
      question: "In The Adventures of Ichabod and Mr. Toad, what is Toad's full name?",
      answer: "Thaddeus J. Toad",
    },
    {
      category: "",
      question: "In The Aristocats, who is the geese's uncle?",
      answer: "Uncle Waldo",
    },
    {
      category: "",
      question: "In The Aristocats, what is Dutchess and her kittens' favorate meal?",
      answer: "Crème de la Crème a la Eggbert",
    },
    {
      category: "",
      question: "What is the Princess's name in the Black Cauldron?",
      answer: "Princess Eilonwy",
    },
    {
      category: "Disney Villains",
      question: "Who is the villain in the Black Cauldron?",
      answer: "The Horned King",
    },
    {
      category: "",
      question: "In The Emperor's New Groove, what is the name of the restaurant everyone stops to eat in?",
      answer: "Mudka's Meat Hut",
    },
    {
      category: "",
      question: "Name the Fox and the Hound from the Fox and the Hound.",
      answer: "Todd and Copper",
    },
    {
      category: "",
      question: "In The Great Mouse Detective, what is Olivia's last name?",
      answer: "Flaversham",
    },
    {
      category: "",
      question: "In The Great Mouse Detective, what is the name of Basil's hound?",
      answer: "Toby",
    },
    {
      category: "",
      question: "Name the three gargoyles in The Hunchback of Notre Dame.",
      answer: "Victor, Hugo, Leverne",
    },
    {
      category: "",
      question: "Who is the narrator in The Hunchback of Notre Dame?",
      answer: "The gypsy, Clopin Trouillefou",
    },
    {
      category: "",
      question: "List all of Syndrome's aliases from The Incredibles.",
      answer: "Syndrome, Incrediboy, Buddy Pine, The Sitter",// The Sitter is from the short Jack-Jack Attack
    },
    {
      category: "",
      question: "Who is the lead Elephant that Mowgli runs into in the Jungle Book?",
      answer: "Colonel Hathi",
    },
    {
      category: "",
      question: "In The Princess and the Frog, what is the Shadowman's real name",
      answer: "Doctor Facilier",
    },
    {
      category: "",
      question: "In The Princess and the Frog, who is Ray in love with?",
      answer: "Evangeline, the Wishing Star",
    },
    {
      category: "",
      question: "In the Rescuers, what was the name of the person who needed Rescuing?",
      answer: "Penny",
    },
    {
      category: "",
      question: "In the Rescuers, what was Madame Medusa looking for?",
      answer: "The world's largest diamond, the Devil's Eye",
    },
    {
      category: "",
      question: "How does Merlin win the Wizards duel in The Sword in the Stone?",
      answer: "By transforming into a rare disease",
    },
    {
      category: "",
      question: "Who hosts the Bad-Anon (villain's support group) meetings in Wreck-It Ralph?",
      answer: "Clyde, the Pac-Man ghost",
    },
  
  ];
  
  export default placeholderQuestions;
  