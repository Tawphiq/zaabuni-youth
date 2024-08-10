import React, { useState } from 'react';
import { useReactToPrint } from 'react-to-print';

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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handlePrint = useReactToPrint({
    content: () => document.getElementById('form-preview'),
  });

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Zaabuni Education Fund Application Form</h1>
      <form className="space-y-4">
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
            placeholder="Course/programme to pursue or being pursued"
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
            type="file"
            name="admissionLetter"
            onChange={handleChange}
            className="p-2 border rounded"
          />
        </div>

        <h2 className="text-xl font-semibold">For Continued Students</h2>
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
            placeholder="Course/Programme"
            className="p-2 border rounded"
          />
          <input
            type="text"
            name="currentLevel"
            value={formData.currentLevel}
            onChange={handleChange}
            placeholder="Current level"
            className="p-2 border rounded"
          />
          <input
            type="file"
            name="admissionLetter"
            onChange={handleChange}
            className="p-2 border rounded"
          />
        </div>

        <h2 className="text-xl font-semibold">Declaration</h2>
        <textarea
          name="applicantSignature"
          value={formData.applicantSignature}
          onChange={handleChange}
          placeholder="Applicant's Signature"
          className="p-2 border rounded"
        />

        <input
          type="checkbox"
          name="termsAccepted"
          checked={formData.termsAccepted}
          onChange={handleChange}
          className="mr-2"
        />
        <label htmlFor="termsAccepted">
          I have read and accept the terms and conditions.
        </label>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="refereeName"
            value={formData.refereeName}
            onChange={handleChange}
            placeholder="Referee Name"
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
            placeholder="Referee Email"
            className="p-2 border rounded"
          />
        </div>

        <textarea
          name="refereeSignature"
          value={formData.refereeSignature}
          onChange={handleChange}
          placeholder="Referee's Signature"
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
        
        <button
          type="button"
          onClick={handlePrint}
          className="mt-4 p-2 bg-blue-600 text-white rounded"
        >
          Preview & Print
        </button>
      </form>

      <div id="form-preview" className="mt-8 p-6 border">
        <h2 className="text-xl font-semibold">Form Preview</h2>
        <p><strong>Full Name:</strong> {formData.fullName}</p>
        <p><strong>Gender:</strong> {formData.gender}</p>
        <p><strong>Date of Birth:</strong> {formData.dateOfBirth}</p>
        <p><strong>Place of Birth:</strong> {formData.placeOfBirth}</p>
        <p><strong>Home Address:</strong> {formData.homeAddress}</p>
        <p><strong>Phone Number:</strong> {formData.phoneNumber}</p>
        <p><strong>Email:</strong> {formData.email}</p>
        {/* Add the rest of the fields in a similar fashion */}
      </div>
    </div>
  );
};

export default ApplicationForm;
