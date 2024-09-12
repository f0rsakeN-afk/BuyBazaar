import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.webp';
import FloatingFruits from '../components/FloatingFruits';


const Signup = () => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center overflow-hidden">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-3xl shadow-2xl transform hover:rotate-0 transition-all duration-300 relative z-10 fade-in-up">
        <div className="text-center scale-in">
          <div className="flex justify-center">
            <img src={Logo} alt="logo" className='h-20 logo-spin' />
          </div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Join BuyBazaar
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Your one-stop shop for fresh deals
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="rounded-md shadow-sm space-y-4">
            {['username', 'email-address', 'password', 'password-confirm'].map((field, index) => (
              <div key={field} className={`slide-in-left delay-${index}`}>
                <input
                  id={field}
                  type={field.includes('password') ? 'password' : field === 'email-address' ? 'email' : 'text'}
                  {...register(field.replace('-', ''), {
                    required: `${field.split('-').join(' ')} is required`,
                    ...(field === 'email-address' && {
                      pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' }
                    }),
                    ...(field === 'password' && {
                      minLength: { value: 8, message: 'Password must be at least 8 characters' }
                    }),
                    ...(field === 'password-confirm' && {
                      validate: (val) => watch('password') === val || "Passwords do not match"
                    })
                  })}
                  className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm"
                  placeholder={field.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                />
              </div>
            ))}
          </div>

          {Object.keys(errors).length > 0 && (
            <div className="text-red-500 text-sm mt-2 fade-in">
              {Object.values(errors).map((error, index) => (
                <p key={index}>{error.message}</p>
              ))}
            </div>
          )}

          <div className="button-pulse">
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transform transition-all duration-150 hover:scale-105"
            >
              Create My BuyBazaar Account
            </button>
          </div>
        </form>
        <div className="text-sm text-center fade-in">
          <Link to='/login' className="font-medium text-orange-600 hover:text-orange-500">
            Already a bazaar member? Sign in
          </Link>
        </div>
      </div>
    
      <FloatingFruits/>
    </div>
  );
};

export default Signup;