
const jours = new Array(
  "Dimanche",
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi",
  "Samedi"
);

const months = new Array(
  "Janvier",
  "Février",
  "mars",
  "avril",
  "mai",
  "juin",
  "juillet",
  "août",
  "septembre",
  "octobre",
  "novembre",
  "décembre"
);

const  aujourdhui = new Date();
export const result =
  jours[aujourdhui.getDay()] +
  " " +
  aujourdhui.getDate() +
  " " +
  months[aujourdhui.getMonth()] +
  //    + "/"
  //   + aujourdhui.getFullYear() +
  " " +
  aujourdhui.getHours() +
  " h " +
  aujourdhui.getMinutes()
  // + " " +
  // aujourdhui.getSeconds();


//   console.log(result);
