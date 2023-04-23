import sword from "static/icon/sword.png";
import doubleSword from "static/icon/swords.png";
import shield from "static/icon/defence.png";
import goldShield from "static/icon/defenceSpecial.png";
import heart from "static/icon/heart.png";
import speed from "static/icon/fast-forward.png";

const statsIconsByName = {
  attack: sword,
  "special-attack": doubleSword,
  defense: shield,
  "special-defense": goldShield,
  hp: heart,
  speed,
};
export default statsIconsByName;
