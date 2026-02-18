import "server-only";

const dictionary = {
    fr : () => import('../dictionaries/fr.json'),
    he : () => import('../dictionaries/he.json')
}

export async function getDictionary(locale : 'fr' | 'he'){
    
    if (!dictionary[locale]) {
        throw new Error("Locale not supported");
    }
    const dict = await dictionary[locale]()
    return dict.default
};