import { useState } from 'react';

function Meme() {
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImg: 'https://i.imgflip.com/9vct.jpg',
  });

  const URL = 'https://api.imgflip.com/get_memes';
  let url = '';

  async function getMeme(e) {
    e.preventDefault();
    const res = await fetch(URL);
    const data = await res.json();
    const memes = data.data.memes;
    url = memes[Math.floor(Math.random() * 100)].url;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        randomImg: url,
      };
    });
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        [name]: value,
      };
    });
  }

  return (
    <main>
      <form className="form">
        <input
          onChange={handleChange}
          type="text"
          className="form--input"
          placeholder="Top Text"
          name="topText"
          value={meme.topText}
        />
        <input
          onChange={handleChange}
          type="text"
          className="form--input"
          placeholder="Bottom Text"
          name="bottomText"
          value={meme.bottomText}
        />
        <button className="form--button" onClick={getMeme}>
          Get a new meme image
        </button>
      </form>
      <div className="output">
        <img src={meme.randomImg} className="meme--img" alt="random meme" />
        <p className="text text--top">{meme.topText}</p>
        <p className="text text--bottom">{meme.bottomText}</p>
      </div>
    </main>
  );
}
export default Meme;
