import "../css/section2.css";

const tableContent = [
  {
    icon: "bitcoin",
    title: "Understand every step of the way",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer est tellus, pulvinar ac iaculis vel, varius eu arcu tor vestibulum.",
  },
  {
    icon: "discord",
    title: "Build faster with instant answers",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer est tellus, pulvinar ac iaculis vel, varius eu arcu tor vestibulum.",
  },
  {
    icon: "globe",
    title: "Unlock insights for everyone",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer est tellus, pulvinar ac iaculis vel, varius eu arcu tor vestibulum.",
  },
];

const Section2 = () => {
  return (
    <div className="section2">
      <TableContent />
      <JustContent />
    </div>
  );
};

export default Section2;

export const TableContent = () => {
  return (
    <div className="table-section1">
      {tableContent.map((item, idx) => (
        <div key={idx} className="inside-content">
          <i className={`pi pi-${item.icon}`}></i>
          <h2>{item.title}</h2>
          <p>{item.paragraph}</p>
        </div>
      ))}
    </div>
  );
};

export const JustContent = () => {
  return (
    <div className="table-section2">
      <h2>A foundation built for scale and forsight</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. praesentium
        temporibus obcaecati, veniam similique velit.
      </p>
    </div>
  );
};
