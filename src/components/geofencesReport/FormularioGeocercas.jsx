import { useState } from "react";
import { useForm } from "react-hook-form";
import { createGeocerca } from "../../redux/actions";
import { useDispatch } from "react-redux";

const FormularioGeocercas = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const dispatch = useDispatch();

    const onSubmit = (data) => {
        dispatch(createGeocerca(data));
        reset();
    }


    return (
        <div className="flex flex-col gap-4">
            <h1 className="font-semibold text-2xl">Crear Geocerca</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
                <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="geocerca" className="text-sm font-semibold">Geocerca *</label>
                    <select name="geocerca" id="geocerca" rules={{
                        required: "Este campo es requerido",
                    }} {...register('geocerca', { required: 'Seleccione una opción' })}
                        className={`text-sm py-1 px-1 bg-slate-200 rounded-md border-2 ${errors.geocerca?.type ? "border-red-600 " : "border-gray-400 hover:border-gray-600 outline-gray-600"}`}>
                        <option value="" hidden>Seleccione una opción</option>
                        <option value="Monterrey" className="">Monterrey</option>
                        <option value="Ciudad de Mexico" className="">Ciudad de México</option>
                        <option value="Texas" className="">Texas</option>
                        <option value="Los Angeles" className="">Los Angeles</option>
                        <option value="Laredo" className="">Laredo</option>
                    </select>
                    {errors.geocerca?.type && <p className="text-xs text-red-600">Este campo es requerido</p>}
                </div>
                <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="unidades" className="text-sm font-semibold">Unidades *</label>
                    <select name="unidades" id="unidades"
                        {...register('unidades', { required: 'Seleccione una opción' })}
                        className={`text-sm py-1 px-1 bg-slate-200 rounded-md border-2 ${errors.unidades?.type ? "border-red-600 " : "border-gray-400 hover:border-gray-600 outline-gray-600"}`}>
                        <option value="" hidden>Seleccione una opción</option>
                        <option value="Base 1525" className="">Base 1525</option>
                        <option value="Base 1458" className="">Base 1458</option>
                        <option value="Base 1258" className="">Base 1258</option>
                    </select>
                    {errors.unidades?.type && <p className="text-xs text-red-600">Este campo es requerido</p>}
                </div>
                <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="nombreUnidad" className="text-sm font-semibold">Nombre de la Unidad</label>
                    <input type="text" name="nombreUnidad" id="nombreUnidad" {...register('nombreUnidad', {
                        required: "Este campo es requerido",
                        maxLength: {
                            value: 10,
                            message: "El campo debe tener al menos de 10 caracteres"
                        }
                    })}
                        className={`text-sm py-1 px-1 bg-slate-200 rounded-md border-2 ${errors.nombreUnidad?.type ? "border-red-600 hover:border-red-600 outline-red-600" : "border-gray-400 hover:border-gray-600 outline-gray-600"}`} />
                    {errors.nombreUnidad?.type && <p className="text-xs text-red-600">{errors.nombreUnidad.message}</p>}
                </div>
                <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="licenciaChofer" className="text-sm font-semibold">Licencia del Chofer</label>
                    <input type="number" id="licenciaChofer" name="licenciaChofer"
                        {...register('licenciaChofer', {
                            required: "Este campo es requerido",
                            minLength: {
                                value: 10,
                                message: "El campo debe tener 10 caracteres"
                            },
                            maxLength: {
                                value: 10,
                                message: "El campo debe tener 10 caracteres"
                            }
                        })}
                        className={`text-sm py-1 px-1 bg-slate-200 rounded-md border-2 ${errors.licenciaChofer?.type ? "border-red-600 hover:border-red-600 outline-red-600" : "border-gray-400 hover:border-gray-600 outline-gray-600"}`} />
                    {errors.licenciaChofer?.type && <p className="text-xs text-red-600">{errors.licenciaChofer.message}</p>}
                </div>
                <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="emailChofer" className="text-sm font-semibold">Email Chofer</label>
                    <input type="text" id="emailChofer" name="emailChofer"
                        {...register('emailChofer', {
                            required: "Este campo es requerido",
                            pattern: {
                                value: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-z]{2,7}$/,
                                message: "El email no es válido"
                            }
                        })}
                        className={`text-sm py-1 px-1 bg-slate-200 rounded-md border-2 ${errors.emailChofer?.type ? "border-red-600 hover:border-red-600 outline-red-600" : "border-gray-400 hover:border-gray-600 outline-gray-600"}`} />
                    {errors.emailChofer?.type && <p className="text-xs text-red-600">{errors.emailChofer.message}</p>}
                </div>
                <div className="w-full flex justify-center mt-4 h-full">
                    <input type="submit" value="Crear Geocerca" className="h-fit px-6 py-1.5 text-sm font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 cursor-pointer" />
                </div>
            </form>
        </div>
    );
}
export default FormularioGeocercas;