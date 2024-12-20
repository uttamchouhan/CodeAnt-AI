import React, { useEffect, useState } from 'react';
import './Signin.css';
import SidebarNavigation from '../../assets/SidebarNavigation.png';
import logo from '../../assets/logo.png';
import github from '../../assets/github.png';
import gitlab from '../../assets/gitlab.png';
import azuredevops from '../../assets/azuredevops.png'
import bitbucket from '../../assets/bitbucket.png';
import sso from '../../assets/sso.png'
import { Link } from 'react-router-dom';

const Signin = () => {
    const [isSass, setIsSass] = useState(true);

    const toggleMode = () => {
        setIsSass(!isSass);
    };

    const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 735);
    useEffect(() => {
        const handleResize = () => {
            setIsMobileView(window.innerWidth <= 735);
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            {
                isMobileView ?
                    (
                        <div className='container'>
                            <div className='signin-container'>
                                <div className='col-2'>
                                    <div className='box-container'>
                                        <div className='from-container'>
                                            <div className='logo-container-content'>
                                                <Link to="/repo-doc"><div className='logo'>
                                                    <img src={logo} alt="Logo" />
                                                    <span>CodeAnt AI</span>
                                                </div></Link>
                                                <div className='sigin-content'>
                                                    <span>Welcome to CodeAnt AI</span>
                                                </div>
                                            </div>

                                            <div className='loginwith-social-link'>
                                                <div className='button-content'>
                                                    <button
                                                        className={isSass ? 'active' : ''}
                                                        onClick={toggleMode}
                                                    >
                                                        SASS
                                                    </button>
                                                    <button
                                                        className={!isSass ? 'active' : ''}
                                                        onClick={toggleMode}
                                                    >
                                                        Self Hosted
                                                    </button>
                                                </div>
                                            </div>

                                            <div className='social-login-section'>
                                                {isSass ? (
                                                    <div className='row'>
                                                        <Link to="/repo-doc"><div className='sass-content'>
                                                            <div className='content-col'>
                                                                <img src={github} alt="" />
                                                                <span>Sign in with Github</span>
                                                            </div>
                                                        </div></Link>
                                                        <div className='sass-content'>
                                                            <div className='content-col'>
                                                                <img src={bitbucket} alt="" />
                                                                <span>Sign in with Bitbucket</span>
                                                            </div>
                                                        </div>
                                                        <div className='sass-content'>
                                                            <div className='content-col'>
                                                                <img src={azuredevops} alt="" />
                                                                <span>Sign in with Azure Devops</span>
                                                            </div>
                                                        </div>
                                                        <div className='sass-content'>
                                                            <div className='content-col'>
                                                                <img src={gitlab} alt="" />
                                                                <span>Sign in with GitLab</span>
                                                            </div>
                                                        </div>

                                                    </div>
                                                ) : (
                                                    <div className='row'>
                                                        <div className='self-hosted-content'>
                                                            <div className='content-col'>
                                                                <img src={gitlab} alt="" />
                                                                <span>Sign in with GitLab</span>
                                                            </div>
                                                        </div>
                                                        <div className='self-hosted-content'>
                                                            <div className='content-col'>
                                                                <img src={sso} alt="" />
                                                                <span>Sign in with SSO</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <div className='footer-login'>
                                            <span>By signing up you agree to the <b>Privacy Policy</b>.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className='container'>
                            <div className='signin-container'>
                                <div className='col-1'>
                                    <img src={SidebarNavigation} alt="Sidebar Navigation" />
                                </div >
                                <div className='col-2'>
                                    <div className='box-container'>
                                        <div className='from-container'>
                                            <div className='logo-container-content'>
                                            <Link to="/repo-doc"><div className='logo'>
                                                    <img src={logo} alt="Logo" />
                                                    <span>CodeAnt AI</span>
                                                </div></Link>
                                                <div className='sigin-content'>
                                                    <span>Welcome to CodeAnt AI</span>
                                                </div>
                                            </div>

                                            <div className='loginwith-social-link'>
                                                <div className='button-content'>
                                                    <button
                                                        className={isSass ? 'active' : ''}
                                                        onClick={toggleMode}
                                                    >
                                                        SASS
                                                    </button>
                                                    <button
                                                        className={!isSass ? 'active' : ''}
                                                        onClick={toggleMode}
                                                    >
                                                        Self Hosted
                                                    </button>
                                                </div>
                                            </div>

                                            <div className='social-login-section'>
                                                {isSass ? (
                                                    <div className='row'>
                                                        <Link to='/repo-doc' className=''><div className='sass-content'>
                                                            <div className='content-col'>
                                                                <img src={github} alt="" />
                                                                <span>Sign in with Github</span>
                                                            </div>
                                                        </div></Link>
                                                        <div className='sass-content'>
                                                            <div className='content-col'>
                                                                <img src={bitbucket} alt="" />
                                                                <span>Sign in with Bitbucket</span>
                                                            </div>
                                                        </div>
                                                        <div className='sass-content'>
                                                            <div className='content-col'>
                                                                <img src={azuredevops} alt="" />
                                                                <span>Sign in with Azure Devops</span>
                                                            </div>
                                                        </div>
                                                        <div className='sass-content'>
                                                            <div className='content-col'>
                                                                <img src={gitlab} alt="" />
                                                                <span>Sign in with GitLab</span>
                                                            </div>
                                                        </div>

                                                    </div>
                                                ) : (
                                                    <div className='row'>
                                                        <div className='self-hosted-content'>
                                                            <div className='content-col'>
                                                                <img src={gitlab} alt="" />
                                                                <span>Sign in with GitLab</span>
                                                            </div>
                                                        </div>
                                                        <div className='self-hosted-content'>
                                                            <div className='content-col'>
                                                                <img src={sso} alt="" />
                                                                <span>Sign in with SSO</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <div className='footer-login'>
                                            <span>By signing up you agree to the <b>Privacy Policy</b>.</span>
                                        </div>
                                    </div>
                                </div>
                            </div >
                        </div >
                    )
            }
        </>
    );
}

export default Signin;
