import ContactModal from "../../components/ContactModal";

export default function ContactSection() {
  return (
    <section className="px-6 py-24" id="contact">
      <div className="flex justify-center">
        <div className="max-w-3xl text-center mt-10 mb-10 text-xl">
          {/* Title */}
          <h2 className="text-3xl font-semibold">
            Interested in collaborating with me?
          </h2>
          {/* Paragraph description */}
          <div className="font-light my-5">
            <p>
              I’m always open to discussing product design work or partnership
              opportunities.
            </p>
          </div>
          <div className="font-light my-5">
            <ContactModal />
          </div>
        </div>
      </div>
    </section>
  );
}
