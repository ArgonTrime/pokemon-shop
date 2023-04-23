import { capitalize } from "lodash";

import styles from "./style.module.scss";

const PokemonAbilities = ({ abilities }) => {
  return (
    <>
      <div className={styles.wrapper}>
        {abilities &&
          abilities.map(({ title, description }) => (
            <div key={title} className={styles.wrapperAbilities}>
              <h4>{capitalize(title)}:</h4>
              <p>{description}</p>
            </div>
          ))}
      </div>
    </>
  );
};
export default PokemonAbilities;
