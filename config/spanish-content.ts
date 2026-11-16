import { localizedRoutePairs } from "@/config/localized-routes";

export interface SpanishSection {
  heading: string;
  paragraphs: string[];
  externalLinks?: SpanishLink[];
}
export interface SpanishFAQ { q: string; a: string }
export interface SpanishLink { label: string; href: string }
export interface SpanishPage {
  path: string;
  kind: "home" | "directory" | "category" | "service" | "about" | "contact" | "areas" | "guide-index" | "article" | "legal";
  title: string;
  description: string;
  keywords: string[];
  h1: string;
  eyebrow: string;
  intro: string;
  sections: SpanishSection[];
  faqs?: SpanishFAQ[];
  links?: SpanishLink[];
  category?: string;
}

const pages: SpanishPage[] = [
  {
    path: "/es/servicios-cerrajeria-bronx/", kind: "directory",
    title: "Servicios de Cerrajería en el Bronx | Solicitudes",
    description: "Consulte servicios de cerrajería móvil para el Bronx. Llame para confirmar disponibilidad, alcance, precio por adelantado y tiempo estimado de llegada.",
    keywords: ["servicios de cerrajería Bronx", "cerrajero móvil Bronx", "cerrajero residencial Bronx", "cerrajero automotriz Bronx", "cerrajero comercial Bronx"],
    h1: "Información sobre servicios de cerrajería en el Bronx", eyebrow: "Solicitudes residenciales, comerciales y de vehículos",
    intro: "Emergency Locksmith Bronx ofrece servicio móvil de cerrajería en todo el Bronx. Cada solicitud depende de la cerradura, el vehículo, la propiedad y las circunstancias. Llame para hablar con un cerrajero real y confirmar disponibilidad, el trabajo propuesto y el precio por adelantado para el alcance acordado.",
    sections: [
      { heading: "Elija el tipo de solicitud", paragraphs: ["Explore las páginas de apertura de viviendas y apartamentos, cerraduras de vehículos, llaves y controles, cerraduras comerciales, sistemas de llave maestra, cajas fuertes y buzones. Cada página explica qué información conviene compartir al llamar.", "La información de una página no significa que todos los modelos, trabajos o productos estén disponibles. Un cerrajero le hará preguntas sobre la ubicación y el problema para revisar la solicitud concreta antes del despacho."] },
      { heading: "Qué confirmar antes del despacho", paragraphs: ["Pregunte si el servicio está disponible para su dirección y situación, qué trabajo se propone y qué incluye el precio. La tarifa se confirma por adelantado para el alcance acordado; si se propone cambiarlo, el trabajo y cualquier cambio de precio se conversan antes de comenzar el trabajo adicional.", "No se agrega un cargo únicamente porque la dirección de servicio esté en otra parte del Bronx. Esto no significa que todos los trabajos tengan el mismo precio: el total depende del trabajo acordado."] },
      { heading: "Horario, llegada y cobertura", paragraphs: ["El horario regular es de lunes a jueves, de 9:00 a. m. a 5:00 p. m.; hay disponibilidad de servicio las 24 horas de viernes a domingo. No es disponibilidad 24/7 todos los días. Llame para confirmar la disponibilidad actual.", "El propietario informa un promedio de llegada de aproximadamente 20 minutos durante los últimos 90 días y que la mayoría de las llamadas de emergencia llegan en unos 15–20 minutos. Son promedios informados, no garantías; el tiempo de llegada no es el tiempo necesario para terminar el trabajo."] },
    ],
    links: [
      { label: "Cerrajero de emergencia", href: "/es/cerrajero-emergencia-bronx/" }, { label: "Cerrajero residencial", href: "/es/cerrajero-residencial-bronx/" }, { label: "Cerrajero para autos", href: "/es/cerrajero-automotriz-bronx/" }, { label: "Cerrajero comercial", href: "/es/cerrajero-comercial-bronx/" }, { label: "Servicios especializados", href: "/es/cerrajero-especializado-bronx/" },
      { label: "Apertura de auto", href: "/es/apertura-auto-bronx/" }, { label: "Reemplazo de llave de auto perdida", href: "/es/reemplazo-llave-auto-perdida-bronx/" }, { label: "Reparación de encendido", href: "/es/reparacion-encendido-auto-bronx/" }, { label: "Reemplazo de control remoto", href: "/es/reemplazo-control-llave-auto-bronx/" }, { label: "Apertura de casa", href: "/es/apertura-casa-bronx/" }, { label: "Apertura de apartamento", href: "/es/apertura-apartamento-bronx/" }, { label: "Cambio de combinación de cerradura", href: "/es/cambio-combinacion-cerradura-bronx/" }, { label: "Instalación de cerradura inteligente", href: "/es/instalacion-cerradura-inteligente-bronx/" }, { label: "Apertura de oficina o negocio", href: "/es/apertura-local-comercial-bronx/" }, { label: "Sistema de llave maestra", href: "/es/sistema-llave-maestra-bronx/" }, { label: "Reparación de barra antipánico", href: "/es/reparacion-barra-antipanico-bronx/" }, { label: "Apertura de caja fuerte", href: "/es/apertura-caja-fuerte-bronx/" }, { label: "Cerradura de buzón", href: "/es/cerradura-buzon-bronx/" },
    ],
    faqs: [
      { q: "¿El precio es fijo para cualquier servicio?", a: "No. El precio depende del trabajo solicitado y se confirma por adelantado para el alcance acordado antes del despacho." },
      { q: "¿Hay un cargo adicional según el vecindario del Bronx?", a: "No hay un cargo adicional únicamente porque la dirección esté en otra parte del Bronx. El precio del trabajo sí depende del alcance acordado." },
      { q: "¿Cómo confirmo si pueden atender mi cerradura o vehículo?", a: "Llame y comparta la marca, modelo, tipo de cerradura, ubicación y problema. La disponibilidad y compatibilidad se confirman para cada solicitud." },
    ],
  },
  {
    path: "/es/cerrajero-emergencia-bronx/", kind: "category",
    title: "Cerrajero de Emergencia en el Bronx | Horarios y Ayuda",
    description: "¿Necesita cerrajero de emergencia en el Bronx? Llame para confirmar disponibilidad, precio acordado y una estimación de llegada no garantizada.",
    keywords: ["cerrajero de emergencia Bronx", "cerrajero urgente Bronx", "apertura de emergencia Bronx", "cerrajero 24 horas Bronx", "servicio de cerrajería urgente"],
    h1: "Cerrajero de emergencia en el Bronx", eyebrow: "Llame para confirmar disponibilidad actual",
    intro: "Si tiene una emergencia con una cerradura, puerta o vehículo en el Bronx, llame al (646) 264-1901 para hablar con un cerrajero real. Le preguntará qué ocurrió y dónde está para confirmar disponibilidad, el alcance propuesto, el precio y una estimación actual de llegada.",
    sections: [
      { heading: "Horario de emergencia: confirme antes de salir", paragraphs: ["El horario regular es de lunes a jueves, de 9:00 a. m. a 5:00 p. m.; el servicio está disponible las 24 horas los viernes, sábados y domingos. No se ofrece disponibilidad 24/7 todos los días. La disponibilidad para su solicitud se confirma por teléfono.", "El propietario informa un promedio de llegada cercano a 20 minutos durante los últimos 90 días; la mayoría de llamadas de emergencia, aproximadamente 15–20 minutos. Son cifras informadas y no garantizan una hora de llegada. El tiempo para completar el trabajo es distinto."] },
      { heading: "Explique la situación antes del despacho", paragraphs: ["Indique su dirección o intersección, si se trata de una vivienda, negocio o vehículo, y cualquier detalle que conozca sobre la puerta, cerradura o automóvil. En llamadas de vehículos, comparta marca, modelo y año. Un cerrajero real responde y hace preguntas pertinentes para que el técnico despachado pueda prepararse con herramientas y piezas adecuadas a la solicitud.", "La disponibilidad depende de la solicitud específica. No se promete un método de entrada, compatibilidad universal ni un resultado sin daños. Pregunte qué trabajo se propone y si existen riesgos antes de autorizarlo."] },
      { heading: "Precio claro para el alcance acordado", paragraphs: ["El precio del trabajo acordado se confirma por adelantado antes del despacho. No se agrega un cargo únicamente porque la dirección esté en otra parte del Bronx. Si la situación requiere cambiar el alcance, se conversan el trabajo adicional y el cambio de precio antes de comenzar.", "Para prepararse, tenga a mano detalles de acceso y, cuando corresponda, confirme con la administración del edificio quién puede autorizar el servicio."] },
    ],
    links: [{ label: "Apertura de casa", href: "/es/apertura-casa-bronx/" }, { label: "Apertura de apartamento", href: "/es/apertura-apartamento-bronx/" }, { label: "Apertura de vehículo", href: "/es/apertura-auto-bronx/" }, { label: "Contacto", href: "/es/contacto/" }],
    faqs: [
      { q: "¿Ofrecen servicio las 24 horas todos los días?", a: "No. El horario regular es de lunes a jueves, de 9 a. m. a 5 p. m.; hay disponibilidad las 24 horas de viernes a domingo. Llame para confirmar disponibilidad actual." },
      { q: "¿Cuánto tarda en llegar el cerrajero?", a: "El propietario informa un promedio de unos 20 minutos en los últimos 90 días y que la mayoría de llamadas de emergencia llega en 15–20 minutos. No es una garantía; llame para obtener una estimación actual." },
      { q: "¿Cuánto cuesta una llamada de emergencia?", a: "Depende del trabajo y el alcance acordado. El precio se confirma por adelantado antes del despacho; no hay recargo solo por tener otra dirección dentro del Bronx." },
    ],
  },
  {
    path: "/es/cerrajero-automotriz-bronx/", kind: "category",
    title: "Cerrajero Automotriz en el Bronx | Llaves y Aperturas",
    description: "Solicite información sobre cerrajería automotriz en el Bronx: apertura de auto, llaves perdidas, controles y encendido. Confirme compatibilidad y precio.",
    keywords: ["cerrajero automotriz Bronx", "cerrajero de autos Bronx", "apertura de auto Bronx", "reemplazo de llave de auto Bronx", "control remoto de auto Bronx"],
    h1: "Cerrajero automotriz en el Bronx", eyebrow: "Solicitudes de llaves y cerraduras de vehículos",
    intro: "Los sistemas de llaves y cerraduras de vehículos varían según la marca, el modelo, el año y el tipo de llave. Llame con esos datos y la ubicación para consultar si la solicitud está disponible, qué información puede hacer falta y cuál sería el precio por adelantado para el trabajo acordado.",
    sections: [
      { heading: "Apertura de vehículo y llaves", paragraphs: ["La página reúne información sobre aperturas de vehículos, reemplazo de llaves perdidas, controles remotos y problemas de encendido. No se garantiza compatibilidad con todos los vehículos ni disponibilidad de todos los servicios.", "Comparta la marca, el modelo, el año, la ubicación del vehículo y si tiene otra llave funcional. Un cerrajero real le hará preguntas pertinentes para que el técnico pueda prepararse con herramientas y piezas relacionadas con su solicitud."] },
      { heading: "Confirme el alcance y el precio", paragraphs: ["Antes del despacho, confirme qué trabajo se propone y qué incluye el precio acordado. La disponibilidad y compatibilidad dependen del sistema exacto del vehículo. Si cambia el alcance, cualquier trabajo y ajuste de precio se conversan antes de comenzar trabajo adicional.", "El servicio es móvil en todo el Bronx y no hay un cargo adicional únicamente por la dirección dentro del distrito. Llame para confirmar la disponibilidad actual y una estimación de llegada no garantizada."] },
      { heading: "Información útil para tener a mano", paragraphs: ["Anote la marca, el modelo y el año; describa si perdió todas las llaves, si una llave está atascada o rota, o si el control dejó de funcionar. Informe dónde está estacionado el vehículo y cualquier instrucción de acceso.", "No suponga que un cerrajero o concesionario puede atender todos los sistemas. Pregunte por la compatibilidad, los documentos o autorizaciones que puedan ser relevantes para su caso."] },
    ],
    links: [{ label: "Apertura de auto", href: "/es/apertura-auto-bronx/" }, { label: "Llave de auto perdida", href: "/es/reemplazo-llave-auto-perdida-bronx/" }, { label: "Reparación de encendido", href: "/es/reparacion-encendido-auto-bronx/" }, { label: "Control o llave con control remoto", href: "/es/reemplazo-control-llave-auto-bronx/" }, { label: "Comparar cerrajero móvil y concesionario", href: "/es/guias/llaves-auto-perdidas-cerrajero-o-concesionario/" }],
    faqs: [
      { q: "¿Pueden hacer una llave para cualquier automóvil?", a: "No se afirma compatibilidad universal. Depende de la marca, el modelo, el año y el sistema de llave; llame con esos datos para confirmar." },
      { q: "¿Qué datos debo dar por teléfono?", a: "La marca, el modelo, el año, la ubicación y qué pasó con la llave, el control o el encendido. Pregunte si hace falta alguna información adicional." },
      { q: "¿El precio incluye cualquier trabajo necesario?", a: "El precio se confirma para el alcance acordado. Si se propone un cambio, deben explicarse el trabajo y cualquier cambio de precio antes de comenzar trabajo adicional." },
    ],
  },
  {
    path: "/es/cerrajero-residencial-bronx/", kind: "category",
    title: "Cerrajero Residencial en el Bronx | Casas y Apartamentos",
    description: "Información de cerrajería residencial en el Bronx: aperturas, cambio de combinación y cerraduras inteligentes. Consulte compatibilidad, alcance y precio.",
    keywords: ["cerrajero residencial Bronx", "cerrajero para casa Bronx", "cerrajero para apartamento Bronx", "apertura de vivienda Bronx", "cambio de combinación cerradura Bronx"],
    h1: "Cerrajero residencial en el Bronx", eyebrow: "Casas, apartamentos y cerraduras residenciales",
    intro: "Las viviendas del Bronx tienen distintos tipos de puertas, cilindros, cerrojos y cerraduras inteligentes. Llame para describir la propiedad y la cerradura, confirmar si el servicio está disponible y conversar el trabajo propuesto y su precio antes del despacho.",
    sections: [
      { heading: "Aperturas de casas y apartamentos", paragraphs: ["En una apertura, las opciones dependen de la puerta, la cerradura, su estado y las circunstancias de acceso. Pregunte qué método se propone, qué riesgos puede haber y cuál es el precio para el alcance acordado antes de autorizar el trabajo.", "Si alquila o vive en un edificio administrado, revise el contrato de alquiler o consulte con el propietario o la administración antes de cambiar herrajes. Los requisitos varían según el inmueble."] },
      { heading: "Reconfiguración de cerraduras y cerraduras inteligentes", paragraphs: ["La reconfiguración de una cerradura puede ser una opción para ciertos herrajes existentes, pero su conveniencia depende del tipo y estado de la cerradura. Para una cerradura inteligente, confirme el modelo, las medidas de la puerta y las reglas de la propiedad antes de comprar o modificar herrajes.", "No todas las cerraduras o puertas son compatibles. Comparta el modelo y lo que ya está instalado para que un cerrajero pueda revisar la solicitud y explicar las opciones que estén disponibles."] },
      { heading: "Precio, disponibilidad y llegada", paragraphs: ["El precio se confirma por adelantado para el trabajo acordado; cualquier cambio de alcance o costo debe hablarse antes de hacer trabajo adicional. No hay un recargo únicamente por una dirección residencial situada en otra parte del Bronx.", "El horario regular es de lunes a jueves, de 9 a. m. a 5 p. m.; hay servicio disponible las 24 horas de viernes a domingo. Llame para confirmar disponibilidad y recibir una estimación de llegada actual, que no es una garantía."] },
    ],
    links: [{ label: "Apertura de casa", href: "/es/apertura-casa-bronx/" }, { label: "Apertura de apartamento", href: "/es/apertura-apartamento-bronx/" }, { label: "Cambio de combinación", href: "/es/cambio-combinacion-cerradura-bronx/" }, { label: "Cerradura inteligente", href: "/es/instalacion-cerradura-inteligente-bronx/" }, { label: "Guía de apartamentos antiguos y cerraduras inteligentes", href: "/es/guias/cerraduras-inteligentes-apartamentos-antiguos-bronx/" }],
    faqs: [
      { q: "¿Pueden abrir cualquier cerradura residencial?", a: "La disponibilidad y el método dependen de la cerradura, la puerta y su condición. Llame con los detalles y confirme los riesgos y el alcance antes de autorizar el servicio." },
      { q: "¿Debo pedir permiso antes de cambiar la cerradura de un alquiler?", a: "Los requisitos dependen del contrato y del edificio. Consulte el contrato o al propietario o administrador antes de modificar los herrajes." },
      { q: "¿Cobran más por un vecindario específico del Bronx?", a: "No se agrega un cargo únicamente porque la dirección esté en otra parte del Bronx. El precio varía según el trabajo acordado." },
    ],
  },
  {
    path: "/es/cerrajero-comercial-bronx/", kind: "category",
    title: "Cerrajero Comercial en el Bronx | Oficinas y Negocios",
    description: "Solicitudes de cerrajería comercial en el Bronx para oficinas, negocios y propiedades. Confirme disponibilidad, alcance y precio por adelantado.",
    keywords: ["cerrajero comercial Bronx", "cerrajero para negocios Bronx", "apertura de oficina Bronx", "sistema de llave maestra Bronx", "cerraduras comerciales Bronx"],
    h1: "Cerrajero comercial en el Bronx", eyebrow: "Solicitudes para oficinas y propiedades comerciales",
    intro: "Oficinas, tiendas y otros inmuebles usan puertas, cerraduras y controles de acceso distintos. Llame con la dirección, los detalles del herraje y el trabajo solicitado para confirmar disponibilidad, alcance, precio acordado y una estimación de llegada no garantizada.",
    sections: [
      { heading: "Aperturas comerciales y de oficinas", paragraphs: ["Describa la puerta, cerradura, ubicación y cualquier instrucción de acceso del edificio. Los procedimientos de autorización pueden variar; pregunte qué información puede necesitarse para su solicitud.", "El trabajo adecuado depende del herraje y su estado. Confirme el precio por adelantado para el alcance acordado antes del despacho. No se inicia trabajo adicional sin conversar primero los cambios propuestos."] },
      { heading: "Sistemas de llave maestra y control de llaves", paragraphs: ["Para un proyecto de llave maestra, enumere puertas, cilindros existentes y grupos de usuarios que necesitan acceso. La compatibilidad y el diseño dependen de los herrajes y requisitos de la propiedad; solicite un alcance específico para el proyecto.", "Converse sobre cómo administrar llaves emitidas, extraviadas o devueltas, y cómo presupuestar futuros cambios. No comparta públicamente planos sensibles ni detalles de llaves."] },
      { heading: "Dispositivos de salida y cumplimiento", paragraphs: ["Las barras antipánico y otros dispositivos de salida dependen de la puerta, el uso del edificio y los códigos aplicables. Esta página no determina si una instalación cumple la normativa.", "Para preguntas de cumplimiento o seguridad contra incendios, consulte a la autoridad correspondiente o a un profesional calificado. Para una solicitud de cerrajería, describa el dispositivo y confirme disponibilidad y precio."] },
    ],
    links: [{ label: "Apertura de oficina o negocio", href: "/es/apertura-local-comercial-bronx/" }, { label: "Sistema de llave maestra", href: "/es/sistema-llave-maestra-bronx/" }, { label: "Reparación de barra antipánico", href: "/es/reparacion-barra-antipanico-bronx/" }, { label: "Guía de llaves maestras para negocios", href: "/es/guias/guia-sistema-llave-maestra-negocios-bronx/" }],
    faqs: [
      { q: "¿Pueden crear o modificar un sistema de llave maestra?", a: "Llame con la cantidad de puertas, el tipo de cerraduras y las necesidades de acceso para confirmar si el proyecto está disponible y pedir un alcance y precio específicos." },
      { q: "¿Pueden confirmar si una barra antipánico cumple el código?", a: "No se ofrece una determinación de cumplimiento. Consulte a la autoridad competente o a un profesional de códigos calificado." },
      { q: "¿Cómo se fija el precio de un proyecto comercial?", a: "Depende del hardware, las puertas y el alcance solicitado. Pida un precio para el proyecto acordado y confirme qué incluye antes de autorizar el trabajo." },
    ],
  },
  {
    path: "/es/cerrajero-especializado-bronx/", kind: "category",
    title: "Cerrajero Especializado en el Bronx | Cajas y Buzones",
    description: "Solicitudes de cerraduras especiales en el Bronx, como cajas fuertes y buzones. Comparta el modelo y el problema para confirmar opciones y precio.",
    keywords: ["cerrajero especializado Bronx", "cerrajero de cajas fuertes Bronx", "abrir caja fuerte Bronx", "cerradura de buzón Bronx", "cerrajero para buzón"],
    h1: "Servicios de cerrajería especializada en el Bronx", eyebrow: "Cajas fuertes, buzones y cerraduras especiales",
    intro: "Las cajas fuertes, buzones, gabinetes y otras cerraduras especiales tienen mecanismos y procedimientos distintos. Llame con la marca o modelo, el problema y la ubicación para que un cerrajero real pueda preguntar detalles y confirmar disponibilidad y precio.",
    sections: [
      { heading: "Solicitudes para cajas fuertes", paragraphs: ["El tipo de caja, cerradura, condición y circunstancias de acceso influyen en las opciones posibles. Si lo sabe, comparta la marca, el modelo y el tipo de cerradura.", "No se promete un método de apertura, tiempo de finalización ni resultado sin daños. Pregunte qué enfoque se propone, si hay posibilidad de daños y cuánto cuesta el alcance acordado antes de comenzar."] },
      { heading: "Cerraduras de buzón y procedimientos del edificio", paragraphs: ["Los paneles y cilindros de buzones varían. En edificios con varias viviendas, las reglas de la propiedad o del administrador postal pueden determinar quién puede solicitar el trabajo y qué autorización se necesita.", "Describa el panel, la ubicación y su relación con la propiedad; consulte a la administración cuando corresponda. Confirme la disponibilidad, el alcance y el precio por adelantado."] },
      { heading: "Gabinetes y otras cerraduras especiales", paragraphs: ["Las cerraduras de archivadores, muebles y gabinetes dependen del modelo y su estado. Identifique el mueble y el herraje si es posible y pregunte si la solicitud está disponible.", "Si luego de revisar la cerradura se propone un trabajo diferente, pida el precio revisado antes de autorizar trabajo adicional. El horario es de lunes a jueves de 9 a. m. a 5 p. m. y hay disponibilidad las 24 horas de viernes a domingo; confirme antes de coordinar."] },
    ],
    links: [{ label: "Apertura de caja fuerte", href: "/es/apertura-caja-fuerte-bronx/" }, { label: "Cerradura de buzón", href: "/es/cerradura-buzon-bronx/" }, { label: "Contacto", href: "/es/contacto/" }],
    faqs: [
      { q: "¿Se puede abrir una caja fuerte sin perforarla?", a: "Depende de la caja, la cerradura y su condición. Pregunte por el método propuesto, los riesgos y las alternativas posibles antes de aceptar." },
      { q: "¿Qué necesito para pedir servicio de cerradura de buzón?", a: "Describa el panel, la cerradura y la ubicación. Consulte con el propietario o la administración si hay reglas de acceso o autorización." },
      { q: "¿El servicio está disponible de noche?", a: "El horario regular es de lunes a jueves, de 9 a. m. a 5 p. m.; hay servicio disponible las 24 horas de viernes a domingo. Llame para confirmar la disponibilidad actual." },
    ],
  },
  {
    path: "/es/sobre-nosotros/", kind: "about",
    title: "Sobre Emergency Locksmith Bronx | Normas y Servicio",
    description: "Conozca cómo funciona el servicio móvil de Emergency Locksmith Bronx, qué información confirmar y cómo se comunican licencia, precio y llegada.",
    keywords: ["Emergency Locksmith Bronx", "cerrajero con licencia Bronx", "cerrajero asegurado Bronx", "cerrajero móvil Bronx", "cerrajero de confianza Bronx"],
    h1: "Sobre Emergency Locksmith Bronx", eyebrow: "Servicio móvil y comunicación clara",
    intro: "Emergency Locksmith Bronx es el nombre comercial confirmado por el propietario. El negocio ofrece servicio móvil de cerrajería en todo el Bronx y atiende las llamadas mediante un cerrajero real que pregunta por la situación antes de coordinar el despacho.",
    sections: [
      { heading: "Centro de despacho y servicio móvil", paragraphs: ["El centro centralizado de despacho está en 1510 Castle Hill Ave, Bronx, NY 10462. Es un centro de despacho y no se presenta como una tienda para visitas sin cita. El servicio de cerrajería es móvil en todo el Bronx.", "Un cerrajero real responde las llamadas y hace preguntas relevantes sobre la ubicación, la cerradura, el vehículo o la propiedad. Esa información ayuda a preparar al técnico despachado con herramientas y piezas apropiadas a la solicitud. El negocio informa que verifica los antecedentes de todos sus técnicos."] },
      { heading: "Licencia y seguro", paragraphs: ["El propietario confirma que la licencia de cerrajería de NYC Department of Consumer and Worker Protection (DCWP) está activa. El número se proporciona a solicitud y no se publica en el sitio para reducir el riesgo de suplantación y estafas. La información oficial sobre licencias está disponible en el sitio de NYC.", "El propietario informa cobertura de seguro de responsabilidad civil general de hasta $1,000,000, sujeta a los términos de la póliza. No se afirma cobertura para una circunstancia concreta sin revisar la póliza."] },
      { heading: "Precio y estimaciones de llegada", paragraphs: ["El precio se confirma por adelantado para el alcance acordado antes del despacho. Si se propone cambiar el alcance, se explican el trabajo y cualquier ajuste de precio antes de comenzar trabajo adicional. No se agrega un cargo únicamente porque una dirección esté en otra parte del Bronx.", "El propietario informa un promedio de llegada de aproximadamente 20 minutos en los últimos 90 días y que la mayoría de llamadas de emergencia llega en aproximadamente 15–20 minutos. Son cifras informadas, no garantías. La llegada y la finalización del trabajo son tiempos distintos."] },
    ],
    links: [{ label: "Solicitudes de servicio", href: "/es/servicios-cerrajeria-bronx/" }, { label: "Contacto", href: "/es/contacto/" }, { label: "Cómo evitar estafas de cerrajeros", href: "/es/guias/como-evitar-estafas-cerrajeros-bronx/" }],
    faqs: [
      { q: "¿Dónde está ubicado el negocio?", a: "1510 Castle Hill Ave es el centro centralizado de despacho, no una tienda sin cita. El servicio móvil se ofrece en todo el Bronx." },
      { q: "¿Puedo pedir el número de licencia?", a: "Sí. El número de licencia activa de NYC DCWP está disponible a solicitud y no se publica en línea por motivos de prevención de suplantación." },
      { q: "¿Cómo puedo conocer el precio antes del servicio?", a: "El precio para el alcance acordado se confirma por adelantado antes del despacho. Los cambios de alcance y precio se conversan antes de trabajo adicional." },
      { q: "¿La llegada en 15–20 minutos está garantizada?", a: "No. Es el rango informado para la mayoría de llamadas de emergencia; el promedio informado es de unos 20 minutos durante los últimos 90 días. Llame por una estimación actual." },
    ],
  },
  {
    path: "/es/contacto/", kind: "contact",
    title: "Contacto | Cerrajero en el Bronx, NY",
    description: "Llame al (646) 264-1901 para consultar cerrajería en el Bronx. Confirme disponibilidad, alcance, precio por adelantado y tiempo estimado de llegada.",
    keywords: ["contactar cerrajero Bronx", "teléfono cerrajero Bronx", "cotización cerrajero Bronx", "cerrajero urgente teléfono Bronx", "servicio móvil cerrajero Bronx"],
    h1: "Contacte a Emergency Locksmith Bronx", eyebrow: "Hable directamente con un cerrajero real",
    intro: "Llame al (646) 264-1901 para describir su solicitud y confirmar la disponibilidad actual. El horario regular es de lunes a jueves, de 9:00 a. m. a 5:00 p. m.; hay disponibilidad las 24 horas de viernes a domingo. El formulario es para consultas y no es un canal de despacho en tiempo real.",
    sections: [
      { heading: "Qué tener listo al llamar", paragraphs: ["Comparta la dirección del Bronx, lo que ocurrió y cualquier detalle conocido sobre la cerradura, puerta, vehículo o edificio. Para un vehículo, indique marca, modelo y año. Un cerrajero real contesta y hace preguntas para que el técnico despachado pueda prepararse con herramientas y piezas pertinentes.", "Para una propiedad o vehículo, explique quién solicita el servicio y pregunte si hace falta alguna información o autorización para su caso. Los requisitos dependen de la situación."] },
      { heading: "Cotizaciones y solicitudes que no son urgentes", paragraphs: ["Puede usar el formulario de consulta para explicar el trabajo solicitado, o llamar para conversar directamente. Una solicitud enviada por el formulario no confirma automáticamente una cita ni activa un despacho inmediato; llame para disponibilidad actual.", "El precio depende del servicio y del alcance acordado. Se confirma por adelantado antes del despacho. No se agrega un cargo únicamente porque la dirección esté en otra parte del Bronx."] },
      { heading: "Datos de contacto y despacho", paragraphs: ["Teléfono: (646) 264-1901. Correo electrónico: info@emergencylocksmithbronx.com. Centro de despacho: 1510 Castle Hill Ave, Bronx, NY 10462; no es una tienda para visitas sin cita. El servicio es móvil en todo el Bronx.", "La estimación de llegada es distinta del tiempo necesario para completar el trabajo y no está garantizada. El propietario informa un promedio de aproximadamente 20 minutos durante los últimos 90 días; llame con su ubicación para una estimación actual."] },
    ],
    links: [{ label: "Conozca el negocio y sus normas", href: "/es/sobre-nosotros/" }, { label: "Áreas de servicio", href: "/es/areas-de-servicio-bronx/" }],
    faqs: [
      { q: "¿Quién contesta el teléfono?", a: "Un cerrajero real responde y pregunta por la cerradura, el vehículo o la situación para confirmar disponibilidad y preparar el despacho." },
      { q: "¿El formulario de contacto programa una visita de inmediato?", a: "No. Es para consultas; llame al (646) 264-1901 para verificar disponibilidad y coordinar los detalles." },
      { q: "¿Hay un cargo adicional por una dirección lejana dentro del Bronx?", a: "No hay un cargo adicional únicamente por la dirección dentro del Bronx. El precio sigue dependiendo del trabajo acordado." },
    ],
  },
  {
    path: "/es/areas-de-servicio-bronx/", kind: "areas",
    title: "Áreas de Servicio de Cerrajería en el Bronx",
    description: "Servicio móvil de cerrajería en vecindarios del Bronx, desde Riverdale y Fordham hasta Pelham Bay y Co-op City. Llame para confirmar disponibilidad.",
    keywords: ["cerrajero cerca de mí Bronx", "cerrajero por vecindario Bronx", "cerrajero móvil Bronx", "cerrajero Parkchester", "cerrajero Co-op City"],
    h1: "Vecindarios del Bronx donde ofrecemos servicio móvil", eyebrow: "Cobertura en todo el Bronx",
    intro: "Emergency Locksmith Bronx ofrece servicio móvil en todo el Bronx. Llame con su dirección exacta para confirmar disponibilidad actual y una estimación de llegada no garantizada. No se agrega un cargo únicamente porque su dirección esté en otro vecindario del Bronx.",
    sections: [
      { heading: "Vecindarios atendidos", paragraphs: ["La cobertura móvil incluye Castle Hill, Parkchester, Riverdale, Mott Haven, Pelham Bay, Grand Concourse, Fordham, Co-op City, Belmont, City Island, Wakefield, Woodlawn, Tremont, Morris Park, Throggs Neck, Hunts Point, Norwood, Kingsbridge, Soundview y Highbridge.", "El centro centralizado de despacho está en 1510 Castle Hill Ave, Bronx, NY 10462. Es una base de despacho, no una tienda para visitas sin cita. El servicio se presta en la dirección de servicio confirmada."] },
      { heading: "Confirme dirección, acceso y disponibilidad", paragraphs: ["Los edificios, instrucciones de acceso y condiciones de tránsito varían. Comparta su dirección y los detalles de acceso que conozca. Si el edificio tiene procedimientos propios, consulte con la administración y comunique las instrucciones al cerrajero.", "El horario regular es lunes–jueves, de 9 a. m. a 5 p. m.; el servicio está disponible las 24 horas de viernes a domingo. Llame para confirmar la disponibilidad para su solicitud específica."] },
      { heading: "Estimación de llegada y precio", paragraphs: ["El propietario informa un promedio de llegada de aproximadamente 20 minutos durante los últimos 90 días y que la mayoría de las llamadas de emergencia llega en unos 15–20 minutos. No es una promesa; la ubicación, el tránsito y la disponibilidad actual pueden influir.", "El precio se confirma por adelantado para el alcance acordado. No se suma un cargo únicamente por estar en otra dirección del Bronx; el precio total depende del trabajo solicitado. Cualquier cambio de alcance o precio se conversa antes de hacer trabajo adicional."] },
    ],
    links: [{ label: "Solicitudes de cerrajería", href: "/es/servicios-cerrajeria-bronx/" }, { label: "Contacto", href: "/es/contacto/" }, { label: "Cerrajero de emergencia", href: "/es/cerrajero-emergencia-bronx/" }],
    faqs: [
      { q: "¿Cobran más por un vecindario más alejado?", a: "No hay un cargo adicional únicamente porque la dirección de servicio esté en otra parte del Bronx. El precio depende del alcance acordado." },
      { q: "¿Atienden Co-op City y City Island?", a: "El servicio móvil se ofrece en todo el Bronx, incluidos Co-op City y City Island. Llame para confirmar disponibilidad actual y compartir instrucciones de acceso." },
      { q: "¿Cuál es el tiempo de llegada típico?", a: "El promedio informado por el propietario es de unos 20 minutos en los últimos 90 días; la mayoría de llamadas de emergencia llega en 15–20 minutos. No es una garantía." },
    ],
  },
  {
    path: "/es/guias-cerrajeria-bronx/", kind: "guide-index",
    title: "Guías de Cerrajería y Seguridad para el Bronx",
    description: "Consejos prácticos en español sobre aperturas, cerraduras inteligentes, estafas de cerrajería, llaves maestras y llaves de auto perdidas en el Bronx.",
    keywords: ["guías de cerrajería Bronx", "consejos cerrajeros Bronx", "estafas de cerrajeros Nueva York", "cerradura inteligente apartamento", "llave maestra negocio"],
    h1: "Guías de cerrajería y seguridad del Bronx", eyebrow: "Información práctica antes de solicitar servicio",
    intro: "Estas guías en español explican cómo prepararse ante una apertura, evaluar la compatibilidad de una cerradura inteligente, verificar datos de un cerrajero, planificar un sistema de llave maestra y comparar opciones para una llave de auto perdida.",
    sections: [
      { heading: "Información clara para tomar una decisión", paragraphs: ["Cada guía ofrece preguntas que puede hacer y detalles que conviene confirmar. Las circunstancias y los herrajes varían, por lo que la información general no sustituye una evaluación de su cerradura, vehículo, propiedad o contrato.", "Antes de autorizar un servicio, confirme quién lo prestará, qué trabajo se propone, cuál es el precio para ese alcance y cómo se comunicaría un cambio. Para dudas legales, de códigos o de seguridad inmediata, consulte a la autoridad o profesional correspondiente."] },
      { heading: "Solicite ayuda para su situación", paragraphs: ["Emergency Locksmith Bronx ofrece servicio móvil en todo el Bronx. Un cerrajero real contesta las llamadas y pregunta por la solicitud; llame para confirmar disponibilidad, precio por adelantado y una estimación de llegada actual no garantizada.", "El horario regular es de lunes a jueves, de 9 a. m. a 5 p. m.; hay disponibilidad las 24 horas de viernes a domingo. No se agrega un cargo únicamente por una dirección en otro vecindario del Bronx."] },
    ],
    links: [
      { label: "Qué hacer si se queda fuera de su apartamento por la noche", href: "/es/guias/guia-apertura-apartamento-noche-bronx/" }, { label: "Cerraduras inteligentes para apartamentos antiguos", href: "/es/guias/cerraduras-inteligentes-apartamentos-antiguos-bronx/" }, { label: "Cómo evitar estafas de cerrajeros", href: "/es/guias/como-evitar-estafas-cerrajeros-bronx/" }, { label: "Planificar una llave maestra para un negocio", href: "/es/guias/guia-sistema-llave-maestra-negocios-bronx/" }, { label: "Llaves de auto perdidas: cerrajero o concesionario", href: "/es/guias/llaves-auto-perdidas-cerrajero-o-concesionario/" },
    ],
    faqs: [
      { q: "¿Estas guías garantizan que un servicio específico esté disponible?", a: "No. Describen temas y preguntas útiles; llame con los detalles para confirmar disponibilidad y compatibilidad." },
      { q: "¿Qué debo confirmar antes de autorizar trabajo?", a: "El alcance del trabajo, el precio total correspondiente y cualquier riesgo o cambio propuesto. El precio para el alcance acordado se confirma antes del despacho." },
    ],
  },
  {
    path: "/es/politica-de-privacidad/", kind: "legal",
    title: "Política de privacidad del cerrajero en el Bronx | Emergency Locksmith Bronx",
    description: "Conozca qué información reciben los formularios y llamadas, cómo se usan los análisis del sitio y cómo contactar a Emergency Locksmith Bronx.",
    keywords: ["política de privacidad cerrajero Bronx", "datos de formulario cerrajero", "privacidad Emergency Locksmith Bronx", "grabación de llamadas cerrajero"],
    h1: "Política de privacidad", eyebrow: "Borrador para revisión de abogado de Nueva York · 15 de noviembre de 2026",
    intro: "Este borrador explica cómo Emergency Locksmith Bronx maneja la información enviada por el sitio, por teléfono o junto con una solicitud de servicio. Es un borrador para revisión de un abogado de Nueva York; no es asesoría legal ni una política final.",
    sections: [
      { heading: "Información que usted proporciona", paragraphs: ["El formulario de reserva solicita nombre, teléfono, tipo de servicio, fecha y hora preferidas, ubicación del servicio y cualquier detalle opcional que usted incluya. El formulario de cotización o contacto solicita nombre, teléfono, correo electrónico y mensaje. La solicitud también incluye la ruta de la página desde la que se envía, pero no la cadena de consulta de la URL. Un mensaje puede incluir otros datos personales si usted decide escribirlos.", "Las llamadas telefónicas con el negocio se graban para capacitación. Según la práctica actual, el negocio conserva todos sus registros comerciales durante 18 meses, incluidos los registros de solicitudes, trabajos y atención al cliente, además de las grabaciones. Este plazo no describe la retención separada que pudieran aplicar proveedores de análisis o mensajería."] },
      { heading: "Uso y transmisión de la información", paragraphs: ["La información se usa para revisar y responder consultas, conversar sobre el alcance y el precio, coordinar un servicio solicitado, mantener registros del trabajo y atender quejas o inquietudes sobre la mano de obra. Enviar un formulario no confirma una cita ni activa un despacho en tiempo real; llame al (646) 264-1901 para confirmar disponibilidad actual.", "Las consultas del formulario se envían al negocio mediante una función de Cloudflare Pages en el servidor y la API de Telegram para que el equipo las reciba y les dé seguimiento. Telegram es un servicio externo. Este sitio no presenta la transmisión a Telegram como cifrada de extremo a extremo. Consulte la política de privacidad de Telegram para conocer sus prácticas.", "El negocio no envía SMS ni mensajes de texto. Un técnico puede dejar un mensaje de voz sobre una solicitud. Si prefiere no hablar por una llamada grabada, puede escribir a info@emergencylocksmithbronx.com."], externalLinks: [{ label: "Política de privacidad de Telegram para bots", href: "https://telegram.org/privacy-tpa" }] },
      { heading: "Análisis del sitio web", paragraphs: ["Google Analytics y Microsoft Clarity se usan en el sitio dirigido a clientes únicamente para entender el uso del sitio y mejorarlo. El negocio no los usa para publicidad ni remarketing. Según las herramientas y su configuración, los análisis pueden procesar información sobre páginas vistas, interacciones y características del navegador o dispositivo, y pueden usar cookies o tecnologías similares. La retención y el procesamiento dentro de esos servicios dependen de sus proveedores y de la configuración de las cuentas.", "El negocio indica que Clarity está configurado para ocultar los datos escritos en los campos de formulario. Esa configuración no significa que deba incluir datos sensibles en mensajes: comparta únicamente la información necesaria para explicar su solicitud."], externalLinks: [{ label: "Aviso de privacidad de Google Analytics", href: "https://support.google.com/analytics/answer/7318509?hl=en" }, { label: "Información de privacidad de Microsoft Clarity", href: "https://clarity.microsoft.com/privacy" }, { label: "Documentación de ocultación de datos de Clarity", href: "https://learn.microsoft.com/en-us/clarity/setup-and-installation/clarity-masking" }] },
      { heading: "Protección del formulario", paragraphs: ["Para limitar el abuso automatizado, la función del servidor usa temporalmente la dirección IP de conexión en un estado de memoria por instancia para limitar solicitudes. Esa dirección no se incluye en el mensaje de consulta que se envía a Telegram. Cloudflare también puede procesar datos técnicos de conexión al alojar el sitio."] },
      { heading: "Preguntas y contacto", paragraphs: ["Para hacer una pregunta sobre este borrador o sobre información relacionada con una solicitud, escriba a info@emergencylocksmithbronx.com o llame al (646) 264-1901 y pida hablar con un gerente. El negocio dará seguimiento lo antes posible. Nada en este borrador pretende limitar derechos de privacidad o de consumo que no puedan renunciarse legalmente."] },
    ],
    faqs: [
      { q: "¿Qué información pide el formulario de reserva?", a: "Solicita nombre, teléfono, servicio, fecha y hora preferidas, ubicación del servicio y detalles adicionales opcionales. El formulario de cotización solicita nombre, teléfono, correo electrónico y mensaje." },
      { q: "¿Cuánto tiempo conserva el negocio los registros?", a: "La práctica actual del negocio es conservar durante 18 meses los registros de solicitudes, trabajos y atención al cliente, incluidas las grabaciones de llamadas." },
      { q: "¿El negocio envía mensajes de texto?", a: "No. Un técnico puede dejar un mensaje de voz. También puede escribir a info@emergencylocksmithbronx.com." },
    ],
  },
  {
    path: "/es/terminos-del-servicio/", kind: "legal",
    title: "Términos de servicio de cerrajería en el Bronx | Emergency Locksmith Bronx",
    description: "Revise el precio por adelantado, el cargo de servicio y despacho, el trabajo incompleto, la garantía y los canales de queja del cerrajero.",
    keywords: ["términos de servicio cerrajero Bronx", "cargo de visita cerrajero Bronx", "precio cerrajero por adelantado", "trabajo incompleto cerrajero", "garantía cerrajero 10 días"],
    h1: "Términos del servicio", eyebrow: "Borrador para revisión de abogado de Nueva York · 15 de noviembre de 2026",
    intro: "Este borrador cubre consultas del sitio y servicios móviles de cerrajería de Emergency Locksmith Bronx. Debe revisarlo un abogado de Nueva York antes de utilizarlo como contrato final con clientes.",
    sections: [
      { heading: "Servicio móvil y disponibilidad", paragraphs: ["Emergency Locksmith Bronx ofrece servicio móvil de cerrajería en todo el Bronx. El centro centralizado de despacho está en 1510 Castle Hill Ave, Bronx, NY 10462; no es una tienda para visitas sin cita.", "El horario regular es de lunes a jueves, de 9:00 a. m. a 5:00 p. m.; hay disponibilidad de servicio las 24 horas de viernes a domingo. Llame para confirmar disponibilidad. El propietario informa un promedio de llegada de aproximadamente 20 minutos durante los últimos 90 días y que la mayoría de las llamadas de emergencia llega en unos 15–20 minutos. Son promedios históricos, no garantías; el tiempo real puede variar."] },
      { heading: "Alcance y precio por adelantado", paragraphs: ["Antes del despacho, el negocio explica el trabajo propuesto y comunica el precio para el alcance acordado. No se agrega un cargo únicamente porque la dirección esté en otro vecindario del Bronx. El cargo de servicio aplicable varía según el tipo de trabajo y la hora del día en que se recibió la solicitud; el negocio comunica el importe antes del despacho.", "Si la inspección indica que conviene cambiar el trabajo solicitado, el técnico explica el nuevo alcance y el precio antes de comenzar cualquier trabajo adicional. El trabajo adicional requiere que el cliente acepte el cambio de alcance y precio."] },
      { heading: "Cargo de servicio, despacho y cancelación", paragraphs: ["No se cobra un cargo de servicio antes del despacho de un técnico. Una vez asignado y despachado el técnico, o cuando ya va en camino, el cliente debe como mínimo el cargo de servicio comunicado. Este cargo ayuda a cubrir los costos operativos de despacho y traslado. Si el cliente contrata el trabajo cotizado, el cargo de servicio se acredita al precio total acordado.", "Si el cliente cancela después del despacho o el técnico no puede terminar por circunstancias fuera del control del negocio, se mantiene como mínimo el cargo de servicio. Esto también se aplica si la inspección muestra que el problema requiere otro oficio o especialista, por ejemplo, una falla eléctrica del vehículo que requiere un electricista automotriz y no un cerrajero. Nada en esta sección renuncia a derechos de cancelación, reembolso o avisos exigidos por la ley aplicable; cualquier requisito legal prevalece."] },
      { heading: "Trabajo parcial o no terminado", paragraphs: ["Si un trabajo ya despachado solo se completa en parte o no puede terminarse por circunstancias fuera del control del negocio, el mínimo a pagar es el cargo de servicio comunicado antes del despacho más el precio comunicado de las piezas que realmente se hayan utilizado. Cualquier otro cargo de mano de obra o trabajo debe estar incluido en el precio del alcance acordado o explicarse y aprobarse por separado antes de realizar ese trabajo. Este borrador no establece un cobro automático de la mitad del precio ni otro cargo no divulgado por trabajo parcial."] },
      { heading: "Quejas y garantía de mano de obra", paragraphs: ["Para plantear un problema, llame al (646) 264-1901 y pida hablar con un gerente, o escriba a info@emergencylocksmithbronx.com. El negocio dará seguimiento e intentará resolverlo lo antes posible; no promete un plazo fijo de respuesta. También puede comunicarse con una agencia gubernamental de protección al consumidor o ejercer cualquier derecho legal disponible.", "La garantía de mano de obra dura 10 días desde la finalización del trabajo. No cubre daños causados por el cliente o por un tercero. Ante una inquietud cubierta, el negocio volverá a inspeccionar el trabajo y decidirá, según esa inspección, si corresponde rehacerlo o emitir un crédito. Comunicará la decisión durante la inspección. Este borrador no limita derechos que no puedan renunciarse legalmente."] },
      { heading: "Propuestas de disputa — no vigentes; requieren revisión legal", paragraphs: ["El negocio pidió a un abogado de Nueva York que revise una propuesta de arbitraje después de intentar resolver el asunto con la gerencia. También pidió revisar una propuesta para que el cliente pague los costos judiciales de ambas partes y otra para limitar la recuperación del cliente a los importes pagados o acordados. Ninguna de esas propuestas es una condición vigente en este borrador: aquí no se exige arbitraje, no se trasladan automáticamente los costos judiciales de una parte a la otra y no se limita la recuperación del cliente. Esta sección no constituye un acuerdo de arbitraje ni una renuncia a acudir a tribunales, agencias, tribunales de reclamos menores u otros recursos legales. El arbitraje puede implicar trámites judiciales; un abogado debe determinar si cualquier cláusula propuesta es válida y apropiada antes de presentarla por separado para su aceptación."] },
    ],
    faqs: [
      { q: "¿Cuándo debo el cargo de servicio?", a: "No se cobra antes del despacho. Cuando el técnico ya fue asignado y despachado o va en camino, se debe como mínimo el cargo comunicado, incluso si el cliente cancela después o el trabajo no puede terminarse por circunstancias fuera del control del negocio." },
      { q: "¿El cargo cambia según el vecindario del Bronx?", a: "No se agrega un cargo solo porque la dirección esté en otro vecindario del Bronx. El cargo de servicio varía según el tipo de trabajo y la hora en que se recibió la solicitud." },
      { q: "¿Qué debo pagar si no se termina el trabajo?", a: "El mínimo es el cargo de servicio comunicado más el precio comunicado de las piezas realmente utilizadas. No hay un cobro automático de la mitad del trabajo." },
      { q: "¿Cuánto dura la garantía de mano de obra?", a: "Dura 10 días desde la finalización del trabajo, excepto daños causados por el cliente o por un tercero. El negocio inspecciona y decide si corresponde rehacer el trabajo o emitir un crédito." },
    ],
  },
  {
    path: "/es/apertura-auto-bronx/", kind: "service",
    title: "Apertura de Auto en el Bronx | Servicio de Cerrajero",
    description: "¿Se quedó fuera de su auto en el Bronx? Llame con la marca y el modelo para confirmar disponibilidad, alcance, precio y estimación de llegada.",
    keywords: ["apertura de auto Bronx", "cerrajero para auto cerrado Bronx", "abrir carro Bronx", "apertura de vehículo Bronx", "cerrajero automotriz urgente Bronx"],
    h1: "Solicitud de apertura de auto en el Bronx", eyebrow: "Apertura de vehículo y consulta de disponibilidad",
    intro: "Si se quedó fuera de su vehículo en el Bronx, llame para describir el auto y la ubicación. Un cerrajero real puede confirmar la disponibilidad actual, hablar del trabajo propuesto y del precio acordado, y dar una estimación de llegada no garantizada.",
    sections: [
      { heading: "La solicitud depende del vehículo y la cerradura", paragraphs: ["Los vehículos usan cerraduras y sistemas distintos. La disponibilidad y el enfoque dependen de la marca, el modelo, el año, el tipo de cierre y su condición. No se promete un método de entrada específico ni un resultado sin daños.", "Comparta la ubicación exacta, marca, modelo y año, y explique qué pasó. Indique si hay otra llave disponible o alguna circunstancia de seguridad que deba conocer el cerrajero."] },
      { heading: "Qué confirmar antes de solicitar el despacho", paragraphs: ["Pregunte si la apertura de ese vehículo está disponible, qué enfoque se propone y qué riesgos pueden existir. Confirme el precio para el alcance acordado antes del despacho. Cualquier cambio en el trabajo o el precio debe hablarse antes de comenzar trabajo adicional.", "El servicio es móvil en todo el Bronx. No hay cargo adicional únicamente por estar en otro vecindario del Bronx; el precio depende del trabajo acordado."] },
      { heading: "Horario y tiempo de llegada", paragraphs: ["El horario regular es de lunes a jueves, de 9 a. m. a 5 p. m.; el servicio está disponible las 24 horas de viernes a domingo. Llame para confirmar disponibilidad actual.", "El propietario informa un promedio de llegada de aproximadamente 20 minutos en los últimos 90 días y que la mayoría de llamadas de emergencia llega en 15–20 minutos. No es una garantía ni el tiempo de finalización del trabajo."] },
    ],
    links: [{ label: "Otros servicios para autos", href: "/es/cerrajero-automotriz-bronx/" }, { label: "Llaves de auto perdidas", href: "/es/reemplazo-llave-auto-perdida-bronx/" }],
    faqs: [
      { q: "¿Necesito conocer el modelo exacto del auto?", a: "Sí, si puede: comparta marca, modelo y año, además de la ubicación y lo ocurrido. Esto ayuda a revisar la solicitud antes del despacho." },
      { q: "¿La apertura está garantizada sin daños?", a: "No. El método y los riesgos dependen del vehículo y la cerradura. Pregunte qué se propone antes de autorizar el trabajo." },
      { q: "¿Cuánto tardan en llegar?", a: "Llame para una estimación actual. El promedio informado de 20 minutos y el rango de 15–20 para la mayoría de llamadas no son garantías." },
    ],
  },
  {
    path: "/es/reemplazo-llave-auto-perdida-bronx/", kind: "service",
    title: "Reemplazo de Llave de Auto Perdida en el Bronx",
    description: "¿Perdió la llave del auto en el Bronx? Consulte con la marca, modelo y año para confirmar compatibilidad, disponibilidad y precio por adelantado.",
    keywords: ["llave de auto perdida Bronx", "reemplazo llave de auto Bronx", "hacer llave de carro Bronx", "cerrajero llaves automotrices Bronx", "llave de reemplazo auto"],
    h1: "Solicitud de reemplazo de llave de auto en el Bronx", eyebrow: "Llaves de vehículos: consulte compatibilidad primero",
    intro: "Los sistemas de llave varían entre vehículos. Llame con la marca, el modelo, el año, su ubicación y si conserva otra llave funcional para confirmar si el servicio solicitado está disponible y conversar alcance y precio.",
    sections: [
      { heading: "Compatibilidad según marca, modelo y año", paragraphs: ["Las llaves mecánicas, transpondedores y sistemas con control remoto no son iguales. La compatibilidad y disponibilidad dependen del vehículo y del sistema exacto; no se afirma que todos los modelos puedan atenderse.", "Un cerrajero real puede hacer preguntas para entender la solicitud y preparar al técnico despachado con herramientas y piezas pertinentes. Eso no garantiza que todo vehículo o sistema pueda trabajarse."] },
      { heading: "Información que puede ayudar", paragraphs: ["Tenga la marca, el modelo, el año, el lugar donde está el vehículo y si tiene una llave de repuesto. Describa si perdió todas las llaves o si una llave dejó de funcionar. Pregunte si se requiere información o autorización específica.", "Antes del despacho, confirme la disponibilidad, el trabajo que incluye el precio y cualquier supuesto relevante. Si el alcance cambia, pida que le expliquen el cambio y el precio antes de autorizar trabajo adicional."] },
      { heading: "Servicio móvil y precio", paragraphs: ["El servicio móvil se ofrece en todo el Bronx, sin un cargo adicional únicamente por la dirección dentro del distrito. El precio se confirma por adelantado para el alcance acordado; no es una tarifa universal para todos los vehículos.", "Llame para conocer el horario actual y una estimación de llegada no garantizada. El tiempo de llegada y el tiempo de terminar una llave son distintos."] },
    ],
    links: [{ label: "Cerrajería automotriz", href: "/es/cerrajero-automotriz-bronx/" }, { label: "Comparar cerrajero y concesionario", href: "/es/guias/llaves-auto-perdidas-cerrajero-o-concesionario/" }],
    faqs: [
      { q: "¿Qué datos del vehículo debo proporcionar?", a: "Marca, modelo, año, ubicación y si conserva otra llave funcional. La compatibilidad depende del sistema exacto." },
      { q: "¿Pueden reemplazar la llave de cualquier auto?", a: "No se promete compatibilidad universal. Llame con los datos del vehículo para confirmar disponibilidad." },
      { q: "¿El precio se da antes de enviar al técnico?", a: "El precio se confirma por adelantado para el alcance acordado antes del despacho." },
    ],
  },
  {
    path: "/es/reparacion-encendido-auto-bronx/", kind: "service",
    title: "Cerrajero de Encendido de Auto en el Bronx",
    description: "¿La llave está atascada o no gira? Describa el auto y el problema para consultar servicio de encendido, disponibilidad y precio.",
    keywords: ["cerrajero de encendido Bronx", "llave atascada en encendido", "reparación encendido auto Bronx", "llave rota en ignición Bronx", "cerrajero automotriz Bronx"],
    h1: "Solicitudes de servicio para el encendido del auto", eyebrow: "Problemas con llave o cilindro de encendido",
    intro: "Una llave atascada, rota o que no gira puede tener varias causas. Llame con la marca, el modelo, el año y lo que observa para preguntar qué servicio puede estar disponible y confirmar el alcance y el precio antes del despacho.",
    sections: [
      { heading: "Describa el síntoma con precisión", paragraphs: ["Indique si la llave se atascó, se rompió, gira con dificultad o no gira, y si el vehículo arranca. Comparta la marca, el modelo, el año y la ubicación del vehículo.", "La causa y el trabajo apropiado dependen del sistema y del estado del encendido. No se garantiza extracción, reparación, reemplazo ni un método específico sin revisar la situación."] },
      { heading: "Converse opciones y riesgos", paragraphs: ["Pregunte qué trabajo se propone, si hay riesgos para la llave o el cilindro y qué opciones podrían considerarse. Confirme la disponibilidad y el precio para el alcance acordado antes del despacho.", "Si la revisión revela un trabajo diferente, solicite una explicación del alcance y precio nuevos antes de autorizar trabajo adicional."] },
      { heading: "Disponibilidad y llegada", paragraphs: ["El horario regular es de lunes a jueves, de 9 a. m. a 5 p. m.; hay servicio disponible las 24 horas de viernes a domingo. Llame para confirmar que su solicitud está disponible.", "El servicio móvil cubre el Bronx. La estimación de llegada es no garantizada y separada del tiempo de reparación o finalización."] },
    ],
    links: [{ label: "Cerrajero automotriz", href: "/es/cerrajero-automotriz-bronx/" }, { label: "Reemplazo de llave perdida", href: "/es/reemplazo-llave-auto-perdida-bronx/" }],
    faqs: [
      { q: "¿Qué hago si la llave está atascada?", a: "Evite forzarla si puede romperse o dañar el cilindro. Llame y describa el vehículo y el síntoma para confirmar opciones." },
      { q: "¿La reparación del encendido siempre es posible?", a: "No necesariamente. Depende del vehículo y del estado del sistema; confirme disponibilidad y alcance antes de autorizar." },
      { q: "¿El tiempo de llegada indica cuánto tardará la reparación?", a: "No. La llegada y la finalización son tiempos diferentes; el trabajo depende de la causa y del alcance acordado." },
    ],
  },
  {
    path: "/es/reemplazo-control-llave-auto-bronx/", kind: "service",
    title: "Reemplazo de Control y Llave de Auto en el Bronx",
    description: "Consulte reemplazo o reparación de control remoto y llave de auto en el Bronx. Comparta marca, modelo y año para verificar disponibilidad.",
    keywords: ["reemplazo control de auto Bronx", "control remoto llave auto Bronx", "programación control auto Bronx", "reemplazo llave con chip Bronx", "llavero electrónico auto Bronx"],
    h1: "Solicitud de servicio para control o llave remota", eyebrow: "Controles de vehículo: compatibilidad depende del sistema",
    intro: "Los controles y sistemas remotos varían según el vehículo. Llame con la marca, el modelo, el año, la ubicación y el síntoma para consultar disponibilidad, compatibilidad y precio por adelantado.",
    sections: [
      { heading: "Sistemas diferentes requieren confirmación", paragraphs: ["Un control puede no funcionar por varias razones, y el tipo de llave o sistema remoto cambia entre vehículos. La disponibilidad de reemplazo o reparación depende del sistema exacto, del producto y de la situación.", "No se garantiza programación ni compatibilidad con todos los modelos. Comparta los datos del vehículo y explique si el control se perdió, se dañó o dejó de responder."] },
      { heading: "Qué preguntar antes del despacho", paragraphs: ["Confirme qué servicio está disponible para su marca, modelo y año; qué información puede hacer falta y qué cubre el precio acordado. Un cerrajero real hace preguntas pertinentes para preparar al técnico con herramientas y piezas adecuadas a la solicitud.", "El precio se confirma para el alcance acordado antes del despacho. Si se propone trabajo adicional, pida que se expliquen el alcance y cualquier ajuste antes de autorizarlo."] },
      { heading: "Servicio en el Bronx", paragraphs: ["El servicio móvil se presta en todo el Bronx; no hay un recargo solo porque la dirección esté en otro vecindario del distrito. Llame para verificar disponibilidad actual y recibir una estimación de llegada no garantizada.", "El horario regular es lunes–jueves, de 9 a. m. a 5 p. m.; el servicio está disponible las 24 horas viernes–domingo."] },
    ],
    links: [{ label: "Cerrajería automotriz", href: "/es/cerrajero-automotriz-bronx/" }, { label: "Llaves de auto perdidas", href: "/es/reemplazo-llave-auto-perdida-bronx/" }],
    faqs: [
      { q: "¿Pueden programar cualquier control remoto?", a: "La compatibilidad depende del vehículo y del sistema. Comparta marca, modelo y año para confirmar disponibilidad." },
      { q: "¿Qué debo decir al llamar?", a: "Explique el modelo del vehículo, el año, la ubicación y qué falla o se perdió. Indique si tiene otra llave o control." },
      { q: "¿El reemplazo tiene precio fijo?", a: "No hay una tarifa fija para todos los autos; el precio se confirma para el alcance acordado antes del despacho." },
    ],
  },
  {
    path: "/es/apertura-casa-bronx/", kind: "service",
    title: "Apertura de Casa en el Bronx | Cerrajero Residencial",
    description: "¿Se quedó fuera de su casa en el Bronx? Consulte disponibilidad, el trabajo propuesto, precio por adelantado y una estimación de llegada.",
    keywords: ["apertura de casa Bronx", "cerrajero casa cerrada Bronx", "me quedé fuera de mi casa Bronx", "cerrajero residencial urgente Bronx", "abrir puerta casa Bronx"],
    h1: "Solicitud de apertura de casa en el Bronx", eyebrow: "Apertura residencial: pregunte por alcance y riesgos",
    intro: "Si no puede entrar a su casa, llame con la dirección y describa la puerta y la cerradura. Un cerrajero real puede confirmar disponibilidad, conversar el enfoque propuesto y el precio, y ofrecer una estimación actual de llegada no garantizada.",
    sections: [
      { heading: "La puerta y la cerradura determinan las opciones", paragraphs: ["El enfoque adecuado depende del tipo de puerta, cerradura, estado y circunstancias. Pregunte qué se propone, si existe riesgo de daño y qué alternativas podrían estar disponibles antes de autorizar el trabajo.", "No se promete un método específico ni un resultado sin daños. Si la vivienda es alquilada, revise las reglas del contrato o consulte al propietario antes de autorizar cambios permanentes en los herrajes."] },
      { heading: "Qué compartir al llamar", paragraphs: ["Tenga la dirección del Bronx, una descripción de la puerta y cerradura, y cualquier información sobre el acceso o quién puede autorizar el servicio. Si no conoce el tipo de cerradura, descríbala lo mejor posible.", "El cerrajero hará preguntas pertinentes para que el técnico despachado pueda prepararse con herramientas y piezas apropiadas. Eso no garantiza que todo trabajo se pueda completar en una visita."] },
      { heading: "Precio y horario", paragraphs: ["El precio se confirma por adelantado para el alcance acordado antes del despacho. No se suma un cargo únicamente porque la dirección esté en otra parte del Bronx; cualquier cambio de alcance se conversa antes de trabajo adicional.", "El horario regular es lunes–jueves, 9 a. m.–5 p. m.; hay disponibilidad 24 horas viernes–domingo. Llame para confirmar la disponibilidad actual y la estimación de llegada."] },
    ],
    links: [{ label: "Apertura de apartamento", href: "/es/apertura-apartamento-bronx/" }, { label: "Cerrajero residencial", href: "/es/cerrajero-residencial-bronx/" }, { label: "Qué hacer en un cierre nocturno", href: "/es/guias/guia-apertura-apartamento-noche-bronx/" }],
    faqs: [
      { q: "¿Pueden abrir la puerta sin dañarla?", a: "No se garantiza un resultado sin daños. Depende de la cerradura y la puerta; pregunte por el método propuesto y sus riesgos." },
      { q: "¿Qué información debo dar?", a: "Dirección, tipo de puerta y cerradura si lo sabe, y cualquier instrucción de acceso o autorización." },
      { q: "¿El precio cambia si vivo lejos del centro de despacho?", a: "No hay un cargo adicional únicamente por una dirección en otra parte del Bronx. El precio depende del trabajo acordado." },
    ],
  },
  {
    path: "/es/apertura-apartamento-bronx/", kind: "service",
    title: "Apertura de Apartamento en el Bronx | Cerrajero",
    description: "¿Se quedó fuera de su apartamento en el Bronx? Llame para consultar disponibilidad, requisitos del edificio, alcance y precio por adelantado.",
    keywords: ["apertura de apartamento Bronx", "cerrajero apartamento Bronx", "me quedé fuera del apartamento", "apertura de puerta de apartamento Bronx", "cerrajero de emergencia apartamento"],
    h1: "Solicitud de apertura de apartamento", eyebrow: "Apertura y acceso: confirme reglas del edificio",
    intro: "Para solicitar ayuda si se quedó fuera de un apartamento del Bronx, comparta la dirección, los detalles de la puerta y la cerradura y las instrucciones de acceso del edificio. Llame para confirmar disponibilidad y el precio para el alcance acordado.",
    sections: [
      { heading: "Acceso al edificio y autorización", paragraphs: ["Las opciones dependen de la puerta, la cerradura, el acceso al edificio y las circunstancias. Los procedimientos de administración y la autorización pueden variar; pregunte qué información puede ser necesaria para su caso.", "Si alquila, revise las reglas de su contrato o consulte a la administración antes de autorizar cambios a los herrajes. La información general de esta página no interpreta un contrato o requisito específico."] },
      { heading: "Explique la cerradura y la situación", paragraphs: ["Diga si la llave se perdió, quedó dentro, se rompió o si la cerradura no funciona. Comparta la ubicación exacta y las instrucciones para entrar al edificio.", "Pregunte qué trabajo se propone, si hay riesgo de daño y cuál es el precio para el alcance acordado antes del despacho. Cualquier cambio debe conversarse antes de iniciar trabajo adicional."] },
      { heading: "Horario y estimación", paragraphs: ["El servicio móvil se ofrece en todo el Bronx. El horario regular es de lunes a jueves, de 9 a. m. a 5 p. m.; hay servicio las 24 horas de viernes a domingo.", "El propietario informa promedios de llegada de aproximadamente 20 minutos durante los últimos 90 días y 15–20 minutos para la mayoría de llamadas de emergencia; no son garantías. Llame para la estimación actual. El tiempo de llegada no es el de finalización."] },
    ],
    links: [{ label: "Apertura residencial", href: "/es/cerrajero-residencial-bronx/" }, { label: "Guía nocturna de cierre de apartamento", href: "/es/guias/guia-apertura-apartamento-noche-bronx/" }, { label: "Contacto", href: "/es/contacto/" }],
    faqs: [
      { q: "¿Debo avisar al administrador del edificio?", a: "Puede ser útil; los procedimientos y requisitos de autorización varían. Consulte con la administración cuando corresponda." },
      { q: "¿Qué información debo tener lista?", a: "Dirección, detalles de puerta y cerradura, cómo ocurrió el cierre y cualquier instrucción de acceso." },
      { q: "¿La llegada de 15–20 minutos está garantizada?", a: "No. Es el rango informado para la mayoría de llamadas de emergencia, no una promesa de llegada." },
    ],
  },
  {
    path: "/es/cambio-combinacion-cerradura-bronx/", kind: "service",
    title: "Cambio de Combinación de Cerradura en el Bronx",
    description: "Consulte la reconfiguración de cerraduras en el Bronx. La compatibilidad depende del herraje; confirme disponibilidad, alcance y precio.",
    keywords: ["cambio de combinación cerradura Bronx", "reconfigurar cerradura Bronx", "cambiar llave de cerradura Bronx", "cerrajero para cambiar cerradura Bronx", "rekey cerradura Bronx"],
    h1: "Solicitud para cambiar la combinación de una cerradura", eyebrow: "Reconfiguración de cerradura existente",
    intro: "Cambiar la combinación de una cerradura puede ser una opción cuando el herraje existente es compatible. Llame con el tipo de cerradura, la cantidad de cilindros y si tiene una llave funcional para confirmar disponibilidad y precio.",
    sections: [
      { heading: "¿Se puede reconfigurar su cerradura?", paragraphs: ["La posibilidad depende del tipo de cilindro, su estado y el sistema de llave. Si el herraje no es compatible o está dañado, se pueden conversar otras opciones; no se asume que todas las cerraduras admiten reconfiguración.", "Comparta la marca o tipo de cerradura si lo conoce, cuántas cerraduras desea cambiar y si conserva una llave que funcione. El cerrajero puede preguntar detalles antes de coordinar el despacho."] },
      { heading: "Compare opciones y confirme el precio", paragraphs: ["Pregunte si reconfigurar el herraje existente es posible o si conviene hablar de reemplazo. Confirme por adelantado el precio y qué incluye el alcance acordado.", "Si después de revisar la cerradura se propone otro trabajo, se debe conversar el nuevo alcance y cualquier cambio de precio antes de hacerlo. Si alquila, revise las reglas del edificio antes de cambiar herrajes."] },
      { heading: "Servicio móvil en el Bronx", paragraphs: ["El servicio móvil cubre todo el Bronx sin recargo únicamente por la dirección. El horario regular es lunes–jueves, de 9 a. m. a 5 p. m.; hay disponibilidad las 24 horas de viernes a domingo.", "Llame para confirmar disponibilidad y una estimación de llegada actual no garantizada. La llegada y la duración del trabajo son distintas."] },
    ],
    links: [{ label: "Cerrajería residencial", href: "/es/cerrajero-residencial-bronx/" }, { label: "Cómo evitar estafas de cerrajeros", href: "/es/guias/como-evitar-estafas-cerrajeros-bronx/" }],
    faqs: [
      { q: "¿Es posible cambiar la combinación de cualquier cerradura?", a: "No. Depende del tipo y estado del cilindro y de su compatibilidad. Llame con los detalles para confirmar." },
      { q: "¿Qué es mejor: reconfigurar o reemplazar?", a: "Depende del herraje y la situación. Pregunte qué opciones están disponibles y compare alcance y precio antes de autorizar." },
      { q: "¿Cuándo conoceré el precio?", a: "El precio del alcance acordado se confirma por adelantado antes del despacho." },
    ],
  },
  {
    path: "/es/instalacion-cerradura-inteligente-bronx/", kind: "service",
    title: "Instalación de Cerradura Inteligente en el Bronx",
    description: "Consulte instalación de cerraduras inteligentes en el Bronx. Comparta modelo, puerta y herrajes para verificar compatibilidad y precio.",
    keywords: ["instalación cerradura inteligente Bronx", "cerrajero cerradura smart Bronx", "cerradura digital apartamento Bronx", "instalar smart lock Bronx", "compatibilidad cerradura inteligente"],
    h1: "Solicitud de instalación de cerradura inteligente", eyebrow: "Verifique compatibilidad antes de comprar o instalar",
    intro: "La compatibilidad de una cerradura inteligente depende de la puerta, los herrajes existentes, el modelo y los requisitos de la propiedad. Llame con esos detalles para preguntar si la instalación está disponible y confirmar el alcance y precio.",
    sections: [
      { heading: "Revise la puerta y los herrajes existentes", paragraphs: ["Anote el tipo de cerradura y las medidas que pida el fabricante, como el grosor de la puerta o la distancia del cerrojo. Una cerradura embutida, una medida no estándar o herrajes particulares pueden limitar la compatibilidad.", "Consulte las especificaciones vigentes del modelo específico; no suponga que una cerradura inteligente sirve para toda puerta de apartamento. Si una medida no está clara, pregunte al fabricante o a un instalador calificado."] },
      { heading: "Consulte reglas de alquiler o del edificio", paragraphs: ["Si alquila o vive en un edificio administrado, revise el contrato o pregunte al propietario o a la administración antes de modificar herrajes. Las reglas varían entre propiedades.", "Antes de comprar, comparta el modelo del producto y detalles de la puerta para confirmar si la solicitud está disponible. No se promete compatibilidad hasta conocer las especificaciones pertinentes."] },
      { heading: "Alcance, precio y soporte", paragraphs: ["Pregunte qué incluye la instalación acordada y si hay requisitos del fabricante relacionados con energía, conectividad o acceso de emergencia. Confirme el precio antes del despacho.", "Si se propone un cambio de alcance, se explica cualquier trabajo y precio nuevo antes de hacerlo. El servicio móvil se ofrece en todo el Bronx; llame para confirmar disponibilidad y una estimación de llegada no garantizada."] },
    ],
    links: [{ label: "Cerrajería residencial", href: "/es/cerrajero-residencial-bronx/" }, { label: "Guía de cerraduras inteligentes para apartamentos antiguos", href: "/es/guias/cerraduras-inteligentes-apartamentos-antiguos-bronx/" }],
    faqs: [
      { q: "¿Una cerradura inteligente sirve para mi apartamento antiguo?", a: "Depende de la puerta, los herrajes y el modelo. Revise las especificaciones del producto y consulte al fabricante o a un instalador calificado." },
      { q: "¿Puedo cambiar la cerradura de un apartamento alquilado?", a: "Los requisitos dependen del contrato y del edificio. Consulte al propietario o la administración antes de cambiar los herrajes." },
      { q: "¿Pueden instalar un modelo que ya compré?", a: "Llame con el modelo y los detalles de la puerta para confirmar compatibilidad y disponibilidad." },
    ],
  },
  {
    path: "/es/apertura-local-comercial-bronx/", kind: "service",
    title: "Apertura de Oficina o Negocio en el Bronx",
    description: "¿No puede entrar a su oficina o negocio en el Bronx? Consulte disponibilidad, instrucciones de acceso, alcance y precio antes del despacho.",
    keywords: ["apertura de oficina Bronx", "cerrajero negocio cerrado Bronx", "apertura local comercial Bronx", "cerrajero comercial urgente Bronx", "cerradura de oficina Bronx"],
    h1: "Solicitud de apertura de oficina o negocio", eyebrow: "Acceso comercial sujeto a autorización y hardware",
    intro: "Para solicitar ayuda con una oficina o negocio cerrado en el Bronx, comparta la dirección, la cerradura, las instrucciones del edificio y quién puede autorizar el servicio. Llame para confirmar disponibilidad, alcance y precio.",
    sections: [
      { heading: "Describa el inmueble y el acceso", paragraphs: ["Las puertas, cerraduras y procedimientos de acceso comerciales varían. Explique qué ocurre, el tipo de local y cualquier instrucción de entrada. Pregunte qué información o autorización puede hacer falta para su caso.", "No se asume que una persona tenga autorización para acceder a cualquier inmueble. La persona que solicita el servicio debe explicar su relación con la propiedad y quién estará presente."] },
      { heading: "Confirme el trabajo y el precio", paragraphs: ["El método adecuado depende de la puerta, la cerradura y su condición. Pregunte qué se propone y si puede haber riesgos antes de autorizarlo.", "El precio se confirma por adelantado para el alcance acordado antes del despacho. Si se propone trabajo adicional, el nuevo alcance y precio deben conversarse antes de empezar."] },
      { heading: "Horario y llegada", paragraphs: ["El horario regular es de lunes a jueves, de 9 a. m. a 5 p. m.; hay disponibilidad las 24 horas de viernes a domingo. Llame para confirmar disponibilidad actual para su negocio.", "El propietario informa un promedio de llegada de unos 20 minutos durante los últimos 90 días y 15–20 minutos para la mayoría de llamadas de emergencia; no es una garantía. El tiempo de llegada no indica el tiempo de finalización."] },
    ],
    links: [{ label: "Cerrajero comercial", href: "/es/cerrajero-comercial-bronx/" }, { label: "Sistema de llave maestra", href: "/es/sistema-llave-maestra-bronx/" }, { label: "Contacto", href: "/es/contacto/" }],
    faqs: [
      { q: "¿Qué información debería tener antes de llamar?", a: "Dirección comercial, descripción de puerta y cerradura, instrucciones de acceso y quién puede autorizar el trabajo." },
      { q: "¿Se puede abrir cualquier oficina?", a: "No se garantiza disponibilidad universal; depende del inmueble, la cerradura, el acceso y la autorización." },
      { q: "¿Se cobra un recargo según la dirección?", a: "No hay un cargo adicional únicamente porque la dirección esté en otra parte del Bronx. El precio depende del alcance acordado." },
    ],
  },
  {
    path: "/es/sistema-llave-maestra-bronx/", kind: "service",
    title: "Sistema de Llave Maestra para Negocios en el Bronx",
    description: "Planifique una solicitud de sistema de llave maestra en el Bronx. Describa puertas, herrajes y necesidades de acceso para confirmar opciones y precio.",
    keywords: ["sistema de llave maestra Bronx", "llave maestra para negocio Bronx", "cerrajero comercial llave maestra", "sistema de llaves oficinas Bronx", "control de llaves Bronx"],
    h1: "Solicitud para sistema de llave maestra", eyebrow: "Planificación de acceso comercial",
    intro: "Un sistema de llave maestra puede organizar el acceso a distintas puertas o áreas, pero su idoneidad depende de los cilindros existentes y las necesidades del inmueble. Llame con detalles para consultar disponibilidad, evaluación, alcance y precio.",
    sections: [
      { heading: "Defina las necesidades de acceso", paragraphs: ["Enumere las puertas y los grupos de personas que necesitan acceso. Considere quién abrirá cada área, quién administrará las llaves y cómo pueden cambiar las necesidades cuando cambien el personal o los inquilinos.", "No comparta públicamente planos sensibles ni datos de llaves. Proporcione detalles pertinentes directamente al proveedor cuando solicite información o una evaluación."] },
      { heading: "Revise herrajes y control de llaves", paragraphs: ["Los cilindros, el tipo de puerta y la condición de los herrajes afectan la compatibilidad. Pregunte qué equipo existente podría utilizarse, qué tendría que cambiar y cómo se documentaría el sistema propuesto.", "Converse sobre la emisión, devolución, pérdida o reemplazo de llaves y sobre cómo se presupuestarían cambios futuros. Pida un alcance específico para las puertas incluidas."] },
      { heading: "Precio y planificación del proyecto", paragraphs: ["El precio depende de la cantidad y tipo de puertas, los herrajes y el alcance acordado. Compare propuestas con el mismo alcance y confirme por adelantado qué trabajo está incluido.", "Llame con los datos de la propiedad para saber si el proyecto está disponible. Si después de una revisión cambia el alcance, cualquier trabajo o precio nuevo se conversa antes de autorizarlo."] },
    ],
    links: [{ label: "Cerrajero comercial", href: "/es/cerrajero-comercial-bronx/" }, { label: "Guía de llave maestra para negocios", href: "/es/guias/guia-sistema-llave-maestra-negocios-bronx/" }],
    faqs: [
      { q: "¿Se pueden usar mis cerraduras actuales?", a: "Depende del tipo de cilindro, compatibilidad, estado y diseño. Hace falta revisar los detalles para explicar opciones." },
      { q: "¿Cuánto cuesta un sistema de llave maestra?", a: "Depende de las puertas, los herrajes y el alcance. Solicite un precio específico y confirme qué incluye antes de autorizar." },
      { q: "¿Cuánto tarda el proyecto?", a: "El plazo depende de la propiedad y el trabajo acordado. La llegada del técnico y el tiempo para terminar el proyecto son cosas distintas." },
    ],
  },
  {
    path: "/es/reparacion-barra-antipanico-bronx/", kind: "service",
    title: "Reparación de Barra Antipánico en el Bronx",
    description: "Consulte reparación o servicio de dispositivo de salida comercial en el Bronx. Describa la puerta y el herraje; confirme alcance y precio.",
    keywords: ["reparación barra antipánico Bronx", "cerrajero barra antipánico Bronx", "dispositivo de salida comercial Bronx", "reparar puerta salida Bronx", "barra antipánico negocio Bronx"],
    h1: "Solicitud para barra antipánico o dispositivo de salida", eyebrow: "Servicio para herrajes comerciales de salida",
    intro: "Si un dispositivo de salida comercial no funciona correctamente, describa la puerta, el herraje y el problema al llamar. La disponibilidad, el alcance y el precio se confirman para la situación concreta.",
    sections: [
      { heading: "Identifique la puerta y el dispositivo", paragraphs: ["Comparta la dirección, el uso del edificio, el tipo de puerta y lo que no funciona. Los dispositivos y herrajes cambian según la puerta y el inmueble.", "La reparación o sustitución apropiada depende del hardware y su condición. Pregunte qué trabajo se propone y qué incluye el precio antes de autorizarlo."] },
      { heading: "Las preguntas de códigos requieren una autoridad calificada", paragraphs: ["Los requisitos de salida dependen del uso, ocupación, puerta y códigos aplicables. Esta página no determina el cumplimiento de una puerta o edificio.", "Para asuntos de seguridad vital o cumplimiento, consulte a la autoridad de construcción o seguridad contra incendios pertinente o a un profesional calificado en códigos. No retrase una respuesta de emergencia cuando exista peligro inmediato."] },
      { heading: "Confirme disponibilidad y precio", paragraphs: ["Llame para hablar con un cerrajero real, confirmar la disponibilidad actual y acordar el alcance y precio antes del despacho. Los cambios de alcance o precio se conversan antes de trabajo adicional.", "El servicio móvil cubre todo el Bronx; no se cobra un cargo adicional únicamente por la dirección dentro del distrito. El tiempo de llegada es una estimación no garantizada y no equivale al tiempo de finalización."] },
    ],
    links: [{ label: "Cerrajero comercial", href: "/es/cerrajero-comercial-bronx/" }, { label: "Contacto", href: "/es/contacto/" }],
    faqs: [
      { q: "¿Pueden certificar que la barra antipánico cumple el código?", a: "No se ofrece una determinación de cumplimiento. Consulte a la autoridad pertinente o a un profesional de códigos calificado." },
      { q: "¿Qué debo describir por teléfono?", a: "La ubicación, el tipo de puerta y dispositivo, lo que falla y quién puede autorizar el servicio." },
      { q: "¿El precio es por hora o fijo?", a: "El precio se confirma por adelantado para el alcance acordado; pregunte qué incluye el trabajo solicitado." },
    ],
  },
  {
    path: "/es/apertura-caja-fuerte-bronx/", kind: "service",
    title: "Apertura de Caja Fuerte en el Bronx | Cerrajero",
    description: "¿No puede abrir una caja fuerte en el Bronx? Llame con marca, modelo y tipo de cerradura para consultar opciones y precio.",
    keywords: ["apertura caja fuerte Bronx", "cerrajero caja fuerte Bronx", "abrir caja fuerte Bronx", "servicio de caja fuerte Bronx", "cerradura caja fuerte"],
    h1: "Solicitud de servicio para caja fuerte", eyebrow: "Cada caja fuerte requiere una evaluación específica",
    intro: "Si tiene un problema de acceso a una caja fuerte, llame con la marca, el modelo, el tipo de cerradura y una descripción del problema. El cerrajero puede confirmar disponibilidad y conversar el método propuesto, los riesgos y el precio.",
    sections: [
      { heading: "Tenga a mano los datos de la caja", paragraphs: ["El tipo de caja, cerradura, estado y situación influyen en las opciones posibles. Si los conoce, comparta la marca y el modelo, y explique si la combinación se olvidó, la llave se perdió o el mecanismo dejó de responder.", "No fuerce la caja ni pruebe herramientas improvisadas si esto puede causar daños. No se garantiza un método de apertura, una duración ni un resultado sin daños."] },
      { heading: "Converse el enfoque antes de autorizar", paragraphs: ["Pregunte cuál es el enfoque propuesto, si puede haber daño y qué alternativas podrían estar disponibles. Confirme la tarifa para el alcance acordado antes del despacho.", "Si se propone un trabajo diferente, solicite explicación del alcance y el precio revisados antes de autorizar trabajo adicional. No envíe públicamente combinaciones o datos sensibles de la caja."] },
      { heading: "Horario, precio y servicio móvil", paragraphs: ["El servicio móvil se ofrece en todo el Bronx y no hay recargo únicamente por la dirección. El horario regular es lunes–jueves, de 9 a. m. a 5 p. m.; hay disponibilidad las 24 horas viernes–domingo.", "Llame para confirmar disponibilidad actual y una estimación de llegada no garantizada. El tiempo de llegada es distinto del tiempo para completar el trabajo."] },
    ],
    links: [{ label: "Cerrajería especializada", href: "/es/cerrajero-especializado-bronx/" }, { label: "Contacto", href: "/es/contacto/" }],
    faqs: [
      { q: "¿Se puede abrir una caja sin dañarla?", a: "No se garantiza. Depende de la caja, su cerradura y su condición. Pregunte por riesgos y opciones antes de autorizar." },
      { q: "¿Qué información ayuda al llamar?", a: "Marca y modelo si los conoce, tipo de cerradura, descripción del problema y dirección del servicio." },
      { q: "¿El servicio está disponible las 24 horas?", a: "Hay disponibilidad 24 horas viernes–domingo; el horario regular lunes–jueves es 9 a. m.–5 p. m. Llame para confirmar." },
    ],
  },
  {
    path: "/es/cerradura-buzon-bronx/", kind: "service",
    title: "Cerradura de Buzón en el Bronx | Servicio de Cerrajero",
    description: "¿Perdió la llave del buzón o no funciona la cerradura? Consulte disponibilidad, procedimientos del edificio y precio en el Bronx.",
    keywords: ["cerradura de buzón Bronx", "cerrajero buzón Bronx", "llave buzón perdida Bronx", "cambiar cerradura buzón Bronx", "cerradura correo apartamento Bronx"],
    h1: "Solicitud de servicio para cerradura de buzón", eyebrow: "Buzones y paneles: confirme autorización",
    intro: "Si perdió la llave del buzón o la cerradura está atascada, describa el panel, el tipo de cerradura y la ubicación. Llame para confirmar disponibilidad, qué autorización puede necesitarse y el precio del trabajo acordado.",
    sections: [
      { heading: "Los paneles y procedimientos varían", paragraphs: ["Los buzones pueden formar parte de un panel compartido, una instalación individual o un sistema administrado por el edificio. La propiedad, la administración y los procedimientos postales pueden influir en quién puede solicitar el trabajo.", "Explique si es residente, propietario o administrador; consulte con la administración cuando corresponda. No suponga que cualquier residente puede autorizar cambios a un panel común."] },
      { heading: "Comparta detalles y confirme el alcance", paragraphs: ["Indique la dirección, el estado de la cerradura y si la llave se perdió o el mecanismo no funciona. Pregunte qué información o autorización podría hacer falta para su situación.", "El precio se confirma por adelantado para el alcance acordado antes del despacho. Si se propone cambiar el trabajo o el precio, se conversa antes de comenzar el trabajo adicional."] },
      { heading: "Servicio móvil y horarios", paragraphs: ["El servicio móvil cubre el Bronx sin recargo únicamente por la dirección. El horario regular es de lunes a jueves de 9 a. m. a 5 p. m.; hay disponibilidad de servicio 24 horas viernes–domingo.", "Llame para confirmar disponibilidad actual y una estimación de llegada no garantizada. El tiempo de llegada es independiente del tiempo de reparación o reemplazo."] },
    ],
    links: [{ label: "Cerrajería especializada", href: "/es/cerrajero-especializado-bronx/" }, { label: "Contacto", href: "/es/contacto/" }],
    faqs: [
      { q: "¿Puede un inquilino pedir que cambien la cerradura del buzón?", a: "Depende de la propiedad y sus procedimientos. Consulte al propietario o administrador antes de autorizar cambios a un panel o buzón compartido." },
      { q: "¿Qué debo tener listo al llamar?", a: "Dirección, descripción del panel y la cerradura, problema y su relación con la vivienda o propiedad." },
      { q: "¿El servicio cubre todos los vecindarios del Bronx?", a: "El servicio móvil se ofrece en todo el Bronx. Llame para confirmar disponibilidad para su dirección." },
    ],
  },
  {
    path: "/es/guias/guia-apertura-apartamento-noche-bronx/", kind: "article", category: "Seguridad en una emergencia",
    title: "¿Se Quedó Fuera del Apartamento por la Noche? Bronx",
    description: "Pasos prácticos y seguros si se quedó fuera de su apartamento en el Bronx: busque un lugar seguro, contacte al edificio y confirme alcance y precio.",
    keywords: ["me quedé fuera apartamento Bronx", "cerrajero apartamento noche Bronx", "apertura de apartamento de noche", "qué hacer si no puedo entrar a casa", "cerrajero urgente Bronx"],
    h1: "¿Se quedó fuera de su apartamento por la noche?", eyebrow: "Guía práctica para residentes del Bronx",
    intro: "Quedarse fuera de noche puede ser estresante. Primero atienda su seguridad inmediata; después, contacte al personal del edificio o a un cerrajero según corresponda. Antes de autorizar servicio, confirme disponibilidad, trabajo propuesto y precio.",
    sections: [
      { heading: "Espere en un lugar seguro", paragraphs: ["Si la entrada o la calle no le parece segura, vaya a un lugar cercano bien iluminado y atendido, si está disponible. Si alguien corre peligro inmediato, comuníquese con los servicios de emergencia en lugar de esperar un cerrajero.", "Si tiene los datos del propietario, administrador o superintendente, pregunte por los procedimientos del edificio y las opciones de acceso. Las reglas varían entre propiedades."] },
      { heading: "Qué preguntar antes de llamar a un cerrajero", paragraphs: ["Describa dirección, puerta, cerradura e instrucciones de acceso. Pregunte si hay disponibilidad actual, qué información o autorización puede requerirse, qué trabajo se propone y qué incluye el precio.", "Emergency Locksmith Bronx informa una licencia de cerrajería NYC DCWP activa; el número se proporciona a solicitud y no se publica en línea. Puede consultar la información vigente en los recursos oficiales de NYC."] },
      { heading: "No fuerce la puerta ni suponga el método", paragraphs: ["Evite forzar la puerta o usar herramientas improvisadas si podrían causar lesiones o daños. La opción adecuada depende de la cerradura, la puerta y su condición; pregunte por el método y riesgos antes de aceptar.", "El horario es lunes–jueves, 9 a. m.–5 p. m., y disponibilidad 24 horas viernes–domingo. Llame para confirmar disponibilidad y una estimación de llegada no garantizada para su dirección."] },
    ],
    links: [{ label: "Apertura de apartamento", href: "/es/apertura-apartamento-bronx/" }, { label: "Cerrajero residencial", href: "/es/cerrajero-residencial-bronx/" }, { label: "Contacto", href: "/es/contacto/" }],
    faqs: [
      { q: "¿Qué información debo compartir?", a: "Dirección, detalles de puerta y cerradura si los conoce, circunstancias e instrucciones del edificio. Pregunte si hace falta autorización." },
      { q: "¿Cuánto tarda en llegar un cerrajero?", a: "El promedio informado por el propietario es de unos 20 minutos durante los últimos 90 días; la mayoría de llamadas de emergencia llega en 15–20 minutos. No está garantizado." },
      { q: "¿Cómo sé el precio antes del trabajo?", a: "Pida el precio para el alcance acordado antes del despacho. Cualquier cambio debe conversarse antes de trabajo adicional." },
    ],
  },
  {
    path: "/es/guias/cerraduras-inteligentes-apartamentos-antiguos-bronx/", kind: "article", category: "Hogar inteligente",
    title: "Cerraduras Inteligentes para Apartamentos Antiguos del Bronx",
    description: "Antes de comprar una cerradura inteligente para un apartamento antiguo del Bronx, revise puerta, herrajes, compatibilidad y reglas del edificio.",
    keywords: ["cerradura inteligente apartamento antiguo", "smart lock apartamento Bronx", "cerradura digital puerta apartamento", "compatibilidad cerradura inteligente", "instalar cerradura inteligente Bronx"],
    h1: "Compatibilidad de cerraduras inteligentes en apartamentos antiguos", eyebrow: "Revise medidas y reglas antes de comprar",
    intro: "La compatibilidad de una cerradura inteligente depende de la puerta, los herrajes existentes, el modelo seleccionado y los requisitos de la propiedad. Revise las medidas e instrucciones del fabricante y consulte las reglas del edificio antes de comprar o coordinar una instalación.",
    sections: [
      { heading: "Empiece por la puerta y la cerradura existente", paragraphs: ["Anote el tipo de cerradura y, según las instrucciones del fabricante, el grosor de la puerta y otras medidas. Una cerradura embutida, una distancia no estándar o una puerta especial puede afectar qué productos encajan.", "Consulte la guía actual del modelo específico en vez de suponer que sirve para todas las puertas de apartamento. Si no está seguro de las medidas, pregunte al fabricante o a un instalador calificado antes de modificar la puerta."] },
      { heading: "Consulte al propietario o administrador", paragraphs: ["Si alquila o vive en un edificio administrado, revise el contrato o pregunte al propietario o a la administración antes de cambiar herrajes. Los requisitos varían; esta guía no interpreta un contrato ni es asesoría legal.", "Confirme si el producto conserva los arreglos de acceso que exige la propiedad. Hágalo con el propietario o administrador antes de comprar o instalar una cerradura."] },
      { heading: "Planifique energía, acceso y soporte", paragraphs: ["Lea la información del fabricante sobre alimentación, conectividad, acceso de emergencia y gestión de la cuenta. Guarde en un lugar seguro cualquier método de respaldo e información de recuperación.", "Si desea consultar instalación, comparta el modelo y los detalles de la puerta. Confirme disponibilidad, alcance y precio antes del despacho; no todos los modelos o puertas son compatibles."] },
    ],
    links: [{ label: "Instalación de cerradura inteligente", href: "/es/instalacion-cerradura-inteligente-bronx/" }, { label: "Cerrajero residencial", href: "/es/cerrajero-residencial-bronx/" }],
    faqs: [
      { q: "¿Una cerradura inteligente sirve para una puerta antigua?", a: "Depende de las medidas, los herrajes y el modelo. Revise las especificaciones del producto y consulte al fabricante si tiene dudas." },
      { q: "¿Puedo instalarla en un apartamento alquilado?", a: "Revise el contrato y consulte al propietario o administrador antes de cambiar los herrajes." },
      { q: "¿Pueden instalar un modelo que ya compré?", a: "Llame con el modelo y detalles de la puerta para confirmar compatibilidad y disponibilidad." },
    ],
  },
  {
    path: "/es/guias/como-evitar-estafas-cerrajeros-bronx/", kind: "article", category: "Guía para consumidores",
    title: "Cómo Evitar Estafas de Cerrajeros en el Bronx",
    description: "Antes de contratar un cerrajero en el Bronx, confirme el negocio, consulte licencias oficiales y acuerde alcance y precio antes del despacho.",
    keywords: ["estafas de cerrajeros Bronx", "evitar estafa cerrajero Nueva York", "verificar licencia cerrajero NYC", "precio cerrajero por adelantado", "cerrajero con licencia Bronx"],
    h1: "Preguntas antes de contratar un cerrajero en el Bronx", eyebrow: "Guía de verificación para consumidores",
    intro: "Antes de coordinar servicio, confirme a quién está llamando, qué trabajo está disponible y qué cubre el precio. No suponga que un precio de anuncio, una licencia o un tiempo de llegada aplica a cada proveedor o solicitud.",
    sections: [
      { heading: "Confirme el negocio y la licencia", paragraphs: ["Pida el nombre del negocio y sus datos de licencia; consulte la información vigente en los recursos oficiales de NYC DCWP. Si algo no está claro, contacte a la agencia por canales oficiales.", "Emergency Locksmith Bronx informa que su licencia de cerrajería NYC DCWP está activa. El número se ofrece a solicitud y no se publica en el sitio para reducir riesgos de suplantación y estafa."] },
      { heading: "Acuerde alcance y precio antes del despacho", paragraphs: ["Describa el trabajo y pregunte qué incluye el precio. Confirme el costo para el alcance acordado antes del despacho y pregunte cómo se trataría un cambio de alcance. No autorice trabajo adicional hasta que el nuevo trabajo y precio estén claros.", "Emergency Locksmith Bronx no agrega un cargo únicamente por una dirección de servicio en otra parte del Bronx. El precio depende del trabajo solicitado; pregunte a cada proveedor qué cargos se aplican a su caso."] },
      { heading: "Pida una pausa si algo no coincide", paragraphs: ["Si el nombre del proveedor, el trabajo propuesto o el precio difieren de lo que entendió, haga una pausa y pida aclaración antes de autorizar. Puede tomarse tiempo para verificar el negocio o contactar otra empresa.", "Guarde presupuestos, mensajes y recibos. Si cree que recibió información engañosa, consulte los recursos oficiales de protección al consumidor de NYC DCWP o a un profesional legal calificado sobre opciones para su situación."] },
    ],
    links: [{ label: "Sobre Emergency Locksmith Bronx", href: "/es/sobre-nosotros/" }, { label: "Contacto", href: "/es/contacto/" }, { label: "Solicitudes de cerrajería", href: "/es/servicios-cerrajeria-bronx/" }],
    faqs: [
      { q: "¿Puedo pedir el número de licencia?", a: "Sí. Consulte los datos vigentes mediante los recursos oficiales de NYC DCWP. Emergency Locksmith Bronx proporciona el número a solicitud y no lo publica en línea." },
      { q: "¿Qué debe incluir un presupuesto?", a: "El trabajo incluido, el precio total para ese alcance y cómo se comunicaría cualquier cambio antes de comenzar trabajo adicional." },
      { q: "¿Qué hago si cambia el precio al llegar?", a: "Pida que expliquen el trabajo propuesto y el nuevo precio antes de autorizar trabajo adicional. Puede rechazar el nuevo alcance." },
    ],
  },
  {
    path: "/es/guias/guia-sistema-llave-maestra-negocios-bronx/", kind: "article", category: "Seguridad comercial",
    title: "Planificar un Sistema de Llave Maestra para un Negocio",
    description: "Preguntas para negocios del Bronx que consideran un sistema de llave maestra: accesos, herrajes existentes, control de llaves y alcance.",
    keywords: ["sistema llave maestra negocio Bronx", "llave maestra comercial NYC", "control de llaves negocio", "cerraduras maestras oficina", "cerrajero comercial Bronx"],
    h1: "Cómo planificar un sistema de llave maestra para un negocio", eyebrow: "Guía para propietarios y administradores",
    intro: "Un sistema de llave maestra puede organizar el acceso a varias puertas o grupos de usuarios, pero su idoneidad depende de los herrajes existentes y las necesidades de acceso. Comience por definir quién necesita entrar a cada área y pida opciones para su propiedad.",
    sections: [
      { heading: "Mapee las necesidades de acceso", paragraphs: ["Haga una lista de puertas, usuarios y necesidades relevantes. Determine quién debe entrar a cada área, quién administrará las llaves y cómo pueden cambiar los accesos con movimientos de personal o inquilinos.", "Evite compartir en público planos del edificio o detalles sensibles de llaves. Proporcione la información pertinente directamente al proveedor al solicitar una evaluación."] },
      { heading: "Revise herrajes y control de llaves", paragraphs: ["Los cilindros existentes, el tipo de puerta y el estado de cada cerradura afectan la compatibilidad. Pregunte qué hardware puede mantenerse, qué tendría que cambiar y cómo se documentaría el sistema propuesto.", "Converse sobre emisión, rastreo, devolución o reemplazo de llaves. Pregunte cómo se atenderían llaves perdidas, puertas nuevas o cambios futuros y cuánto podrían costar."] },
      { heading: "Solicite un alcance y precio definidos", paragraphs: ["Una propuesta debe identificar las puertas y herrajes incluidos, y cualquier supuesto sobre evaluación o instalación. Compare propuestas con el mismo alcance en vez de basarse en una cifra genérica por puerta.", "Emergency Locksmith Bronx recibe consultas para cerrajería comercial. Llame con los datos del inmueble para confirmar si el proyecto está disponible, qué incluiría y cuál es el precio por adelantado para el alcance acordado."] },
    ],
    links: [{ label: "Servicio de sistema de llave maestra", href: "/es/sistema-llave-maestra-bronx/" }, { label: "Cerrajero comercial", href: "/es/cerrajero-comercial-bronx/" }],
    faqs: [
      { q: "¿Pueden reutilizarse las cerraduras existentes?", a: "Depende del tipo de cerradura, compatibilidad, condición y requisitos del diseño. Hace falta revisar los detalles para describir las opciones." },
      { q: "¿Cuánto cuesta un sistema de llave maestra?", a: "El precio depende de las puertas, herrajes y alcance. Solicite un presupuesto específico y confirme qué incluye." },
      { q: "¿Cuánto tarda la instalación?", a: "Depende del inmueble, los herrajes y el alcance. La llegada del técnico y la duración del proyecto son tiempos distintos." },
    ],
  },
  {
    path: "/es/guias/llaves-auto-perdidas-cerrajero-o-concesionario/", kind: "article", category: "Seguridad automotriz",
    title: "Llaves de Auto Perdidas: Cerrajero o Concesionario",
    description: "Compare un concesionario y un cerrajero móvil para una llave de auto perdida: compatibilidad, disponibilidad, información requerida y precio total.",
    keywords: ["llaves auto perdidas Bronx", "cerrajero o concesionario llave auto", "reemplazo llave carro Bronx", "llave de auto perdida qué hacer", "cerrajero automotriz Bronx"],
    h1: "Llaves de auto perdidas: compare cerrajero y concesionario", eyebrow: "Una guía para conductores del Bronx",
    intro: "Si perdió una llave del vehículo, un concesionario o un cerrajero móvil pueden ser opciones según el auto y el servicio. Compare disponibilidad, compatibilidad, datos requeridos, traslado y precio total antes de decidir.",
    sections: [
      { heading: "Pregunte si atienden su vehículo", paragraphs: ["Los sistemas de llave cambian según marca, modelo, año y tipo de llave. Dé esos datos a cada proveedor y pregunte si el servicio solicitado está disponible para ese vehículo.", "Pregunte qué información o autorización podría hacer falta y si el vehículo debe estar presente. No suponga que un concesionario o cerrajero puede trabajar con todos los modelos o sistemas."] },
      { heading: "Compare precio completo y logística", paragraphs: ["Pida a cada proveedor el precio para el mismo alcance acordado. Pregunte si podrían aplicar cargos de traslado, diagnóstico, llave u otros a su caso y cuándo podría cambiar el precio.", "La disponibilidad y los tiempos varían. Pregunte si pueden atender el vehículo donde está o si necesita organizar transporte; obtenga una estimación actual antes de decidir."] },
      { heading: "Confirme todo antes de autorizar", paragraphs: ["Antes de autorizar, confirme el nombre del negocio, el trabajo propuesto, qué cubre el precio y cómo se manejarían cambios de alcance.", "Emergency Locksmith Bronx ofrece servicio móvil en todo el Bronx. Llame con los datos del vehículo para confirmar si el trabajo está disponible, el precio por adelantado para el alcance acordado y una estimación de llegada no garantizada."] },
    ],
    links: [{ label: "Cerrajería automotriz", href: "/es/cerrajero-automotriz-bronx/" }, { label: "Reemplazo de llave perdida", href: "/es/reemplazo-llave-auto-perdida-bronx/" }],
    faqs: [
      { q: "¿Un cerrajero móvil siempre cuesta menos que un concesionario?", a: "No necesariamente. Precio y servicios dependen del vehículo y del proveedor. Compare alcance y cargos adicionales posibles." },
      { q: "¿Cuánto tarda en llegar un cerrajero?", a: "El promedio informado es de unos 20 minutos durante los últimos 90 días y la mayoría de llamadas de emergencia llega en 15–20 minutos. No es garantía." },
      { q: "¿Un cerrajero puede hacer la llave de cualquier vehículo?", a: "No se afirma compatibilidad universal. Confirme disponibilidad con marca, modelo, año y tipo de llave." },
    ],
  },
];

export const spanishPages = pages;
export const spanishPageByPath = new Map(pages.map((page) => [page.path, page]));
export const spanishHomePath = "/es/";
export const spanishHome: SpanishPage = {
  path: spanishHomePath,
  kind: "home",
  title: "Cerrajero en el Bronx, NY | Emergency Locksmith Bronx",
  description: "Cerrajero móvil en todo el Bronx. Llame a un cerrajero real para confirmar disponibilidad, precio por adelantado y una estimación de llegada actual.",
  keywords: ["cerrajero Bronx", "cerrajero de emergencia Bronx", "cerrajero móvil Bronx", "cerrajero cerca de mí Bronx", "cerrajero con licencia Bronx"],
  h1: "Cerrajero móvil en todo el Bronx, Nueva York",
  eyebrow: "Emergency Locksmith Bronx · Servicio local móvil",
  intro: "¿Necesita ayuda con una cerradura, llave o vehículo en el Bronx? Llame al (646) 264-1901 para hablar con un cerrajero real. Le hará preguntas sobre el problema y la ubicación para confirmar disponibilidad, explicar el alcance propuesto y comunicar el precio por adelantado antes del despacho.",
  sections: [
    { heading: "Cerrajería para viviendas, negocios y vehículos", paragraphs: ["Las solicitudes incluyen aperturas residenciales y de apartamentos, cerraduras de vehículos, llaves y controles, cerraduras inteligentes, sistemas comerciales, cajas fuertes y buzones. La página de cada servicio describe la información que puede compartir para que el cerrajero entienda el problema.", "La compatibilidad y disponibilidad varían según el tipo de cerradura, la puerta, el vehículo, el producto y la situación. Llame con los detalles para confirmar si se puede atender su solicitud antes de organizar el despacho."] },
    { heading: "Un cerrajero real responde las llamadas", paragraphs: ["Al llamar, un cerrajero real pregunta por la dirección, el vehículo o la cerradura y lo que ocurrió. Las respuestas ayudan a preparar al técnico despachado con herramientas y piezas adecuadas a la solicitud. El negocio informa que verifica los antecedentes de todos sus técnicos.", "El centro centralizado de despacho está en 1510 Castle Hill Ave, Bronx, NY 10462; no es una tienda para visitas sin cita. El servicio de cerrajería es móvil en todo el Bronx."] },
    { heading: "Precio por adelantado y sin recargo por dirección en el Bronx", paragraphs: ["El precio se confirma por adelantado para el alcance acordado antes del despacho. No se agrega un cargo únicamente porque la dirección esté en otra parte del Bronx. Esto no es un precio fijo universal: el total depende del trabajo acordado.", "Si se propone cambiar el alcance, se explican el trabajo nuevo y cualquier ajuste de precio antes de comenzar el trabajo adicional. Puede decidir si desea autorizarlo."] },
    { heading: "Horario y estimación de llegada", paragraphs: ["El horario regular es lunes–jueves, de 9:00 a. m. a 5:00 p. m.; hay disponibilidad de servicio las 24 horas viernes–domingo. Esto no significa 24/7 todos los días. Llame para confirmar la disponibilidad actual.", "El propietario informa un promedio de llegada de aproximadamente 20 minutos durante los últimos 90 días y que la mayoría de las llamadas de emergencia llega en 15–20 minutos. Son promedios informados, no garantías; el tiempo de llegada es distinto del tiempo necesario para completar el trabajo."] },
    { heading: "Credenciales y normas del negocio", paragraphs: ["El propietario confirma que la licencia de cerrajería de NYC Department of Consumer and Worker Protection (DCWP) está activa. El número está disponible a solicitud y no se publica para reducir el riesgo de suplantación y estafas. El propietario informa cobertura de seguro de responsabilidad civil general de hasta $1,000,000, sujeta a los términos de la póliza.", "Para solicitar información, llame al (646) 264-1901 o consulte la página de contacto. Antes de aceptar servicio, confirme disponibilidad, alcance y precio para su situación."] },
  ],
  links: [
    { label: "Todos los servicios de cerrajería", href: "/es/servicios-cerrajeria-bronx/" }, { label: "Cerrajero de emergencia", href: "/es/cerrajero-emergencia-bronx/" }, { label: "Cerrajería residencial", href: "/es/cerrajero-residencial-bronx/" }, { label: "Cerrajería automotriz", href: "/es/cerrajero-automotriz-bronx/" }, { label: "Cerrajería comercial", href: "/es/cerrajero-comercial-bronx/" }, { label: "Áreas de servicio", href: "/es/areas-de-servicio-bronx/" }, { label: "Guías", href: "/es/guias-cerrajeria-bronx/" }, { label: "Contacto", href: "/es/contacto/" },
  ],
  faqs: [
    { q: "¿Atienden todo el Bronx?", a: "El servicio móvil se ofrece en todo el Bronx. Llame con su dirección para confirmar disponibilidad actual y una estimación de llegada." },
    { q: "¿Cuánto tarda en llegar un cerrajero?", a: "El promedio informado es aproximadamente 20 minutos en los últimos 90 días; la mayoría de llamadas de emergencia llega en 15–20 minutos. No es garantía; pregunte por la estimación actual." },
    { q: "¿El servicio está disponible las 24 horas?", a: "Hay disponibilidad las 24 horas viernes–domingo y horario regular de 9 a. m. a 5 p. m. lunes–jueves. No se afirma disponibilidad 24/7 todos los días." },
    { q: "¿Hay recargo por mi dirección dentro del Bronx?", a: "No se agrega un cargo únicamente porque la dirección de servicio esté en otra parte del Bronx. El precio depende del alcance acordado." },
  ],
};

/** Return the corresponding English route for every Spanish URL, including the homepage. */
export function spanishToEnglishPage(path: string): string | undefined {
  return localizedRoutePairs.find(([, es]) => es === path)?.[0];
}
