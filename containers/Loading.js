import Loader from 'react-loader-spinner'

const Loading = ({loading}) => {
  return(
    loading && (
        <div className="fixed bottom-0 inset-x-0 px-4 pb-6 sm:inset-0 sm:p-0 sm:flex sm:items-center sm:justify-center">
          <div className="fixed inset-0 transition-opacity">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>
          <div className="flex items-center justify-center">
            <Loader
              type="Puff"
              color="#00BFFF"
              height={50}
              width={50}
              timeout={3000}
            />
          </div>
        </div>
      )
)}

export default Loading;