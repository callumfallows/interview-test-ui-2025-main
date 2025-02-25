import { faker } from "@faker-js/faker";
import React from "react";
import Container from "../../../components/common/container";
import Grid from "../../../components/common/grid";
import MovieDetails from "../../../types";
import { MovieCard } from "./card";

interface MovieResultsProps {
  currentMovies: MovieDetails[];
  itemsPerPage: number;
}

export const MovieResults = React.memo(function Results({
  currentMovies,
  itemsPerPage
}: MovieResultsProps) {
  const paginatedResults = currentMovies.slice(0, itemsPerPage);

  return (
    <Container>
      <Grid>
        {paginatedResults.map(data => (
          <MovieCard
            key={data.id}
            img={faker.image.cats(250, 250, true)}
            title={data.title}
            tagline={data.tagline}
            release_date={data.release_date}
          />
        ))}
      </Grid>
    </Container>
  );
});
