import { getNewsItem } from "@/lib/news";
import {notFound} from "next/navigation";

export default async function ImagePage({params}){
    const newsItemSlug = params.slug;
    const newsItem = await getNewsItem(newsItemSlug)

    if(!newsItem) return (
        notFound()
    )
    return (
        <>
            <div className="fullscreen-image">
                <img src={`/images/news/${newsItem.image}`} alt={newsItem.item}/>
            </div>
        </>
    )

}