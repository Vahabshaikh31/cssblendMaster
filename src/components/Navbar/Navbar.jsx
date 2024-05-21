// import React from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <nav className="bg-gray-800 text-white">
//       <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
//         <div className="relative flex items-center justify-between h-16">
//           <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
//             <button
//               type="button"
//               className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
//               aria-controls="mobile-menu"
//               aria-expanded="false"
//             >
//               <span className="sr-only">Open main menu</span>
//               {/* Icon when menu is closed. */}
//               <svg
//                 className="block h-6 w-6"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 aria-hidden="true"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h16m-7 6h7"
//                 />
//               </svg>
//               {/* Icon when menu is open. */}
//               <svg
//                 className="hidden h-6 w-6"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 aria-hidden="true"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               </svg>
//             </button>
//           </div>
//           <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
//             <div className="flex-shrink-0">
//               <img
//                 className="h-8 w-auto"
//                 src="/path/to/logo.png"
//                 alt="Website Logo"
//               />
//             </div>
//             <div className="hidden sm:block sm:ml-6">
//               <div className="flex space-x-4">
//                 <Link
//                   to="/palettes"
//                   className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//                 >
//                   PALETTES
//                 </Link>
//                 <Link
//                   to="/gradient"
//                   className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//                 >
//                   GRADIENT
//                 </Link>
//                 <Link
//                   to="/3-color-gradient"
//                   className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//                 >
//                   3-COLOR-GRADIENT
//                 </Link>
//                 <Link
//                   to="/contact-info"
//                   className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//                 >
//                   CONTACT INFO
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="sm:hidden" id="mobile-menu">
//         <div className="px-2 pt-2 pb-3 space-y-1">
//           <Link
//             to="/palettes"
//             className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
//           >
//             PALETTES
//           </Link>
//           <Link
//             to="/gradient"
//             className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
//           >
//             GRADIENT
//           </Link>
//           <Link
//             to="/3-color-gradient"
//             className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
//           >
//             3-COLOR-GRADIENT
//           </Link>
//           <Link
//             to="/contact-info"
//             className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
//           >
//             CONTACT INFO
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
