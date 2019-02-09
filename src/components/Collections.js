import React from "react";
import { useOvermind } from "../overmind";

const Collections = () => {
  const { state } = useOvermind();

  return (
    <div className="collections">
      {state.isLoadingCollections ? (
        <h4>Loading collections...</h4>
      ) : (
        <ul>
          {state.collections.map(collection => (
            <li key={collection.id}>
              <a href={"/collections/" + collection.id}>{collection.name}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Collections;
