import en from '@/app/lng/en.json'
import ar from '@/app/lng/ar.json'

const Dictionary = (lang)=>{
  if(lang ==='en'){
    return en;
  }else{
    return ar;
  }
}

export default function GetDictionary(lang){
  if(lang ==='en'){
    return en;
  }else{
    return ar;
  }
}