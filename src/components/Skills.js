import React from 'react';

class Skills extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <section>
        <div className='anchor' id='skills'></div>
        <div className='container'>
          <div className='content'>
            <h2>Technology Skills</h2>
            <div className='lgray-text'>
              <div className='skill-panel'>
                <div className='skill-panel--col'>
                  <div className='skill-panel--col-title'>Front-end</div>
                  <ul>
                    <li>ASP.NET</li>
                    <li>React</li>
                    <li>JQuery</li>
                    <li>Javascript</li>
                    <li>HTML &#38; CSS</li>
                    <li>Bootstrap</li>
                  </ul>
                </div>
                <div className='skill-panel--col'>
                  <div className='skill-panel--col-title'>Back-end</div>
                  <ul>
                    <li>C#</li>
                    <li>JSON</li>
                    <li>RESTful API</li>
                    <li>MS SQL Server</li>
                    <li>MySql</li>
                  </ul>
                </div>
                <div className='skill-panel--col'>
                  <div className='skill-panel--col-title'>Other</div>
                  <ul>
                    <li>Wordpress</li>
                    <li>Camtasia</li>
                    <li>Powershell</li>
                    <li>Photoshop</li>
                    <li>Google G Suite Administration</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;
