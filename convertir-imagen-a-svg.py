"""
Script de vectorización con Python y vtracer para convertir imágenes de mapa de bits (JPG/PNG) a SVG.
"""

import os
import vtracer


def convertirImagenASvg(
    ruta_entrada: str,
    ruta_salida: str,
    modo_color: str = "binary",
    filtro_manchas: int = 4,
    umbral_esquinas: int = 60,
    precision_rutas: int = 3,
) -> str:
    if not os.path.exists(ruta_entrada):
        raise FileNotFoundError(f"No se encontró la imagen en: {ruta_entrada}")

    vtracer.convert_image_to_svg_py(
        ruta_entrada,
        ruta_salida,
        colormode=modo_color,
        hierarchical="stacked",
        mode="spline",
        filter_speckle=filtro_manchas,
        color_precision=8,
        layer_difference=16,
        corner_threshold=umbral_esquinas,
        length_threshold=4.0,
        max_iterations=10,
        splice_threshold=45,
        path_precision=precision_rutas,
    )

    # Asegurar viewBox responsivo
    with open(ruta_salida, "r", encoding="utf-8") as f:
        contenido_svg = f.read()

    if 'viewBox="' not in contenido_svg and 'width="1000" height="1003"' in contenido_svg:
        contenido_svg = contenido_svg.replace(
            '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="1000" height="1003">',
            '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1003" width="1000" height="1003">',
        )
        with open(ruta_salida, "w", encoding="utf-8") as f:
            f.write(contenido_svg)

    print(f"Vectorización completada exitosamente: {ruta_salida}")
    return ruta_salida


if __name__ == "__main__":
    directorio_actual = os.path.dirname(os.path.abspath(__file__))
    archivo_entrada = os.path.join(directorio_actual, "deus_ex_umbra.jpg")
    archivo_salida = os.path.join(directorio_actual, "deus_ex_umbra.svg")

    convertirImagenASvg(archivo_entrada, archivo_salida)
