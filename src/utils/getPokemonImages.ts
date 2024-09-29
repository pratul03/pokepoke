//@ts-nocheck
const fetchImage = (context: string) => {
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

export const images = fetchImage(
    require.context("../assets/pokemon", false, /\.(png|jpe?g|svg)$/)
);

export const defaultImages = fetchImage(
    require.context("../assets/default", false, /\.(png|jpe?g|svg)$/)
);
