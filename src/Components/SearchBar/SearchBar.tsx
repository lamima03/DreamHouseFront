import React, { useState } from 'react';
import { Search } from 'lucide-react';
import type { SearchFilters } from '../../Types';

export const SearchBar = () => {
  const [filters, setFilters] = useState<SearchFilters>({
    status: '',
    type: '',
    location: '',
    priceRange: ''
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement search logic
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-lg">
      <form onSubmit={handleSearch} className="flex flex-wrap gap-4">
        <select
          className="flex-1 min-w-[200px] p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-primary"
          value={filters.status}
          onChange={(e) => setFilters({ ...filters, status: e.target.value })}
        >
          <option value="">Type d'annonce</option>
          <option value="for-sale">À vendre</option>
          <option value="for-rent">À louer</option>
        </select>

        <select
          className="flex-1 min-w-[200px] p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-primary"
          value={filters.type}
          onChange={(e) => setFilters({ ...filters, type: e.target.value })}
        >
          <option value="">Type de bien</option>
          <option value="house">Maison</option>
          <option value="apartment">Appartement</option>
          <option value="villa">Villa</option>
          <option value="villa">Terrain</option>
          <option value="Salle polyvalente">Salle polyvalente</option>
          <option value="Bureau">Bureau</option>

        </select>

        <input
          type="text"
          placeholder="Localisation"
          className="flex-1 min-w-[200px] p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-primary"
          value={filters.location}
          onChange={(e) => setFilters({ ...filters, location: e.target.value })}
        />

        <select
          className="flex-1 min-w-[200px] p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-primary"
          value={filters.priceRange}
          onChange={(e) => setFilters({ ...filters, priceRange: e.target.value })}
        >
          <option value="">Budget</option>
          <option value="0-200000">0 - 50$</option>
          <option value="200000-500000">60 - 200$</option>
          <option value="500000+">500$ +</option>
        </select>

        <button
          type="submit"
          className="w-full sm:w-auto px-6 py-3 bg-secondary text-primary rounded-md hover:bg-primary hover:text-secondary flex items-center justify-center gap-2"
        >
          <Search className="h-5 w-5" />
          <span>Rechercher</span>
        </button>
      </form>
    </div>
  );
};