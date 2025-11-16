/*In the game of Golf, each hole has a par, meaning, the average number of strokes a golfer is expected to make in order to sink the ball in the hole to complete the play. Depending on how far above or below par your strokes are, there is a different nickname.

Your function will be passed par and strokes arguments. Return the correct string according to this table which lists the strokes in order of priority; top (highest) to bottom (lowest):

    Strokes	            Return
      1	              "Hole-in-one!"
<= par - 2	          "Eagle"
par - 1	              "Birdie"
par	                  "Par"
par + 1	              "Bogey"
par + 2	              "Double Bogey"
>= par + 3	          "Go Home!"

par and strokes will always be numeric and positive. We have added an array of all the names for your convenience.
*/

const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line

  // let diff = strokes - par

  switch(true){
    case(strokes === 1):
      return names[0];
      break;
    case(strokes <= par - 2): // diff <= -2
      return names[1];
      break;
    case(strokes === par -1): // diff === -1
      return names[2];
      break;
    case(strokes === par):    // diff === 0
      return names[3];
      break;
    case(strokes === par + 1): // diff === 1
      return names[4];
      break;
    case(strokes === par + 2): // diff === 2
      return names[5];
      break;
    case(strokes >= par + 3): // default: return names[6]
      return names[6];
      break;
  }

  return "Change Me";
  // Only change code above this line
}

golfScore(5, 3);