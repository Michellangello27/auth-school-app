import { useForm } from "react-hook-form"
import { changePassword } from "../axios/auth/login";

export function PasswordForm() {
  const { register, reset, formState: {isValid}, handleSubmit, watch } = useForm()

  const submitForm = async (data) => {
    try {
      const status = await changePassword(data)
      if (status === 200) {
        alert("Contraseña ha sido cambiada con exito")
        reset()
      }
    } catch (error) {
      console.log(error)
    }

  }
  const confirm = watch('confirm_new_password');
  const newPassword = watch('newPassword')

  const validatePassword = () => confirm && newPassword !== confirm;
  
  return (
    <form onSubmit={handleSubmit(submitForm)} role="change-password" className="space-y-6">
      <fieldset className="border border-gray-300 p-5 rounded-lg">
        <legend className="text-xl font-semibold text-gray-700">Cambiar Contraseña</legend>

        <label className="block mt-4">
          <span className="text-gray-600">Contraseña Actual</span>
          <input
            type="password"
            {...register("oldPassword", {
              required: "Tu contraseña anterior es requerida"
            })}
            className="mt-2 block w-full h-10 px-3 rounded-lg border-gray-300 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
          />
        </label>

        <label className="block mt-4">
          <span className="text-gray-600">Nueva Contraseña</span>
          <input
            type="password"
            {...register("newPassword", {
              required: "Tu nueva contraseña es requerida"
            })}
            className="mt-2 block w-full h-10 px-3 rounded-lg border-gray-300 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
          />
        </label>

        <label className="block mt-4">
          <span className="text-gray-600">Confirmar Nueva Contraseña</span>
          <input
            type="password"
            {...register("confirm_new_password", {
              required: "Debes confirmar tu  nueva contraseña", 
              validate: (value) => value === newPassword
            })}
            className="mt-2 block w-full h-10 px-3 rounded-lg border-gray-300 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
          />
          {validatePassword() && <p className="text-red-500">Las Contraseñas no coinciden</p>}
        </label>
      </fieldset>

      <div className="flex justify-end mt-6">
        <button
          type="submit"
          className="px-5 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50 cursor-pointer disabled:bg-gray-600"
          disabled={!isValid}
        >
          Cambiar Contraseña
        </button>
      </div>
    </form>
  )
}