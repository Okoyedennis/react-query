import React from "react";
import { useSuperHeroesData } from "../hooks/useSuperHeroesData";

const AssignmentSuperHero = () => {
  const onSucess = (data) => {
    console.log("Perform side effect data fetching", data);
  };

  const onError = (data) => {
    console.log("Perform side effect after encoutering error", data);
  };

  const enabled = false;

  const { isLoading, data, isError, error, isFetching, refetch } =
    useSuperHeroesData(onSucess, onError, enabled);

  if (isLoading || isFetching) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }
  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <h2>React Query Super Heroes Page</h2>
      <button onClick={refetch}>Fetch heroes</button>
      {/* {data?.data.map((hero) => (
        <div key={hero.name}>{hero.name}</div>
      ))} */}
      {data?.map((heroName) => {
        return <div key={heroName}>{heroName}</div>;
      })}
    </>
  );
};

export default AssignmentSuperHero;
