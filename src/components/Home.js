import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DogCard from "./DogCard"; 
import SearchForm from "./SearchForm";    
import "./styles.css";

export default function Home() {
  const [dogs, setDogs] = useState([]);
  const [text, setText] = useState("");
  const [searched, setSearched] = useState(false);

  useEffect(() => {
    const fetchDogData = async () => {
      try {
        const res = await fetch("https://api.thedogapi.com/v1/breeds");
        const data = await res.json();
        setDogs(data);
      } catch (error) {
        console.error(error);
      }
    };

    setSearched(false);
    fetchDogData();
  }, []);

  const searchForDog = async () => {
    try {
      const res = await fetch(
        `https://api.thedogapi.com/v1/breeds/search?q=${text}`
      );
      const data = await res.json();

      if (Array.isArray(data) && data.length > 0) {
        if (data[0].image) {
          setDogs(data);
        } else {
          const breedRes = await fetch(
            `https://api.thedogapi.com/v1/breeds/${data[0].id}`
          );
          const breedData = await breedRes.json();
          setDogs([breedData]);
        }
      } else {
        setDogs([]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    searchForDog();
    setSearched(true);
  };

  return (
    <div id="center-container">
      <header>
        <h1 className="text-center text-4xl font-bold text-white mt-8 mb-4">
          About Dogs
        </h1>
        <p className="text-center text-white mb-8">
          Explore a variety of dog breeds and learn about their characteristics.
        </p>
      </header>

      {/* SearchForm component */}
      <SearchForm handleSubmit={handleSubmit} text={text} setText={setText} />

      {!dogs ? (
        <h1 className="flex items-center justify-center text-white text-center px-5 text-3xl h-screen font-bold uppercase">
          Loading...
        </h1>
      ) : (
        <section className="p-8 max-w-7xl mx-auto">
          <div className="dog-container">
            {!searched ? (
              dogs.map((dog) => (
                <DogCard key={dog.id} dog={dog} />
              ))
            ) : (
              <>
                {dogs.map((dog) => (
                  <DogCard key={dog.id} dog={dog} />
                ))}
              </>
            )}
          </div>
        </section>
      )}
    </div>
  );
}
