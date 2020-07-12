import moment from 'moment-timezone';

const imageUrl = (images) => (
    images[
      Math.floor(Math.random() * images.length)
    ]
);

const launchDate = (date) => (
    moment(date)
        .tz('America/Mexico_City')
        .format('DD MMM YY ha z')
);

const Card = ({item}) => (
    <li key={item.mission_name.replace(/ /g, '')} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
        <div className="flex-shrink-0">
            <img className="h-48 w-full object-cover" src={imageUrl(item.links.flickr_images)} alt="" />
        </div>
        <div className="flex-1 bg-white p-6 flex flex-col justify-between">
            <div className="flex-1">
                <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                {item.mission_name}
                </h3>
                <div className="-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-no-wrap">
                    <div className="ml-4 mt-2 flex-shrink-0">
                        <p className="leading-6 font-medium text-gray-600">
                        {launchDate(item.launch_date_utc)}
                        </p>
                    </div>
                </div>
            </div>
            <div className="mt-6 flex items-center">
                <a href={item.links.wikipedia} type="button" className="relative inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700 active:bg-indigo-700">
                    Read more
                </a>
            </div>
        </div>
    </li>
)

export default Card;