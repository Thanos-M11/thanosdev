import BusinessDevItem from "./BusinessDevItem";

function BusinessDev({ businessDev }) {
  return (
    <ul className="container">
      {businessDev.map((item) => (
        <BusinessDevItem businessDevItem={item} key={item.id} />
      ))}
    </ul>
  );
}

export default BusinessDev;
