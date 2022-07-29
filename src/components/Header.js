import trollface from '../images/trollface.png';

function Header() {
  return (
    <header className="header">
      <img src={trollface} className="header--image" alt="trollface" />
      <h2 className="header--title">Meme Generator</h2>
    </header>
  );
}

export default Header;
