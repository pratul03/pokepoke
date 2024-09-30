//@ts-nocheck
const fetchImages = (context: string) => {
    const images = {};
    const cache = {};

    function importAll(r: any) {
        r.keys().forEach((key: any) => (cache[key] = r(key)));
    }
    importAll(context).forEach((module: string[]) => {
        let key = module[0].split("");
        key.splice(0, 2);
        key.splice(-4, 4);

        images[[key.join("")]] = module[1];
    });
    return images;
};

export const images = fetchImages(
    require.context("../assets/pokemons/shiny", false, /\.(png|jpe?g|svg)$/)
);

export const defaultImages = fetchImages(
    require.context("../assets/pokemons/default", false, /\.(png|jpe?g|svg)$/)
);
