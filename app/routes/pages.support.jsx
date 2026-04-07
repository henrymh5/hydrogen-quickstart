'use client';

import {useState} from 'react';

export const meta = () => [
  {title: 'Support & FAQ | Qi Blanco'},
  {name: 'description', content: 'Häufige Fragen und Antworten sowie Kontaktformular für Qi Blanco Kunden.'},
  {rel: 'canonical', href: '/pages/support'},
];

export function loader() {
  return {};
}

const FAQ_ITEMS = [
  {
    question: 'Wie funktioniert der QiOne®?',
    answer:
      'Der QiOne® enthält keinerlei elektronische Bauteile. Er nutzt einen proprietären Gitterchip, der durch die spezifische Positionierung von Goldatomen ein statisches Feld erzeugt. Dieses Feld fördert die Selbstorganisation von Wassermolekülen zu kohärenten Strukturen – ein Zustand, der die zelluläre Kommunikation im Körper verbessert.',
  },
  {
    question: 'Ist die kohärente Wasserstruktur messbar?',
    answer:
      'Ja. Die kohärente Struktur ist an hydrophoben Oberflächen mikroskopisch sichtbar. Kohärentes Wasser absorbiert Licht bei einer Wellenlänge von 270 nm. Indirekt lassen sich die Auswirkungen über HRV- oder EKG-Geräte messen.',
  },
  {
    question: 'Gibt es einen „Handy Chip" von Qi Blanco®?',
    answer:
      'Nein. Qi Blanco® stellt keine Handy-Chips her. Unsere Produkte passen sich dynamisch an verschiedene Situationen an und bieten durch ihre lange Lebensdauer einen dauerhaften Schutz – im Gegensatz zu herkömmlichen Abschirmprodukten, die nur für ein einzelnes Gerät konzipiert sind.',
  },
  {
    question: 'Gibt es ein Widerrufsrecht?',
    answer:
      'Ja. Es gilt das gesetzliche 14-tägige Widerrufsrecht. Das Widerrufsformular kannst du von unserer Website herunterladen und ausgefüllt an info@qiblanco.com senden. Wir empfehlen den versicherten Versand. Nach Eingang der Ware erstatten wir den Kaufpreis.',
  },
  {
    question: 'Darf der QiOne® nass werden oder in die Sauna?',
    answer:
      'Der QiOne® ist wasserresistent, sollte aber nicht dauerhaft Sonne, Sauna, Salzwasser oder Chlorwasser ausgesetzt werden. Der QiOne® 2 Pro bietet eine erhöhte Beständigkeit gegenüber diesen Einflüssen.',
  },
  {
    question: 'Kann ich den QiOne® an einer anderen Kette tragen?',
    answer:
      'Ja. Der Bohrdurchmesser beträgt 2,5 mm. Metallketten können Kratzer hinterlassen – eine Alternative aus Edelstahl ist erhältlich. Wichtig ist, dass die Kette durch die Öffnung passt.',
  },
  {
    question: 'Wie sollte ich den QiOne® tragen?',
    answer:
      'Du kannst ihn an jeder Körperstelle tragen. Hautkontakt verstärkt die Wirkung. Wenn die Wirkung anfangs zu intensiv ist, kann er anfänglich auch über der Kleidung getragen werden.',
  },
  {
    question: 'Lässt die Wirkung irgendwann nach?',
    answer:
      'Nein. Die Wirkung des QiOne® bleibt bestehen. Was nachlässt, ist das bewusste Spüren der Wirkung – dies ist ein natürlicher Gewöhnungseffekt des Körpers.',
  },
  {
    question: 'Hat der QiOne® einen Einfluss auf Trinkwasser?',
    answer:
      'Ja. Wasser, das in der Nähe des QiOne® aufbewahrt oder getrunken wird, nimmt durch den selbst propagierenden Kohärenzeffekt ebenfalls kohärente Strukturen an.',
  },
  {
    question: 'Wie entstand die Idee für Qi Blanco®?',
    answer:
      'Die Grundlage bilden die Hypothesen des französischen Physikers Jean Émile Charon zur komplexen Relativitätstheorie aus den 1970er und 1980er Jahren, die sich mit der Informationsspeicherung in Elektronen befassen.',
  },
];

function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div style={{marginTop: '1.5rem'}}>
      {FAQ_ITEMS.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            style={{
              borderBottom: '1px solid rgba(0,0,0,0.12)',
              overflow: 'hidden',
            }}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              style={{
                width: '100%',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '1.1rem 0',
                textAlign: 'left',
                font: 'inherit',
                fontSize: '1rem',
                fontWeight: '600',
                color: 'var(--color-dark)',
                gap: '1rem',
              }}
            >
              <span>{item.question}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.1em"
                height="1.1em"
                viewBox="0 0 15 15"
                style={{
                  flexShrink: 0,
                  transition: 'transform 0.2s',
                  transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                }}
              >
                <path
                  fill="currentColor"
                  d="M7.5 9.95a.45.45 0 0 0 .319-.132l3-3a.45.45 0 0 0-.637-.637L7.5 8.863L4.82 6.181l-.07-.057a.451.451 0 0 0-.625.624l.058.07l3 3a.45.45 0 0 0 .318.132"
                />
              </svg>
            </button>
            <div
              style={{
                maxHeight: isOpen ? '600px' : '0',
                overflow: 'hidden',
                transition: 'max-height 0.3s ease',
              }}
            >
              <p style={{paddingBottom: '1.1rem', lineHeight: '1.8', color: 'var(--color-dark)', opacity: 0.85}}>
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function SupportPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({name: '', email: '', message: ''});

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: connect to backend / email service
    setSubmitted(true);
  }

  return (
    <div className="NormalSectionSize" style={{padding: '3rem 1.5rem 5rem'}}>
      <div style={{maxWidth: '680px', margin: '0 auto'}}>
        <h1 style={{marginBottom: '0.5rem'}}>Kontaktiere uns!</h1>
        <p style={{marginBottom: '2.5rem', opacity: 0.7}}>
          Wir sind für dich da! Wenn du weitere Fragen hast oder über etwas anderes sprechen möchtest, nimm mit uns Kontakt auf.
        </p>

        {submitted ? (
          <div
            style={{
              background: 'rgba(57, 110, 37, 0.1)',
              border: '1px solid rgba(57, 110, 37, 0.3)',
              borderRadius: '12px',
              padding: '1.5rem',
              marginBottom: '3rem',
              color: 'var(--checkmark-color)',
            }}
          >
            <strong>Danke für deine Nachricht!</strong> Wir melden uns so schnell wie möglich bei dir.
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{marginBottom: '4rem'}}>
            <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
              <input
                type="text"
                placeholder="Dein Name"
                required
                value={form.name}
                onChange={(e) => setForm((f) => ({...f, name: e.target.value}))}
                style={inputStyle}
              />
              <input
                type="email"
                placeholder="Deine E-Mail"
                required
                value={form.email}
                onChange={(e) => setForm((f) => ({...f, email: e.target.value}))}
                style={inputStyle}
              />
              <textarea
                placeholder="Deine Nachricht"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm((f) => ({...f, message: e.target.value}))}
                style={{...inputStyle, resize: 'vertical'}}
              />
              <button
                type="submit"
                style={{
                  alignSelf: 'flex-start',
                  background: 'var(--color-dark)',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '50px',
                  padding: '0.75rem 2rem',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                }}
              >
                Nachricht senden
              </button>
            </div>
          </form>
        )}

        <h2>Häufige Fragen &amp; Antworten</h2>
        <FaqAccordion />
      </div>
    </div>
  );
}

const inputStyle = {
  width: '100%',
  padding: '0.75rem 1rem',
  border: '1px solid rgba(0,0,0,0.2)',
  borderRadius: '8px',
  fontSize: '1rem',
  fontFamily: 'inherit',
  background: 'rgba(255,255,255,0.6)',
  outline: 'none',
};

/** @template T @typedef {import('react-router').MetaFunction<T>} MetaFunction */
