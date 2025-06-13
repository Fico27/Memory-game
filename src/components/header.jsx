function Header({ score, highScore }) {
  return (
    <div className="headerContainer">
      <div>
        <h1>Pok-E-Memory Game!</h1>
      </div>
      <div>
        <span>Current Score: {score}</span>
        <br />
        <span>High Score:{highScore}</span>
      </div>
    </div>
  );
}

export default Header;
