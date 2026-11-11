const groups = [
  { label: "PROYECTO", items: ["home", "proyecto", "autores", "lema", "logo", "menu", "cuenta"] },
  { label: "DISPOSITIVOS", items: ["contenido", "colores", "circuitos", "sensores", "programa_esp32", "prototipo_3d", "prototipo real"] },
  { label: "INFRAESTRUCTURA", items: ["base_datos", "digital_twin", "servidor_lan", "servidor_wan"] },
  { label: "CALIDAD Y SIMULACIÓN", items: ["evidencia", "game"] },
];

const sections = {
  proyecto: { title: "Proyecto", category: "PROYECTO", summary: "NODO MED es un prototipo académico que explora cómo conectar sensores, software y una interfaz para representar flujos de información en un entorno hospitalario.", focus: "Objetivo del proyecto", detail: "Crear una plataforma didáctica para visualizar datos simulados de dispositivos médicos y estudiar su integración. No sustituye equipos clínicos ni está validada para uso asistencial.", rows: [["ÁMBITO", "Tecnología hospitalaria"], ["PLATAFORMA", "ESP32 + Web"], ["USO", "Demostración académica"]] },
  autores: { title: "Autores", category: "PROYECTO", summary: "Equipo interdisciplinario que desarrolla la propuesta desde la tecnología, el diseño y la investigación en salud.", focus: "Equipo del proyecto", detail: "La revisión de profesionales sanitarios será necesaria antes de plantear cualquier aplicación clínica.", gallery: [{ src: "imagenes/maykel.jpeg", alt: "Retrato de Maykel", title: "Maykel", subtitle: "Autor del proyecto" }, { src: "imagenes/kendry.jpeg", alt: "Retrato de Kendry", title: "Kendry", subtitle: "Autor del proyecto" }, { src: "imagenes/daniela.png", alt: "Retrato de Daniela", title: "Daniela", subtitle: "Autora del proyecto" }], rows: [["INTEGRANTES", "3 autores"], ["ÁREAS", "Tecnología y salud"], ["REVISIÓN CLÍNICA", "Pendiente"]] },
  lema: { title: "Lema", category: "PROYECTO", phrase: "Tu salud en las mejores manos, siempre" },
  logo: { title: "Logo", category: "PROYECTO", summary: "Identidad visual del proyecto y emblema institucional asociado.", focus: "Identidad visual", detail: "Las imágenes se muestran tal como están guardadas en la carpeta del proyecto, sin filtros ni modificaciones.", gallery: [{ src: "imagenes/logo.jpeg", alt: "Logo del proyecto", title: "Logo", subtitle: "Identidad del proyecto" }, { src: "imagenes/escudo.jpeg", alt: "Escudo institucional", title: "Escudo", subtitle: "Identidad institucional" }], rows: [["ARCHIVOS", "2 imágenes"], ["ORIGEN", "Carpeta imagenes"], ["EDICIÓN", "Sin filtros"]] },
  menu: { title: "Menú", category: "PROYECTO", summary: "Navegación por las áreas del prototipo: proyecto, dispositivos, infraestructura y calidad.", focus: "Navegación del panel", detail: "Usa la búsqueda del menú para localizar un apartado. La navegación organiza documentación del prototipo; no es un sistema de gestión hospitalaria.", rows: [["SECCIONES", "19 apartados"], ["BÚSQUEDA", "Filtrado instantáneo"], ["MÓVIL", "Menú adaptable"]] },
  contenido: { title: "Contenido", category: "DISPOSITIVOS", summary: "Guías, esquemas y notas para construir y documentar el prototipo médico de forma reproducible.", focus: "Documentación técnica", detail: "Organiza instrucciones de montaje, fichas de componentes, diagramas y decisiones de diseño. Mantén separada la documentación académica de cualquier registro clínico.", rows: [["GUÍAS", "Montaje y operación"], ["RECURSOS", "Esquemas y fichas"], ["DATOS CLÍNICOS", "No incluidos"]] },
  colores: { title: "Colores", category: "DISPOSITIVOS", summary: "Los colores emblemáticos del proyecto son blanco, verde y azul, elegidos por su asociación visual con espacios de salud.", focus: "Significado en el entorno médico", detail: "Estas asociaciones son orientativas y culturales: los colores ayudan a crear una interfaz serena, pero no representan diagnósticos ni estados de pacientes.", swatches: [{ name: "Blanco", hex: "#FFFFFF", meaning: "Se asocia con higiene, limpieza y claridad. Ayuda a mantener una presentación visual despejada." }, { name: "Verde", hex: "#25825B", meaning: "Se relaciona con salud, bienestar, equilibrio y recuperación." }, { name: "Azul", hex: "#2878B8", meaning: "Comunica confianza, calma y profesionalismo en los espacios de atención." }], rows: [["BLANCO", "#FFFFFF"], ["VERDE", "#25825B"], ["AZUL", "#2878B8"]] },
  circuitos: { title: "Circuitos", category: "DISPOSITIVOS", summary: "Guía de montaje en protoboard del ESP32 con los módulos GY-906, MAX30102 y HW-827 indicados por el firmware del proyecto.", focus: "Montaje y buses", detail: "Con la placa desconectada por USB, lleva 3V3 del ESP32 al riel positivo de la protoboard y GND al riel negativo; comparte esa tierra entre todos los módulos. Mantén separados los dos buses I2C que usa el firmware. Verifica las etiquetas y la ficha de cada breakout antes de alimentar: las señales hacia el ESP32 deben ser de 3,3 V, nunca de 5 V.", wiring: [["Alimentación común", "ESP32 3V3 → riel + (solo si los módulos admiten 3,3 V); ESP32 GND → riel −. Conecta el GND de cada sensor al mismo riel."], ["Temperatura · GY-906", "VCC → 3V3, GND → GND, SDA → GPIO21 y SCL → GPIO22 (bus Wire)."], ["Oximetría · MAX30102", "VIN/VCC → alimentación permitida por el breakout (preferir 3V3), GND → GND, SDA → GPIO16 y SCL → GPIO17 (bus Wire1). No unas estas líneas con GPIO21/22 en este montaje."], ["Ritmo cardíaco · HW-827", "VCC → 3V3, GND → GND y salida analógica AO/SIG → GPIO36 (entrada ADC). No conectes una salida de 5 V al ESP32."], ["Antes de encender", "Comprueba polaridad, pines y tensión en las etiquetas/ficha del módulo. GPIO21/22 y GPIO16/17 deben estar disponibles en tu variante de ESP32; Wire1 y GPIO36 no existen igual en todas las placas."]] , rows: [["CONTROLADOR", "ESP32 DevKit compatible"], ["BUSES I2C", "GY-906: GPIO21/22 · MAX30102: GPIO16/17"], ["ENTRADA ANALÓGICA", "HW-827: GPIO36"], ["CONTACTO CON PACIENTES", "No permitido"]] },
  sensores: { title: "Sensores", category: "DISPOSITIVOS", summary: "Módulos del prototipo para explorar mediciones de temperatura, ritmo y oximetría en un entorno de demostración.", focus: "Sensores del prototipo", detail: "Las imágenes documentan los módulos disponibles. No uses estos componentes para valorar la salud de una persona ni como sustituto de dispositivos médicos certificados.", gallery: [{ src: "imagenes/temperatura.jpg", alt: "Sensor de temperatura", title: "Temperatura", subtitle: "Módulo de temperatura" }, { src: "imagenes/ritmo.webp", alt: "Sensor de ritmo cardíaco", title: "Ritmo", subtitle: "Módulo de pulso" }, { src: "imagenes/oximetria.jpeg", alt: "Módulo de oximetría", title: "Oximetría", subtitle: "Módulo óptico de prueba" }], rows: [["LECTURAS", "Solo demostración"], ["PACIENTES", "Sin medición"], ["VALIDACIÓN CLÍNICA", "No realizada"]] },
  programa_esp32: { title: "Programa ESP32", category: "DISPOSITIVOS", summary: "Firmware experimental para leer módulos de demostración y publicar sus lecturas en una página web servida por el ESP32.", focus: "Firmware del prototipo", detail: "La estimación de SpO2 incluida es aproximada y no está validada. No uses estas lecturas para diagnosticar, tratar ni tomar decisiones de atención.", rows: [["PLACA", "ESP32"], ["SENSORES", "GY-906, MAX30102 y HW-827"], ["DATOS", "Solo demostración"]] },
  prototipo_3d: { title: "Prototipo 3D", category: "DISPOSITIVOS", summary: "Diseño de una carcasa de demostración inspirada en dispositivos y espacios hospitalarios.", focus: "Diseño físico", detail: "Documenta el modelo CAD, materiales y accesibilidad para mantenimiento. Una carcasa impresa no aporta esterilidad, biocompatibilidad ni certificación médica.", rows: [["MODELO CAD", "Pendiente de añadir"], ["FORMATO", "STL / STEP"], ["USO", "Maqueta no clínica"]] },
  "prototipo real": { title: "Prototipo real", category: "DISPOSITIVOS", summary: "Montaje físico para validar conexiones y presentación en una maqueta de entorno hospitalario, nunca en pacientes.", focus: "Integración del prototipo", detail: "Registra fotos del montaje, pruebas de banco y fallos encontrados. Mantén el prototipo aislado de equipos clínicos y de la atención real.", rows: [["MONTAJE", "Demostración"], ["PRUEBAS", "Banco de pruebas"], ["USO ASISTENCIAL", "No autorizado"]] },
  base_datos: { title: "Base de datos", category: "INFRAESTRUCTURA", summary: "Diseño de almacenamiento para datos ficticios y eventos técnicos del prototipo.", focus: "Datos y privacidad", detail: "La web no está conectada a una base de datos. Para una futura integración se requerirían controles de acceso, cifrado, auditoría y cumplimiento de las normas de privacidad sanitaria.", rows: [["REGISTROS", "Datos sintéticos"], ["PACIENTES", "Ningún dato real"], ["CONEXIÓN", "No configurada"]] },
  digital_twin: { title: "Digital twin", category: "INFRAESTRUCTURA", summary: "Representación digital de una maqueta hospitalaria para visualizar estados simulados de equipos y sensores.", focus: "Gemelo digital de demostración", detail: "El modelo permite explorar cómo se presentarían eventos técnicos en una interfaz. No representa la condición de pacientes ni está conectado a infraestructura hospitalaria.", rows: [["ENTORNO", "Hospital simulado"], ["SINCRONIZACIÓN", "No conectada"], ["DATOS", "Ficticios"]] },
  servidor_lan: { title: "Servidor LAN", category: "INFRAESTRUCTURA", summary: "Posible acceso a la demostración dentro de una red local aislada del entorno clínico.", focus: "Red local de pruebas", detail: "El sitio actual es estático y no ejecuta un servidor. Una futura instalación debe mantenerse en una red de pruebas separada, con acceso restringido y sin datos de pacientes.", rows: [["ALCANCE", "Red de pruebas"], ["DIRECCIÓN", "Sin configurar"], ["RED CLÍNICA", "No conectar"]] },
  servidor_wan: { title: "Servidor WAN", category: "INFRAESTRUCTURA", summary: "Consideraciones para publicar una demostración médica de forma remota y segura.", focus: "Acceso remoto", detail: "No publiques datos personales ni expongas dispositivos del hospital. Cualquier servicio futuro necesitaría cifrado, autenticación fuerte, revisión de seguridad y autorización institucional.", rows: [["ALOJAMIENTO", "Sin configurar"], ["SEGURIDAD", "Pendiente de diseño"], ["DATOS SANITARIOS", "No publicar"]] },
  evidencia: { title: "Evidencia", category: "CALIDAD Y SIMULACIÓN", summary: "Bitácora de pruebas de banco, decisiones de diseño y resultados de la maqueta hospitalaria.", focus: "Registro de pruebas", detail: "Documenta objetivo, componentes, condiciones de prueba y resultados. No registres nombres, imágenes, historias clínicas ni otros datos que identifiquen pacientes.", rows: [["PRUEBAS", "Banco / simulación"], ["EVIDENCIA CLÍNICA", "No disponible"], ["DATOS PERSONALES", "No recopilar"]] },
  game: { title: "Game", category: "CALIDAD Y SIMULACIÓN", summary: "Módulo interactivo de educación y simulación para explicar cómo circularían datos en un entorno sanitario.", focus: "Simulación educativa", detail: "El juego puede enseñar conceptos de tecnología hospitalaria con escenarios ficticios. No debe ofrecer diagnósticos, tratamientos ni recomendaciones para pacientes.", rows: [["PROPÓSITO", "Educativo"], ["ESCENARIOS", "Ficticios"], ["RECOMENDACIONES MÉDICAS", "Ninguna"]] },
  cuenta: { title: "Cuenta", category: "PROYECTO", summary: "Registra tu perfil para personalizar esta demostración.", focus: "Perfil de usuario", detail: "Los datos del perfil se guardan únicamente en este navegador.", rows: [["ALMACENAMIENTO", "Este navegador"], ["SERVIDOR", "No conectado"], ["AUTENTICACIÓN", "No disponible"]] },
};

const esp32Program = String.raw`#include <WiFi.h>
#include <WebServer.h>
#include <Wire.h>
#include <Adafruit_MLX90614.h>
#include <MAX30105.h>

// --- CONFIGURACIÓN DE TU RED WIFI ---
const char* ssid = "TU_SSID_WIFI";
const char* password = "TU_CONTRASENA";

WebServer server(80);

// --- OBJETOS DE LOS SENSORES ---
Adafruit_MLX90614 mlx = Adafruit_MLX90614(); // Bus I2C primario (21/22)
MAX30105 particleSensor;                     // Bus I2C secundario (16/17)

// Pin para el sensor HW-827
const int pinHW827 = 36;

// --- VARIABLES GLOBALES ---
float tempObjeto = 0;
float tempAmbiente = 0;

long irValue = 0;
long redValue = 0;
float spO2 = 0;
String estadoDedo = "Pon el dedo";

int hw827Raw = 0;
float hw827Volt = 0;

// --- FUNCIONES DE LECTURA ---
void leerMax30102() {
  irValue = particleSensor.getIR();
  redValue = particleSensor.getRed();

  if (irValue < 50000) {
    estadoDedo = "❌ Pon el dedo";
    spO2 = 0;
  } else {
    estadoDedo = "✅ Dedo detectado";

    // Fórmula aproximada para el cálculo de SpO2 (%)
    // Basada en la relación entre la absorción de luz Roja e Infrarroja
    float ratio = (float)redValue / (float)irValue;
    spO2 = 110.0 - (25.0 * ratio);

    // Limitar los valores entre 0 y 100%
    if (spO2 > 100.0) spO2 = 100.0;
    if (spO2 < 0.0) spO2 = 0.0;
  }
}

void handleRoot() {
  // Leer sensores
  tempAmbiente = mlx.readAmbientTempC();
  tempObjeto = mlx.readObjectTempC();
  leerMax30102();
  hw827Raw = analogRead(pinHW827);
  hw827Volt = hw827Raw * (3.3 / 4095.0);

  // Construcción de HTML usando R"()" para facilitar la lectura del código
  String html = R"=====(
  <!DOCTYPE html>
  <html lang="es">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="refresh" content="2">
    <title>Centro de Monitoreo ESP32</title>
    <style>
      * { box-sizing: border-box; margin: 0; padding: 0; }
      body {
        font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
        background: #0f172a;
        color: #f8fafc;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px;
      }
      .header { text-align: center; margin-bottom: 40px; }
      .header h1 {
        font-size: 2.5em;
        background: linear-gradient(135deg, #3b82f6, #10b981);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        margin-bottom: 10px;
      }
      .header p { color: #64748b; font-size: 1.1em; }
      .grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 25px;
        max-width: 1200px;
        width: 100%;
      }
      .card {
        background: #1e293b;
        border: 1px solid #334155;
        border-radius: 20px;
        padding: 30px;
        box-shadow: 0 10px 25px rgba(0,0,0,0.3);
        display: flex;
        flex-direction: column;
        align-items: center;
        transition: transform 0.3s ease;
      }
      .card:hover { transform: translateY(-5px); }
      .card h2 {
        color: #94a3b8;
        font-size: 1.2em;
        margin-bottom: 20px;
        text-transform: uppercase;
        letter-spacing: 1px;
      }
      .metric { text-align: center; margin: 15px 0; width: 100%; }
      .label { font-size: 1em; color: #94a3b8; margin-bottom: 5px; display: block; }
      .value { font-size: 3em; font-weight: bold; display: block; }
      .value.sm { font-size: 1.8em; }
      .red { color: #ef4444; }
      .blue { color: #3b82f6; }
      .green { color: #22c55e; }
      .purple { color: #a855f7; }
      .status-badge {
        display: inline-block; padding: 10px 20px; border-radius: 50px;
        font-weight: bold; margin-top: 15px; background: #334155;
      }
      .status-active { background: #22c55e; color: #052e16; }
    </style>
  </head>
  <body>
    <div class="header">
      <h1>Centro de Innovación Educativa</h1>
      <p>Monitoreo de sensores en tiempo real</p>
    </div>
    <div class="grid">

      <!-- Tarjeta 1: GY-906 Temperatura -->
      <div class="card">
        <h2>Termómetro IR (GY-906)</h2>
        <div class="metric">
          <span class="label">Temperatura Objeto</span>
          <span class="value red">)=====" + String(tempObjeto, 1) + R"=====( °C</span>
        </div>
        <div class="metric">
          <span class="label">Temperatura Ambiente</span>
          <span class="value blue">)=====" + String(tempAmbiente, 1) + R"=====( °C</span>
        </div>
      </div>

      <!-- Tarjeta 2: MAX30102 Pulsioximetría -->
      <div class="card">
        <h2>Pulsioxímetro (MAX30102)</h2>
        <div class="metric">
          <span class="label">Oxígeno en Sangre (SpO2)</span>
          <span class="value green">)=====" + String((int)spO2) + R"=====( %</span>
        </div>
        <div class="status-badge )=====" + (irValue > 50000 ? "status-active" : "") + R"=====(">)=====" + estadoDedo + R"=====(</div>
      </div>

      <!-- Tarjeta 3: HW-827 Sensor Analógico -->
      <div class="card">
        <h2>Sensor HW-827</h2>
        <div class="metric">
          <span class="label">Lectura Analógica (GPIO36)</span>
          <span class="value purple">)=====" + String(hw827Raw) + R"=====(</span>
        </div>
        <div class="metric">
          <span class="label">Voltaje Equivalente</span>
          <span class="value sm purple">)=====" + String(hw827Volt, 2) + R"=====( V</span>
        </div>
      </div>

    </div>
  </body>
  </html>
  )=====";

  server.send(200, "text/html", html);
}

void setup() {
  Serial.begin(115200);

  // 1. Iniciar bus I2C primario (21, 22) para el GY-906
  Wire.begin(21, 22);
  if (!mlx.begin()) {
    Serial.println(">>> ERROR: No se encontró el GY-906.");
  }

  // 2. Iniciar bus I2C secundario (16, 17) para el MAX30102
  Wire1.begin(16, 17);
  if (!particleSensor.begin(Wire1, I2C_SPEED_FAST)) {
    Serial.println(">>> ERROR: No se encontró el MAX30102.");
  } else {
    byte ledBrightness = 60;
    byte sampleAverage = 4;
    byte ledMode = 2;
    int sampleRate = 100;
    int pulseWidth = 411;
    int adcRange = 4096;
    particleSensor.setup(ledBrightness, sampleAverage, ledMode, sampleRate, pulseWidth, adcRange);
  }

  // 3. Configurar el pin del HW-827
  pinMode(pinHW827, INPUT);
  analogReadResolution(12); // Resolución de 12 bits (0-4095) del ESP32

  // 4. Conexión WiFi
  WiFi.begin(ssid, password);
  Serial.print("Conectando a WiFi...");
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("");
  Serial.println("WiFi conectado!");
  Serial.print("Abre en tu navegador: http://");
  Serial.println(WiFi.localIP());

  // 5. Iniciar servidor
  server.on("/", handleRoot);
  server.begin();
}

void loop() {
  server.handleClient();
  leerMax30102(); // Lectura constante para mantener actualizado el SpO2
}`;

const navList = document.querySelector("#nav-list");
const pageContent = document.querySelector("#page-content");
const sidebar = document.querySelector("#sidebar");
const mobileMenu = document.querySelector("#mobile-menu");
const searchInput = document.querySelector("#nav-search");
let activePage = "home";
let gameState = null;

const gameQuestions = [
  { image: "imagenes/oximetria.jpeg", alt: "Módulo electrónico de prueba para la ronda uno", answer: "oximetria" },
  { image: "imagenes/ritmo.webp", alt: "Módulo electrónico de prueba para la ronda dos", answer: "ritmo" },
  { image: "imagenes/temperatura.jpg", alt: "Módulo electrónico de prueba para la ronda tres", answer: "temperatura" },
];

const gameOptions = [
  { value: "oximetria", label: "Oximetría" },
  { value: "ritmo", label: "Ritmo cardíaco" },
  { value: "temperatura", label: "Temperatura" },
];

const circuitSensors = {
  temperatura: { title: "Temperatura · GY-906", description: "VCC → 3V3 · GND → GND · SDA → GPIO21 · SCL → GPIO22 (Wire)." },
  oximetria: { title: "Oximetría · MAX30102", description: "VIN/VCC → alimentación permitida por el breakout (preferir 3V3) · GND → GND · SDA → GPIO16 · SCL → GPIO17 (Wire1)." },
  ritmo: { title: "Ritmo cardíaco · HW-827", description: "VCC → 3V3 · GND → GND · AO/SIG → GPIO36 (entrada ADC). No conectar una salida de 5 V al ESP32." },
};

function renderCircuitDiagram() {
  return `<section class="circuit-diagram-panel" aria-label="Diagrama interactivo de conexiones">
    <div class="circuit-diagram-heading"><div><span>MAPA DE CABLEADO</span><strong>ESP32 · PROTOBOARD · SENSORES</strong></div><span>SELECCIONA UN MÓDULO</span></div>
    <div class="circuit-diagram-scroll">
      <svg class="circuit-diagram" viewBox="0 0 960 470" role="group" aria-label="Diagrama interactivo de ESP32, protoboard y sensores">
        <defs>
          <pattern id="breadboard-holes" width="18" height="18" patternUnits="userSpaceOnUse"><circle cx="9" cy="9" r="2.2" fill="#b9c9c4"/></pattern>
        </defs>
        <rect class="diagram-bg" x="0" y="0" width="960" height="470" rx="8"/>
        <text class="diagram-caption" x="48" y="40">CONTROLADOR</text>
        <rect class="diagram-board" x="48" y="58" width="205" height="340" rx="12"/>
        <rect class="diagram-chip" x="96" y="145" width="110" height="142" rx="8"/>
        <text class="diagram-chip-label" x="151" y="205" text-anchor="middle">ESP32</text>
        <text class="diagram-chip-small" x="151" y="227" text-anchor="middle">DEVKIT</text>
        <g class="diagram-pin-label"><text x="64" y="103">3V3</text><text x="64" y="133">GND</text><text x="64" y="185">GPIO21</text><text x="64" y="213">GPIO22</text><text x="64" y="271">GPIO16</text><text x="64" y="299">GPIO17</text><text x="64" y="355">GPIO36</text></g>
        <g class="diagram-pins"><circle cx="224" cy="99" r="5"/><circle cx="224" cy="129" r="5"/><circle cx="224" cy="181" r="5"/><circle cx="224" cy="209" r="5"/><circle cx="224" cy="267" r="5"/><circle cx="224" cy="295" r="5"/><circle cx="224" cy="351" r="5"/></g>

        <text class="diagram-caption" x="365" y="40">PROTOBOARD</text>
        <rect class="diagram-breadboard" x="350" y="58" width="260" height="340" rx="12"/>
        <rect x="363" y="80" width="234" height="296" fill="url(#breadboard-holes)"/>
        <line class="diagram-center-gap" x1="363" y1="228" x2="597" y2="228"/>
        <line class="diagram-rail-positive" x1="374" y1="91" x2="586" y2="91"/>
        <line class="diagram-rail-ground" x1="374" y1="367" x2="586" y2="367"/>
        <text class="diagram-rail-label" x="580" y="86" text-anchor="end">+ 3V3</text>
        <text class="diagram-rail-label" x="580" y="361" text-anchor="end">− GND</text>
        <text class="diagram-muted" x="480" y="216" text-anchor="middle">canal central</text>

        <g class="diagram-wire diagram-wire-power"><path d="M229 99 H320 V91 H374"/><path d="M229 129 H335 V367 H374"/></g>
        <g class="diagram-wire diagram-wire-temperature" data-circuit-wire="temperatura"><path d="M229 181 H310 V142 H374"/><path d="M229 209 H326 V160 H374"/><path d="M597 142 H660 V104 H704"/><path d="M597 160 H676 V118 H704"/><path class="diagram-wire-power" d="M597 91 H635 V84 H704"/><path class="diagram-wire-ground" d="M597 367 H646 V146 H704"/></g>
        <g class="diagram-wire diagram-wire-oximetry" data-circuit-wire="oximetria"><path d="M229 267 H310 V259 H374"/><path d="M229 295 H326 V278 H374"/><path d="M597 259 H660 V224 H704"/><path d="M597 278 H676 V238 H704"/><path class="diagram-wire-power" d="M597 91 H650 V204 H704"/><path class="diagram-wire-ground" d="M597 367 H660 V266 H704"/></g>
        <g class="diagram-wire diagram-wire-rhythm" data-circuit-wire="ritmo"><path d="M229 351 H326 V337 H374"/><path d="M597 337 H676 V360 H704"/><path class="diagram-wire-power" d="M597 91 H665 V324 H704"/><path class="diagram-wire-ground" d="M597 367 H690 V383 H704"/></g>

        <g class="circuit-module" data-circuit-select="temperatura" role="button" tabindex="0" aria-label="Seleccionar sensor de temperatura GY-906" aria-pressed="false">
          <rect class="module-outline" x="704" y="70" width="218" height="96" rx="10"/>
          <circle class="module-indicator temperature-indicator" cx="731" cy="118" r="13"/>
          <text class="module-title" x="755" y="108">GY-906</text><text class="module-subtitle" x="755" y="130">TEMPERATURA</text>
          <text class="module-pins" x="719" y="153">3V3 · GND · SDA21 · SCL22</text>
        </g>
        <g class="circuit-module" data-circuit-select="oximetria" role="button" tabindex="0" aria-label="Seleccionar sensor MAX30102 de oximetría" aria-pressed="false">
          <rect class="module-outline" x="704" y="190" width="218" height="96" rx="10"/>
          <circle class="module-indicator oximetry-indicator" cx="731" cy="238" r="13"/>
          <text class="module-title" x="755" y="228">MAX30102</text><text class="module-subtitle" x="755" y="250">OXIMETRÍA</text>
          <text class="module-pins" x="719" y="273">3V3* · GND · SDA16 · SCL17</text>
        </g>
        <g class="circuit-module" data-circuit-select="ritmo" role="button" tabindex="0" aria-label="Seleccionar sensor analógico HW-827 de ritmo cardíaco" aria-pressed="false">
          <rect class="module-outline" x="704" y="310" width="218" height="96" rx="10"/>
          <circle class="module-indicator rhythm-indicator" cx="731" cy="358" r="13"/>
          <text class="module-title" x="755" y="348">HW-827</text><text class="module-subtitle" x="755" y="370">RITMO · ANALÓGICO</text>
          <text class="module-pins" x="719" y="393">3V3 · GND · AO → GPIO36</text>
        </g>
        <text class="diagram-footnote" x="350" y="431">* Verifica la tensión admitida por cada módulo antes de conectarlo.</text>
      </svg>
    </div>
    <div class="circuit-selected-info" id="circuit-selected-info" role="status" aria-live="polite"><strong>Selecciona un módulo</strong><span>Haz clic en un sensor del diagrama para resaltar sus conexiones.</span></div>
  </section>`;
}

function selectCircuitSensor(sensor) {
  const selected = circuitSensors[sensor];
  if (!selected) return;
  pageContent.querySelectorAll("[data-circuit-select]").forEach((module) => {
    const isSelected = module.dataset.circuitSelect === sensor;
    module.classList.toggle("is-selected", isSelected);
    module.setAttribute("aria-pressed", String(isSelected));
  });
  pageContent.querySelectorAll("[data-circuit-wire]").forEach((wire) => {
    wire.classList.toggle("is-muted", wire.dataset.circuitWire !== sensor);
  });
  const info = pageContent.querySelector("#circuit-selected-info");
  info.innerHTML = `<strong>${selected.title}</strong><span>${selected.description}</span>`;
}

function renderNavigation(filter = "") {
  const query = filter.trim().toLocaleLowerCase("es");
  navList.innerHTML = "";
  let visible = 0;
  groups.forEach((group) => {
    const items = group.items.filter((item) => item.toLocaleLowerCase("es").includes(query));
    if (!items.length) return;
    const label = document.createElement("div");
    label.className = "nav-group-label";
    label.textContent = group.label;
    navList.append(label);
    items.forEach((item) => {
      visible += 1;
      const link = document.createElement("a");
      link.className = `nav-item${item === activePage ? " active" : ""}`;
      link.href = `#${encodeURIComponent(item)}`;
      link.dataset.page = item;
      link.innerHTML = `<span>${item}</span><span class="nav-index">${String(visible).padStart(2, "0")}</span>`;
      navList.append(link);
    });
  });
  if (!visible) {
    const empty = document.createElement("div");
    empty.className = "empty-search";
    empty.textContent = "No hay secciones con ese nombre.";
    navList.append(empty);
  }
}

function renderHome() {
  const featured = ["cuenta", "proyecto", "circuitos", "sensores", "programa_esp32", "prototipo_3d", "base_datos", "digital_twin", "evidencia", "game"];
  return `
    <div class="eyebrow">TECNOLOGÍA HOSPITALARIA <span>·</span> NODO MED</div>
    <h1 class="home-heading">Tecnología para<br /><span>el cuidado.</span></h1>
    <p class="intro-copy">Un prototipo académico para explorar la conexión entre sensores, sistemas digitales y los espacios de atención en un hospital.</p>
    <div class="clinical-alert" role="note"><span aria-hidden="true">!</span><div><strong>PROTOTIPO ACADÉMICO · NO ES UN DISPOSITIVO MÉDICO</strong>No usar para diagnosticar, tratar ni tomar decisiones de atención. No conectar a pacientes ni registrar datos clínicos reales.</div></div>
    <section class="hero-panel" aria-label="Presentación del prototipo médico">
      <div class="hero-copy">
        <div class="eyebrow">SALUD DIGITAL · DEMOSTRACIÓN</div>
        <h2>Un hospital conectado, en modo simulación.</h2>
        <p>NODO MED reúne sensores de prueba, una interfaz web y documentación para explorar tecnología aplicada al cuidado.</p>
        <button class="text-link" type="button" data-page="proyecto">CONOCER EL PROYECTO <span>→</span></button>
      </div>
      <div class="hero-image" role="img" aria-label="Profesional de la salud en un entorno hospitalario"><span class="image-stamp">NODO MED / ENTORNO DE SALUD</span></div>
    </section>
    <div class="overview-row" aria-label="Resumen de la demostración">
      <div class="metric"><div class="metric-label">CONTROLADOR</div><div class="metric-value">ESP32 <small>prototipo</small></div></div>
      <div class="metric"><div class="metric-label">DATOS</div><div class="metric-value">Ficticios <small>sin pacientes</small></div></div>
      <div class="metric"><div class="metric-label">ENTORNO</div><div class="metric-value">Simulado <small>no clínico</small></div></div>
    </div>
    <div class="section-heading"><h2>Áreas del proyecto</h2><span>01 — 10 / MÓDULOS</span></div>
    <div class="module-grid">${featured.map((item, index) => `<button class="module-card" type="button" data-page="${item}"><span class="card-index">${String(index + 1).padStart(2, "0")} / ${sections[item].category}</span><span class="card-arrow">↗</span><strong>${sections[item].title}</strong><small>${sections[item].summary.split(".")[0]}.</small></button>`).join("")}</div>`;
}

function renderSection(page) {
  if (page === "cuenta") {
    const account = JSON.parse(localStorage.getItem("nodo-med-account") || "null") || {};
    const escapeAttribute = (value) => String(value).replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character]);
    return `<article class="section-view">
      <div class="eyebrow">PROYECTO <span>·</span> PERFIL LOCAL</div>
      <h1 class="section-title">Inicio de sesión</h1>
      <p class="section-summary">Ingresa tus datos para continuar con tu perfil en NODO MED.</p>
      <form class="account-form" id="account-form">
        <label for="account-name">Nombre</label>
        <input id="account-name" name="name" type="text" autocomplete="given-name" maxlength="60" value="${escapeAttribute(account.name || "")}" required />
        <label for="account-surname">Apellido</label>
        <input id="account-surname" name="surname" type="text" autocomplete="family-name" maxlength="60" value="${escapeAttribute(account.surname || "")}" required />
        <label for="account-age">Edad</label>
        <input id="account-age" name="age" type="number" inputmode="numeric" min="1" max="120" value="${escapeAttribute(account.age || "")}" required />
        <button class="action-button" type="submit">Guardar perfil</button>
        <p class="account-status" id="account-status" role="status" aria-live="polite"></p>
      </form>
      <div class="note-box">Esta demostración guarda los datos solo en este navegador. No crea una cuenta real ni utiliza contraseña o autenticación de servidor.</div>
    </article>`;
  }
  if (page === "lema") return `<article class="slogan-view"><h1>${sections.lema.phrase}</h1></article>`;
  const section = sections[page];
  return `<article class="section-view">
    <div class="eyebrow">${section.category} <span>·</span> NODO MED</div>
    <h1 class="section-title">${section.title}</h1>
    <p class="section-summary">${section.summary}</p>
    ${page === "programa_esp32" ? `<section class="firmware-panel" aria-label="Código del programa ESP32"><div class="firmware-heading"><div><span>FIRMWARE</span><strong>ESP32 · Arduino</strong></div><span>.ino</span></div><p class="firmware-notice">Reemplaza <code>TU_SSID_WIFI</code> y <code>TU_CONTRASENA</code> por credenciales de prueba. El valor de SpO2 es una aproximación educativa, no una medición médica validada.</p><pre class="firmware-code"><code data-esp32-code></code></pre></section>` : ""}
    ${page === "circuitos" ? renderCircuitDiagram() : ""}
    ${section.swatches ? `<div class="color-palette" aria-label="Paleta de colores médicos">${section.swatches.map((swatch) => `<article class="color-card"><div class="color-swatch" style="--swatch-color: ${swatch.hex}"></div><div class="color-card-copy"><h2>${swatch.name}</h2><span>${swatch.hex}</span><p>${swatch.meaning}</p></div></article>`).join("")}</div>` : ""}
    ${section.gallery ? `<div class="image-gallery image-gallery-${page}">${section.gallery.map((image) => `<figure class="image-card"><img src="${image.src}" alt="${image.alt}" loading="lazy" /><figcaption><strong>${image.title}</strong><span>${image.subtitle}</span></figcaption></figure>`).join("")}</div>` : ""}
    ${section.wiring ? `<section class="circuit-wiring detail-block" aria-label="Conexiones en protoboard"><h3>Conexiones en protoboard</h3>${section.wiring.map(([label, value]) => `<div class="data-line"><span>${label}</span><span>${value}</span></div>`).join("")}</section>` : ""}
    <div class="detail-grid">
      <section class="detail-block"><h3>${section.focus}</h3><p>${section.detail}</p><div class="detail-actions"><span class="status-tag">VISTA DOCUMENTAL</span></div></section>
      <section class="detail-block"><h3>Ficha técnica</h3>${section.rows.map(([label, value]) => `<div class="data-line"><span>${label}</span><span>${value}</span></div>`).join("")}</section>
    </div>
    <div class="note-box">Prototipo académico no validado como dispositivo médico. No conectar a pacientes ni utilizar para diagnóstico, tratamiento o decisiones clínicas. Esta web no recibe datos hospitalarios reales.</div>
    <div class="detail-actions"><button class="action-button" type="button" data-page="home">← Volver al inicio</button><button class="action-button secondary" type="button" data-page="evidencia">Ver evidencia</button></div>
  </article>`;
}

function renderGame() {
  gameState = { roundIndex: 0, score: 0, answered: false, selectedAnswer: "" };
  return `<article class="game-view">
    <div class="eyebrow">CALIDAD Y SIMULACIÓN <span>·</span> JUEGO EDUCATIVO</div>
    <h1 class="section-title">Conecta cada sensor</h1>
    <p class="section-summary">Observa el módulo y relaciónalo con el parámetro que recopila el prototipo. Completa las tres rondas para sumar puntos.</p>
    <section class="game-panel" aria-label="Juego de asociación de sensores"><div id="game-stage">${renderGameRound()}</div></section>
    <div class="note-box">Actividad educativa con imágenes de los módulos del proyecto. No utiliza datos de personas ni interpreta mediciones médicas.</div>
    <button class="action-button secondary game-home-button" type="button" data-page="home">← Volver al inicio</button>
  </article>`;
}

function renderGameRound() {
  if (gameState.roundIndex >= gameQuestions.length) {
    return `<div class="game-complete" role="status">
      <span class="game-complete-mark" aria-hidden="true">✓</span>
      <div class="eyebrow">MISIÓN COMPLETADA</div>
      <h2>${gameState.score} de ${gameQuestions.length} asociaciones correctas</h2>
      <p>Terminaste el recorrido por los sensores de oximetría, ritmo cardíaco y temperatura.</p>
      <div class="game-result-actions"><button class="action-button" type="button" data-game-restart>Jugar de nuevo</button><button class="action-button secondary" type="button" data-page="sensores">Ver sensores</button></div>
    </div>`;
  }

  const question = gameQuestions[gameState.roundIndex];
  const roundNumber = gameState.roundIndex + 1;
  const progress = (gameState.roundIndex / gameQuestions.length) * 100;
  const feedback = gameState.answered
    ? `<div class="game-feedback ${gameState.selectedAnswer === question.answer ? "correct" : "incorrect"}" role="status"><strong>${gameState.selectedAnswer === question.answer ? "¡Correcto!" : "Sigue practicando"}</strong><p>En este proyecto, este módulo se asocia con ${gameOptions.find((option) => option.value === question.answer).label.toLocaleLowerCase("es")}.</p><button class="action-button" type="button" data-game-next>${roundNumber === gameQuestions.length ? "Ver resultado" : "Siguiente ronda"} →</button></div>`
    : "";

  return `<div class="game-round">
    <div class="game-round-heading"><div><span>RONDA</span><strong>${String(roundNumber).padStart(2, "0")} <small>/ ${String(gameQuestions.length).padStart(2, "0")}</small></strong></div><span class="game-score">PUNTOS <b>${gameState.score}</b></span></div>
    <div class="game-progress" role="progressbar" aria-label="Progreso del juego" aria-valuemin="0" aria-valuemax="${gameQuestions.length}" aria-valuenow="${gameState.roundIndex}"><span style="width: ${progress}%"></span></div>
    <div class="game-question-grid">
      <figure class="game-sensor-image"><img src="${question.image}" alt="${question.alt}" /><figcaption>MÓDULO DE PRUEBA · ${String(roundNumber).padStart(2, "0")}</figcaption></figure>
      <div class="game-question"><div class="eyebrow">ASOCIACIÓN DE SENSORES</div><h2>¿Qué parámetro registra este módulo?</h2><p>Elige una opción para continuar.</p><div class="game-options">${gameOptions.map((option, index) => {
        const isCorrect = gameState.answered && option.value === question.answer;
        const isSelectedWrong = gameState.answered && option.value === gameState.selectedAnswer && !isCorrect;
        return `<button class="answer-option${isCorrect ? " is-correct" : ""}${isSelectedWrong ? " is-wrong" : ""}" type="button" data-game-answer="${option.value}" ${gameState.answered ? "disabled" : ""}><span class="option-index">0${index + 1}</span><span>${option.label}</span><span class="option-mark" aria-hidden="true">${isCorrect ? "✓" : isSelectedWrong ? "×" : "↗"}</span></button>`;
      }).join("")}</div>${feedback}</div>
    </div>
  </div>`;
}

function navigate(page) {
  if (page !== "home" && !sections[page]) return;
  activePage = page;
  pageContent.innerHTML = page === "home" ? renderHome() : page === "game" ? renderGame() : renderSection(page);
  if (page === "programa_esp32") pageContent.querySelector("[data-esp32-code]").textContent = esp32Program;
  pageContent.style.animation = "none";
  requestAnimationFrame(() => { pageContent.style.animation = ""; });
  document.querySelector("#breadcrumb-current").textContent = page;
  document.title = `${page === "home" ? "Inicio" : sections[page].title} — NODO MED`;
  renderNavigation(searchInput.value);
  sidebar.classList.remove("open");
  mobileMenu.setAttribute("aria-expanded", "false");
  mobileMenu.setAttribute("aria-label", "Abrir menú");
  if (location.hash !== `#${encodeURIComponent(page)}`) history.replaceState(null, "", `#${encodeURIComponent(page)}`);
}

document.addEventListener("click", (event) => {
  const circuitModule = event.target.closest("[data-circuit-select]");
  if (circuitModule && activePage === "circuitos") {
    selectCircuitSensor(circuitModule.dataset.circuitSelect);
    return;
  }

  const answerButton = event.target.closest("[data-game-answer]");
  if (answerButton && activePage === "game" && gameState && !gameState.answered) {
    const question = gameQuestions[gameState.roundIndex];
    gameState.selectedAnswer = answerButton.dataset.gameAnswer;
    gameState.answered = true;
    if (gameState.selectedAnswer === question.answer) gameState.score += 1;
    document.querySelector("#game-stage").innerHTML = renderGameRound();
    return;
  }

  if (event.target.closest("[data-game-next]") && gameState) {
    gameState.roundIndex += 1;
    gameState.answered = false;
    gameState.selectedAnswer = "";
    document.querySelector("#game-stage").innerHTML = renderGameRound();
    return;
  }

  if (event.target.closest("[data-game-restart]") && activePage === "game") {
    pageContent.innerHTML = renderGame();
    return;
  }

  const target = event.target.closest("[data-page]");
  if (target) {
    event.preventDefault();
    navigate(target.dataset.page);
  }
});

document.addEventListener("keydown", (event) => {
  const circuitModule = event.target.closest("[data-circuit-select]");
  if (circuitModule && (event.key === "Enter" || event.key === " ")) {
    event.preventDefault();
    selectCircuitSensor(circuitModule.dataset.circuitSelect);
  }
});

document.addEventListener("submit", (event) => {
  if (event.target.id !== "account-form") return;
  event.preventDefault();
  const formData = new FormData(event.target);
  const account = {
    name: formData.get("name").trim(),
    surname: formData.get("surname").trim(),
    age: Number(formData.get("age")),
  };
  localStorage.setItem("nodo-med-account", JSON.stringify(account));
  document.querySelector("#account-status").textContent = `Perfil guardado. ¡Hola, ${account.name}!`;
});

searchInput.addEventListener("input", () => renderNavigation(searchInput.value));
searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") navList.querySelector(".nav-item")?.click();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "/" && !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) {
    event.preventDefault();
    searchInput.focus();
  }
  if (event.key === "Escape") {
    sidebar.classList.remove("open");
    mobileMenu.setAttribute("aria-expanded", "false");
  }
});
mobileMenu.addEventListener("click", () => {
  const isOpen = sidebar.classList.toggle("open");
  mobileMenu.setAttribute("aria-expanded", String(isOpen));
  mobileMenu.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
});

document.querySelector("#today-date").textContent = new Intl.DateTimeFormat("es", { day: "2-digit", month: "short", year: "numeric" }).format(new Date()).toUpperCase();
renderNavigation();
const initialPage = decodeURIComponent(location.hash.slice(1));
navigate(initialPage && (initialPage === "home" || sections[initialPage]) ? initialPage : "home");