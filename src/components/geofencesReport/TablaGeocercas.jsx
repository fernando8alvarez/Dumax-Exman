import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { idGenerate, durationTime, sortReports } from "../../helpers";


const table = [
    { id: 1, title: "Nombre de la unidad", style: "w-[16%] px-2 py-3 text-center", },
    { id: 2, title: "Geocerca", style: "w-[16%] py-3 text-center" },
    { id: 3, title: "Tipo de geocerca", style: "w-[16%] py-3 text-center" },
    { id: 4, title: "Fecha de entrada", style: "w-[16%] py-3 text-center" },
    { id: 5, title: "Fecha de salida", style: "w-[16%] py-3 text-center" },
    { id: 6, title: "Duración", style: "w-[16%] py-3 text-center" },
]

const TablaGeocercas = () => {

    const infoGeocercas = useSelector(state => state.informesGeocercas);

    const [reportes, setReportes] = useState([]);

    useEffect(() => {
        if (infoGeocercas?.length > 0) {
            const newReports = infoGeocercas.map(item => (
                {
                    ...item,
                    id: idGenerate(),
                    duration: durationTime(item)
                }
            ))
            setReportes(sortReports(newReports));
        }
        else setReportes([])
    }, [infoGeocercas]);


    return (

        <div className="w-full">
            <div id='recipients' className="rounded shadow bg-gray-50">

                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-slate-700 ">
                        <thead className="text-xs text-white bg-zinc-900 ">
                            <tr className="border-b">
                                {table.map(item => (
                                    <th key={item.id} scope="col" className={item.style}>{item.title}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {reportes?.length > 0 && reportes.map((items) => (
                                <tr className="border-b" key={items.id}>
                                    <td className="w-[16%] px-2 py-3 text-center">{items.nombreUnidad}</td>
                                    <td className=" w-[16%] py-3 text-center">{items.nombreGeocerca}</td>
                                    <td className=" w-[16%] py-3 text-center">{items.tipoDeGeocerca}</td>
                                    <td className=" w-[16%] py-3 text-center">{items.timeStamps.entrada}</td>
                                    <td className=" w-[16%] py-3 text-center">{items.timeStamps.salida}</td>
                                    <td className=" w-[16%] py-3 text-center">{items.duration}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    );
}

export default TablaGeocercas;