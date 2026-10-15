import estudiantes from "./datos.js";
import { promedio, evaluarEstado } from "./calculos.js";

const ulReportes = document.querySelector("#reportes");

estudiantes.forEach(({ nombre, notas }) => {
    
    const prom = promedio(...notas);
    const estado = evaluarEstado(prom);

    const reporteEstudiante = {
        nombre,
        historialNotas: [...notas],
        promedioFinal: prom.toFixed(1),
        estado
    };

    console.log(reporteEstudiante);
    ulReportes.innerHTML += `
        <li>
            <strong>${reporteEstudiante.nombre}</strong> - 
            Promedio: ${reporteEstudiante.promedioFinal} 
            (<span style="color: ${estado === 'Aprobado' ? 'green' : 'red'}">${estado}</span>)
        </li>
    `;
});
