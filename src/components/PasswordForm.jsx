export function PasswordForm() {
    return (
      <form action="" role="change-password" className="space-y-6">
        <fieldset className="border border-gray-300 p-5 rounded-lg">
          <legend className="text-xl font-semibold text-gray-700">Cambiar Contraseña</legend>
  
          <label className="block mt-4">
            <span className="text-gray-600">Contraseña Actual</span>
            <input
              type="password"
              name="oldPassword"
              className="mt-2 block w-full h-10 px-3 rounded-lg border-gray-300 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
            />
          </label>
  
          <label className="block mt-4">
            <span className="text-gray-600">Nueva Contraseña</span>
            <input
              type="password"
              name="newPassword"
              className="mt-2 block w-full h-10 px-3 rounded-lg border-gray-300 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
            />
          </label>
  
          <label className="block mt-4">
            <span className="text-gray-600">Confirmar Nueva Contraseña</span>
            <input
              type="password"
              name="confirm_new_password"
              className="mt-2 block w-full h-10 px-3 rounded-lg border-gray-300 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
            />
          </label>
        </fieldset>
  
        <div className="flex justify-end mt-6">
          <button
            type="submit"
            className="px-5 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50 cursor-pointer"
          >
            Cambiar Contraseña
          </button>
        </div>
      </form>
    )
  }