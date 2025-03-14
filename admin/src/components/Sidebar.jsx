import React from 'react'
import { useContext } from 'react'
import { AdminContext } from '../context/AdminContext'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'
import { DoctorContext } from '../context/DoctorContext'

const Sidebar = () => {

    const {aToken} = useContext(AdminContext)
    const {dToken} =useContext(DoctorContext)

    return (
        <div className='min-h-screen bg-white border-r'>
            {
                aToken && <ul className='text-[#515151] mt-5'>

                    <NavLink to={'/admin-dashboard'} className={({isActive})=> `flex items-center gap-3 py-3.5 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#f2f3ff] border-r-4 border-primary' : ''}`}>
                        <img src={assets.home_icon} alt="" />
                        <p className='hidden md:block'>Dashboard</p>
                    </NavLink>

                    <NavLink to={'/all-appointments'} className={({isActive})=> `flex items-center gap-3 py-3.5 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#f2f3ff] border-r-4 border-primary' : ''}`}>
                        <img src={assets.appointment_icon} alt="" />
                        <p className='hidden md:block'>Appointments</p>
                    </NavLink>

                    <NavLink to={'/add-doctor'} className={({isActive})=> `flex items-center gap-3 py-3.5 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#f2f3ff] border-r-4 border-primary' : ''}`}>
                        <img src={assets.add_icon} alt="" />
                        <p className='hidden md:block'>Add Doctor</p>
                    </NavLink>

                    <NavLink to={'/edit-doctor'} className={({isActive})=> `flex items-center gap-3 py-3.5 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#f2f3ff] border-r-4 border-primary' : ''}`}>
                        <img src={assets.list_icon} alt="" />
                        <p className='hidden md:block'>Edit Doctor</p>
                    </NavLink>

                    <NavLink to={'/doctor-list'} className={({isActive})=> `flex items-center gap-3 py-3.5 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#f2f3ff] border-r-4 border-primary' : ''}`}>
                        <img src={assets.people_icon} alt="" />
                        <p className='hidden md:block'>Doctors List</p>
                    </NavLink>

                    <NavLink to={'/add-patient'} className={({isActive})=> `flex items-center gap-3 py-3.5 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#f2f3ff] border-r-4 border-primary' : ''}`}>
                        <img src={assets.add_icon} alt="" />
                        <p className='hidden md:block'>Add Patient</p>
                    </NavLink>

                    <NavLink to={'/edit-patient'} className={({isActive})=> `flex items-center gap-3 py-3.5 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#f2f3ff] border-r-4 border-primary' : ''}`}>
                        <img src={assets.list_icon} alt="" />
                        <p className='hidden md:block'>Edit Patient</p>
                    </NavLink>

                    <NavLink to={'/patient-list'} className={({isActive})=> `flex items-center gap-3 py-3.5 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#f2f3ff] border-r-4 border-primary' : ''}`}>
                        <img src={assets.people_icon} alt="" />
                        <p className='hidden md:block'>Patients List</p>
                    </NavLink>

                </ul>
            }

            {
                dToken && <ul className='text-[#515151] mt-5'>

                    <NavLink to={'/doctor-dashboard'} className={({isActive})=> `flex items-center gap-3 py-3.5 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#f2f3ff] border-r-4 border-primary' : ''}`}>
                        <img src={assets.home_icon} alt="" />
                        <p className='hidden md:block'>Dashboard</p>
                    </NavLink>

                    <NavLink to={'/doctor-appointments'} className={({isActive})=> `flex items-center gap-3 py-3.5 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#f2f3ff] border-r-4 border-primary' : ''}`}>
                        <img src={assets.appointment_icon} alt="" />
                        <p className='hidden md:block'>Appointments</p>
                    </NavLink>

                    <NavLink to={'/doctor-profile'} className={({isActive})=> `flex items-center gap-3 py-3.5 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#f2f3ff] border-r-4 border-primary' : ''}`}>
                        <img src={assets.people_icon} alt="" />
                        <p className='hidden md:block'>Doctor Profile</p>
                    </NavLink>

                </ul>
            }

        </div>
    )
}

export default Sidebar
