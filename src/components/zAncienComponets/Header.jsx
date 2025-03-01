

function Header() {

  const title ='Here is React Course';
  return (
    <header>
      <h1>Header</h1>
    <p>{title}</p>

      <nav>
        <ul>
            <li><a href="#"></a> Home</li>
            <li><a href="#"></a>About</li>
            <li><a href="#"></a>Service</li>
            <li><a href="#"></a>Contact</li>
        </ul>
      </nav>
      <hr></hr>
      <section>
        <label htmlFor="search">Search</label>
        <input id="search" type="text" />
      </section>
    </header>
  );
}
export default Header;