import Link from "next/link";

export default function Header()  {
    return (
        <header className="navbar flex justify-center">
            <div className="navbar-center px-3 pb-6">
                <Link href='/'>
                    <img src={'/images/logo.png'} alt="Field companion logo" className="dark:hidden"/>
                    <img src={'/images/logo-inverted.png'} alt="Field companion logo" className="hidden dark:block"/>
                </Link>
            </div>
        </header>
    );
}