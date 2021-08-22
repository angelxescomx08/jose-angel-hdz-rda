import img1 from '../img/proyectos/1.jpg.jpg'
import atractor from '../img/proyectos/atractor.jpg'
import senales from '../img/proyectos/senales.jpg'
import fourier from '../img/proyectos/fourier.jpg'
import karuta from '../img/proyectos/karuta.jpg'
import montecarlo from '../img/proyectos/montecarlo.jpg'
import sort from '../img/proyectos/sort.jpg'

const carta = [

    {
        "id-eng": 'Karuta',
        "id-esp": 'Karuta',
        "img": karuta,
        "github": 'https://github.com/angelxescomx08/karuta',
        "tittle-eng": 'Karuta all poems with translation',
        "tittle-esp": 'Karuta todos los poemas con traducción',
        "english": <>
            <span>
                <b>Karuta</b> is a sport from Japan, this sport is about 100 poems that are divided in two parts,
                the first part is read and then the players try to take the second part as fast as they can.
            </span>
            <br /><br />
            <span>
                Karuta is an sport about memorization, velocity and reaction and lately the sport has been growing.
            </span>
            <br /><br />
            <span>
                In this project you can see all the 100 poems, see their translations, and some images of the kanjis.
            </span>
        </>,
        "spanish": <>
            <span>
                <b>Karuta</b> es un deporte de Japón, este deporte se trata de 100 poemas que son divididos en 2 partes,
                la primera part es leída y entonces los jugadores tratan de tomar la seguda parte tan rápido como puedan.
            </span>
            <br /><br />
            <span>
                Karuta es un deporte de memorización, velocidad y reación y últimamente el deporte ha credido.
            </span>
            <br /><br />
            <span>
                En este proyecto puedes ver los 100 poemas, ver su traducción y algunas imagenes de los kanjis.
            </span>
        </>,
        "lenguajes": ['javascript', 'react', 'html', 'css'],
        "link_web": 'https://angelxescomx08.github.io/karuta/'
    },

    {
        "id-eng": 'CellularAutomata',
        "id-esp": 'AutomataCelular',
        "img": img1,
        "github": 'https://github.com/angelxescomx08/automata_celular',
        "tittle-esp": 'Autómata celular',
        "tittle-eng": 'Cellular automata',
        "english": <>
            <span>
                A cellular automata is a mathematical and computational model that evolves in time.
                These models can have very weird patterns with some initial configurations that's why
                the scientists are studying them.
            </span>
            <br /><br />
            <span>
                There are 256 rules that you can make in an cellular automata, these rules are described
                with numbers that goes between 0 to 255. In this program you can see the behavior of the
                rules with an initial condition, save the result in a file and more.
            </span>
        </>,
        "spanish": <>
            <span>
                Un autómata celular es un modelo matemático y computacional que evoluciona en el tiempo.
                Estos modelos pueden tener patrones extraños con algunas configuraciones iniciales esa es la razón
                de que los científicos los esten estudiando.
            </span>
            <br /><br />
            <span>
                Hay 256 reglas que puedes hacer en un autómata celular, estas reglas son descritas con números
                que van desde 0 a 255. En este programa puedes ver el comportamiento de las reglas con una
                condición inicial, salvar el resultado en un archivo y más.
            </span>
        </>,
        "lenguajes": ['python'],
        "link_web": false
    },

    {
        "id-eng": 'AttractorCellularAutomata',
        "id-esp": 'AtractorAutomataCelular',
        "img": atractor,
        "github": 'https://github.com/angelxescomx08/atractor_automata_celular',
        "tittle-esp": 'Atractor autómata celular',
        "tittle-eng": 'Attractor cellular automata',
        "english": <>
            <span>
                An attractor is a graphic representation of the behavior of a <b>cellular automata </b>
                one way to see the representation is to use a <b>graph</b>.
            </span>
            <br /><br />
            <span>
                A cellular automata is a mathematical and computational model that evolves in time.
                These models can have very weird patterns with some initial configurations that's why
                the scientists are studying them.
            </span>
            <br /><br />
            <span>
                This program creates a directed graph of an specific rule with an specific size and save
                the image in the actual directory.
            </span>
        </>,
        "spanish": <>
            <span>
                Un atractor es una representación grafica del comportamiento de un <b>autómata celular</b>
                una de las maneras de ver la rpresentación es usar un <b>grafo</b>.
            </span>
            <br/><br/>
            <span>
                Este programa crea un grafo dirigido de una regla especifica con un tamaño especifico y guarda
                la imagen en el directorio actual.
            </span>
        </>,
        "lenguajes": ['python'],
        "link_web": false
    },

    {
        "id-eng": 'SignalProcessing',
        "id-esp": 'ProcesamientoSeñales',
        "img": senales,
        "github": 'https://github.com/angelxescomx08/procesar_senales',
        "tittle-esp": 'Procesamiento de señales',
        "tittle-eng": 'Signal processing',
        "english": <>
            <span>
                A program to apply some operations to a signal, the signal can be introduced as an audio.
                The manipulation of the signal can be save as an audio.
            </span>
            <br /><br />
            <span>
                Some of the operations that you can do are invert an audio, convolution, amplify, reduce,
                add, combine.
            </span>
        </>,
        "spanish": <>
            <span>
                Un programa para aplicar algunas operaciones a una señal, la señal pued ser introducida como un audio.
                La manipulación de la señal puede ser guardada como un audio.
            </span>
            <br/><br/>
            <span>
                Algunas de las operaciones que puedes hacer son invertir un audio, convolución, amplificar, reducir,
                sumar, cambinar.
            </span>
        </>,
        "lenguajes": ['python'],
        "link_web": false
    },

    {
        "id-eng": 'SortingAlgorithms',
        "id-esp": 'AlgoritmosOrdenamiento',
        "img": sort,
        "github": 'https://github.com/angelxescomx08/ordenamiento',
        "tittle-esp": 'Algoritmos de ordenamiento',
        "tittle-eng": 'Sorting algorithms',
        "english": <>
            <span>
                Sort is a very important part of programming so there are many differents algorithms
                such as quick sort, bubble sort, merge sort and others.
            </span>
            <br /><br />
            <span>
                You can see how some of the most famous algorithms works, with a graphic reprsentation,
                check the code that was implemented in javascript.
            </span>
            <br /><br />
            <span>
                Learn more about sorting algorithms.
            </span>
        </>,
        "spanish": <>
            <span>
                Ordenar es una parte importante de la programación entonces hay muchos algortimos diferentes como
                quick sort, bubble sort, merge sort, entre otros.
            </span>
            <br/><br/>
            <span>
                Puedes ver como algunos de los algortimos más famosos trabajan, con una representación grafica, también 
                checha el código que fue implementado en javascript.
            </span>
            <br/><br/>
            <span>
                Aprende más cerca de algoritmos de ordenamiento.
            </span>
        </>,
        "lenguajes": ['javascript', 'react', 'html', 'css', 'algorithms'],
        "link_web": 'https://angelxescomx08.github.io/ordenamiento/'
    },

    {
        "id-eng": 'PICalculation',
        "id-esp": 'CalculoPI',
        "img": montecarlo,
        "github": 'https://github.com/angelxescomx08/metodo_montecarlo',
        "tittle-esp": 'Cálculo de π',
        "tittle-eng": 'π calculation',
        "english": <>
            <span>
                Montecarlo is a method in which you can calculate some values, this calculation is an
                approximation using statistic.
            </span>
            <br /><br />
            <span>
                Knowing how this method works we can use it to calculate <b>π</b>, the idea is to place a
                circle in a square and randomly place some points inside the square, the diameter of the
                circle is equal to the size of the side of the square so <b>π</b> is equal to the area of the
                square times points inside the circle and divided by total of points times radius to the power of two.
            </span>
        </>,
        "spanish": <>
            <span>
                Montecarlo es un método en el que puedes calcular algunos valores, este cálculo es una aproximación
                usando estadística.
            </span>
            <br/><br/>
            <span>
                Sabiendo como trabaja este método podemos usarlo para calcular <b>π</b>, la idea es colocar un círculo
                en un cuadrado y aleatoriamente colocar algunos punos dentro del cuadrado, el diámetro  del círculo
                es igul a el tamaño del lado del cuadrado entonces <b>π</b> es igual al área del cuadrado por el número
                de puntos dentro del círculo y dividido por el total de puntos por el radio al cuadrado.
            </span>
        </>,
        "lenguajes": ['javascript', 'react', 'html', 'css'],
        "link_web": 'https://angelxescomx08.github.io/metodo_montecarlo/'
    },

    {   
        "id-eng": 'Fourier',
        "id-esp": 'Fourier',
        "img": fourier,
        "github": 'https://github.com/angelxescomx08/Fourier',
        "tittle-esp": 'Fourier',
        "tittle-eng": 'Fourier',
        "english": <>
            <span>
                The Fourier transform is a way to convert a signal in the domain of time to frequency,
                this is very useful in telecomunications for processing singals.
            </span>
            <br /><br />
            <span>
                This application is to see one of the simplest transformations, you can change some
                parameters and see with an animation how the transformation is.
            </span>
        </>,
        "spanish": <>
            <span>
                La tranformada de Fourier es una manera de convertir una señal en el domonio del tiempo a la frecuencia,
                esto es muy útil en las telecomunicaciones para el procesamiento de señales.
            </span>
            <br/><br/>
            <span>
                Esta aplicación es para ver una de las tranformaciones más simples, puedes cambiar algunos parametros
                y ver con una animación como es la transformación.
            </span>
        </>,
        "lenguajes": ['javascript', 'html', 'css'],
        "link_web": 'https://angelxescomx08.github.io/Fourier/'
    },

]

export default carta