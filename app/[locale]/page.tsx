import { getDictionary } from "@/lib/i18n/getDictionary"

type Locale = "fr" | "he";

async function page( {params} : {params : {locale : Locale}} ) {

  const dict = await getDictionary(params.locale)

  return (
    <div>

    </div>
  )

}

export default page