import React, {useState} from "react";
import {
    addInStorage,
    inStorage,
    deleteFromStorage,
} from "../../../utils/storage";
import {
    Wrapper,
    Image,
    InfoWrapper,
    FilmInfo,
    AboutFilm,
    AddButton,
    CustomsButton,
    DeleteButton,
    Link,
} from "./Card.styled";

type Props = {
    src: string;
    title: string;
    href: string;
    id: number;
};

const Card: React.FC<Props> = ({src, title: info, href, id}) => {
    const [favorite, setFavorite] = useState<boolean>(inStorage(id));
    const onDeleteClick = (id: number) => {
        setFavorite(inStorage(id));
    };
    const onDeleteButtonCLick = () => {
        deleteFromStorage(id);
        onDeleteClick(id);
    }
    const onAddButtonClick = () => {
        addInStorage(id);
        onDeleteClick(id);
    }


    return (
        <Wrapper>
            <Link href={href} target="_blank">
                <Image src={src} alt="#"/>
                <InfoWrapper>
                    <AboutFilm>
                        <FilmInfo>{info}</FilmInfo>
                    </AboutFilm>
                </InfoWrapper>
            </Link>
            <CustomsButton>
                {favorite ? <DeleteButton onClick={onDeleteButtonCLick}>Delete from favorite</DeleteButton> :
                    <AddButton onClick={onAddButtonClick}>Save to favorite</AddButton>}
            </CustomsButton>
        </Wrapper>
    );
};

export default Card;
