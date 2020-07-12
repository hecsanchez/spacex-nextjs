const Pagination = ({itemsPerPage, totalItems, onNext}) => {
    const pages =Array.apply(null, Array(totalItems/itemsPerPage)).map(function (x, i) { return i; })

    return(
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="mt-8 bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-center">
              <div>
                <nav className="relative z-0 inline-flex shadow-sm">
                  {pages && pages.map(page=>(
                    <button onClick={() => onNext(page)} className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150">
                        {page + 1}
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Pagination;