
import { getNewsItem } from "@/lib/news";
import { notFound } from "next/navigation";


export default async function InterceptedImagePage({ params }) {
    
    const newsItemSlug = params.slug;
    const newsItem = await getNewsItem(newsItemSlug)

    if (!newsItem) return (
        notFound()
    )
    return (
        <>
            <ModalBackdrop/>
            <dialog className="modal" open>
                <div className="fullscreen-image">
                    <img src={`/images/news/${newsItem.image}`} alt={newsItem.item} style={{
                        width: '100%',
                    }} />
                </div>
            </dialog>

        </>
    )

}