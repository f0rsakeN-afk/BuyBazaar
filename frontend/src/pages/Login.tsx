import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.webp'
import FloatingFruits from '../components/FloatingFruits';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className='flex items-center justify-center min-h-screen bg-gradient-to-r from-green-400 to-yellow-300 px-4 overflow-hidden'>
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8 fade-in-up">
        <div className="mb-8 text-center scale-in">
          <div className="flex justify-center mb-4">
            <img src={Logo} alt="logo" className='h-20' />
          </div>
          <h2 className="text-3xl font-extrabold text-gray-900">Welcome back to BuyBazaar</h2>
          <p className="mt-2 text-sm text-gray-600">Sign in to access fresh deals</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="slide-in-left delay-0">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              id="email"
              type="email"
              {...register('email', { required: 'Email is required', pattern: /^\S+@\S+$/i })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
              placeholder="youremail@example.com"
            />
            {errors.email && <p className="mt-2 text-sm text-red-600">{errors?.email.message}</p>}
          </div>
          <div className="slide-in-left delay-1">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              type="password"
              {...register('password', { required: 'Password is required', minLength: 6 })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
              placeholder="Enter your password"
            />
            {errors.password && <p className="mt-2 text-sm text-red-600">{errors?.password.message}</p>}
          </div>
          <div className="button-pulse">
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-green-500 to-yellow-400 hover:from-green-600 hover:to-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transform transition-all duration-150 hover:scale-105"
            >
              Sign in to BuyBazaar
            </button>
          </div>
        </form>
        <div className="mt-6 text-sm text-center fade-in">
          <Link to='/signup' className="font-medium text-green-600 hover:text-green-500">
            New to BuyBazaar? Create an account
          </Link>
        </div>
      </div>
     <FloatingFruits/>
    </div>
  );
};

export default Login;