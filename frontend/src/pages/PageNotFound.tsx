import { Link } from "react-router-dom"
const PageNotFound: React.FC = () => {
    return (

        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
                <h2 className="text-3xl font-semibold text-gray-600 mb-6">Page Not Found</h2>
                <p className="text-gray-500 mb-8">
                    Oops! The page you're looking for doesn't exist.
                </p>
                <Link
                    to="/"
                    className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
                >
                    Go Home
                </Link>
            </div>
        </div>

    )
}

export default PageNotFound