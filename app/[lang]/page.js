import { getDictionary } from './dictionaries'
 
export default async function Page({ params: { lang } }) {
  const dict = await getDictionary(lang) // en
  return (
    <div className='font-montserrat'>
      {dict.lang}
    </div>
  )
}