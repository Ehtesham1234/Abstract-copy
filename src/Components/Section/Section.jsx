import React from 'react'
import './Section.css'
const Section = () => {
    return (
        <div className='section'>
            <div className="section__allContain  grid__container">
                <div className="section__singleContain">
                    <div className="section__img">
                        <img src='/branch.png' />
                    </div>
                    <div className="section__details">
                        <h3>Using Abstract</h3>
                        <p>Abstract lets you manage, version, and document your designs in one place.</p>
                        <a href='/'>Learn More⮕</a>
                    </div>
                </div>
                <div className="section__singleContain">
                    <div className="section__img">
                        <img src='/managment.png' />
                    </div>
                    <div className="section__details">
                        <h3>Manage your account</h3>
                        <p>Configure your account settings, such as your email, profile details, and password.</p>
                        <a href='/'>Learn More⮕</a>
                    </div>
                </div>
                <div className="section__singleContain">
                    <div className="section__img">
                        <img src='/manage-project.png' />
                    </div>
                    <div className="section__details">
                        <h3>Manage organizations, teams, and projects</h3>
                        <p>Use Abstract organizations, teams, and projects to organize your people and your work.</p>
                        <a href='/'>Learn More⮕</a>
                    </div>
                </div>
                <div className="section__singleContain">
                    <div className="section__img">
                        <img src='/manage-biling.png' />
                    </div>
                    <div className="section__details">
                        <h3>Manage billing</h3>
                        <p>Change subscriptions and payment details.</p>
                        <a href='/'>Learn More⮕</a>
                    </div>
                </div>
                <div className="section__singleContain">
                    <div className="section__img">
                        <img src='/authenticate.png' />
                    </div>
                    <div className="section__details">
                        <h3>Authenticate to Abstract</h3>
                        <p>Set up and configure SSO, SCIM, and Just-in-Time provisioning.</p>
                        <a href='/'>Learn More⮕</a>
                    </div>
                </div>
                <div className="section__singleContain">
                    <div className="section__img">
                        <img src='/6th no.png' />
                    </div>
                    <div className="section__details">
                        <h3>Abstract support</h3>
                        <p>Get in touch with a human.</p>
                        <a href='/'>Learn More⮕</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section