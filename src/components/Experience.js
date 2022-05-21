import React from 'react';

const jobs = [
  {
    id: 1,
    company: 'ScanSearch',
    title: 'CTO',
    term: '2021-Present',
    description:
      'Design and develop online document imaging and workflow solutions for a SaaS environment. Deploy and manage systems using the Microsoft Azure platform.',
  },
  {
    id: 2,
    company: 'School District of Manawa',
    title: 'Technology Director',
    term: '2017-2021',
    description:
      'Technology leader and part of the school district administration team. Responsible for all aspects of technology including network administration, server management, systems integration, training, and maintenance.',
  },
  {
    id: 3,
    company: 'Manitowoc School District',
    title: 'Data & Technology Specialist',
    term: '2014-2017',
    description:
      'Serve as technology advisor to administrators and educators. Trusted on projects involving classroom technology, communications, professional development, assessment, and custom software design. Collaborate with others to build consensus, plan, and implement technology goals.',
  },
  {
    id: 4,
    company: 'Open Scan Technologies',
    title: 'Senior Software Engineer',
    term: '2011-2013',
    description:
      'Designed enterprise document imaging and workflow management solutions to streamline and automate accounts payable processes. Developed using .NET, Microsoft SQL Server, and AJAX technologies.',
  },
  {
    id: 5,
    company: 'DocEdge, Inc',
    title: 'Owner',
    term: '2004-2011',
    description:
      'Developed, marketed, and maintained custom accounts payable solutions. Consulted with clients to understand goals and tailor solution to fit their needs. Integrated disparate systems to create unified solutions.',
  },
];

class Experience extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: jobs[0].id,
      company: jobs[0].company,
      title: jobs[0].title,
      term: jobs[0].term,
      description: jobs[0].description,
    };
  }

  jobClicked = (id, company, title, term, description) => {
    console.log(`Clicked: ${company}`);
    this.setState({
      id: id,
      company: company,
      title: title,
      term: term,
      description: description,
    });
  };

  render() {
    return (
      <section>
        <div className='anchor' id='experience'></div>
        <div className='container'>
          <div className='content'>
            <h2>Experience</h2>
            <div className='experience'>
              <div className='joblist'>
                {jobs.map((job) => {
                  return (
                    <li
                      key={job.id}
                      className={`job ${
                        this.state.id === job.id ? 'job-selected' : ''
                      }`}
                      onClick={() =>
                        this.jobClicked(
                          job.id,
                          job.company,
                          job.title,
                          job.term,
                          job.description
                        )
                      }
                    >
                      {job.company}
                    </li>
                  );
                })}
              </div>
              <div className='jobdesc'>
                <div className='white-text title'>{this.state.title}</div>
                <div className='lgreen-text company'>
                  @ {this.state.company}
                </div>
                <div className='term'>{this.state.term}</div>
                <div className='lgray-text desc'>{this.state.description}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Experience;
