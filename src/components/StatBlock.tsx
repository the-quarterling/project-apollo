import { useState, useEffect } from 'react';

interface StatBlockProps {
    title: string,
    stat: any
}

export const StatBlock = ({title, stat}: StatBlockProps) => {
    return (
        <div className="bg-white dark:bg-zinc-900 rounded-xl flex-auto text-center p-4 shadow-lg dark:shadow-stone-100/15">
            <div className="title">
                {title}
            </div>
            <div className="stat text-3xl"> 
                {stat}
            </div>
        </div>
    );
}