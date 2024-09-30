import Link from "next/link";

export default function Header()  {
    return (
        <header className="navbar glass">
            <div className="navbar-start px-3">
                <Link href='/'>
                    Logo
                </Link>
            </div>

            <div className="navbar-end">
                
                <div className="px-3">
                    <Link href='/dashboard'>
                        Dashboard
                    </Link>
                </div>
                
                <div className="px-3">
                    <Link href='/scorecard'>
                        Scorecards
                    </Link>
                </div>

                <div className="px-3">Help</div>
            </div>
        </header>
    );
}