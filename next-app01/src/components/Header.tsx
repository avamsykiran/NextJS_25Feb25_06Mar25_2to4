import Link from "next/link";

const Header = ( {appTitle}:{appTitle:string} ) => (
    <header className="banner">        
        <Link href="/"><strong>{appTitle}</strong></Link>
        <Link href="/aboutUs">About Us</Link>
        <Link href="/contactUs">Contact Us</Link>        
        <Link href="/greet/someBody">Greet</Link>
        <Link href="/greet2/Vamsy/Suman/Murhty">Greet 2</Link>
        <Link href="/greet3/someBody">Greet Server Page</Link>
        <Link href="/greet4/Vamsy/Suman/Murhty">Greet 2 Server Page</Link>
    </header>
);

export default Header;