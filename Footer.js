import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>About Us</h5>
           <p> <p>Thank you for choosing Fitness Company. We look forward to serving you and being a part of your success story!</p></p>
          </div>
          <div className="col-md-6">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>Email: info@example.com</li>
              <li>Phone: +1234567890</li>
              <li>Address: 123 Street, City, Country</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
