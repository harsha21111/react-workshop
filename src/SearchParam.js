import React, { useState, useEffect, useContext } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown";
import Results from "./Results";
import { connect } from "react-redux";
import changeLocation from "./actionCreators/changeLocation";
import changeTheme from "./actionCreators/changeTheme";

const SearchParams = (props) => {
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);
  const [pets, setPets] = useState([]);

  async function requestPets() {
    const { animals } = await pet.animals({
      location: props.location,
      animal: props.animal,
      breed: props.breed,
    });
    setPets(animals || []);
  }

  useEffect(() => {
    setBreeds([]);
    setBreed("");

    pet.breeds(animal).then(({ breeds }) => {
      const breedStrings = breeds.map(({ name }) => name);
      setBreeds(breedStrings);
    }, console.error);
  }, [animal, setBreed, setBreeds]);
  return (
    <div className="search-params">
      <form
        onSubmit={() => {
          event.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={props.loacation}
            placeholder="Location"
            onChange={(e) => props.setLocation(e.target.value)}
          />
        </label>
        <AnimalDropdown />
        <BreedDropdown />
        <label htmlFor="location">
          Theme
          <select
            value={props.theme}
            onChange={(e) => props.setTheme(e.target.value)}
            onBlur={(e) => props.setTheme(e.target.value)}
          >
            <option value="peru">Peru</option>
            <option value="darkblue">Dark Blue</option>
            <option value="mediumorchid">Medium Orchid</option>
            <option value="chartreuse">Chartreuse</option>
          </select>
        </label>
        <button style={{ backgroundColor: props.theme }}>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};
const mapStateToProps = ({ theme, location }) => ({
  theme,
  location,
});

const mapDispatchToProps = (dispatch) => ({
  setLocation: (location) => dispatch(changeLocation(location)),
  setTheme: (theme) => dispatch(changeLocation(theme)),
});

export default connect(mapStateToProps)(SearchParams);
