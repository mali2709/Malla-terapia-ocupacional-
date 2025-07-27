// script.js

// Datos de la malla curricular en formato JSON
// ¡IMPORTANTE! Rellena los 'creditos' y verifica los 'prerequisitos'
const mallaCurricular = [
  {
    "semestre": "I",
    "ramos": [
      {
        "codigo": "CIDI052",
        "nombre": "COMUNICACIÓN EN LENGUA INGLESA NIVEL BÁSICO",
        "creditos": null,
        "prerequisitos": [],
        "estado": "Pendiente"
      },
      {
        "codigo": "DYRE070",
        "nombre": "EDUCACIÓN FÍSICA Y SALUD",
        "creditos": null,
        "prerequisitos": [],
        "estado": "Pendiente"
      },
      {
        "codigo": "ENFA067",
        "nombre": "ELEMENTOS BÁSICOS DE ATENCIÓN EN SALUD Y PRIMEROS AUXILIOS",
        "creditos": null,
        "prerequisitos": [],
        "estado": "Pendiente"
      },
      {
        "codigo": "ICML065",
        "nombre": "BIOLOGÍA",
        "creditos": null,
        "prerequisitos": [],
        "estado": "Pendiente"
      },
      {
        "codigo": "ICMO055",
        "nombre": "INTRODUCCIÓN A LA TERAPIA OCUPACIONAL",
        "creditos": null,
        "prerequisitos": [],
        "estado": "Pendiente"
      },
      {
        "codigo": "ICMO060",
        "nombre": "TALLER: AUTOCONOCIMIENTO Y RELACIONALIDAD",
        "creditos": null,
        "prerequisitos": [],
        "estado": "Pendiente"
      },
      {
        "codigo": "PSIQ050",
        "nombre": "PSICOLOGÍA GENERAL",
        "creditos": null,
        "prerequisitos": [],
        "estado": "Pendiente"
      },
      {
        "codigo": "SALP083",
        "nombre": "HABILIDADES INFORMACIONALES Y COMUNICACIONALES",
        "creditos": null,
        "prerequisitos": [],
        "estado": "Pendiente"
      }
    ]
  },
  {
    "semestre": "II",
    "ramos": [
      {
        "codigo": "ANAT071",
        "nombre": "ANATOMÍA FUNCIONAL BÁSICA",
        "creditos": null,
        "prerequisitos": [],
        "estado": "Pendiente"
      },
      {
        "codigo": "CIDI072",
        "nombre": "COMUNICACIÓN EN LENGUA INGLESA NIVEL INTERMEDIO",
        "creditos": null,
        "prerequisitos": ["CIDI052"],
        "estado": "Pendiente"
      },
      {
        "codigo": "ELECT127",
        "nombre": "OPTATIVO DE FORMACIÓN GENERAL I",
        "creditos": null,
        "prerequisitos": [],
        "estado": "Pendiente"
      },
      {
        "codigo": "ICMO065",
        "nombre": "EPISTEMOLOGÍA PARA EL ESTUDIO DE LA OCUPACIÓN",
        "creditos": null,
        "prerequisitos": [],
        "estado": "Pendiente"
      },
      {
        "codigo": "ICMO070",
        "nombre": "BIOÉTICA Y PROFESIÓN",
        "creditos": null,
        "prerequisitos": [],
        "estado": "Pendiente"
      },
      {
        "codigo": "ICMO075",
        "nombre": "TALLER: VIVENCIA Y EXPRESIÓN CORPORAL",
        "creditos": null,
        "prerequisitos": [],
        "estado": "Pendiente"
      },
      {
        "codigo": "PSIQ066",
        "nombre": "PSICOLOGÍA DEL DESARROLLO",
        "creditos": null,
        "prerequisitos": ["PSIQ050"],
        "estado": "Pendiente"
      }
    ]
  },
  {
    "semestre": "III",
    "ramos": [
      {
        "codigo": "ELECT128",
        "nombre": "OPTATIVO DE FORMACIÓN GENERAL II",
        "creditos": null,
        "prerequisitos": ["ELECT127"],
        "estado": "Pendiente"
      },
      {
        "codigo": "FISL088",
        "nombre": "FISIOLOGÍA HUMANA",
        "creditos": null,
        "prerequisitos": ["ICML065", "ANAT071"],
        "estado": "Pendiente"
      },
      {
        "codigo": "ICMO080",
        "nombre": "ESTUDIOS SOBRE LA OCUPACIÓN",
        "creditos": null,
        "prerequisitos": ["ICMO065"],
        "estado": "Pendiente"
      },
      {
        "codigo": "ICMO085",
        "nombre": "TALLER: ANÁLISIS DE LA OCUPACIÓN",
        "creditos": null,
        "prerequisitos": [],
        "estado": "Pendiente"
      },
      {
        "codigo": "PSIQ083",
        "nombre": "PSICOLOGÍA SOCIAL",
        "creditos": null,
        "prerequisitos": ["PSIQ066"],
        "estado": "Pendiente"
      },
      {
        "codigo": "SALP077",
        "nombre": "BASES CONCEPTUALES EN SALUD PÚBLICA Y COLECTIVA",
        "creditos": null,
        "prerequisitos": [],
        "estado": "Pendiente"
      },
      {
        "codigo": "SALP082",
        "nombre": "ADMINISTRACIÓN DE SERVICIOS DE SALUD",
        "creditos": null,
        "prerequisitos": [],
        "estado": "Pendiente"
      }
    ]
  },
  {
    "semestre": "IV",
    "ramos": [
      {
        "codigo": "APL0101",
        "nombre": "BIOMECÁNICA",
        "creditos": null,
        "prerequisitos": ["ANAT071", "FISL088"],
        "estado": "Pendiente"
      },
      {
        "codigo": "FISL096",
        "nombre": "NEUROBIOLOGÍA",
        "creditos": null,
        "prerequisitos": ["FISL088"],
        "estado": "Pendiente"
      },
      {
        "codigo": "ICMO090",
        "nombre": "RAZONAMIENTO PROFESIONAL",
        "creditos": null,
        "prerequisitos": ["ICMO080"],
        "estado": "Pendiente"
      },
      {
        "codigo": "ICMO095",
        "nombre": "SOCIOANTROPOLOGÍA DE LA SALUD",
        "creditos": null,
        "prerequisitos": [],
        "estado": "Pendiente"
      },
      {
        "codigo": "ICMO100",
        "nombre": "TALLER: INTERVENCIÓN EN TERAPIA OCUPACIONAL",
        "creditos": null,
        "prerequisitos": ["ICMO085"],
        "estado": "Pendiente"
      },
      {
        "codigo": "SALP092",
        "nombre": "GESTIÓN",
        "creditos": null,
        "prerequisitos": ["SALP082"],
        "estado": "Pendiente"
      },
      {
        "codigo": "SALP097",
        "nombre": "METODOLOGÍA DE LA INVESTIGACIÓN",
        "creditos": null,
        "prerequisitos": [],
        "estado": "Pendiente"
      }
    ]
  },
  {
    "semestre": "V",
    "ramos": [
      {
        "codigo": "APLO107",
        "nombre": "ENFOQUE BIOMÉDICO: TRAUMATOLOGÍA PARA TERAPIA OCUPACIONAL",
        "creditos": null,
        "prerequisitos": ["APL0101"],
        "estado": "Pendiente"
      },
      {
        "codigo": "ICMO105",
        "nombre": "EVALUACIÓN EN TERAPIA OCUPACIONAL",
        "creditos": null,
        "prerequisitos": ["ICMO100"],
        "estado": "Pendiente"
      },
      {
        "codigo": "ICMO115",
        "nombre": "PRÁCTICA INTEGRADA: CONTEXTOS GRUPALES",
        "creditos": null,
        "prerequisitos": [],
        "estado": "Pendiente"
      },
      {
        "codigo": "NEUR118",
        "nombre": "ENFOQUE BIOMÉDICO: NEUROLOGÍA PARA TERAPIA OCUPACIONAL",
        "creditos": null,
        "prerequisitos": ["FISL096"],
        "estado": "Pendiente"
      },
      {
        "codigo": "PSIQ102",
        "nombre": "ENFOQUE BIOMÉDICO: PSIQUIATRÍA PARA TERAPIA OCUPACIONAL",
        "creditos": null,
        "prerequisitos": ["PSIQ083"],
        "estado": "Pendiente"
      }
    ]
  },
  {
    "semestre": "VI",
    "ramos": [
      {
        "codigo": "ELECT100",
        "nombre": "OPTATIVO DE ESPECIALIZACIÓN I",
        "creditos": null,
        "prerequisitos": [],
        "estado": "Pendiente"
      },
      {
        "codigo": "ICMO110",
        "nombre": "ENFOQUE COMUNITARIO Y SOCIAL PARA TERAPIA OCUPACIONAL",
        "creditos": null,
        "prerequisitos": ["ICMO095"],
        "estado": "Pendiente"
      },
      {
        "codigo": "ICMO120",
        "nombre": "TERAPIA OCUPACIONAL EN INFANTO-JUVENIL",
        "creditos": null,
        "prerequisitos": ["ICMO105"],
        "estado": "Pendiente"
      },
      {
        "codigo": "ICMO125",
        "nombre": "TERAPIA OCUPACIONAL EN ADULTOS",
        "creditos": null,
        "prerequisitos": ["ICMO105"],
        "estado": "Pendiente"
      },
      {
        "codigo": "ICMO130",
        "nombre": "INCLUSIÓN SOCIAL",
        "creditos": null,
        "prerequisitos": [],
        "estado": "Pendiente"
      },
      {
        "codigo": "ICMO135",
        "nombre": "PRÁCTICA INTEGRADA: CONTEXTOS COMUNITARIOS",
        "creditos": null,
        "prerequisitos": ["ICMO115"],
        "estado": "Pendiente"
      }
    ]
  },
  {
    "semestre": "VII",
    "ramos": [
      {
        "codigo": "ELECT101",
        "nombre": "OPTATIVO DE ESPECIALIZACIÓN II",
        "creditos": null,
        "prerequisitos": ["ELECT100"],
        "estado": "Pendiente"
      },
      {
        "codigo": "ICMO144",
        "nombre": "PROYECTO DE INVESTIGACIÓN",
        "creditos": null,
        "prerequisitos": ["SALP097"],
        "estado": "Pendiente"
      },
      {
        "codigo": "ICMO149",
        "nombre": "TERAPIA OCUPACIONAL EN DISPOSITIVOS DE ALTA COMPLEJIDAD",
        "creditos": null,
        "prerequisitos": ["APLO107", "NEUR118"],
        "estado": "Pendiente"
      },
      {
        "codigo": "ICMO151",
        "nombre": "TERAPIA OCUPACIONAL EN PERSONAS MAYORES",
        "creditos": null,
        "prerequisitos": ["ICMO125"],
        "estado": "Pendiente"
      },
      {
        "codigo": "ICMO156",
        "nombre": "TERAPIA OCUPACIONAL EN DISPOSITIVOS DE BAJA Y MEDIANA COMPLEJIDAD",
        "creditos": null,
        "prerequisitos": ["APLO107", "NEUR118"],
        "estado": "Pendiente"
      },
      {
        "codigo": "ICMO159",
        "nombre": "PRÁCTICA INTEGRADA: EVALUACIÓN Y DISEÑO TERAPÉUTICO",
        "creditos": null,
        "prerequisitos": ["ICMO135"],
        "estado": "Pendiente"
      },
      {
        "codigo": "ICMO167",
        "nombre": "ORTESIS",
        "creditos": null,
        "prerequisitos": ["APLO107"],
        "estado": "Pendiente"
      }
    ]
  },
  {
    "semestre": "VIII",
    "ramos": [
      {
        "codigo": "ICMO174",
        "nombre": "AVANCE DE INVESTIGACIÓN",
        "creditos": null,
        "prerequisitos": ["ICMO144"],
        "estado": "Pendiente"
      },
      {
        "codigo": "ICMO178",
        "nombre": "TERAPIA OCUPACIONAL EN EDUCACIÓN",
        "creditos": null,
        "prerequisitos": ["ICMO130"],
        "estado": "Pendiente"
      },
      {
        "codigo": "ICMO181",
        "nombre": "TERAPIA OCUPACIONAL EN CONTEXTOS EMERGENTES",
        "creditos": null,
        "prerequisitos": [],
        "estado": "Pendiente"
      },
      {
        "codigo": "ICMO187",
        "nombre": "TERAPIA OCUPACIONAL EN CONTEXTOS LABORALES",
        "creditos": null,
        "prerequisitos": [],
        "estado": "Pendiente"
      },
      {
        "codigo": "ICMO193",
        "nombre": "REFLEXIVIDAD Y ÉTICA PROFESIONAL",
        "creditos": null,
        "prerequisitos": [],
        "estado": "Pendiente"
      },
      {
        "codigo": "ICMO195",
        "nombre": "PRÁCTICA INTEGRADA: PROCESOS TERAPÉUTICOS",
        "creditos": null,
        "prerequisitos": ["ICMO159"],
        "estado": "Pendiente"
      },
      {
        "codigo": "ICMO200",
        "nombre": "TECNOLOGÍA, ADAPTACIONES Y AYUDAS TÉCNICAS",
        "creditos": null,
        "prerequisitos": ["ICMO167"],
        "estado": "Pendiente"
      }
    ]
  },
  {
    "semestre": "IX",
    "ramos": [
      {
        "codigo": "ELECT112",
        "nombre": "OPTATIVO DE PROFUNDIZACIÓN I",
        "creditos": null,
        "prerequisitos": ["ELECT101"],
        "estado": "Pendiente"
      },
      {
        "codigo": "ICMO290",
        "nombre": "PRÁCTICA PROFESIONAL EN EL ÁMBITO DE SALUD",
        "creditos": null,
        "prerequisitos": ["Todas las asignaturas de los 8 primeros semestres aprobadas"],
        "estado": "Pendiente"
      },
      {
        "codigo": "TEOC298",
        "nombre": "SEMINARIO DE TÍTULO",
        "creditos": null,
        "prerequisitos": ["ICMO174"],
        "estado": "Pendiente"
      }
    ]
  },
  {
    "semestre": "X",
    "ramos": [
      {
        "codigo": "ICMO292",
        "nombre": "PRÁCTICA PROFESIONAL EN INCLUSIÓN SOCIAL",
        "creditos": null,
        "prerequisitos": ["ICMO290"],
        "estado": "Pendiente"
      },
      {
        "codigo": "ICMO295",
        "nombre": "PRÁCTICA PROFESIONAL ELECTIVA",
        "creditos": null,
        "prerequisitos": ["ICMO290"],
        "estado": "Pendiente"
      }
    ]
  }
];

const mallaContainer = document.getElementById('mallaContainer');
// Modificación aquí: Se eliminó "Cursando" y "Convalidado"
const estados = ["Pendiente", "Aprobado"]; // Ciclo de estados

// Función para renderizar la malla
function renderMalla() {
    mallaContainer.innerHTML = ''; // Limpia el contenedor antes de renderizar
    mallaCurricular.forEach(semestreData => {
        const semestreBlock = document.createElement('div');
        semestreBlock.classList.add('semestre-block');

        const semestreTitle = document.createElement('h2');
        semestreTitle.classList.add('semestre-title');
        semestreTitle.textContent = `${semestreData.semestre} SEMESTRE`;
        semestreBlock.appendChild(semestreTitle);

        const ramosList = document.createElement('ul');
        ramosList.classList.add('ramos-list');

        semestreData.ramos.forEach(ramo => {
            const ramoItem = document.createElement('li');
            // Asegúrate de que solo se añadan las clases de estado válidas
            ramoItem.classList.add('ramo-item', `estado-${ramo.estado}`);
            ramoItem.dataset.codigo = ramo.codigo;

            const ramoCode = document.createElement('span');
            ramoCode.classList.add('ramo-code');
            ramoCode.textContent = ramo.codigo;

            const ramoName = document.createElement('span');
            ramoName.classList.add('ramo-name');
            ramoName.textContent = ramo.nombre;

            ramoItem.appendChild(ramoCode);
            ramoItem.appendChild(document.createTextNode(' - '));
            ramoItem.appendChild(ramoName);

            if (ramo.prerequisitos && ramo.prerequisitos.length > 0) {
                ramoItem.title = `Pre-requisitos: ${ramo.prerequisitos.join(', ')}`;
            }

            ramoItem.addEventListener('click', () => {
                const currentIndex = estados.indexOf(ramo.estado);
                const nextIndex = (currentIndex + 1) % estados.length;
                ramo.estado = estados[nextIndex];
                renderMalla();
                saveMallaState(); // Guarda el estado actualizado
            });
            ramosList.appendChild(ramoItem);
        });
        semestreBlock.appendChild(ramosList);
        mallaContainer.appendChild(semestreBlock);
    });
}

// Función para cargar el estado de la malla desde LocalStorage
function loadMallaState() {
    const savedMalla = localStorage.getItem('mallaCurricularState');
    if (savedMalla) {
        const loadedData = JSON.parse(savedMalla);
        mallaCurricular.forEach(semestre => {
            semestre.ramos.forEach(ramo => {
                const savedRamo = loadedData.find(s => s.semestre === semestre.semestre)
                                            ?.ramos.find(r => r.codigo === ramo.codigo);
                // Solo carga el estado si es uno de los estados permitidos
                if (savedRamo && estados.includes(savedRamo.estado)) {
                    ramo.estado = savedRamo.estado;
                } else if (savedRamo) {
                    // Si el estado guardado no es válido (ej. "Cursando" antiguo), lo resetea a "Pendiente"
                    ramo.estado = "Pendiente";
                }
            });
        });
    }
}

// Función para guardar el estado de la malla en LocalStorage
function saveMallaState() {
    localStorage.setItem('mallaCurricularState', JSON.stringify(mallaCurricular));
}


// Renderiza la malla al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    loadMallaState();
    renderMalla();
});
