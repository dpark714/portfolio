import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

export default function Impressum() {
  return (
    <div className="min-h-screen bg-white text-primary">
      <Navbar sticky={false} />

      <div className="max-w-5xl mx-auto px-6 sm:px-10 md:px-16 lg:px-14 xl:px-20 pt-24 sm:pt-28 pb-24 sm:pb-32">
        <h1 className="font-['Plus_Jakarta_Sans'] font-bold text-2xl sm:text-3xl leading-snug text-primary mb-10">
          Impressum / Imprint
        </h1>

        <div className="flex flex-col gap-8 font-sans text-sm leading-relaxed text-gray-600">
          <section>
            <h2 className="font-['Plus_Jakarta_Sans'] font-semibold text-base text-primary mb-2">
              Information according to § 5 DDG (German Digital Services Act)
            </h2>
            <p>
              Dahyeon Park<br />
              Viehmarktplatz<br />
              85055 Ingolstadt, Germany
            </p>
          </section>

          <section>
            <h2 className="font-['Plus_Jakarta_Sans'] font-semibold text-sm text-primary mb-2">Contact</h2>
            <p>Email: dahyeon714@gmail.com</p>
          </section>

          <section>
            <h2 className="font-['Plus_Jakarta_Sans'] font-semibold text-sm text-primary mb-2">
              Responsible for content per § 18 (2) MStV (German Interstate Media Treaty)
            </h2>
            <p>
              Dahyeon Park<br />
              Viehmarktplatz 1<br />
              85055 Ingolstadt, Germany
            </p>
          </section>

          <section>
            <h2 className="font-['Plus_Jakarta_Sans'] font-semibold text-base text-primary mb-2">Disclaimer</h2>

            <div className="flex flex-col gap-5">
              <div>
                <p className="font-['Plus_Jakarta_Sans'] font-semibold text-primary mb-1">Liability for content</p>
                <p>
                  As a service provider, we are responsible for our own content on these pages in accordance with general law (§ 7 (1) DDG). We are not obligated to monitor transmitted or stored third-party information (§§ 8–10 DDG).
                </p>
              </div>

              <div>
                <p className="font-['Plus_Jakarta_Sans'] font-semibold text-primary mb-1">Liability for links</p>
                <p>
                  This site may contain links to external third-party websites over whose content we have no control. The respective provider is always responsible for the content of linked pages.
                </p>
              </div>

              <div>
                <p className="font-['Plus_Jakarta_Sans'] font-semibold text-primary mb-1">Copyright</p>
                <p>
                  Content and works created by the site operator are subject to German copyright law. Third-party contributions are marked as such. Downloads and copies of this page are permitted only for private, non-commercial use.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}
