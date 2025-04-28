
export function ProfileForm() {
    return (
      <form action="" role="profile" className="space-y-6">
        <fieldset className="border border-gray-300 p-5 rounded-lg">
          <legend className="text-xl font-semibold text-gray-700">Información Personal</legend>
  
          <label className="block mt-4">
            <span className="text-gray-600">Primer Nombre</span>
            <input
              type="text"
              name="firstname"
              defaultValue="Ana"
              className="mt-2 block w-full h-10 px-3 rounded-lg border-gray-300 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
            />
          </label>
  
          <label className="block mt-4">
            <span className="text-gray-600">Segundo Nombre</span>
            <input
              type="text"
              name="middlename"
              defaultValue="María"
              className="mt-2 block w-full h-10 px-3 rounded-lg border-gray-300 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
            />
          </label>
  
          <label className="block mt-4">
            <span className="text-gray-600">Primer Apellido</span>
            <input
              type="text"
              name="lastname"
              defaultValue="González"
              className="mt-2 block w-full h-10 px-3 rounded-lg border-gray-300 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
            />
          </label>
  
          <label className="block mt-4">
            <span className="text-gray-600">Segundo Apellido</span>
            <input
              type="text"
              name="secondlastname"
              defaultValue="Pérez"
              className="mt-2 block w-full h-10 px-3 rounded-lg border-gray-300 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
            />
          </label>
        </fieldset>
  
        <fieldset className="border border-gray-300 p-5 rounded-lg">
          <legend className="text-xl font-semibold text-gray-700">Contacto</legend>
  
          <label className="block mt-4">
            <span className="text-gray-600">Correo Electrónico</span>
            <input
              type="email"
              name="email"
              defaultValue="ana.gonzalez@email.com"
              readOnly
              className="mt-2 block w-full h-10 px-3 rounded-lg border-gray-300 bg-gray-100 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
            />
          </label>
  
          <label className="block mt-4">
            <span className="text-gray-600">Teléfono</span>
            <input
              type="tel"
              name="phone"
              defaultValue="78901234"
              className="mt-2 block w-full h-10 px-3 rounded-lg border-gray-300 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
            />
          </label>
  
          <label className="block mt-4">
            <span className="text-gray-600">Teléfono de Emergencia</span>
            <input
              type="tel"
              name="emergency_phone"
              defaultValue="77778888"
              className="mt-2 block w-full h-10 px-3 rounded-lg border-gray-300 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
            />
          </label>
  
          <label className="block mt-4">
            <span className="text-gray-600">Dirección</span>
            <input
              type="text"
              name="address"
              defaultValue="Calle Falsa 123"
              className="mt-2 block w-full h-10 px-3 rounded-lg border-gray-300 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
            />
          </label>
        </fieldset>
  
        <fieldset className="border border-gray-300 p-5 rounded-lg">
          <legend className="text-xl font-semibold text-gray-700">Rol</legend>
  
          <label className="block mt-4">
            <span className="text-gray-600">Rol</span>
            <input
              type="text"
              name="role"
              defaultValue="Administrador"
              readOnly
              className="mt-2 block w-full h-10 px-3 rounded-lg border-gray-300 bg-gray-100 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
            />
          </label>
        </fieldset>
        <div className="flex justify-end mt-6">
          <button
            type="submit"
            className="px-5 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50 cursor-pointer"
          >
            Guardar
          </button>
        </div>
      </form>
    )
  } 