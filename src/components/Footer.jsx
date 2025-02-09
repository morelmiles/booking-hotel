import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full max-w-[1024px] text-xs py-6 container mx-auto ">
      
      <div className="w-full grid grid-cols-2 gap-x-4 gap-y-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 mb-1">

        <ul className="footerList">
          <li className="footerListItem">Countries</li>
          <li className="footerListItem">Regions</li>
          <li className="footerListItem">Cities</li>
          <li className="footerListItem">Districts</li>
          <li className="footerListItem">Airports</li>
          <li className="footerListItem">Hotels</li>
        </ul>
        <ul className="footerList">
          <li className="footerListItem">Homes </li>
          <li className="footerListItem">Apartments </li>
          <li className="footerListItem">Resorts </li>
          <li className="footerListItem">Villas</li>
          <li className="footerListItem">Hostels</li>
          <li className="footerListItem">Guest houses</li>
        </ul>
        <ul className="footerList">
          <li className="footerListItem">Unique places to stay </li>
          <li className="footerListItem">Reviews</li>
          <li className="footerListItem">Unpacked: Travel articles </li>
          <li className="footerListItem">Travel communities </li>
          <li className="footerListItem">Seasonal and holiday deals </li>
        </ul>
        <ul className="footerList">
          <li className="footerListItem">Car rental </li>
          <li className="footerListItem">Flight Finder</li>
          <li className="footerListItem">Restaurant reservations </li>
          <li className="footerListItem">Travel Agents </li>
        </ul>
        <ul className="footerList">
          <li className="footerListItem">Curtomer Service</li>
          <li className="footerListItem">Partner Help</li>
          <li className="footerListItem">Careers</li>
          <li className="footerListItem">Sustainability</li>
          <li className="footerListItem">Press center</li>
          <li className="footerListItem">Safety Resource Center</li>
          <li className="footerListItem">Investor relations</li>
          <li className="footerListItem">Terms & conditions</li>
        </ul>
      </div>
      <div className="">Copyright © 2022 booking.com</div>
    </footer>
  );
};

export default Footer;
