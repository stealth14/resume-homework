import "./Tab1.css";

const Tab1: React.FC = () => {
  return (
    <div>
      <div id="container">
        <div id="header"></div>
        <div className="left"></div>
        <div className="stuff">
          <br />
          <br />
          <h2>Ronny Cajas</h2>
          <hr />
          <br />
          <p className="head">Intereses</p>
          <ul>
            <li>Dibujo</li>
            <li>Fotografía</li>
            <li>Diseño</li>
            <li>Programar</li>
          </ul>
          <p className="head">Skills</p>
          <ul>
            <li>Scrum</li>
            <li>TDD</li>
            <li>Mi</li>
          </ul>
          <p className="head">Education</p>
          <ul>
            <a href="http://www.wiltonhighschool.org/pages/Wilton_High_School">
              <li>Wilton High School</li>
            </a>
            <a href="https://www.silvermineart.org/">
              <li>Silvermine School of Arts</li>
            </a>
            <li>Codeacademy</li>
          </ul>
          <p className="head">Experience</p>
          <ul>
            <li>Intern (Atikasoft)</li>
            <li>Full Stack developer (Kunpa)</li>
            <li>Junior Software Developer (Sloncorp)</li>
            <li>Senior Software Developer (Ixion Computer Company)</li>
          </ul>
          <p className="head">Extracurriculars</p>
          <ul>
            <li>Recycling Club</li>
            <li>Gardening Club</li>
            <li>Book Club</li>
          </ul>
        </div>
        <div className="right"></div>
        <div id="footer">
          <h2 id="name">Emily</h2>
        </div>
      </div>
    </div>
  );
};

export default Tab1;
