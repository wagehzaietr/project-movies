import React from 'react';
import {Card,
  TextHolder,
  ImageHolder,
  Paragraph} from './MovieCard.styled'


const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {
  return (
    <Card key={imdbID}>
      <Paragraph>
        <p>{Year}</p>
      </Paragraph>

      <ImageHolder>
        <img src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} alt={Title} />
      </ImageHolder>

      <TextHolder>
        <span>{Type}</span>
        <h3>{Title}</h3>
      </TextHolder>
    </Card>
  );
}

export default MovieCard;