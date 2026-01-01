"use client";
import own from "@/app/assets/own.webp";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEdit } from "react-icons/md";
import { PiInstagramLogoFill } from "react-icons/pi";
import Modal from "../components/Modal";

export default function UserProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [firstName, setFirstName] = useState("Chandu");
  const [lastName, setLastName] = useState("Chaudhary");
  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);

  const [address, setAddress] = useState({
    country: "United States",
    city: "Phoenix, Arizona, United States.",
    postalCode: "ERT 2489",
    taxId: "AS4568384",
  });
  const [isPersonalModalOpen, setIsPersonalModalOpen] = useState(false);

  const [personalInfo, setPersonalInfo] = useState({
    firstName: "Chandu",
    lastName: "Chaudhary",
    email: "randomuser@pimjo.com",
    phone: "+0936339846",
    bio: "CA",
  });
  return (
    <div className="w-6xl h-7xl bg-white ml-77 border border-gray-400 rounded-3xl mb-5">
      <h2 className="text-xl font-semibold p-5">Profile</h2>

      <div className="flex border justify-between rounded-2xl m-4 border-gray-400 bg-white p-5  ">
        <div className="flex items-center ">
          <div>
            <Image
              src={own}
              className="p-3 w-30 h-30 rounded-full"
              alt="hello"
            />
          </div>

          <div>
            {isEditing ? (
              <div className="flex gap-2">
                <input
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="border rounded px-2 py-1 text-sm"
                />
                <input
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="border rounded px-2 py-1 text-sm"
                />
              </div>
            ) : (
              <h1 className="text-xl font-bold text-gray-900">
                {firstName} {lastName}
              </h1>
            )}

            <p className="text-gray-500 font-semibold pt-2">
              Team Manager | Arizona, United States
            </p>
          </div>
        </div>

        <div className="flex items-center p-5 gap-5 ">
          <div className="w-12 h-12 flex items-center bg-white justify-center border border-gray-500 rounded-full text-gray-800">
            <Link href="https://facebook.com">
              <FaFacebookF />
            </Link>
          </div>
          <div className="w-12 h-12 flex items-center justify-center border border-gray-500 rounded-full text-gray-800">
            <Link href="https://x.com">
              <FaXTwitter size={20} />
            </Link>
          </div>
          <div className="w-12 h-12 flex items-center justify-center border border-gray-500 rounded-full text-gray-800">
            <Link href="https://linkedin.com">
              <FaLinkedinIn size={20} />
            </Link>
          </div>

          <div className="w-12 h-12 flex items-center justify-center border border-gray-500 rounded-full text-gray-800">
            <Link href="https://instagram.com">
              <PiInstagramLogoFill size={20} />
            </Link>
          </div>
        </div>
      </div>

      <div className="border rounded-3xl m-4 mt-8 border-gray-400 p-5 ">
        <h2 className="text-xl p-5 font-semibold">Personal Information </h2>

        <div className="flex justify-between">
          <div className="flex gap-5 p-5">
            <div className="space-y-6">
              <div>
                <h1 className="text-xs text-gray-400">First Name </h1>
                <p
                  className="text-sm font-semibold "
                  onChange={(e) => setFirstName(e.target.value)}
                  value={firstName}
                >
                  {personalInfo.firstName}
                </p>
              </div>

              <div>
                <h1 className="text-xs text-gray-400">Email</h1>
                <p className="text-sm font-semibold pt-2 text-gray-800">
                  {personalInfo.email}
                </p>
              </div>
              <div>
                <h1 className="text-xs text-gray-400">Bio</h1>
                <p className="text-sm font-semibold pt-2 text-gray-800">
                  {personalInfo.bio}
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h1 className="text-xs text-gray-400">Last Name</h1>
                <p
                  className="text-sm font-semibold text-gray-800"
                  onChange={(e) => setLastName(e.target.value)}
                >
                  {personalInfo.lastName}
                </p>
              </div>

              <div>
                <h1 className="text-xs text-gray-400">Phone </h1>
                <p className="text-sm font-semibold pt-2 text-gray-800">
                  {personalInfo.phone}
                </p>
              </div>
            </div>
          </div>

          <div
            onClick={() => setIsPersonalModalOpen(true)}
            className="cursor-pointer flex items-center justify-center gap-1
             text-sm font-semibold text-gray-800
             border border-gray-400
             w-24 h-10 rounded-3xl mr-9
             hover:bg-gray-800 hover:text-white transition"
          >
            <MdEdit size={16} />
            <span>{isEditing ? "Save" : "Edit"}</span>
          </div>
        </div>
      </div>

      <div className="border rounded-3xl m-4 mt-8 border-gray-400 p-5 ">
        <h2 className="text-xl p-5 font-semibold">Address </h2>

        <div className="flex justify-between">
          <div className="flex  gap-8 p-5">
            <div className="space-y-6">
              <div>
                <h1 className="text-xs text-gray-400">Country</h1>
                <p className="text-sm font-semibold">{address.country} </p>
              </div>

              <div>
                <h1 className="text-xs text-gray-400">Postal Code</h1>
                <p className="text-sm font-semibold pt-2 text-gray-800">
                  {address.postalCode}
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h1 className="text-xs text-gray-400">City/State</h1>
                <p className="text-sm font-semibold text-gray-800">
                  {address.city}
                </p>
              </div>

              <div>
                <h1 className="text-xs text-gray-400">TAX ID </h1>
                <p className="text-sm font-semibold pt-2 text-gray-800">
                  {address.taxId}
                </p>
              </div>
            </div>
          </div>

          <div
            onClick={() => setIsAddressModalOpen(true)}
            className="cursor-pointer flex items-center justify-center gap-1
             text-sm font-semibold text-gray-800
             border border-gray-400
             w-24 h-10 rounded-3xl mr-9
             hover:bg-gray-800 hover:text-white transition"
          >
            <MdEdit size={16} />
            <span>Edit</span>
          </div>
        </div>
      </div>
      <Modal
        isOpen={isAddressModalOpen}
        onClose={() => setIsAddressModalOpen(false)}
        title="Edit Address"
      >
        <div className="space-y-4">
          <input
            value={address.country}
            onChange={(e) =>
              setAddress({ ...address, country: e.target.value })
            }
            placeholder="Country"
            className="w-full border rounded px-3 py-2 text-sm"
          />

          <input
            value={address.city}
            onChange={(e) => setAddress({ ...address, city: e.target.value })}
            placeholder="City / State"
            className="w-full border rounded px-3 py-2 text-sm"
          />

          <input
            value={address.postalCode}
            onChange={(e) =>
              setAddress({ ...address, postalCode: e.target.value })
            }
            placeholder="Postal Code"
            className="w-full border rounded px-3 py-2 text-sm"
          />

          <input
            value={address.taxId}
            onChange={(e) => setAddress({ ...address, taxId: e.target.value })}
            placeholder="Tax ID"
            className="w-full border rounded px-3 py-2 text-sm"
          />

          <div className="flex justify-end gap-3 pt-4">
            <button
              onClick={() => setIsAddressModalOpen(false)}
              className="px-4 py-2 border rounded"
            >
              Cancel
            </button>

            <button
              onClick={() => setIsAddressModalOpen(false)}
              className="px-4 py-2 bg-gray-800 text-white rounded"
            >
              Save
            </button>
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={isPersonalModalOpen}
        onClose={() => setIsPersonalModalOpen(false)}
        title="Edit Personal Information"
      >
        <div className="space-y-4">
          <input
            value={personalInfo.firstName}
            onChange={(e) =>
              setPersonalInfo({ ...personalInfo, firstName: e.target.value })
            }
            placeholder="First Name"
            className="w-full border rounded px-3 py-2 text-sm"
          />

          <input
            value={personalInfo.lastName}
            onChange={(e) =>
              setPersonalInfo({ ...personalInfo, lastName: e.target.value })
            }
            placeholder="Last Name"
            className="w-full border rounded px-3 py-2 text-sm"
          />

          <input
            value={personalInfo.email}
            onChange={(e) =>
              setPersonalInfo({ ...personalInfo, email: e.target.value })
            }
            placeholder="Email"
            className="w-full border rounded px-3 py-2 text-sm"
          />

          <input
            value={personalInfo.phone}
            onChange={(e) =>
              setPersonalInfo({ ...personalInfo, phone: e.target.value })
            }
            placeholder="Phone"
            className="w-full border rounded px-3 py-2 text-sm"
          />

          <textarea
            value={personalInfo.bio}
            onChange={(e) =>
              setPersonalInfo({ ...personalInfo, bio: e.target.value })
            }
            placeholder="Bio"
            className="w-full border rounded px-3 py-2 text-sm"
            rows={3}
          />

          <div className="flex justify-end gap-3 pt-4">
            <button
              onClick={() => setIsPersonalModalOpen(false)}
              className="px-4 py-2 border rounded"
            >
              Cancel
            </button>

            <button
              onClick={() => setIsPersonalModalOpen(false)}
              className="px-4 py-2 bg-gray-800 text-white rounded"
            >
              Save
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
