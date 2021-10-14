import React, { useState, FormEvent } from 'react'

const SearchBar = () => {

    const [search, setSearch] = useState<string>("");

    const onChangeHandler = (e: FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        console.log(e.target)
    }

    return (
        <div>
            <form>
                <div className="input-group mb-3 w-100">
                    <input type="text" style={{ height: "50px" }} onChange={onChangeHandler} className="form-control" placeholder="Enter the city name" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                    <div className="input-group-append">
                        <span className="input-group-text" style={{ height: "50px" }} id="basic-addon2">Search</span>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SearchBar