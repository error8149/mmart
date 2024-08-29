import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
	return (
	  <footer className="bg-gray-700 text-white py-4">
		<div className="container mx-auto text-center">
		  <p className="text-sm">
			&copy; {new Date().getFullYear()} MMART Industries. All rights reserved.
		  </p>
		  <div className="mt-2">
			<Link to="#" className="text-gray-400 hover:text-white mr-4">
			  Privacy Policy
			</Link>
			<Link to="#" className="text-gray-400 hover:text-white">
			  Terms of Service
			</Link>
		  </div>
		</div>
	  </footer>
	);
  }
  
