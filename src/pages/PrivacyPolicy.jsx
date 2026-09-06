import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white text-primary">
      <Navbar sticky={false} />

      <div className="max-w-5xl mx-auto px-6 sm:px-10 md:px-16 lg:px-14 xl:px-20 pt-24 sm:pt-28 pb-24 sm:pb-32">
        <h1 className="font-['Plus_Jakarta_Sans'] font-bold text-2xl sm:text-3xl leading-snug text-primary mb-10">
          Privacy Policy
        </h1>

        <div className="flex flex-col gap-8 font-sans text-sm leading-relaxed text-gray-600">
          <section>
            <h2 className="font-['Plus_Jakarta_Sans'] font-semibold text-sm text-primary mb-2">Controller</h2>
            <p>
              Dahyeon Park<br />
              Viehmarktplatz<br />
              85055 Ingolstadt, Germany
            </p>
          </section>

          <section>
            <h2 className="font-['Plus_Jakarta_Sans'] font-semibold text-sm text-primary mb-2">Hosting</h2>
            <p>
              This site is hosted by Vercel Inc. (440 N. Barranca Ave #4133, Covina, CA 91723, USA). Vercel automatically collects server log data (IP address, date/time, browser type) to operate the site securely, based on Art. 6(1)(f) GDPR (legitimate interest). As a US provider, data may be transferred to the US; Vercel is certified under the EU-U.S. Data Privacy Framework.
            </p>
          </section>

          <section>
            <h2 className="font-['Plus_Jakarta_Sans'] font-semibold text-sm text-primary mb-2">Your rights</h2>
            <p>
              Access, correction, deletion, restriction, portability, and objection (Art. 15–21 GDPR), and the right to complain to a supervisory authority. Contact as above.
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}
