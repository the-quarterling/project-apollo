import Link from "next/link";

export default function Header()  {
    return (
        <header className="navbar flex justify-center">
            <div className="navbar-center px-3 py-6">
                <Link href='/'>
                    <img src={'/images/logo-inverted.svg'} alt="Arrolytics logo" className="w-full h-auto"/>
                </Link>
            </div>
        </header>
    );
}