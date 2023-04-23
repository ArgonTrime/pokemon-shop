import styles from "./style.module.scss";

const PokemonStat = ({ srcImage, statName, statValue }) => {
  return (
    <div className={styles.wrapper}>
      <img src={srcImage} alt={statName} />
      <p>
        {statName}: <span>{statValue}</span>
      </p>
    </div>
  );
};
export default PokemonStat;
