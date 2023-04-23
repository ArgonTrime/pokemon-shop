import { capitalize, lowerCase } from "lodash";
import Button from "@mui/material/Button";

import PokemonAbilities from "../PokemonAbilities";
import PokemonStat from "../PokemonStat";
import statsIconsByName from "pages/PokemonDetails/utils/statsIconsByName";

import styles from "./style.module.scss";

const PokemonDetailsView = ({ pokemonDetails, stats }) => {
  const { name, image, abilities, price } = pokemonDetails;
  return (
    <div className={styles.wrapper}>
      <div className={styles.detailsCard}>
        <div className={styles.detailsCardHeader}>
          <img src={image} alt={name} />
          <h3>{capitalize(name)}</h3>
        </div>
        <div>
          <h4>Abilities</h4>
          <PokemonAbilities abilities={abilities} />
        </div>
        <div>
          <h4>Stats</h4>
          <div className={styles.detailsStats}>
            {stats?.map(([statName, statValue]) => (
              <PokemonStat
                key={statName}
                srcImage={statsIconsByName[statName]}
                statName={capitalize(lowerCase(statName))}
                statValue={statValue}
              />
            ))}
          </div>
          <div>
            <div className={styles.detailsPrice}>
              <p>
                Price: <span>${price}</span>
              </p>
              <Button variant="contained" color="success">
                Buy
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PokemonDetailsView;