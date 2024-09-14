import { SubmitHandler } from "react-hook-form";
import { ContactInfo, ContactFormInputTypes } from "../types/contactTypes"
import { useForm } from "react-hook-form";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import 'leaflet/dist/leaflet.css'



const dummyContactInfo: ContactInfo = {
  address: "123 Fruit Lane, Veggie Town, VG 12345",
  phone: "(555) 123-4567",
  email: "info@freshharvest.com",
  hours: "Mon-Sat: 8am - 8pm, Sun: 10am - 6pm",
  coordinates: [26.452475, 87.271782]
};

const Contact = () => {
  const { register, handleSubmit, formState: { errors } }
    = useForm<ContactFormInputTypes>();


  const onSubmit: SubmitHandler<ContactFormInputTypes> = (data) => {
    console.log(data)
  }
  return (
    <div className="min-h-screen bg-green-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-green-800 mb-12">Contact Fresh BuyBazaar</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Map and Contact Info */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-64">
              <MapContainer
                center={dummyContactInfo.coordinates}
                zoom={13}
                style={{ height: '100%', width: '100%' }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={dummyContactInfo.coordinates}>
                  <Popup>
                    Fresh BuyBazaar <br /> {dummyContactInfo.address}
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
            <div className="p-6 space-y-4">
              <h2 className="text-2xl font-semibold text-green-700">Visit Our Store</h2>
              <p className="text-gray-600">
                <strong>Address:</strong> {dummyContactInfo.address}
              </p>
              <p className="text-gray-600">
                <strong>Phone:</strong> {dummyContactInfo.phone}
              </p>
              <p className="text-gray-600">
                <strong>Email:</strong> {dummyContactInfo.email}
              </p>
              <p className="text-gray-600">
                <strong>Hours:</strong> {dummyContactInfo.hours}
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-green-700 mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    {...register("name", { required: "Name is required" })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                      }
                    })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    {...register("message", { required: "Message is required" })}
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  ></textarea>
                  {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>}
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact