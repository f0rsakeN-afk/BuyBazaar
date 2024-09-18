import Loader from "../components/Loader"
import Services from '../components/Services'

const Home = () => {
  return (
    <div className="container m-auto">
      {0 ? <Loader /> : <>
        <Services />

      </>}
    </div>
  )
}

export default Home