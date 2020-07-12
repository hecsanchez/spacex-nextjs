import Card from '@/components/Card';

const Cards = (data) => {
    return(
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {data.launchesPast 
              && data.launchesPast.map(item=>(
                <Card item={item}/>
              ))
            }
          </ul>
        </div>
    )
}

export default Cards;