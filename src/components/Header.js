function Header() {
    return (
        <header>
            <img style={{height : '100px', wide:'100px'}} src={process.env.PUBLIC_URL + '/icons_assets/restauranfood.jpg'} alt="Food" />
        </header>
    );
}

export default Header;