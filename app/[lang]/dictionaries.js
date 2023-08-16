import 'server-only'
 
const dictionaries = {
  en: () => import('../lng/en.json').then((module) => module.default),
  ar: () => import('../lng/ar.json').then((module) => module.default),
}
 
export const getDictionary = async (locale) => dictionaries[locale]()