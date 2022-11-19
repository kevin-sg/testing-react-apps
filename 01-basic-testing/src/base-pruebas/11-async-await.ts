const API_KEY = "PetQhYAYokVa3bBaCrufTWkafzvgZ8Cv";

export const getImagen = async (): Promise<string> => {
  try {
    const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);
    const { data } = await resp.json();
    const { url } = data.images.original;

    return url;
  } catch (error) {
    // manejo del error
    // console.error(error);
    return "the image does not exist";
  }
};
