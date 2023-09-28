import Dropdowns from "./Dropdowns";
import FormularioGeocercas from "./FormularioGeocercas";
import TablaGeocercas from "./TablaGeocercas";

const InformeGeocercas = () => {
    return (
        <div className="w-full bg-transparent text-lg">
            <div className="flex flex-col gap-5 pt-5">
                <h1 className="pl-5 text-gray-800 text-2xl font-bold">Informe de geocercas</h1>
                <div className="bg-gray-50 rounded-lg h-auto px-5 py-6 drop-shadow-lg w-full">
                    <Dropdowns />
                </div>
                <div className="flex w-full gap-4">
                    <div className="w-1/4 bg-gray-50 rounded-lg h-auto px-4 py-6 drop-shadow-lg">
                        <FormularioGeocercas />
                    </div>
                    <div className="w-3/4">
                        <TablaGeocercas/>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default InformeGeocercas;