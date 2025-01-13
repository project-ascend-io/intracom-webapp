import Image from 'next/image';
import white_logo from '../assets/white-logo.png';

const FooterSection = () => {
  return (
    <>
      <footer className='container m-auto footer bg-primary p-10 text-base-content'>
        <aside>
          <Image className='fill-current' src={white_logo} alt='Intracom' />
          <p className="text-white">&copy; Intracom {new Date().getFullYear()}.</p>
        </aside>
        <nav className="text-white">
          <h6 className='footer-title'>Documentation</h6>
          <a href="https://github.com/project-ascend-io/intracom-electron"
            target='_blank'
            className='link-hover link'>Github</a>
          <a className='link-hover link'>Slack Channel</a>
          <a href="https://project-ascend-io.atlassian.net/jira/software/c/projects/PAP/boards/1"
            target='_blank'
            className='link-hover link'>Project Management</a>
          <a href="https://guide.projectascend.io/intracom"
            target='_blank'
            className='link-hover link'>Product Requirement Document</a>
        </nav >
        <nav className="text-white">
          <h6 className='footer-title'>Intracom</h6>
          <a href="/" className='link-hover link'>About</a>
          <a href="/#community" className='link-hover link'>Community</a>
          <a href="/#contributors" className='link-hover link'>Contributors</a>
          <a className='link-hover link'>Press kit</a>
        </nav>
        <nav className="text-white">
          <h6 className='footer-title'>Legal</h6>
          <a className='link-hover link' href='/terms-of-use'>
            Terms of use
          </a>
          <a className='link-hover link' href='/privacy-policy'>
            Privacy policy
          </a>
          <a className='link-hover link'>Cookie policy</a>
        </nav>
      </footer >
    </>
  );
};

export default FooterSection;
