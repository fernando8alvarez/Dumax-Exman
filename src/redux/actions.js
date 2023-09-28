export const GET_REPORTS = 'GET_REPORTS';
export const ERROR = 'ERROR';
export const CREATE_GEOCERCA = 'CREATE_GEOCERCA';

const apiUrl = import.meta.env.VITE_API_URL;

export function getReports(report) {

    return async (dispatch) => {

        try {
            const response = await fetch(`${apiUrl}api/test/geocercas?geocerca=${report.geocerca}&unidades=${report.unidades}&fechas=${report.fechas}`);
            const data = await response.json();
            return dispatch({ type: GET_REPORTS, payload: data });

        } catch (error) {
            return dispatch({ type: ERROR, payload: "Fallo en la peticion al servidor" });
        }
    }
}

export function createGeocerca(geocerca) {
    return async (dispatch) => {
        const jsonData = JSON.stringify(geocerca);
        try {
            await fetch(`${apiUrl}api/test/geocercas`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: jsonData
            });

        } catch (error) {
            return dispatch({ type: ERROR, payload: "Fallo en la creacion de geocerca" })
        }
    }
}