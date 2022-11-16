import React from 'react'
import { useNavigate } from 'react-router-dom';

const AddAndEditMovie = ({movie,handleGenres,handleInput,saveMovie,genre,componentName}) => {
    const navigate = useNavigate();
  return (
    <div className="h-screen scroll-my-24 bg-gray-700 text-white flex flex-col  items-center pt-6">
      <div
        className="border-2 p-4 rounded-lg h-[80%] w-[90%] md:w-[70%] 
      lg:w-[50%] bg-slate-500 flex flex-col justify-between items-center "
      >
        <h1 className="text-6xl text-center font-bold">{componentName}</h1>
        <div className="flex flex-col h-[85%] justify-around">
          <div className=" my-2 flex items-center text-lg font-bold">
            <p>Name :</p>
            <input
             defaultValue={movie.name}
              className="bg-gray-800 pl-2 grow border rounded-md focus:bg-blue-500 "
              type="text"
              name="name"
              onChange={handleInput}
            />
          </div>
          <div className=" my-2 flex items-center text-lg font-bold">
            <p>How Mach Genres : </p>
            <input
              min={0}
              defaultValue={movie.genres}
              className="bg-gray-800 pl-2 grow border rounded-md focus:bg-blue-500 "
              type="number"
              name="genres"
              onChange={handleInput}
            />
          </div>
          <div className=" my-2 flex items-center text-lg font-bold">
            <p>Image url : </p>
            <input
              defaultValue={movie.image}
              className="bg-gray-800 pl-2 grow border rounded-md focus:bg-blue-500 "
              type="text"
              name="image"
              onChange={handleInput}
            />
          </div>
          <div className=" my-2 flex items-center text-lg font-bold">
            <p>Premiered : </p>

            <input
              className="bg-gray-800 pl-2 grow border rounded-md focus:bg-blue-500 "
              type="date"
              defaultValue={movie.premiered}
              name="premiered"
              onChange={handleInput}
            />
          </div>
          <div className=" my-2 grow ">
            {movie.genres != "" &&
              genre.map((ele, i) => {
                return (
                  <div className=" my-2 flex  items-center text-lg font-bold">
                    <p key={i}>Genre {i + 1} : </p>
                    <input
                     defaultValue={ele}
                      className="bg-gray-800 pl-2 grow border rounded-md focus:bg-blue-500 "
                      type="text"
                      name="image"
                      onChange={(e) => handleGenres(e, i)}
                    />
                  </div>
                );
              })}
          </div>
          <div className="h-20 flex justify-center items-center">
            <button
              className="mx-2 border-2 border-black bg-green-600 p-2 rounded-lg hover:bg-green-400 duration-500 hover:border-blue-400 "
              onClick={() => saveMovie()}
            >
              Save
            </button>
            <button
              className="mx-2 border-2 border-black bg-red-600 p-2 rounded-lg hover:bg-red-400 duration-500 hover:border-blue-400 "
              onClick={() => navigate("/main_page/movies")}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddAndEditMovie