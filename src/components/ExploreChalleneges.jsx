import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { initialHackathons } from '../utils/initialHackathons';
import SearchBox from './SearchBox';

const ExploreChallenges = () => {
  const [challenges, setChallenges] = useState(initialHackathons);
  const [activeFilters, setActiveFilters] = useState({ status: [], level: [] });

  const handleSearch = (searchTerm) => {
    const filtered = filterChallenges(searchTerm, activeFilters);
    setChallenges(filtered);
  };

  const handleFilter = (filters) => {
    setActiveFilters(filters);
    const filtered = filterChallenges(null, filters);
    setChallenges(filtered);
  };

  const filterChallenges = (searchTerm, filters) => {
    let filtered = initialHackathons;

    if (searchTerm) {
      filtered = filtered.filter((val) =>
        val.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (filters) {
      if (filters.status.length > 0) {
        filtered = filtered.filter((val) => filters.status.includes(val.status));
      }

      if (filters.level.length > 0) {
        filtered = filtered.filter((val) => filters.level.includes(val.difficulty));
      }
    }

    return filtered;
  };

  const removeFilter = (category, value) => {
    const updatedFilters = {
      ...activeFilters,
      [category]: activeFilters[category].filter((item) => item !== value),
    };
    setActiveFilters(updatedFilters);
    const filtered = filterChallenges(null, updatedFilters);
    setChallenges(filtered);
  };

  return (
    <div className="bg-[#0A2540] text-white p-10 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 flex justify-center items-center">Explore Challenges</h1>
      <div className="flex flex-col items-center space-y-4">
        <SearchBox onSearch={handleSearch} onFilter={handleFilter} />
        
        {/* Active Filter Tags */}
        <div className="flex flex-wrap space-x-2">
          {activeFilters.status.map((status) => (
            <span key={status} className="bg-blue-500 text-white px-3 py-1 rounded-full flex items-center space-x-2">
              <span>{status}</span>
              <button onClick={() => removeFilter('status', status)}>&times;</button>
            </span>
          ))}
          {activeFilters.level.map((level) => (
            <span key={level} className="bg-green-500 text-white px-3 py-1 rounded-full flex items-center space-x-2">
              <span>{level}</span>
              <button onClick={() => removeFilter('level', level)}>&times;</button>
            </span>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {challenges.map((challenge) => (
          <Link
            to={`/hackathon/${challenge.id}`}
            key={challenge.id}
            className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105"
          >
            <img
              src={challenge.img}
              alt={challenge.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 bg-gray-100 text-center">
              <span
                className={`inline-block px-3 py-1 text-xs font-semibold rounded-md mb-4 ${
                  challenge.status === 'Upcoming' ? 'bg-yellow-100 text-yellow-600' : challenge.status === 'Past' ? 'bg-red-500' : 'bg-green-500'
                }`}
              >
                {challenge.status}
              </span>

              <h2 className="text-xl text-center font-semibold mb-4 text-gray-900">{challenge.name}</h2>

              {challenge.status === 'Upcoming' || challenge.status === 'Active' ? (
                <div className="text-center mb-4">
                  <p className="text-gray-700 text-sm mb-2">
                    {challenge.status === 'Upcoming' ? 'Starts in' : 'Ends in'}
                  </p>
                  <div className="flex justify-center space-x-2 text-lg font-bold text-gray-900">
                    {challenge.time}
                  </div>
                </div>
              ) : (
                <div className="text-center">
                  <p className="text-gray-700 text-sm mb-2">Ended on</p>
                  <p className="text-black">{challenge.date}</p>
                </div>
              )}

              <button className="bg-green-500 text-white font-bold py-2 px-4 rounded w-full mt-4 flex items-center justify-center">
                Participate Now
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ExploreChallenges;
