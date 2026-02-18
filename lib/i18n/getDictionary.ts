import "server-only";

const dictionary = {
    fr : () => import('../dictionnaries/fr.json'),
    he : () => import('../dictionnaries/he.json')
}

export async function getDictionary(locale : 'fr' | 'he'){
    const dict = await dictionary[locale]()
    return dict.default
};