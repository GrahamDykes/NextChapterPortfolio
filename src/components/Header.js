import "../App.css";
import hero from "../assets/heroimg.jpg";

const Header = () => {
  return (
    <header>
        {console.log(hero)}
      <h1>Graham Dykes</h1>
      <p>d.b.a</p>
      <p>
        <em>[</em>rypti<em>[ </em> <em> [</em>reations
      </p>
    <img src={hero} alt="Hero Img" className='heroimage' />
    </header>
  );
};

export default Header;
