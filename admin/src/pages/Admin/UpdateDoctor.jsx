import React, { useState, useEffect } from 'react';
import { assets } from '../../assets/assets';
import { useContext } from 'react';
import { AdminContext } from '../../context/AdminContext';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UpdateDoctor = () => {

  const navigate = useNavigate()

  const { selectedDoctor, setSelectedDoctor } = useContext(AdminContext)

  const [docImg, setDocImg] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [experience, setExperience] = useState('1 Year');
  const [fees, setFees] = useState('');
  const [about, setAbout] = useState('');
  const [speciality, setSpeciality] = useState('General physician');
  const [degree, setDegree] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  
  const { backendUrl, aToken } = useContext(AdminContext);
  console.log(selectedDoctor)

  // Fetch doctor details on component load
  useEffect(() => {
    const fetchDoctorDetails = async () => {
      try {

        if (selectedDoctor) {
          const { name, email, speciality, degree, experience, about, fees, address, image } = selectedDoctor;
          setName(name);
          setEmail(email);
          setSpeciality(speciality);
          setDegree(degree);
          setExperience(experience);
          setAbout(about);
          setFees(fees);
          setAddress1(address?.line1 || '');
          setAddress2(address?.line2 || '');
          setDocImg(image);
        } else {
          toast.error(data.message);
        }
      } catch (error) {
        toast.error('Failed to fetch doctor details.');
      }
    };

    fetchDoctorDetails();
  }, [backendUrl, aToken, email]);

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      if (docImg instanceof File) {
        formData.append('image', docImg);
      }
      formData.append('name', name);
      formData.append('email', email);
      if (password) formData.append('password', password);
      formData.append('experience', experience);
      formData.append('fees', Number(fees));
      formData.append('about', about);
      formData.append('speciality', speciality);
      formData.append('degree', degree);
      formData.append('address', JSON.stringify({ line1: address1, line2: address2 }));

      const { data } = await axios.put(`${backendUrl}/api/admin/update-doctor/${email}`, formData, {
        headers: { aToken },
      });

      if (data.success) {
        toast.success(data.message)
        navigate('../doctor-list')
        setSelectedDoctor(null)
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="m-5 w-full">
      <p className="mb-3 text-lg font-medium">Update Doctor</p>

      <div className="bg-white px-8 py-8 border rounded w-full max-w-4xl max-h-[80vh] overflow-y-scroll">
        <div className="flex items-center gap-4 mb-8 text-gray-500">
          <label htmlFor="doc-img">
            <img
              className="w-16 bg-gray-100 rounded-full cursor-pointer"
              src={docImg instanceof File ? URL.createObjectURL(docImg) : docImg || assets.upload_area}
              alt=""
            />
          </label>
          <input onChange={(e) => setDocImg(e.target.files[0])} type="file" id="doc-img" hidden />
          <p>Update doctor picture</p>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-10 text-gray-600">
          <div className="w-full lg:flex-1 flex flex-col gap-4">
            <div className="flex-1 flex flex-col gap-1">
              <p>Doctor Name</p>
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                className="border rounded px-3 py-2"
                type="text"
                placeholder="Name"
                required
              />
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <p>Doctor Email</p>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="border rounded px-3 py-2"
                type="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <p>Password</p>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="border rounded px-3 py-2"
                type="password"
                placeholder="Password (Leave blank to keep current)"
              />
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <p>Experience</p>
              <select
                onChange={(e) => setExperience(e.target.value)}
                value={experience}
                className="border rounded px-3 py-2"
              >
                {[...Array(10).keys()].map((i) => (
                  <option key={i} value={`${i + 1} Year`}>
                    {i + 1} Year{ i > 0 && 's' }
                  </option>
                ))}
              </select>
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <p>Fees</p>
              <input
                onChange={(e) => setFees(e.target.value)}
                value={fees}
                className="border rounded px-3 py-2"
                type="number"
                placeholder="Fees"
                required
              />
            </div>
          </div>

          <div className="w-full lg:flex-1 flex flex-col gap-4">
            <div className="flex-1 flex flex-col gap-1">
              <p>Speciality</p>
              <select
                onChange={(e) => setSpeciality(e.target.value)}
                value={speciality}
                className="border rounded px-3 py-2"
              >
                <option value="General physician">General physician</option>
                <option value="Gynecologist">Gynecologist</option>
                <option value="Dermatologist">Dermatologist</option>
                <option value="Pediatrician">Pediatrician</option>
                <option value="Neurologist">Neurologist</option>
                <option value="Gastroenterologist">Gastroenterologist</option>
              </select>
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <p>Education</p>
              <input
                onChange={(e) => setDegree(e.target.value)}
                value={degree}
                className="border rounded px-3 py-2"
                type="text"
                placeholder="Education"
                required
              />
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <p>Address</p>
              <input
                onChange={(e) => setAddress1(e.target.value)}
                value={address1}
                className="border rounded px-3 py-2"
                type="text"
                placeholder="Address 1"
                required
              />
              <input
                onChange={(e) => setAddress2(e.target.value)}
                value={address2}
                className="border rounded px-3 py-2"
                type="text"
                placeholder="Address 2"
                required
              />
            </div>
          </div>
        </div>

        <div>
          <p className="mt-4 mb-2">About Doctor</p>
          <textarea
            onChange={(e) => setAbout(e.target.value)}
            value={about}
            className="w-full px-4 pt-2 border rounded"
            placeholder="Doctor Bio"
            rows={5}
            required
          ></textarea>
        </div>

        <button type="submit" className="bg-primary px-10 py-3 mt-4 text-white rounded-full">
          Update Doctor
        </button>
      </div>
    </form>
  );
};

export default UpdateDoctor;