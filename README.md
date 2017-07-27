Censa Árbol
===========

Aplicación desarrollada con el propósito de contribuir a los esfuerzos de conservación de los bosques mediante el registro de especímenes notables de árboles para su seguimiento, estudio y protección.

Permite:

 * Gestionar una lista principal de registros:

      | `# n`  | `código` |  `especie`  | `diámetro`
      |--------|----------|-------------|------------
      |    1   |  abc123  | Shihuahuaco |   300 cm
      |   ...  |||

    * Crear registros nuevos con el botón *Suma* (+)

  * Ingresar información respecto de los especímenes encontrados, su estado actual, capturando automáticamente la ubicación geográfica (mediante el GPS) y la hora.
  * Seleccionar especie de registros anteriores y obtener nombre científico y familia
  * Se calculan algunos campos (ubicación UTM y diámetro).
  * Se colorean en verde los campos vacíos.
  * Capturar y etiquetar fotografías con código único asociado al especimen.
  * Ingresar manualmente latitud / longitud en ausencia de señal (para uso de un GPS externo).
  * Mantiene la base de datos en un archivo CSV (valores separados por coma) el cual puede abrirse con cualquier planilla de cálculo.
  * Fotos y bases de datos se guardan en la memoria del dispositivo fácilmente ubicables en la carpeta "`DCIM/`".
  * Se guarda también un registro continuo (log) el cual nunca se sobreescribe ni se borra nada de él.

Criterios de Diseño y Desarrollo
--------------------------------

Diseñado para correr en dispositivos móviles. Se produce una aplicación para Android 5. La funcionalidad de fotografía únicamente es funcional en esta plataforma.

Se ha tenido los siguientes factores en cuenta:

 * Evitar pérdida de datos: _grabación redundante y contínua_
 * Optimización del tiempo de registro: _selección de especies, navegación de campo en campo, colorización de campos vacíos_
 * Facilidad de acceso a los datos: _formato CSV, datos y fotos en carpeta `DCIM/`_