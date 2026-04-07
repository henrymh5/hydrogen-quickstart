export const meta = () => [
  {title: 'Datenschutzerklärung | Qi Blanco'},
  {name: 'description', content: 'Datenschutzerklärung der Qi Blanco UG (haftungsbeschränkt)'},
  {rel: 'canonical', href: '/pages/datenschutz'},
];

export function loader() {
  return {};
}

export default function DatenschutzPage() {
  return (
    <div className="NormalSectionSize" style={{maxWidth: '860px', padding: '3rem 1.5rem 5rem'}}>
      <h1 style={{marginBottom: '2.5rem'}}>Datenschutzerklärung</h1>

      <section style={{marginBottom: '2rem'}}>
        <h2>1. Verantwortlicher</h2>
        <p style={{marginTop: '0.5rem', lineHeight: '1.8'}}>
          Qi Blanco UG (haftungsbeschränkt)<br />
          Vertreten durch: Dipl.-Ing. Christian Bernd Bauer<br />
          Brunnrangenstr. 25, 97711 Maßbach<br />
          E-Mail: <a href="mailto:info@qiblanco.com">info@qiblanco.com</a><br />
          Handelsregister: Amtsgericht Schweinfurt, HRB 7306
        </p>
      </section>

      <section style={{marginBottom: '2rem'}}>
        <h2>2. Arten der verarbeiteten Daten</h2>
        <p style={{marginTop: '0.5rem', lineHeight: '1.8'}}>
          Wir verarbeiten folgende Kategorien personenbezogener Daten:
        </p>
        <ul style={{marginTop: '0.5rem', lineHeight: '2', paddingLeft: '1.5rem'}}>
          <li>Bestandsdaten (z. B. Namen, Adressen)</li>
          <li>Kontaktdaten (z. B. E-Mail-Adressen, Telefonnummern)</li>
          <li>Inhaltsdaten (z. B. Texteingaben, Nachrichten)</li>
          <li>Nutzungsdaten (z. B. besuchte Seiten, Zugriffszeiten)</li>
          <li>Meta- und Kommunikationsdaten (z. B. IP-Adressen)</li>
          <li>Zahlungsdaten (z. B. Bankdaten, Zahlungshistorie)</li>
        </ul>
      </section>

      <section style={{marginBottom: '2rem'}}>
        <h2>3. Zweck der Verarbeitung</h2>
        <p style={{marginTop: '0.5rem', lineHeight: '1.8'}}>
          Wir verarbeiten personenbezogene Daten für folgende Zwecke:
        </p>
        <ul style={{marginTop: '0.5rem', lineHeight: '2', paddingLeft: '1.5rem'}}>
          <li>Bereitstellung des Onlineangebotes und seiner Funktionen</li>
          <li>Abwicklung von Bestellungen und Vertragserfüllung</li>
          <li>Beantwortung von Kontaktanfragen</li>
          <li>Versand von Newslettern (nur mit Einwilligung)</li>
          <li>Sicherheitsmaßnahmen und Missbrauchsprävention</li>
          <li>Reichweitenmessung und Marketing</li>
        </ul>
      </section>

      <section style={{marginBottom: '2rem'}}>
        <h2>4. Rechtsgrundlagen</h2>
        <p style={{marginTop: '0.5rem', lineHeight: '1.8'}}>
          Die Verarbeitung personenbezogener Daten erfolgt auf Grundlage der Datenschutz-Grundverordnung (DSGVO):
        </p>
        <ul style={{marginTop: '0.5rem', lineHeight: '2', paddingLeft: '1.5rem'}}>
          <li>Art. 6 Abs. 1 lit. a DSGVO – Einwilligung der betroffenen Person</li>
          <li>Art. 6 Abs. 1 lit. b DSGVO – Vertragserfüllung oder vorvertragliche Maßnahmen</li>
          <li>Art. 6 Abs. 1 lit. c DSGVO – Erfüllung rechtlicher Verpflichtungen</li>
          <li>Art. 6 Abs. 1 lit. f DSGVO – Berechtigte Interessen des Verantwortlichen</li>
        </ul>
      </section>

      <section style={{marginBottom: '2rem'}}>
        <h2>5. Weitergabe an Dritte</h2>
        <p style={{marginTop: '0.5rem', lineHeight: '1.8'}}>
          Eine Übermittlung Ihrer persönlichen Daten an Dritte zu anderen als den im Folgenden aufgeführten Zwecken findet nicht statt. Wir geben Ihre persönlichen Daten nur an Dritte weiter, wenn:
        </p>
        <ul style={{marginTop: '0.5rem', lineHeight: '2', paddingLeft: '1.5rem'}}>
          <li>dies zur Abwicklung von Zahlungen (Zahlungsdienstleister) erforderlich ist,</li>
          <li>dies zur Erfüllung gesetzlicher Verpflichtungen (z. B. Steuerberater, Behörden) erforderlich ist,</li>
          <li>dies zur Vertragsabwicklung (z. B. Versanddienstleister) notwendig ist.</li>
        </ul>
      </section>

      <section style={{marginBottom: '2rem'}}>
        <h2>6. Cookies</h2>
        <p style={{marginTop: '0.5rem', lineHeight: '1.8'}}>
          Unsere Website verwendet Cookies. Dabei handelt es sich um kleine Dateien, die Ihr Browser automatisch erstellt und die auf Ihrem Endgerät gespeichert werden. Cookies richten auf Ihrem Endgerät keinen Schaden an.
        </p>
        <p style={{marginTop: '0.75rem', lineHeight: '1.8'}}>
          Wir nutzen Cookies dazu, unser Angebot nutzerfreundlich zu gestalten. Einige Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese löschen. Sie ermöglichen es uns, Ihren Browser beim nächsten Besuch wiederzuerkennen (persistente Cookies). Andere Cookies werden nach Ende Ihrer Browser-Sitzung automatisch gelöscht (Session-Cookies).
        </p>
        <p style={{marginTop: '0.75rem', lineHeight: '1.8'}}>
          Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie das automatische Löschen der Cookies beim Schließen des Browsers aktivieren.
        </p>
      </section>

      <section style={{marginBottom: '2rem'}}>
        <h2>7. Datenspeicherung und -löschung</h2>
        <p style={{marginTop: '0.5rem', lineHeight: '1.8'}}>
          Personenbezogene Daten werden gelöscht oder gesperrt, sobald der Zweck der Speicherung entfällt. Eine Speicherung kann darüber hinaus erfolgen, wenn dies durch den europäischen oder nationalen Gesetzgeber in unionsrechtlichen Verordnungen, Gesetzen oder sonstigen Vorschriften vorgesehen wurde. Eine Sperrung oder Löschung der Daten erfolgt auch dann, wenn eine durch die genannten Normen vorgeschriebene Speicherfrist abläuft, es sei denn, dass eine Erforderlichkeit zur weiteren Speicherung der Daten für einen Vertragsabschluss oder eine Vertragserfüllung besteht.
        </p>
        <p style={{marginTop: '0.75rem', lineHeight: '1.8'}}>
          Steuerrechtlich relevante Daten werden gemäß § 147 AO bis zu 10 Jahre (Deutschland) aufbewahrt. Handelsrechtlich relevante Unterlagen werden 6 Jahre aufbewahrt.
        </p>
      </section>

      <section style={{marginBottom: '2rem'}}>
        <h2>8. Ihre Rechte als betroffene Person</h2>
        <p style={{marginTop: '0.5rem', lineHeight: '1.8'}}>
          Gemäß der DSGVO stehen Ihnen folgende Rechte zu:
        </p>
        <ul style={{marginTop: '0.5rem', lineHeight: '2', paddingLeft: '1.5rem'}}>
          <li><strong>Auskunft (Art. 15 DSGVO):</strong> Sie haben das Recht, eine Bestätigung darüber zu verlangen, ob betreffende Daten verarbeitet werden, sowie Auskunft über diese Daten.</li>
          <li><strong>Berichtigung (Art. 16 DSGVO):</strong> Sie haben das Recht auf unverzügliche Berichtigung unrichtiger oder Vervollständigung unvollständiger Daten.</li>
          <li><strong>Löschung (Art. 17 DSGVO):</strong> Sie haben das Recht, die Löschung Ihrer Daten zu verlangen, sofern keine Aufbewahrungspflichten entgegenstehen.</li>
          <li><strong>Einschränkung (Art. 18 DSGVO):</strong> Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer Daten zu verlangen.</li>
          <li><strong>Datenübertragbarkeit (Art. 20 DSGVO):</strong> Sie haben das Recht, Ihre Daten in einem strukturierten, gängigen Format zu erhalten.</li>
          <li><strong>Widerspruch (Art. 21 DSGVO):</strong> Sie haben das Recht, gegen die Verarbeitung Ihrer Daten Widerspruch einzulegen.</li>
        </ul>
        <p style={{marginTop: '0.75rem', lineHeight: '1.8'}}>
          Zur Ausübung Ihrer Rechte wenden Sie sich bitte an:{' '}
          <a href="mailto:info@qiblanco.com">info@qiblanco.com</a>
        </p>
      </section>

      <section style={{marginBottom: '2rem'}}>
        <h2>9. Beschwerderecht bei der Aufsichtsbehörde</h2>
        <p style={{marginTop: '0.5rem', lineHeight: '1.8'}}>
          Sie haben gemäß Art. 77 DSGVO das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren, wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer personenbezogenen Daten nicht rechtmäßig erfolgt. Die zuständige Aufsichtsbehörde in Bayern ist das Bayerische Landesamt für Datenschutzaufsicht (BayLDA), Promenade 18, 91522 Ansbach.
        </p>
      </section>

      <section>
        <h2>10. Änderungen dieser Datenschutzerklärung</h2>
        <p style={{marginTop: '0.5rem', lineHeight: '1.8'}}>
          Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen. Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.
        </p>
      </section>
    </div>
  );
}

/** @template T @typedef {import('react-router').MetaFunction<T>} MetaFunction */
