const story = [
  { // 0
    text: 'It’s a blistering hot summer in Driftwood, a sleepy seaside town where nothing ever happens. ' +
          'You’re Stede, a scrappy cat with a knack for finding trouble. ' +
          'While exploring the attic one day, you discover an old map that promises to lead to the Lost Treasure of Captain Blackpaw.',
    option: [
      { text: 'Investigate the map further?', next: 1 },
      { text: 'Ignore the map and take a nap instead.', next: 12 },
    ],
    image: 'images/ch0-attic.png',
  },
  { // 1
    text: 'You spread out the crumpled parchment and study it carefully. The map shows the way to Bloodstone Island, with a note at the bottom that reads: ' +
          '“Seek ye the Devil’s Claw Cave.” Your heart pounds with excitement. Could the tales of Captain Blackpaw’s treasure be true?',
    option: [
      { text: 'Show the map to your friends and form a crew.', next: 2 },
      { text: 'Head out to Bloodstone Island on your own.', next: 3 },
    ],
    image: 'images/ch1-map.png',
  },
  { // 2
    text: 'You decide this adventure is too big to tackle alone. You dash through Driftwood, gathering your crew: Scraps, the one-eyed alley cat; Whiskers, the fast-talking raccoon; and Shadow, the mysterious black cat. ' +
          'Together, you study the map in your hideout at the old lighthouse. “We’ll need a boat,” Shadow says. “And we’ll need to leave at first light.”',
    option: [
      { text: 'Steal a boat from the dock and set sail at dawn.', next: 4 },
      { text: 'Wait until nightfall to sneak out and avoid being seen.', next: 5 },
    ],
    image: 'images/ch2-theCrew.webp',
  },
  { // 3
    text: 'You’re confident you can handle this on your own. With the map tucked safely in your fur, you sneak out of the house and head straight for the dock. ' +
          'The moon casts an eerie glow over the water as you “borrow” an old rowboat and set off for Bloodstone Island.',
    option: [
      { text: 'You make it to Bloodstone Island, but you’re exhausted.', next: 6 },
      { text: 'A sudden storm hits, and you’re thrown off course.', next: 7 },
    ],
    image: 'images/ch3-goAlone.webp',
  },
  { // 4
    text: 'At dawn, your crew sets off in the rowboat. The sea is calm, but an eerie fog hangs over the water. ' +
          'After hours of rowing, you spot Bloodstone Island through the mist. ' +
          'The island’s black cliffs rise sharply from the sea, and a narrow strip of beach leads to the entrance of the Devil’s Claw Cave.',
    option: [
      { text: 'Approach the cave cautiously.', next: 8 },
      { text: 'Charge into the cave, eager to find the treasure.', next: 9 },
    ],
    image: 'images/ch4-setSail.webp',
  },
  { // 5
    text: 'You wait until nightfall to avoid being seen by the townsfolk. The sea is calm as you and your crew row towards Bloodstone Island under the cover of darkness. ' +
          'The journey is smooth, but as you approach the island, a strange chill fills the air.',
    option: [
      { text: 'Land on the beach and make camp for the night.', next: 10 },
      { text: 'Enter the cave immediately, despite the late hour.', next: 9 },
    ],
    image: 'images/ch5-theApproach.webp',
  },
  { // 6
    text: 'You reach Bloodstone Island, but rowing all the way on your own has left you exhausted. ' +
          'You pull the boat onto the beach and collapse in the sand, too tired to explore right away.',
    option: [
      { text: 'Rest for a while and regain your strength.', next: 11 },
      { text: 'Push forward into the cave despite your fatigue.', next: 9 },
    ],
    image: 'images/tired.webp',
  },
  { // 7
    text: 'As you row, a sudden storm blows in from the north, tossing your boat around like a toy. ' +
          'You fight against the waves, but soon you’re thrown off course, and the map slips out of your paws, disappearing into the sea. ' +
          'You lose consciousness as the boat is overturned. End of Adventure: You wash up on a different shore, with no memory of the treasure hunt. Perhaps it wasn’t meant to be.',
    option: [
      { text: 'Play again?', next: 0 },
    ],
    image: 'images/ch7-theEnd.webp',
  },
  { // 8
    text: 'You and your crew approach the Devil’s Claw Cave with caution, pushing aside the thorny vines that guard its entrance. ' +
          'Inside, the air is cool and damp, and the walls are lined with ancient carvings telling the tale of Captain Blackpaw.',
    option: [
      { text: 'Examine the carvings for clues.', next: 11 },
      { text: 'Keep moving deeper into the cave.', next: 9 },
    ],
    image: 'images/ch8-theDevilsCave.webp',
  },
  { // 9
    text: 'You press on, determined to find the treasure. The cave twists and turns, leading you deeper into the island. ' +
          'Finally, you reach a massive stone door engraved with a skull and crossbones. Whiskers examines the door. ' +
          '“There’s a puzzle here. We need to solve it to get inside.”',
    option: [
      { text: 'Work together to solve the puzzle.', next: 13 },
      { text: 'Try to force the door open without solving the puzzle.', next: 14 },
    ],
    image: 'images/ch9-thePuzzle.webp',
  },
  { // 10
    text: 'You decide it’s best to make camp for the night. The island is dark and foreboding, and you sense that you’ll need all your strength for what lies ahead. ' +
          'As the sun rises, you feel refreshed and ready to face the cave.',
    option: [
      { text: 'Explore the beach before entering the cave.', next: 15 },
      { text: 'Head straight into the cave now that it’s daylight.', next: 8 },
    ],
    image: 'images/ch10-camp.webp',
  },
  { // 11
    text: 'You study the carvings on the cave walls, noticing that they depict Captain Blackpaw’s final battle and the hiding of his treasure. ' +
          'One carving, in particular, shows a hidden lever behind the stone paw of Blackpaw.',
    option: [
      { text: 'Pull the lever and see what happens.', next: 16 },
      { text: 'Ignore the lever and keep moving.', next: 9 },
    ],
    image: 'images/theLever.webp',
  },
  { // 12
    text: 'You decide that treasure hunting is too much work, and besides, your spot in the sun is too comfy to leave. ' +
          'You curl up and take a long nap, dreaming of adventures that might have been. End of Adventure: Some cats are just meant to relax, not to chase after lost treasures.',
    option: [
      { text: 'Play again', next: 0 },
    ],
    image: 'images/ch12-theNap.webp',
  },
  { // 13
    text: 'You and your crew work together to solve the puzzle. The pieces click into place, and the stone door rumbles open, revealing a hidden chamber. ' +
          'Inside, you find piles of gold coins, sparkling jewels, and the legendary Paw of Blackpaw. ' +
          'But as you approach the treasure, the ground begins to shake. ' +
          'From the shadows, the ghostly figure of Captain Blackpaw emerges, hissing, “Who dares disturb my treasure?”',
    option: [
      { text: 'Face the ghost and claim the treasure.', next: 17 },
      { text: 'Try to escape with as much treasure as you can carry.', next: 18 },
    ],
    image: 'images/ch13-blackpawEmerges.webp',
  },
  { // 14
    text: 'Ignoring the puzzle, you and your crew try to force the door open. But as soon as you touch the door, a hidden trap is triggered. ' +
          'A burst of darts shoots out from the walls, and you barely manage to escape. Your crew is shaken and decides it’s best to retreat. ' +
          'End of Adventure: Maybe it wasn’t worth risking your lives for treasure.',
    option: [
      { text: 'Play again', next: 0 },
    ],
    image: 'images/ch14-deathByDarts.webp',
  },
  { // 15
    text: 'You spend some time exploring the beach and find an old, half-buried chest. Inside are supplies that might come in handy on your journey. ' +
          'Feeling prepared, you head towards the cave entrance.',
    option: [
      { text: 'Enter the cave.', next: 8 },
    ],
    image: 'images/ch15-beachChest.webp',
  },
  { // 16
    text: 'You pull the lever, and a hidden door slides open, revealing a secret passage. You and your crew carefully enter the passage, wondering what lies ahead.',
    option: [
      { text: 'Continue down the secret passage.', next: 19 },
    ],
    image: 'images/ch16-pullTheLever.webp',
  },
  { // 17
    text: 'Facing the ghostly figure of Captain Blackpaw, you stand your ground. “We come in peace,” you declare, “and seek only the treasure!” The ghost regards you for a moment before a smile breaks across his spectral face. ' +
          '“Very well, but beware the curse that comes with it.” He fades away, leaving the treasure for you to claim.',
    option: [
      { text: 'Claim the treasure.', next: 20 },
    ],
    image: 'images/ch17-fightBlackpaw.webp',
  },
  { // 18
    text: 'You grab as much treasure as you can carry and make a run for it. But as you reach the exit, the cave begins to collapse. You barely escape with your life, but most of the treasure is lost.',
    option: [
      { text: 'Play again', next: 0 },
    ],
    image: 'images/ch18-runForLife.webp',
  },
  { // 19
    text: 'The secret passage leads you deeper into the cave, where you find another chamber filled with even more treasure. But it’s guarded by a giant spider! You’ll need to defeat it to claim the prize.',
    option: [
      { text: 'Fight the spider.', next: 21 },
      { text: 'Sneak past the spider.', next: 22 },
    ],
    image: 'images/ch19-theSpider.webp',
  },
  { // 20
    text: 'With the treasure claimed, you and your crew make your way back to Driftwood as heroes. The town is abuzz with your adventure, and you are celebrated for your bravery and resourcefulness.',
    option: [
      { text: 'Play again', next: 0 },
    ],
    image: 'images/ch20-herosReturn.webp',
  },
  { // 21
    text: 'You and your crew fight bravely and manage to defeat the giant spider. With the guardian gone, the treasure is yours for the taking!',
    option: [
      { text: 'Claim the treasure.', next: 20 },
    ],
    image: 'images/ch21-spiderFight.webp',
  },
  { // 22
    text: 'Using your stealth skills, you and your crew sneak past the giant spider and manage to escape with as much treasure as you can carry. It’s a thrilling success!',
    option: [
      { text: 'Play again', next: 0 },
    ],
    image: 'images/ch22-spiderSneak.webp',
  },
];

export {story};