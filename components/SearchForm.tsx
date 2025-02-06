import React from 'react';
import Form from "next/form";
import {ResetSearchButton} from "@/components/ResetSearchButton";
import {SearchButton} from "@/components/SearchButton";

function SearchForm({query}: {query?: string} ) {
    return (
        <Form action="/" scroll={false} className="search-form">
            <input name="query" defaultValue="" className="search-input" placeholder="Search Startup" />
            {query && <ResetSearchButton />}
            <SearchButton />
        </Form>
    )
}

export default SearchForm;