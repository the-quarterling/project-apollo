import Link from "next/link";

export default function Footer()  {
    return (
        <footer className="footer navbar">
            <div className="fixed z-50 w-full align-middle text-center h-16 max-w-lg -translate-x-1/2 bg-white border border-gray-200 rounded-full bottom-4 left-1/2 dark:bg-gray-700 dark:border-gray-600">
                <div className="grid h-full max-w-lg grid-cols-3 mx-auto w-full">
                    <button type="button" className="inline-flex flex-col items-center justify-center px-5 rounded-s-full hover:bg-gray-50 dark:hover:bg-gray-800 group">
                        <svg className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-teal-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
                        </svg>
                        <span className="sr-only">Home</span>
                    </button>
                    <div className="flex items-center justify-center">
                        <button type="button" className="inline-flex items-center justify-center w-10 h-10 font-medium bg-gradient-to-br from-teal-300 to-lime-200 rounded-full">
                            <svg className="w-4 h-4 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
                            </svg>
                            <span className="sr-only">New item</span>
                        </button>
                    </div>
                    <button type="button" className="inline-flex flex-col items-center justify-center px-5 rounded-e-full hover:bg-gray-50 dark:hover:bg-gray-800 group">
                        <svg className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-teal-600 dark:group-hover:text-blue-500" aria-hidden="true"  viewBox="0 0 28 28" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.3 12C12.1343 12 12 12.1343 12 12.3V12.7C12 12.8657 12.1343 13 12.3 13H19.7C19.8657 13 20 12.8657 20 12.7V12.3C20 12.1343 19.8657 12 19.7 12H12.3Z"/>
                            <path d="M12 20.3C12 20.1343 12.1343 20 12.3 20H19.7C19.8657 20 20 20.1343 20 20.3V20.7C20 20.8657 19.8657 21 19.7 21H12.3C12.1343 21 12 20.8657 12 20.7V20.3Z"/>
                            <path d="M12.3 16C12.1343 16 12 16.1343 12 16.3V16.7C12 16.8657 12.1343 17 12.3 17H19.7C19.8657 17 20 16.8657 20 16.7V16.3C20 16.1343 19.8657 16 19.7 16H12.3Z"/>
                            <path clipRule="evenodd" d="M23.5 5H21V2.375C21 1.61561 20.3956 1 19.65 1H4.35C3.60442 1 3 1.61561 3 2.375V21.625C3 22.3844 3.60442 23 4.35 23H7V25.5C7 26.3284 7.67157 27 8.5 27H23.5C24.3284 27 25 26.3284 25 25.5V6.5C25 5.67157 24.3284 5 23.5 5ZM4.8 3.83333C4.8 3.28105 5.24772 2.83333 5.8 2.83333H18.2C18.7523 2.83333 19.2 3.28105 19.2 3.83333V5H8.5C7.67157 5 7 5.67157 7 6.5V21.1667H5.8C5.24772 21.1667 4.8 20.719 4.8 20.1667V3.83333ZM10 7C9.44772 7 9 7.44772 9 8V24C9 24.5523 9.44772 25 10 25H22C22.5523 25 23 24.5523 23 24V8C23 7.44772 22.5523 7 22 7H10Z" fillRule="evenodd"/>
                        </svg>
                        <span className="sr-only">Profile</span>
                    </button>
                </div>
            </div>  
        </footer>
    );
}





