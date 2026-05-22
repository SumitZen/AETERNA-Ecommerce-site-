function Nav() {
  return(
    <nav>
        <ul className="main">
            <ul className="left">
            <li>Collection</li>
            <li>New Arrivals</li>
            <li>Designers</li>
            </ul>

            <h1>AETERNA</h1>

            <ul className="right">
                <img src="\src\assets\search.png" alt="search" className="search" />
                <img src="\src\assets\profile.png" alt="profile" className="profile" />
                <img src="\src\assets\cart.png" alt="cart" className="cart" />
            </ul>
        </ul>
    </nav>
  );
}

export default Nav;
