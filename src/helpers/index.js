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