import { useState } from "react";
import { useDispatch } from "react-redux";
import { getReports } from "../../redux/actions";


const Dropdowns = () => {

    const dispatch = useDispatch();

    const [report, setReport] = useState({
        geocerca: "",
        unidades: "",
        fechas: ""
    });

    const [error, setError] = useState(false);

    function hanledReport(e) {
        e.preventDefault();
        setReport({ ...report, [e.target.name]: e.target.value });
    }


    function generateReport() {

        if (report.geocerca === "" || report.unidades === "" || report.fechas === "") {
            return setError(true);
        } else {
            setError(false);
            dispatch(getReports(report));
            setReport({
                geocerca: "",
                unidades: "",
                fechas: ""
            })
        }
    }

    return (
        <div className="flex justify-between items-center w-full">
            <div className="flex w-9/12 gap-4 text-slate-700">
                <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="geocerca" className="text-sm font-bold">Geocerca *</label>
                    <select name="geocerca" id="geocerca" value={report.geocerca} onChange={hanledReport} className={`text-sm py-2 px-1 bg-slate-200 rounded-md border-2 ${error ? "border-red-600" : "bg-gray-400"} hover:border-gray-600 outline-gray-600`}>
                        <option value="" hidden>Seleccione una opcion</option>
                        <option value="Monterrey" className="">Monterrey</option>
                        <option value="Ciudad de México" className="">Ciudad de México</option>
                        <option value="Texas" className="">Texas</option>
                        <option value="Los Angeles" className="">Los Angeles</option>
                        <option value="Laredo" className="">Laredo</option>
                    </select>
                </div>
                <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="unidades" className="text-sm font-bold">Unidades *</label>
                    <select name="unidades" id="unidades" value={report.unidades} onChange={hanledReport} className={`text-sm py-2 px-1 bg-slate-200 rounded-md border-2 ${error ? "border-red-600" : "bg-gray-400"} hover:border-gray-600 outline-gray-600`}>
                        <option value="" hidden>Seleccione una opcion</option>
                        <option value="Base 1525" className="">Base 1525</option>
                        <option value="Base 1458" className="">Base 1458</option>
                        <option value="Base 1258" className="">Base 1258</option>
                    </select>
                </div>
                <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="fechas" className="text-sm font-bold">Rangos de fechas *</label>
                    <select name="fechas" id="fechas" value={report.fechas} onChange={hanledReport} className={`text-sm py-2 px-1 bg-slate-200 rounded-md border-2 ${error ? "border-red-600" : "bg-gray-400"} hover:border-gray-600 outline-gray-600`}>
                        <option value="" hidden>Seleccione una opcion</option>
                        <option value="Q1" className="">Q1</option>
                        <option value="Q2" className="">Q2</option>
                        <option value="Q3" className="">Q3</option>
                        <option value="Q4" className="">Q4</option>
                    </select>
                </div>

            </div>
            <div className="w-3/12 flex justify-end h-full">
                <button type="button" onClick={() => generateReport()} className={`h-fit px-6 py-1.5 text-sm font-semibold rounded-md text-white bg-blue-600  hover:bg-blue-700`}>Generar reporte</button>
            </div>
        </div >
    );
}



export default Dropdowns;