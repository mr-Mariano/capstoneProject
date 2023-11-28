function Header(){
    return(
        <header>
            <img src={process.env.PUBLIC_URL + '/restauranfood.jpg'}></img>
        </header>
    );
}

export default Header;