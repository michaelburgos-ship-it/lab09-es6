export const promedio = (...notas) => {
    if (notas.length === 0) return 0;
    const suma = notas.reduce((total, nota) => total + nota, 0);
    return suma / notas.length;
};
export const evaluarEstado = (nota, minima = 13) => {
    return nota >= minima ? "Aprobado" : "Desaprobado";
};
