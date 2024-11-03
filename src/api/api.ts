import axios from "axios";
import { PokemonDetail, Response } from "./types";

export const getPokemon = async (): Promise<Response> => {
  try {
    const response = await axios.get<Response>(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/pokemon`
    );
    return response.data;
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
};

export const getPokemonDetail = async (url: string) => {
  try {
    const response = await axios.get(url);
    return response.data as PokemonDetail;
  } catch (error: any) {
    throw new Error(error.response?.data?.message);
  }
};
