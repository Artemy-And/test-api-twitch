import React from "react";
import {Wrapper, SearchBtn, SearchInpth, Link, Links, Container} from "./Search.styled";
import NextLink from "next/link";

type PropsType = {
    value: string;
    setValue: (value: string) => void;
    onFindClick: (value: string) => void;
};

const Search: React.FC<PropsType> = ({value, setValue, onFindClick}) => {
    const onFuncClick = () => {
        onFindClick(value);
    }

    return (
        <Wrapper>
            <Container>
                <Links>
                    <NextLink href="/" passHref>
                        <Link>All</Link>
                    </NextLink>
                    <NextLink href="/favorites" passHref>
                        <Link>Favorite</Link>
                    </NextLink>
                </Links>
                <SearchInpth
                    value={value}
                    onChange={(e) => {
                        setValue(e.target.value);
                    }}
                    placeholder="Search"
                    type="text"
                />
                <SearchBtn onClick={onFuncClick}>Search</SearchBtn>
            </Container>
        </Wrapper>
    );
};

export default Search;
