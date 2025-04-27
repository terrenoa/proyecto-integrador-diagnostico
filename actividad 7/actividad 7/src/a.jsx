import MinervaMcGonagall from './img/MinervaMcGonagall.jpg';
import SeverusSnape from './img/SeverusSnape.jpg';
import PomonaSprout from './img/PomonaSprout.PNG';
import FiliusFlitwick from './img/FiliusFlitwick.jpg';

function A() {
  return (
    <section 
      className="text-gray-300 body-font"
      style={{
        background: 'linear-gradient(135deg, #1e1e1e 25%, #3e3e3e 100%)',
      }}
    >
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-2xl font-medium title-font mb-4 text-white tracking-widest">NUESTRO EQUIPO</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Con sabiduría, valentía, lealtad y ambición, nuestros directores lideran con pasión y compromiso.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {[ 
            { 
              img: MinervaMcGonagall, 
              name: "Minerva McGonagall", 
              role: "Gryffindor", 
              description: "Firme y justa, la profesora McGonagall es una de las figuras más respetadas de Hogwarts..."
            },
            { 
              img: SeverusSnape, 
              name: "Severus Snape", 
              role: "Slytherin", 
              description: "El complejo y astuto Snape, conocido por su lealtad a Slytherin y su profundo sacrificio..."
            },
            { 
              img: PomonaSprout, 
              name: "Pomona Sprout", 
              role: "Hufflepuff", 
              description: "Una gran defensora de la naturaleza y la lealtad, la profesora Sprout es conocida por su empatía..."
            },
            { 
              img: FiliusFlitwick, 
              name: "Filius Flitwick", 
              role: "Ravenclaw", 
              description: "El pequeño pero brillante Flitwick es una inspiración para todos los estudiantes de Ravenclaw..."
            }
          ].map((member, index) => (
            <div key={index} className="p-4 lg:w-1/2">
              <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img alt={member.name} className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={member.img} />
                <div className="flex-grow sm:pl-8">
                  <h2 className="title-font font-medium text-lg text-white">{member.name}</h2>
                  <h3 className="text-gray-300 mb-3">{member.role}</h3>
                  <p className="mb-4">{member.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default A;
