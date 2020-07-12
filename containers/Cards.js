import Card from '@/components/Card';

const Cards = (data) => {
    return(
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data.launchesPast 
            && data.launchesPast.map(item=>(
            <Card item={item}/>
            ))
        }
        </ul>
    )
}

export default Cards;