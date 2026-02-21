import { Cache } from "./pokecache.js";

export type ShallowLocation = {
  name: string;
  url: string;
};

export type ShallowLocations = {
  count: number;
  next: string | null;
  previous: string | null;
  results: ShallowLocation[];
};

export type PokemonEncounter = {
  pokemon: {
    name: string;
    url: string;
  };
};

export type Location = {
  id: number;
  name: string;
  pokemon_encounters: PokemonEncounter[];
};

export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";
  private cache: Cache;

  constructor() {
    // 5 minutes cache (adjust if you want)
    this.cache = new Cache(5 * 60 * 1000);
  }

  private async fetchWithCache<T>(url: string): Promise<T> {
    const cached = this.cache.get<T>(url);
    if (cached !== undefined) {
      return cached;
    }

    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Request failed with status ${res.status}`);
    }

    const data = (await res.json()) as T;
    this.cache.add(url, data);
    return data;
  }

  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
    const url = pageURL ?? `${PokeAPI.baseURL}/location-area`;
    return this.fetchWithCache<ShallowLocations>(url);
  }

  async fetchLocation(locationName: string): Promise<Location> {
    const url = `${PokeAPI.baseURL}/location-area/${encodeURIComponent(locationName)}`;
    return this.fetchWithCache<Location>(url);
  }
}
