import React, { useState, FormEvent } from 'react'

interface IProps {
    settingSearchedCity: (city: string) => void
}

const SearchBar = (props: IProps) => {
    const [search, setSearch] = useState<string>("");
    const onChangeHandler = (e: FormEvent<HTMLInputElement>) => {
        setSearch(e.currentTarget.value)
    }
    const onClickHandler = () => {
        console.log(search, "in search bar");
        // props.settingSearchedCity(search)
    }

    return (
        <div>
            <form>
                <div className="input-group mb-3 w-100">
                    <input type="text" style={{ height: "50px" }} onChange={onChangeHandler} className="form-control" placeholder="Enter the city name" />
                    <div className="input-group-append">
                        <button className="input-group-text" style={{ height: "50px" }}onClick={onClickHandler}>Search</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SearchBar