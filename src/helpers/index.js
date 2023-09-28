//GENERADOR DE ID UNICO
export const idGenerate = () => {
    const radom = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);

    return fecha + radom;
};

//CALCULO DE TIEMPO DE DURACION DE LA UNIDAD
export const durationTime = (report) => {
    const fechaEntrada = new Date(report.timeStamps.entrada);
    const fechaSalida = new Date(report.timeStamps.salida);

    const diferencia = fechaSalida - fechaEntrada;

    const segundos = Math.floor(diferencia / 1000) % 60;
    const minutos = Math.floor(diferencia / (1000 * 60)) % 60;
    const horas = Math.floor(diferencia / (1000 * 60 * 60));

    const duration = `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;

    return duration;
}

//ORDERNAR REPORTES DE GEOCERCAS DE FORMA DESCENDENTE
export const sortReports = (reports) => {

    return reports.sort((a, b) => {
        const dateA = new Date(a.timeStamps.entrada);
        const dateB = new Date(b.timeStamps.entrada);
        return dateB - dateA;
    })

}

export const informes = [
    { id: 1, title: "Informe de telemetría", name:"telemetria", style: "flex items-center p-2 text-gray-900 hover:bg-gray-200 border-b-2 border-gray-200 group", },
    { id: 2, title: "Informe de velocidad", name:"velocidad", style: "flex items-center p-2 text-gray-900 hover:bg-gray-200 border-b-2 border-gray-200 group" },
    { id: 3, title: "Informe de geocercas", name:"geocercas", style: "flex items-center p-2 text-gray-900 hover:bg-gray-200 border-b-2 border-gray-200 group" },
    { id: 4, title: "Informe de temperatura", name:"temperatura", style: "flex items-center p-2 text-gray-900 hover:bg-gray-200 border-b-2 border-gray-200 group" },
    { id: 5, title: "Informe de conducción", name:"conduccion", style: "flex items-center p-2 text-gray-900 hover:bg-gray-200 border-b-2 border-gray-200 group" },
    { id: 6, title: "Informe de kilometraje", name:"kilometraje", style: "flex items-center p-2 text-gray-900 hover:bg-gray-200 border-b-2 border-gray-200 group" },
    { id: 7, title: "Informe de combustible", name:"combustible", style: "flex items-center p-2 text-gray-900 hover:bg-gray-200 border-b-2 border-gray-200 group" },
    { id: 8, title: "Informe de reversa", name:"reversa", style: "flex items-center p-2 text-gray-900 hover:bg-gray-200 border-b-2 border-gray-200 group" },
    { id: 9, title: "Informe de remolque", name:"remolque", style: "flex items-center p-2 text-gray-900 hover:bg-gray-200 border-b-2 border-gray-200 group" },
    { id: 10, title: "Informe de viajes",name:"viajes", style: "flex items-center p-2 text-gray-900 hover:bg-gray-200 border-b-2 border-gray-200 group" },
];