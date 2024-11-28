const IMAGE_PATHS = {
  attic: 'images/ch0-attic.png',
  map: 'images/ch1-map.png',
  lighthouse: 'images/image1.png',
};

const createOption = (text, next) => ({text, next});

const createStoryStep = (text, options, image = null) => ({
  text,
  option: options.map(opt => createOption(opt.text, opt.next)),
  image,
});

export const story = [
  createStoryStep(
      'It’s a blistering hot summer in Driftwood, a sleepy seaside town where nothing ever happens. ' +
      'You’re Stede, a scrappy cat with a knack for finding trouble. ' +
      'While exploring the attic one day, you discover an old map that promises to lead to the Lost Treasure of Captain Blackpaw.?',
      [
        {text: 'Investigate the map further?', next: 1},
        {text: 'Ignore the map and take a nap instead.', next: 12},
      ],
      IMAGE_PATHS.attic,
  ),

  createStoryStep(
      'You spread out the crumpled parchment and study it carefully. The map shows the way to Bloodstone Island, with a note at the bottom that reads: ' +
      '“Seek ye the Devil’s Claw Cave.” Your heart pounds with excitement. Could the tales of Captain Blackpaw’s treasure be true?',
      [
        {text: 'Show the map to your friends and form a crew.', next: 2},
        {text: 'Head out to Bloodstone Island on your own', next: 3},
      ],
      IMAGE_PATHS.map,
  ),

  createStoryStep(
      'You decide this adventure is too big to tackle alone. You dash' +
      ' through Driftwood, gathering your crew: Scraps, the one-eyed alley cat; Whiskers, the fast-talking raccoon; and Shadow, the mysterious black cat. ' +
      'Together, you study the map in your hideout at the old lighthouse. “We’ll need a boat,” Shadow says. “And we’ll need to leave at first light.”',
      [
        {text: 'Steal a boat from the dock and set sail at dawn.', next: 4},
        {text: 'Wait until nightfall to sneak out and avoid being seen.', next: 5,},
      ],
      IMAGE_PATHS.lighthouse,
  ),

  createStoryStep(
      'You’re confident you can handle this on your own. With the map tucked safely in your fur, you sneak out of the house and head straight for the dock. ' +
      'The moon casts an eerie glow over the water as you “borrow” an old rowboat and set off for Bloodstone Island.',
      [
        {text: 'You make it to Bloodstone Island, but you’re exhausted', next: 6,},
        {text: 'A sudden storm hits, and you’re thrown off course', next: 7},
      ],
  ),

  createStoryStep(
      'At dawn, your crew sets off in the rowboat. The sea is calm, but an eerie fog hangs over the water. ' +
      'After hours of rowing, you spot Bloodstone Island through the mist. ' +
      'The island’s black cliffs rise sharply from the sea, and a narrow strip of beach leads to the entrance of the Devil’s Claw Cave.',
      [
        {text: 'Approach the cave cautiously. ', next: 8},
        {text: 'Charge into the cave, eager to find the treasure.', next: 9},
      ],
  ),

  createStoryStep(
      'You wait until nightfall to avoid being seen by the townsfolk. The sea is calm as you and your crew row' +
      ' towards Bloodstone Island under the cover of darkness. ' +
      'The journey is smooth, but as you approach the island, a strange chill fills the air.',
      [
        {text: 'Land on the beach and make camp for the night.', next: 10},
        {text: 'Enter the cave immediately, despite the late hour.', next: 9},
      ],
  ),

  createStoryStep(
      'You reach Bloodstone Island, but rowing all the way on your own has left you exhausted. ' +
      'You pull the boat onto the beach and collapse in the sand, too tired to explore right away.',
      [
        {text: 'Rest for a while and regain your strength.', next: 11},
        {text: 'Push forward into the cave despite your fatigue. ', next: 9},
      ],
  ),

  createStoryStep(
      'As you row, a sudden storm blows in from the north, tossing your boat around like a toy. ' +
      'You fight against the waves, but soon you’re thrown off course, and the map slips out of your paws, disappearing into the sea. ' +
      'You lose consciousness as the boat is overturned. End of Adventure:' +
      ' You wash up on a different shore, with no memory of the treasure hunt. Perhaps it wasn’t meant to be.',
      [
        {text: 'Play again?', next: 0},
      ],
  ),

  createStoryStep(
      'You and your crew approach the Devil’s Claw Cave with caution, pushing aside the thorny vines that guard its entrance. ' +
      'Inside, the air is cool and damp, and the walls are lined with ancient carvings telling the tale of Captain Blackpaw.',
      [
        {text: 'Examine the carvings for clues. ', next: 11},
        {text: 'Keep moving deeper into the cave. ', next: 9},
      ],
  ),

  createStoryStep(
      'You press on, determined to find the treasure. The cave twists' +
      'and turns, leading you deeper into the island. ' +
      'Finally, you reach a massive stone door engraved with a skull and crossbones. Whiskers examines the door. ' +
      '“There’s a puzzle here. We need to solve it to get inside.”',
      [
        {text: 'Work together to solve the puzzle. ', next: 13},
        {text: 'Try to force the door open without solving the puzzle.', next: 14},
      ],
  ),

  createStoryStep(
      'You decide it’s best to make camp for the night. The island is dark and foreboding, ' +
      'and you sense that you’ll need all your strength for what lies ahead. ' +
      'As the sun rises, you feel refreshed and ready to face the cave.',
      [
        {text: 'Explore the beach before entering the cave', next: 15},
        {text: 'Head straight into the cave now that it’s daylight', next: 8},
      ],
  ),

  createStoryStep(
      'You study the carvings on the cave walls, noticing that they depict Captain Blackpaw’s final battle and the hiding of his treasure. ' +
      'One carving, in particular, shows a hidden lever behind the stone paw of Blackpaw.',
      [
        {text: 'Pull the lever and see what happens.', next: 16},
        {text: 'Ignore the lever and keep moving.', next: 9},
      ],
  ),

  createStoryStep(
      'You decide that treasure hunting is too much work, and besides, your spot in the sun is too comfy to leave. ' +
      'You curl up and take a long nap, dreaming of adventures that might have been. ' +
      'End of Adventure: Some cats are just meant to relax, not to chase after lost treasures. ',
      [
        {text: 'Play again', next: 0},
      ],
  ),

  createStoryStep(
      'You and your crew work together to solve the puzzle. The pieces click into place, ' +
      'and the stone door rumbles open, revealing a hidden chamber. ' +
      'Inside, you find piles of gold coins, sparkling jewels, and the legendary Paw of Blackpaw. ' +
      'But as you approach the treasure, the ground begins to shake. ' +
      'From the shadows, the ghostly figure of Captain Blackpaw emerges, hissing, “Who dares disturb my treasure?” ',
      [
        {text: 'Face the ghost and claim the treasure.', next: 17},
        {text: 'Try to escape with as much treasure as you can carry.', next: 18},
      ],
  ),

  createStoryStep(
      'Ignoring the puzzle, you and your crew try to force the door open. ' +
      'But as soon as you touch the door, a hidden trap is triggered. ' +
      'The ground beneath you collapses, and you all fall into a deep pit. ' +
      'End of Adventure: You find yourselves trapped in the darkness, with no way out. ' +
      'Perhaps solving the puzzle was the better option… ',
      [
        {text: 'Play again', next: 0},
      ],
  ),

  createStoryStep(
      'Before entering the cave, you decide to explore the beach. ' +
      'While poking around the rocks, you find a small, weathered chest half-buried in the sand. ' +
      'Inside, you discover a collection of old pirate tools—an ancient spyglass, a rusty cutlass, and a strange-looking key.',
      [
        {text: 'Take the key and head into the cave. ', next: 8},
        {text: 'Ignore the chest and head into the cave', next: 9},
      ],
  ),

  createStoryStep(
      'You pull the lever hidden behind the stone paw of Blackpaw. ' +
      'The ground beneath you trembles, and a hidden passage opens up in the wall. ' +
      'This passage leads to a secret chamber filled with even more treasure than you imagined.',
      [
        {text: 'Enter the secret chamber.', next: 19},
        {text: 'Stay on the main path to the treasure room.', next: 9},
      ],
  ),

  createStoryStep(
      'You stand your ground and face the ghost of Captain Blackpaw. ' +
      'As the ghost lunges at you, your crew uses their unique skills to distract and weaken him. ' +
      'Finally, you grab the golden Paw of Blackpaw from the pedestal and hold it high. ' +
      'With a final, ear-piercing wail, the ghost vanishes, and the treasure is yours. ' +
      'End of Adventure: You and your crew return to Driftwood as heroes, with the treasure of Captain Blackpaw safely in your paws. ' +
      'But more adventures surely await…',
      [
        {text: 'Play again?', next: 0},
      ],
  ),

  createStoryStep(
      'As the ghost of Captain Blackpaw appears, you and your crew grab as much treasure as you can carry and make a run for it. ' +
      'The cave begins to collapse around you, and you barely make it out' +
      ' alive. End of Adventure: You escape with some treasure, ' +
      'but the cave—and the rest of the treasure—is lost forever.' +
      'Still, you and your crew will always be remembered as the ones who dared to challenge Captain Blackpaw’s ghost. ',
      [
        {text: 'Play again?', next: 0},
      ],
  ),

  createStoryStep(
      'You enter the secret chamber and find the true heart of Captain' +
      ' Blackpaw’s treasure—a massive hoard of gold, jewels, and ancient' +
      ' artifacts, hidden away from prying eyes. Among the treasure is the' +
      ' fabled Paw of Blackpaw. But as you reach for the treasure, you hear the echo of a ghostly voice. ' +
      'Captain Blackpaw’s spirit lingers here, protecting his most valuable' +
      ' treasures.',
      [
        {text: 'Confront the ghost and take the treasure.', next: 17},
        {text: 'Leave the treasure and escape while you still can.', next: 18},
      ],
  ),

];

