export const PersonalInfoForm = ({ ticketType, index }) => {
    return (
      <div className="personal-info-form bg-indigo-600 p-6 rounded-lg shadow-md">
        <h3 className="text-center bg-pastel-orange text-indigo-600 font-semibold text-3xl p-4 rounded-lg mb-6">{ticketType} Ticket #{index} - Personal Info</h3>
        <form className="space-y-4">
          <div>
            <label htmlFor="fullName" className="block text-white mb-2">Full Name</label>
            <input type="text" id="fullName" name="fullName" placeholder="Full Name..." required className="w-full p-2 border rounded-md" />
          </div>
          <div>
            <label htmlFor="birthday" className="block text-white mb-2">Birthday</label>
            <input type="date" id="birthday" name="birthday" required className="w-full p-2 border rounded-md" />
          </div>
          <div>
            <label htmlFor="email" className="block text-white mb-2">Email Address</label>
            <input type="email" id="email" name="email" placeholder="Email address..." required className="w-full p-2 border rounded-md" />
          </div>
          <div>
            <label htmlFor="phone" className="block text-white mb-2">Phone Number</label>
            <input type="number" id="phone" name="phone" placeholder="Phone number" required className="w-full p-2 border rounded-md" />
          </div>
        </form>
      </div>
    );
  };
  