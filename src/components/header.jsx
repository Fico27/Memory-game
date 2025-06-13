function Header({ score, highScore }) {
  return (
    <div className="headerContainer">
      <div>
        <h1 className="pokemonHeader">Pok-E-Memory Game!</h1>
      </div>
      <div>
        <span className="score">Current Score: {score}</span>
        <br />
        <span className="score">High Score:{highScore}</span>
      </div>
    </div>
  );
}

export default Header;
