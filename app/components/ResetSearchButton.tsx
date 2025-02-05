'use client'

import React from "react";
import Link from "next/link";

export const ResetSearchButton = () => {
    const resetSearch = () => {
        const form: HTMLFormElement | null= document.querySelector(".search-form");
        if (form) form.reset()
    }
    return (
        <Link href='/'><button type='reset' onClick={resetSearch} className="search-btn text-white">X</button> </Link>
    );
};
