let matches = {};

const getMatchesById = (id) => {
  return matches[id] ? matches[id] : { status: 404 };
};

const newMatch = () => {
  const id = Math.random().toString(36).substr(2, 9);
  const newMatch = {
    nextTurn: Math.random() > 0.5 ? "X" : "O",
    status: {1: ["", "", ""], 2: ["", "", ""], 3: ["", "", ""]}
  };

  matches[id] = newMatch;

  newMatch["id"] = id;
  return newMatch;
};

 const newMove = (id, turn, row, column) => {
   let match = matches[id];
   if (match) {
     if(match.nextTurn == turn) {
       if(match.status[row][column-1] == "") {
         match.status[row][column-1] = turn;
         match.nextTurn = match.nextTurn == "X" ? "O" : "X";
         matches[id] = match;
         return match;
       } else {
         return { status: 501 };
       }
     } else {
       return { status: 500 }
     }
   } else {
     return { status: 404 };
   }
 };

module.exports = {
  getMatchesById,
  newMatch,
  newMove,
};
