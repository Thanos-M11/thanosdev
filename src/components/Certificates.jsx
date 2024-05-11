import Certificate from "./Certificate";

function Certificates({ certificates }) {
  const { id } = certificates;

  return (
    <ul className="container">
      {certificates.map((certificate) => (
        <Certificate certificate={certificate} key={certificate.id} />
      ))}
    </ul>
  );
}

export default Certificates;
