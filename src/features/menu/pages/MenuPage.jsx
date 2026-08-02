import MenuList from "../components/MenuList";
import { useState } from "react";
import { useDebounce } from "../hooks/useDebounce";
import { useFetch } from "../hooks/useFetch";
import "./MenuPage.css";

function MenuPage(){
    const[query,setQuery]=useState("");

    const debounced=useDebounce(query,400);

    const { data: dishes, isLoading, error } = useFetch("/menu.json");

    if (isLoading) return (
        <div className="menu-status">
            <span className="menu-status-icon">🍽️</span>
            Loading menu…
        </div>
    );
    if (error) return (
        <div className="menu-status">
            <span className="menu-status-icon">⚠️</span>
            Could not load menu: {error}
        </div>
    );

    const filtered=(dishes || []).filter((dish)=>
        dish.name.toLowerCase().includes(debounced.toLowerCase())
    );

    return(
        <div className="menu-page">
            <div className="menu-search-wrapper">
                <span className="menu-search-icon">🔍</span>
                <input
                    className="menu-search-input"
                    type="text"
                    placeholder="Search dishes..."
                    value={query}
                    onChange={(e)=>setQuery(e.target.value)}
                />
            </div>
            <MenuList dishes={filtered}/>
        </div>
    );
}

export default MenuPage;