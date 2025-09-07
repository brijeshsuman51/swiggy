

export default function DineCard({dineData}) {
    return (
        <div>
        <a target="_blank" href={dineData?.cta?.link}>
            <img className="w-50 h-40" src={'https://media-assets.swiggy.com/swiggy/image/upload/'+dineData?.info?.mediaFiles[0]?.url} alt="Restaurant"/>
        </a>
        </div>
    )
}