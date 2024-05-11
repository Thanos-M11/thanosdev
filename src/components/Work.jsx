import WorkItem from "./WorkItem";

function Work({ work }) {
  return (
    <ul className="container">
      {work.map((item) => (
        <WorkItem workItem={item} key={item.id} />
      ))}
    </ul>
  );
}

export default Work;
