import React from 'react'

const ContactSection = () => {
  return (
    <div className='p-5'>
    <div className='row'>
    <div className='mb-4'>
            <h1>Contact Us</h1>
        </div>
        <div className='mb-5'>
        <p><i className="fas fa-home me-3"></i>Navi Mumbai, India</p>
            <p>
                <i className="fas fa-envelope me-3"></i>
                sumeetparab4113@gmail.com
            </p>
            <p><i className="fas fa-phone me-3"></i> +91 8779536101</p>
            {/* <p><i className="fas fa-print me-3"></i> + 4 71 245 2345</p> */}
        </div>
        
    </div>
    <div className='row '>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3660.6046424489714!2d73.00460091909858!3d19.10564719197614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c0da59d0a01b%3A0x56642a54a185f894!2sLokmanya%20Tilak%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1698732207217!5m2!1sen!2sin" width="400" height="300"  loading="lazy" ></iframe>    </div>
    </div>
  )
}

export default ContactSection
