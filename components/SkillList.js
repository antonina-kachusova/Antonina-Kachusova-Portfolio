export default function SkillList({ skills }) {
  return (
    <div className="skillGrid">
      {skills.map((group) => (
        <section className="skillGroup" key={group.title}>
          <h3>{group.title}</h3>
          <ul>
            {group.items.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
