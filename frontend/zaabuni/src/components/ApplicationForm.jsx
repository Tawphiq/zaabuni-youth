// import React, { useState, useRef } from 'react';
// import { useReactToPrint } from 'react-to-print';
// import jsPDF from 'jspdf';
        
//         const ApplicationForm = () => {
//           const [formData, setFormData] = useState({
//             fullName: '',
//             gender: '',
//             dateOfBirth: '',
//             placeOfBirth: '',
//             homeAddress: '',
//             phoneNumber: '',
//             email: '',
//             fatherName: '',
//             fatherOccupation: '',
//             fatherAddress: '',
//             fatherTel: '',
//             fatherEmail: '',
//             schoolCompleted: '',
//             schoolAddress: '',
//             location: '',
//             certificate: '',
//             cgpa: '',
//             institutionName: '',
//             institutionAddress: '',
//             institutionLocation: '',
//             course: '',
//             duration: '',
//             currentLevel: '',
//             termsAccepted: false,
//             refereeName: '',
//             refereeAddress: '',
//             refereeTel: '',
//             refereeEmail: '',
//             applicantSignature: '',
//             refereeSignature: '',
//             submissionDate: '',
//           });
        
//           const [showPreview, setShowPreview] = useState(false);
//           const [showModal, setShowModal] = useState(false);
        
//           const handleChange = (e) => {
//             const { name, value, type, checked } = e.target;
//             setFormData({
//               ...formData,
//               [name]: type === 'checkbox' ? checked : value,
//             });
//           };
        
//           const formRef = useRef();
        
//           const handlePrint = useReactToPrint({
//             content: () => formRef.current,
//           });
        
//           const handleDownloadPdf = () => {
//             const doc = new jsPDF();
//             let content = `
//               Full Name: ${formData.fullName}\n
//               Gender: ${formData.gender}\n
//               Date of Birth: ${formData.dateOfBirth}\n
//               Place of Birth: ${formData.placeOfBirth}\n
//               Home Address: ${formData.homeAddress}\n
//               Phone Number: ${formData.phoneNumber}\n
//               Email: ${formData.email}\n
//               Father’s Name: ${formData.fatherName}\n
//               Father’s Occupation: ${formData.fatherOccupation}\n
//               Father’s Address: ${formData.fatherAddress}\n
//               Father’s Tel: ${formData.fatherTel}\n
//               Father’s Email: ${formData.fatherEmail}\n
//               School Completed: ${formData.schoolCompleted}\n
//               School Address: ${formData.schoolAddress}\n
//               Location: ${formData.location}\n
//               Certificate: ${formData.certificate}\n
//               CGPA: ${formData.cgpa}\n
//               Institution Name: ${formData.institutionName}\n
//               Institution Address: ${formData.institutionAddress}\n
//               Institution Location: ${formData.institutionLocation}\n
//               Course: ${formData.course}\n
//               Duration: ${formData.duration}\n
//               Current Level: ${formData.currentLevel}\n
//               Referee Name: ${formData.refereeName}\n
//               Referee Address: ${formData.refereeAddress}\n
//               Referee Tel: ${formData.refereeTel}\n
//               Referee Email: ${formData.refereeEmail}\n
//               Submission Date: ${formData.submissionDate}\n
//             `;
//             doc.text(content, 10, 10);
//             doc.save('Application_Response.pdf');
//           };
        
//           const handleCloseForm = () => {
//             setShowModal(false);
//           };

//           const handleClose = () => {
//             setShowPreview(false);
//           };
        
//           return (
//             <div className="container mx-auto p-6">
//               <h1 className="text-3xl font-bold mb-6">Zaabuni Education Fund Application Form</h1>
//               <form className="space-y-4">
//                 {/* Form fields */}
//                 <h2 className="text-xl font-semibold">Personal Data</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <input
//             type="text"
//             name="fullName"
//             value={formData.fullName}
//             onChange={handleChange}
//             placeholder="Full Name"
//             className="p-2 border rounded"
//           />
//           <select
//             name="gender"
//             value={formData.gender}
//             onChange={handleChange}
//             className="p-2 border rounded"
//           >
//             <option value="">Select Gender</option>
//             <option value="Male">Male</option>
//             <option value="Female">Female</option>
//           </select>
//           <input
//             type="date"
//             name="dateOfBirth"
//             value={formData.dateOfBirth}
//             onChange={handleChange}
//             placeholder="Date of Birth"
//             className="p-2 border rounded"
//           />
//           <input
//             type="text"
//             name="placeOfBirth"
//             value={formData.placeOfBirth}
//             onChange={handleChange}
//             placeholder="Place of Birth"
//             className="p-2 border rounded"
//           />
//           <input
//             type="text"
//             name="homeAddress"
//             value={formData.homeAddress}
//             onChange={handleChange}
//             placeholder="Home Address"
//             className="p-2 border rounded"
//           />
//           <input
//             type="text"
//             name="phoneNumber"
//             value={formData.phoneNumber}
//             onChange={handleChange}
//             placeholder="Phone Number"
//             className="p-2 border rounded"
//           />
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="Email"
//             className="p-2 border rounded"
//           />
//         </div>

//         <h2 className="text-xl font-semibold">Parents Information</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <input
//             type="text"
//             name="fatherName"
//             value={formData.fatherName}
//             onChange={handleChange}
//             placeholder="Father/Guardian’s Name"
//             className="p-2 border rounded"
//           />
//           <input
//             type="text"
//             name="fatherOccupation"
//             value={formData.fatherOccupation}
//             onChange={handleChange}
//             placeholder="Occupation"
//             className="p-2 border rounded"
//           />
//           <input
//             type="text"
//             name="fatherAddress"
//             value={formData.fatherAddress}
//             onChange={handleChange}
//             placeholder="Address"
//             className="p-2 border rounded"
//           />
//           <input
//             type="text"
//             name="fatherTel"
//             value={formData.fatherTel}
//             onChange={handleChange}
//             placeholder="Tel"
//             className="p-2 border rounded"
//           />
//           <input
//             type="email"
//             name="fatherEmail"
//             value={formData.fatherEmail}
//             onChange={handleChange}
//             placeholder="Email (if any)"
//             className="p-2 border rounded"
//           />
//         </div>

//         <h2 className="text-xl font-semibold">Institution Information</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <input
//             type="text"
//             name="schoolCompleted"
//             value={formData.schoolCompleted}
//             onChange={handleChange}
//             placeholder="Name of school completed"
//             className="p-2 border rounded"
//           />
//           <input
//             type="text"
//             name="schoolAddress"
//             value={formData.schoolAddress}
//             onChange={handleChange}
//             placeholder="Address"
//             className="p-2 border rounded"
//           />
//           <input
//             type="text"
//             name="location"
//             value={formData.location}
//             onChange={handleChange}
//             placeholder="Location"
//             className="p-2 border rounded"
//           />
//           <input
//             type="text"
//             name="certificate"
//             value={formData.certificate}
//             onChange={handleChange}
//             placeholder="Certificate obtained"
//             className="p-2 border rounded"
//           />
//           <input
//             type="text"
//             name="cgpa"
//             value={formData.cgpa}
//             onChange={handleChange}
//             placeholder="Aggregate/CGPA"
//             className="p-2 border rounded"
//           />
//         </div>

//         <h2 className="text-xl font-semibold">Institution Applying For/Attending</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <input
//             type="text"
//             name="institutionName"
//             value={formData.institutionName}
//             onChange={handleChange}
//             placeholder="Name of Institution"
//             className="p-2 border rounded"
//           />
//           <input
//             type="text"
//             name="institutionAddress"
//             value={formData.institutionAddress}
//             onChange={handleChange}
//             placeholder="Address"
//             className="p-2 border rounded"
//           />
//           <input
//             type="text"
//             name="institutionLocation"
//             value={formData.institutionLocation}
//             onChange={handleChange}
//             placeholder="Location"
//             className="p-2 border rounded"
//           />
//           <input
//             type="text"
//             name="course"
//             value={formData.course}
//             onChange={handleChange}
//             placeholder="Course/programme to pursue or being pursued"
//             className="p-2 border rounded"
//           />
//           <input
//             type="text"
//             name="duration"
//             value={formData.duration}
//             onChange={handleChange}
//             placeholder="Duration"
//             className="p-2 border rounded"
//           />
//         </div>

//         <h2 className="text-xl font-semibold">For Continued Students</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <input
//             type="text"
//             name="institutionName"
//             value={formData.institutionName}
//             onChange={handleChange}
//             placeholder="Name of Institution"
//             className="p-2 border rounded"
//           />
//           <input
//             type="text"
//             name="institutionAddress"
//             value={formData.institutionAddress}
//             onChange={handleChange}
//             placeholder="Address"
//             className="p-2 border rounded"
//           />
//           <input
//             type="text"
//             name="institutionLocation"
//             value={formData.institutionLocation}
//             onChange={handleChange}
//             placeholder="Location"
//             className="p-2 border rounded"
//           />
//           <input
//             type="text"
//             name="course"
//             value={formData.course}
//             onChange={handleChange}
//             placeholder="Course/Programme"
//             className="p-2 border rounded"
//           />
//           <input
//             type="text"
//             name="currentLevel"
//             value={formData.currentLevel}
//             onChange={handleChange}
//             placeholder="Current level"
//             className="p-2 border rounded"
//           />
//         </div>

//         <h2 className="text-xl font-semibold">Declaration</h2>
//         <textarea
//           name="applicantSignature"
//           value={formData.applicantSignature}
//           onChange={handleChange}
//           placeholder="Applicant's Signature"
//           className="p-2 border rounded"
//         />


//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <input
//             type="text"
//             name="refereeName"
//             value={formData.refereeName}
//             onChange={handleChange}
//             placeholder="Referee Name"
//             className="p-2 border rounded"
//           />
//           <input
//             type="text"
//             name="refereeAddress"
//             value={formData.refereeAddress}
//             onChange={handleChange}
//             placeholder="Address"
//             className="p-2 border rounded"
//           />
//           <input
//             type="text"
//             name="refereeTel"
//             value={formData.refereeTel}
//             onChange={handleChange}
//             placeholder="Tel"
//             className="p-2 border rounded"
//           />
//           <input
//             type="email"
//             name="refereeEmail"
//             value={formData.refereeEmail}
//             onChange={handleChange}
//             placeholder="Referee Email"
//             className="p-2 border rounded"
//           />
//         </div>

//         <textarea
//           name="refereeSignature"
//           value={formData.refereeSignature}
//           onChange={handleChange}
//           placeholder="Referee's Signature"
//           className="p-2 border rounded"
//         />
//         <input
//           type="date"
//           name="submissionDate"
//           value={formData.submissionDate}
//           onChange={handleChange}
//           placeholder="Date"
//           className="p-2 border rounded"
//         />

//                 <button
//                   type="button"
//                   onClick={() => setShowPreview(true)}
//                   className="mt-4 p-2 bg-blue-600 text-white rounded"
//                 >
//                   Preview & Print
//                 </button>
//                 <button
//                   type="button"
//                   onClick={handleCloseForm}
//                   className="mt-4 p-2 bg-red-600 text-white rounded"
//                 >
//                   Close Form
//                 </button>
//               </form>
        
//               {showPreview && (
//                 <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//                   <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl">
//                     <button
//                       className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
//                       onClick={() => setShowPreview(false)}
//                     >
//                       Cancel
//                     </button>
//                     <div ref={formRef} className="form-preview">
//                       <h2 className="text-xl font-semibold">Form Preview</h2>
//                       <p><strong>Full Name:</strong> {formData.fullName}</p>
//                       <p><strong>Gender:</strong> {formData.gender}</p>
//                       <p><strong>Date of Birth:</strong> {formData.dateOfBirth}</p>
//                       <p><strong>Place of Birth:</strong> {formData.placeOfBirth}</p>
//                       <p><strong>Home Address:</strong> {formData.homeAddress}</p>
//                       <p><strong>Phone Number:</strong> {formData.phoneNumber}</p>
//                       <p><strong>Email:</strong> {formData.email}</p>
//                       <div>
//                       <h3 className="text-xl font-semibold">Parents Information</h3>
//               <p><strong>Father’s Name:</strong> {formData.fatherName}</p>
//               <p><strong>Occupation:</strong> {formData.fatherOccupation}</p>
//               <p><strong>Address:</strong> {formData.fatherAddress}</p>
//               <p><strong>Tel:</strong> {formData.fatherTel}</p>
//               <p><strong>Email:</strong> {formData.fatherEmail}</p>

//               <h3 className="text-xl font-semibold">Institution Information</h3>
//               <p><strong>School Completed:</strong> {formData.schoolCompleted}</p>
//               <p><strong>School Address:</strong> {formData.schoolAddress}</p>
//               <p><strong>Location:</strong> {formData.location}</p>
//               <p><strong>Certificate:</strong> {formData.certificate}</p>
//               <p><strong>CGPA:</strong> {formData.cgpa}</p>

//               <h3 className="text-xl font-semibold">Institution Applying For/Attending</h3>
//               <p><strong>Institution Name:</strong> {formData.institutionName}</p>
//               <p><strong>Institution Address:</strong> {formData.institutionAddress}</p>
//               <p><strong>Institution Location:</strong> {formData.institutionLocation}</p>
//               <p><strong>Course:</strong> {formData.course}</p>
//               <p><strong>Duration:</strong> {formData.duration}</p>
//               <p><strong>Current Level:</strong> {formData.currentLevel}</p>

//               <h3 className="text-xl font-semibold">Referee</h3>
//               <p><strong>Name:</strong> {formData.refereeName}</p>
//               <p><strong>Address:</strong> {formData.refereeAddress}</p>
//               <p><strong>Tel:</strong> {formData.refereeTel}</p>
//               <p><strong>Email:</strong> {formData.refereeEmail}</p>

//               <h3 className="text-xl font-semibold">Signatures</h3>
//               <p><strong>Applicant’s Signature:</strong> {formData.applicantSignature}</p>
//               <p><strong>Referee’s Signature:</strong> {formData.refereeSignature}</p>
//               <p><strong>Date:</strong> {formData.submissionDate}</p>
//             </div>

//                     </div>
//                     <div className="flex space-x-4 mt-4">
//                       <button
//                         type="button"
//                         onClick={handlePrint}
//                         className="p-2 bg-blue-600 text-white rounded"
//                       >
//                         Print
//                       </button>
//                       <button
//                         type="button"
//                         onClick={handleDownloadPdf}
//                         className="p-2 bg-green-600 text-white rounded"
//                       >
//                         Download PDF
//                       </button>
//                       <button
//                 onClick={handleClose}
//                 className="p-2 bg-red-600 text-white rounded"
//               >
//                 Cancel
//               </button>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>
//           );
//         };
        
//         export default ApplicationForm;



// // import React, { useState, useRef } from 'react';
// // import { useReactToPrint } from 'react-to-print';
// // import jsPDF from 'jspdf';

// // const ApplicationForm = () => {
// //   const [formData, setFormData] = useState({
// //     fullName: '',
// //     gender: '',
// //     dateOfBirth: '',
// //     placeOfBirth: '',
// //     homeAddress: '',
// //     phoneNumber: '',
// //     email: '',
// //     fatherName: '',
// //     fatherOccupation: '',
// //     fatherAddress: '',
// //     fatherTel: '',
// //     fatherEmail: '',
// //     schoolCompleted: '',
// //     schoolAddress: '',
// //     location: '',
// //     certificate: '',
// //     cgpa: '',
// //     institutionName: '',
// //     institutionAddress: '',
// //     institutionLocation: '',
// //     course: '',
// //     duration: '',
// //     currentLevel: '',
// //     termsAccepted: false,
// //     refereeName: '',
// //     refereeAddress: '',
// //     refereeTel: '',
// //     refereeEmail: '',
// //     applicantSignature: '',
// //     refereeSignature: '',
// //     submissionDate: '',
// //   });

// //   const [showPreview, setShowPreview] = useState(false);
// //   const [showModal, setShowModal] = useState(false);

// //   const handleChange = (e) => {
// //     const { name, value, type, checked } = e.target;
// //     setFormData({
// //       ...formData,
// //       [name]: type === 'checkbox' ? checked : value,
// //     });
// //   };

// //   const formRef = useRef();

// //   const handlePrint = useReactToPrint({
// //     content: () => formRef.current,
// //   });

// //   const handleDownloadPdf = () => {
// //     const doc = new jsPDF();
// //     let content = `
// //       Full Name: ${formData.fullName}\n
// //       Gender: ${formData.gender}\n
// //       Date of Birth: ${formData.dateOfBirth}\n
// //       Place of Birth: ${formData.placeOfBirth}\n
// //       Home Address: ${formData.homeAddress}\n
// //       Phone Number: ${formData.phoneNumber}\n
// //       Email: ${formData.email}\n
// //       Father’s Name: ${formData.fatherName}\n
// //       Father’s Occupation: ${formData.fatherOccupation}\n
// //       Father’s Address: ${formData.fatherAddress}\n
// //       Father’s Tel: ${formData.fatherTel}\n
// //       Father’s Email: ${formData.fatherEmail}\n
// //       School Completed: ${formData.schoolCompleted}\n
// //       School Address: ${formData.schoolAddress}\n
// //       Location: ${formData.location}\n
// //       Certificate: ${formData.certificate}\n
// //       CGPA: ${formData.cgpa}\n
// //       Institution Name: ${formData.institutionName}\n
// //       Institution Address: ${formData.institutionAddress}\n
// //       Institution Location: ${formData.institutionLocation}\n
// //       Course: ${formData.course}\n
// //       Duration: ${formData.duration}\n
// //       Current Level: ${formData.currentLevel}\n
// //       Referee Name: ${formData.refereeName}\n
// //       Referee Address: ${formData.refereeAddress}\n
// //       Referee Tel: ${formData.refereeTel}\n
// //       Referee Email: ${formData.refereeEmail}\n
// //       Submission Date: ${formData.submissionDate}\n
// //     `;
// //     doc.text(content, 10, 10);
// //     doc.save('Application_Response.pdf');
// //   };

// //   const handleCloseForm = () => {
// //     setShowModal(false);
// //   };

// //   const handleClose = () => {
// //     setShowPreview(false);
// //   };

// //   return (
// //     <div className="container mx-auto p-6">
// //       <h1 className="text-3xl font-bold mb-6">Zaabuni Education Fund Application Form</h1>
// //       <form className="space-y-4">
// //         {/* Form fields */}
// //         <h2 className="text-xl font-semibold">Personal Data</h2>
// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //           <input
// //             type="text"
// //             name="fullName"
// //             value={formData.fullName}
// //             onChange={handleChange}
// //             placeholder="Full Name"
// //             className="p-2 border rounded"
// //           />
// //           <select
// //             name="gender"
// //             value={formData.gender}
// //             onChange={handleChange}
// //             className="p-2 border rounded"
// //           >
// //             <option value="">Select Gender</option>
// //             <option value="Male">Male</option>
// //             <option value="Female">Female</option>
// //           </select>
// //           <input
// //             type="date"
// //             name="dateOfBirth"
// //             value={formData.dateOfBirth}
// //             onChange={handleChange}
// //             placeholder="Date of Birth"
// //             className="p-2 border rounded"
// //           />
// //           <input
// //             type="text"
// //             name="placeOfBirth"
// //             value={formData.placeOfBirth}
// //             onChange={handleChange}
// //             placeholder="Place of Birth"
// //             className="p-2 border rounded"
// //           />
// //           <input
// //             type="text"
// //             name="homeAddress"
// //             value={formData.homeAddress}
// //             onChange={handleChange}
// //             placeholder="Home Address"
// //             className="p-2 border rounded"
// //           />
// //           <input
// //             type="text"
// //             name="phoneNumber"
// //             value={formData.phoneNumber}
// //             onChange={handleChange}
// //             placeholder="Phone Number"
// //             className="p-2 border rounded"
// //           />
// //           <input
// //             type="email"
// //             name="email"
// //             value={formData.email}
// //             onChange={handleChange}
// //             placeholder="Email"
// //             className="p-2 border rounded"
// //           />
// //         </div>

// //         <h2 className="text-xl font-semibold">Parents Information</h2>
// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //           <input
// //             type="text"
// //             name="fatherName"
// //             value={formData.fatherName}
// //             onChange={handleChange}
// //             placeholder="Father/Guardian’s Name"
// //             className="p-2 border rounded"
// //           />
// //           <input
// //             type="text"
// //             name="fatherOccupation"
// //             value={formData.fatherOccupation}
// //             onChange={handleChange}
// //             placeholder="Occupation"
// //             className="p-2 border rounded"
// //           />
// //           <input
// //             type="text"
// //             name="fatherAddress"
// //             value={formData.fatherAddress}
// //             onChange={handleChange}
// //             placeholder="Address"
// //             className="p-2 border rounded"
// //           />
// //           <input
// //             type="text"
// //             name="fatherTel"
// //             value={formData.fatherTel}
// //             onChange={handleChange}
// //             placeholder="Tel"
// //             className="p-2 border rounded"
// //           />
// //           <input
// //             type="email"
// //             name="fatherEmail"
// //             value={formData.fatherEmail}
// //             onChange={handleChange}
// //             placeholder="Email (if any)"
// //             className="p-2 border rounded"
// //           />
// //         </div>

// //         <h2 className="text-xl font-semibold">Institution Information</h2>
// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //           <input
// //             type="text"
// //             name="schoolCompleted"
// //             value={formData.schoolCompleted}
// //             onChange={handleChange}
// //             placeholder="Name of school completed"
// //             className="p-2 border rounded"
// //           />
// //           <input
// //             type="text"
// //             name="schoolAddress"
// //             value={formData.schoolAddress}
// //             onChange={handleChange}
// //             placeholder="Address"
// //             className="p-2 border rounded"
// //           />
// //           <input
// //             type="text"
// //             name="location"
// //             value={formData.location}
// //             onChange={handleChange}
// //             placeholder="Location"
// //             className="p-2 border rounded"
// //           />
// //           <input
// //             type="text"
// //             name="certificate"
// //             value={formData.certificate}
// //             onChange={handleChange}
// //             placeholder="Certificate obtained"
// //             className="p-2 border rounded"
// //           />
// //           <input
// //             type="text"
// //             name="cgpa"
// //             value={formData.cgpa}
// //             onChange={handleChange}
// //             placeholder="Aggregate/CGPA"
// //             className="p-2 border rounded"
// //           />
// //         </div>

// //         <h2 className="text-xl font-semibold">Institution Applying For/Attending</h2>
// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //           <input
// //             type="text"
// //             name="institutionName"
// //             value={formData.institutionName}
// //             onChange={handleChange}
// //             placeholder="Name of Institution"
// //             className="p-2 border rounded"
// //           />
// //           <input
// //             type="text"
// //             name="institutionAddress"
// //             value={formData.institutionAddress}
// //             onChange={handleChange}
// //             placeholder="Address"
// //             className="p-2 border rounded"
// //           />
// //           <input
// //             type="text"
// //             name="institutionLocation"
// //             value={formData.institutionLocation}
// //             onChange={handleChange}
// //             placeholder="Location"
// //             className="p-2 border rounded"
// //           />
// //           <input
// //             type="text"
// //             name="course"
// //             value={formData.course}
// //             onChange={handleChange}
// //             placeholder="Course"
// //             className="p-2 border rounded"
// //           />
// //           <input
// //             type="text"
// //             name="duration"
// //             value={formData.duration}
// //             onChange={handleChange}
// //             placeholder="Duration"
// //             className="p-2 border rounded"
// //           />
// //           <input
// //             type="text"
// //             name="currentLevel"
// //             value={formData.currentLevel}
// //             onChange={handleChange}
// //             placeholder="Current level (if already attending)"
// //             className="p-2 border rounded"
// //           />
// //         </div>

// //         <h2 className="text-xl font-semibold">Referee</h2>
// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //           <input
// //             type="text"
// //             name="refereeName"
// //             value={formData.refereeName}
// //             onChange={handleChange}
// //             placeholder="Name"
// //             className="p-2 border rounded"
// //           />
// //           <input
// //             type="text"
// //             name="refereeAddress"
// //             value={formData.refereeAddress}
// //             onChange={handleChange}
// //             placeholder="Address"
// //             className="p-2 border rounded"
// //           />
// //           <input
// //             type="text"
// //             name="refereeTel"
// //             value={formData.refereeTel}
// //             onChange={handleChange}
// //             placeholder="Tel"
// //             className="p-2 border rounded"
// //           />
// //           <input
// //             type="email"
// //             name="refereeEmail"
// //             value={formData.refereeEmail}
// //             onChange={handleChange}
// //             placeholder="Email"
// //             className="p-2 border rounded"
// //           />
// //         </div>

// //         <h2 className="text-xl font-semibold">Signatures</h2>
// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //           <input
// //             type="text"
// //             name="applicantSignature"
// //             value={formData.applicantSignature}
// //             onChange={handleChange}
// //             placeholder="Applicant’s Signature"
// //             className="p-2 border rounded"
// //           />
// //           <input
// //             type="text"
// //             name="refereeSignature"
// //             value={formData.refereeSignature}
// //             onChange={handleChange}
// //             placeholder="Referee’s Signature"
// //             className="p-2 border rounded"
// //           />
// //           <input
// //             type="date"
// //             name="submissionDate"
// //             value={formData.submissionDate}
// //             onChange={handleChange}
// //             placeholder="Date"
// //             className="p-2 border rounded"
// //           />
// //         </div>

// //         <label className="flex items-center space-x-2">
// //           <input
// //             type="checkbox"
// //             name="termsAccepted"
// //             checked={formData.termsAccepted}
// //             onChange={handleChange}
// //             className="form-checkbox"
// //           />
// //           <span>I accept the terms and conditions</span>
// //         </label>

// //         <div className="flex space-x-4">
// //           <button
// //             type="button"
// //             onClick={() => setShowModal(true)}
// //             className="px-4 py-2 bg-blue-500 text-white rounded"
// //           >
// //             Preview
// //           </button>
// //           <button
// //             type="button"
// //             onClick={handleDownloadPdf}
// //             className="px-4 py-2 bg-green-500 text-white rounded"
// //           >
// //             Download PDF
// //           </button>
// //         </div>
// //       </form>

// //       {showModal && (
// //         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
// //           <div className="bg-white p-6 rounded shadow-lg w-4/5 md:w-3/5">
// //             <h2 className="text-2xl font-bold mb-4">Form Preview</h2>
// //             <div ref={formRef} className="space-y-4">
// //               <h3 className="text-xl font-semibold">Personal Data</h3>
// //               <p><strong>Full Name:</strong> {formData.fullName}</p>
// //               <p><strong>Gender:</strong> {formData.gender}</p>
// //               <p><strong>Date of Birth:</strong> {formData.dateOfBirth}</p>
// //               <p><strong>Place of Birth:</strong> {formData.placeOfBirth}</p>
// //               <p><strong>Home Address:</strong> {formData.homeAddress}</p>
// //               <p><strong>Phone Number:</strong> {formData.phoneNumber}</p>
// //               <p><strong>Email:</strong> {formData.email}</p>

// //               <h3 className="text-xl font-semibold">Parents Information</h3>
// //               <p><strong>Father’s Name:</strong> {formData.fatherName}</p>
// //               <p><strong>Occupation:</strong> {formData.fatherOccupation}</p>
// //               <p><strong>Address:</strong> {formData.fatherAddress}</p>
// //               <p><strong>Tel:</strong> {formData.fatherTel}</p>
// //               <p><strong>Email:</strong> {formData.fatherEmail}</p>

// //               <h3 className="text-xl font-semibold">Institution Information</h3>
// //               <p><strong>School Completed:</strong> {formData.schoolCompleted}</p>
// //               <p><strong>School Address:</strong> {formData.schoolAddress}</p>
// //               <p><strong>Location:</strong> {formData.location}</p>
// //               <p><strong>Certificate:</strong> {formData.certificate}</p>
// //               <p><strong>CGPA:</strong> {formData.cgpa}</p>

// //               <h3 className="text-xl font-semibold">Institution Applying For/Attending</h3>
// //               <p><strong>Institution Name:</strong> {formData.institutionName}</p>
// //               <p><strong>Institution Address:</strong> {formData.institutionAddress}</p>
// //               <p><strong>Institution Location:</strong> {formData.institutionLocation}</p>
// //               <p><strong>Course:</strong> {formData.course}</p>
// //               <p><strong>Duration:</strong> {formData.duration}</p>
// //               <p><strong>Current Level:</strong> {formData.currentLevel}</p>

// //               <h3 className="text-xl font-semibold">Referee</h3>
// //               <p><strong>Name:</strong> {formData.refereeName}</p>
// //               <p><strong>Address:</strong> {formData.refereeAddress}</p>
// //               <p><strong>Tel:</strong> {formData.refereeTel}</p>
// //               <p><strong>Email:</strong> {formData.refereeEmail}</p>

// //               <h3 className="text-xl font-semibold">Signatures</h3>
// //               <p><strong>Applicant’s Signature:</strong> {formData.applicantSignature}</p>
// //               <p><strong>Referee’s Signature:</strong> {formData.refereeSignature}</p>
// //               <p><strong>Date:</strong> {formData.submissionDate}</p>
// //             </div>

// //             <div className="flex justify-end space-x-4 mt-6">
// //               <button
// //                 type="button"
// //                 onClick={handlePrint}
// //                 className="px-4 py-2 bg-blue-500 text-white rounded"
// //               >
// //                 Print
// //               </button>
// //               <button
// //                 type="button"
// //                 onClick={handleClose}
// //                 className="px-4 py-2 bg-red-500 text-white rounded"
// //               >
// //                 Close Preview
// //               </button>
// //               <button
// //                 type="button"
// //                 onClick={handleCloseForm}
// //                 className="px-4 py-2 bg-gray-500 text-white rounded"
// //               >
// //                 Close Form
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default ApplicationForm;



import React, { useState, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import jsPDF from 'jspdf';

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    gender: '',
    dateOfBirth: '',
    placeOfBirth: '',
    homeAddress: '',
    phoneNumber: '',
    email: '',
    fatherName: '',
    fatherOccupation: '',
    fatherAddress: '',
    fatherTel: '',
    fatherEmail: '',
    schoolCompleted: '',
    schoolAddress: '',
    location: '',
    certificate: '',
    cgpa: '',
    institutionName: '',
    institutionAddress: '',
    institutionLocation: '',
    course: '',
    duration: '',
    currentLevel: '',
    termsAccepted: false,
    refereeName: '',
    refereeAddress: '',
    refereeTel: '',
    refereeEmail: '',
    applicantSignature: '',
    refereeSignature: '',
    submissionDate: '',
  });

  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const formRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => formRef.current,
  });

  const handleDownloadPdf = () => {
    const doc = new jsPDF();
    let content = `
      Full Name: ${formData.fullName}\n
      Gender: ${formData.gender}\n
      Date of Birth: ${formData.dateOfBirth}\n
      Place of Birth: ${formData.placeOfBirth}\n
      Home Address: ${formData.homeAddress}\n
      Phone Number: ${formData.phoneNumber}\n
      Email: ${formData.email}\n
      Father’s Name: ${formData.fatherName}\n
      Father’s Occupation: ${formData.fatherOccupation}\n
      Father’s Address: ${formData.fatherAddress}\n
      Father’s Tel: ${formData.fatherTel}\n
      Father’s Email: ${formData.fatherEmail}\n
      School Completed: ${formData.schoolCompleted}\n
      School Address: ${formData.schoolAddress}\n
      Location: ${formData.location}\n
      Certificate: ${formData.certificate}\n
      CGPA: ${formData.cgpa}\n
      Institution Name: ${formData.institutionName}\n
      Institution Address: ${formData.institutionAddress}\n
      Institution Location: ${formData.institutionLocation}\n
      Course: ${formData.course}\n
      Duration: ${formData.duration}\n
      Current Level: ${formData.currentLevel}\n
      Referee Name: ${formData.refereeName}\n
      Referee Address: ${formData.refereeAddress}\n
      Referee Tel: ${formData.refereeTel}\n
      Referee Email: ${formData.refereeEmail}\n
      Submission Date: ${formData.submissionDate}\n
    `;
    doc.text(content, 10, 10);
    doc.save('Application_Response.pdf');
  };

  const handleCloseForm = () => {
    setShowModal(false);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Zaabuni Education Fund Application Form</h1>
      <form className="space-y-4">
        {/* Form fields */}
        <h2 className="text-xl font-semibold">Personal Data</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Full Name"
            className="p-2 border rounded"
          />
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="p-2 border rounded"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            placeholder="Date of Birth"
            className="p-2 border rounded"
          />
          <input
            type="text"
            name="placeOfBirth"
            value={formData.placeOfBirth}
            onChange={handleChange}
            placeholder="Place of Birth"
            className="p-2 border rounded"
          />
          <input
            type="text"
            name="homeAddress"
            value={formData.homeAddress}
            onChange={handleChange}
            placeholder="Home Address"
            className="p-2 border rounded"
          />
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Phone Number"
            className="p-2 border rounded"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="p-2 border rounded"
          />
        </div>

        <h2 className="text-xl font-semibold">Parents Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="fatherName"
            value={formData.fatherName}
            onChange={handleChange}
            placeholder="Father/Guardian’s Name"
            className="p-2 border rounded"
          />
          <input
            type="text"
            name="fatherOccupation"
            value={formData.fatherOccupation}
            onChange={handleChange}
            placeholder="Occupation"
            className="p-2 border rounded"
          />
          <input
            type="text"
            name="fatherAddress"
            value={formData.fatherAddress}
            onChange={handleChange}
            placeholder="Address"
            className="p-2 border rounded"
          />
          <input
            type="text"
            name="fatherTel"
            value={formData.fatherTel}
            onChange={handleChange}
            placeholder="Tel"
            className="p-2 border rounded"
          />
          <input
            type="email"
            name="fatherEmail"
            value={formData.fatherEmail}
            onChange={handleChange}
            placeholder="Email (if any)"
            className="p-2 border rounded"
          />
        </div>

        <h2 className="text-xl font-semibold">Institution Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="schoolCompleted"
            value={formData.schoolCompleted}
            onChange={handleChange}
            placeholder="Name of school completed"
            className="p-2 border rounded"
          />
          <input
            type="text"
            name="schoolAddress"
            value={formData.schoolAddress}
            onChange={handleChange}
            placeholder="Address"
            className="p-2 border rounded"
          />
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Location"
            className="p-2 border rounded"
          />
          <input
            type="text"
            name="certificate"
            value={formData.certificate}
            onChange={handleChange}
            placeholder="Certificate obtained"
            className="p-2 border rounded"
          />
          <input
            type="text"
            name="cgpa"
            value={formData.cgpa}
            onChange={handleChange}
            placeholder="Aggregate/CGPA"
            className="p-2 border rounded"
          />
        </div>

        <h2 className="text-xl font-semibold">Institution Applying For/Attending</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="institutionName"
            value={formData.institutionName}
            onChange={handleChange}
            placeholder="Name of Institution"
            className="p-2 border rounded"
          />
          <input
            type="text"
            name="institutionAddress"
            value={formData.institutionAddress}
            onChange={handleChange}
            placeholder="Address"
            className="p-2 border rounded"
          />
          <input
            type="text"
            name="institutionLocation"
            value={formData.institutionLocation}
            onChange={handleChange}
            placeholder="Location"
            className="p-2 border rounded"
          />
          <input
            type="text"
            name="course"
            value={formData.course}
            onChange={handleChange}
            placeholder="Course"
            className="p-2 border rounded"
          />
          <input
            type="text"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            placeholder="Duration"
            className="p-2 border rounded"
          />
          <input
            type="text"
            name="currentLevel"
            value={formData.currentLevel}
            onChange={handleChange}
            placeholder="Current level (if already attending)"
            className="p-2 border rounded"
          />
        </div>

        <h2 className="text-xl font-semibold">Referee</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="refereeName"
            value={formData.refereeName}
            onChange={handleChange}
            placeholder="Name"
            className="p-2 border rounded"
          />
          <input
            type="text"
            name="refereeAddress"
            value={formData.refereeAddress}
            onChange={handleChange}
            placeholder="Address"
            className="p-2 border rounded"
          />
          <input
            type="text"
            name="refereeTel"
            value={formData.refereeTel}
            onChange={handleChange}
            placeholder="Tel"
            className="p-2 border rounded"
          />
          <input
            type="email"
            name="refereeEmail"
            value={formData.refereeEmail}
            onChange={handleChange}
            placeholder="Email"
            className="p-2 border rounded"
          />
        </div>

        <h2 className="text-xl font-semibold">Signatures</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="applicantSignature"
            value={formData.applicantSignature}
            onChange={handleChange}
            placeholder="Applicant’s Signature"
            className="p-2 border rounded"
          />
          <input
            type="text"
            name="refereeSignature"
            value={formData.refereeSignature}
            onChange={handleChange}
            placeholder="Referee’s Signature"
            className="p-2 border rounded"
          />
          <input
            type="date"
            name="submissionDate"
            value={formData.submissionDate}
            onChange={handleChange}
            placeholder="Date"
            className="p-2 border rounded"
          />
        </div>

        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="termsAccepted"
            checked={formData.termsAccepted}
            onChange={handleChange}
            className="form-checkbox"
          />
          <span>I accept the terms and conditions</span>
        </label>

        <div className="flex space-x-4">
          <button
            type="button"
            onClick={() => setShowModal(true)}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Preview
          </button>
          <button
            type="button"
            onClick={handleDownloadPdf}
            className="px-4 py-2 bg-green-500 text-white rounded"
          >
            Download PDF
          </button>
        </div>
      </form>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded shadow-lg w-4/5 md:w-3/5 max-h-screen overflow-y-auto">
            <h2 className="text-2xl font-bold mb-4">Form Preview</h2>
            <div ref={formRef} className="space-y-4">
              <h3 className="text-xl font-semibold">Personal Data</h3>
              <p><strong>Full Name:</strong> {formData.fullName}</p>
              <p><strong>Gender:</strong> {formData.gender}</p>
              <p><strong>Date of Birth:</strong> {formData.dateOfBirth}</p>
              <p><strong>Place of Birth:</strong> {formData.placeOfBirth}</p>
              <p><strong>Home Address:</strong> {formData.homeAddress}</p>
              <p><strong>Phone Number:</strong> {formData.phoneNumber}</p>
              <p><strong>Email:</strong> {formData.email}</p>

              <h3 className="text-xl font-semibold">Parents Information</h3>
              <p><strong>Father’s Name:</strong> {formData.fatherName}</p>
              <p><strong>Occupation:</strong> {formData.fatherOccupation}</p>
              <p><strong>Address:</strong> {formData.fatherAddress}</p>
              <p><strong>Tel:</strong> {formData.fatherTel}</p>
              <p><strong>Email:</strong> {formData.fatherEmail}</p>

              <h3 className="text-xl font-semibold">Institution Information</h3>
              <p><strong>School Completed:</strong> {formData.schoolCompleted}</p>
              <p><strong>School Address:</strong> {formData.schoolAddress}</p>
              <p><strong>Location:</strong> {formData.location}</p>
              <p><strong>Certificate:</strong> {formData.certificate}</p>
              <p><strong>CGPA:</strong> {formData.cgpa}</p>

              <h3 className="text-xl font-semibold">Institution Applying For/Attending</h3>
              <p><strong>Institution Name:</strong> {formData.institutionName}</p>
              <p><strong>Institution Address:</strong> {formData.institutionAddress}</p>
              <p><strong>Institution Location:</strong> {formData.institutionLocation}</p>
              <p><strong>Course:</strong> {formData.course}</p>
              <p><strong>Duration:</strong> {formData.duration}</p>
              <p><strong>Current Level:</strong> {formData.currentLevel}</p>

              <h3 className="text-xl font-semibold">Referee</h3>
              <p><strong>Name:</strong> {formData.refereeName}</p>
              <p><strong>Address:</strong> {formData.refereeAddress}</p>
              <p><strong>Tel:</strong> {formData.refereeTel}</p>
              <p><strong>Email:</strong> {formData.refereeEmail}</p>

              <h3 className="text-xl font-semibold">Signatures</h3>
              <p><strong>Applicant’s Signature:</strong> {formData.applicantSignature}</p>
              <p><strong>Referee’s Signature:</strong> {formData.refereeSignature}</p>
              <p><strong>Date:</strong> {formData.submissionDate}</p>
            </div>

            <div className="flex justify-end space-x-4 mt-6">
            <button
            type="button"
            onClick={handleDownloadPdf}
            className="px-4py-2 p-2 bg-green-500 text-white rounded"
          >
            Download PDF
          </button>
              <button
                type="button"
                onClick={handlePrint}
                className="px-4 py-2 bg-blue-500 text-white rounded"
              >
                Print
              </button>
              <button
                type="button"
                onClick={handleClose}
                className="px-4 py-2 bg-red-500 text-white rounded"
              >
                Close Preview
              </button>
              {/* <button
                type="button"
                onClick={handleCloseForm}
                className="px-4 py-2 bg-gray-500 text-white rounded"
              >
                Close Form
              </button> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ApplicationForm;
