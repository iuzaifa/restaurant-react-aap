import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Users, Check, X, Phone, Mail, Edit, Trash2, Filter, Search, Plus } from 'lucide-react';
import Navbar from '../components/Navbar';
import TopBar from '../components/TopBar';
import BreadCrumb from '../components/BreadCrumb';
import Footer from '../components/Footer';



const Reservation = () => {
  const [activeTab, setActiveTab] = useState('make-reservation');
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedTable, setSelectedTable] = useState('');
  const [guestCount, setGuestCount] = useState(2);
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [showNewReservation, setShowNewReservation] = useState(false);

  // Sample reservations data
  const [reservations, setReservations] = useState([
    {
      id: 1,
      customerName: 'Sarah Johnson',
      phone: '+1 (555) 123-4567',
      email: 'sarah.j@email.com',
      date: '2025-08-08',
      time: '7:00 PM',
      guests: 4,
      table: 'T-05',
      status: 'confirmed',
      specialRequests: 'Birthday celebration, window table preferred'
    },
    {
      id: 2,
      customerName: 'Michael Chen',
      phone: '+1 (555) 987-6543',
      email: 'michael.chen@email.com',
      date: '2025-08-08',
      time: '8:00 PM',
      guests: 2,
      table: 'T-12',
      status: 'pending',
      specialRequests: 'Anniversary dinner'
    },
    {
      id: 3,
      customerName: 'Emily Rodriguez',
      phone: '+1 (555) 456-7890',
      email: 'emily.r@email.com',
      date: '2025-08-07',
      time: '6:30 PM',
      guests: 6,
      table: 'T-08',
      status: 'confirmed',
      specialRequests: 'Dietary restrictions - vegetarian options needed'
    },
    {
      id: 4,
      customerName: 'David Thompson',
      phone: '+1 (555) 321-0987',
      email: 'david.thompson@email.com',
      date: '2025-08-09',
      time: '7:30 PM',
      guests: 3,
      table: 'T-03',
      status: 'cancelled',
      specialRequests: ''
    }
  ]);

  // Restaurant tables configuration
  const tables = [
    { id: 'T-01', seats: 2, location: 'Window', status: 'available' },
    { id: 'T-02', seats: 2, location: 'Window', status: 'occupied' },
    { id: 'T-03', seats: 4, location: 'Center', status: 'available' },
    { id: 'T-04', seats: 4, location: 'Center', status: 'reserved' },
    { id: 'T-05', seats: 4, location: 'Window', status: 'reserved' },
    { id: 'T-06', seats: 6, location: 'Private', status: 'available' },
    { id: 'T-07', seats: 6, location: 'Private', status: 'occupied' },
    { id: 'T-08', seats: 8, location: 'Center', status: 'reserved' },
    { id: 'T-09', seats: 2, location: 'Bar', status: 'available' },
    { id: 'T-10', seats: 2, location: 'Bar', status: 'available' },
    { id: 'T-11', seats: 4, location: 'Patio', status: 'available' },
    { id: 'T-12', seats: 2, location: 'Window', status: 'reserved' }
  ];

  // Available time slots
  const timeSlots = [
    '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM',
    '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM', '10:00 PM'
  ];

  // Filter available tables based on guest count and date/time
  const getAvailableTables = () => {
    return tables.filter(table =>
      table.seats >= guestCount &&
      (table.status === 'available' || table.id === selectedTable)
    );
  };

  // Handle reservation submission
  const handleReservationSubmit = (e) => {
    e.preventDefault();
    const newReservation = {
      id: reservations.length + 1,
      customerName,
      phone: customerPhone,
      email: customerEmail,
      date: selectedDate,
      time: selectedTime,
      guests: guestCount,
      table: selectedTable,
      status: 'pending',
      specialRequests
    };
    setReservations([...reservations, newReservation]);

    // Reset form
    setCustomerName('');
    setCustomerPhone('');
    setCustomerEmail('');
    setSelectedTime('');
    setSelectedTable('');
    setSpecialRequests('');
    setShowNewReservation(false);
    alert('Reservation submitted successfully!');
  };

  // Handle status update
  const updateReservationStatus = (id, newStatus) => {
    setReservations(reservations.map(res =>
      res.id === id ? { ...res, status: newStatus } : res
    ));
  };

  // Delete reservation
  const deleteReservation = (id) => {
    if (confirm('Are you sure you want to delete this reservation?')) {
      setReservations(reservations.filter(res => res.id !== id));
    }
  };

  // Filter reservations
  const filteredReservations = reservations.filter(res => {
    const matchesSearch = res.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      res.phone.includes(searchTerm) ||
      res.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || res.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmed': return 'bg-green-500';
      case 'pending': return 'bg-yellow-500';
      case 'cancelled': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getTableStatusColor = (status) => {
    switch (status) {
      case 'available': return 'bg-green-500';
      case 'reserved': return 'bg-yellow-500';
      case 'occupied': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  return (

    <>
      <TopBar />
      <Navbar />
      <BreadCrumb currentPage="Reservation" moverUrl="/"/>

      <div className="min-h-screen bg-gradient-to-br bg-gray-800">
        <div className="bg-black/20 backdrop-blur-sm border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <h1 className="text-4xl font-bold text-white mb-2">Bite Restaurant</h1>
            <p className="text-gray-300">Reservation Management System</p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white/5 backdrop-blur-sm border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6">
            <nav className="flex space-x-8">
              {[
                { id: 'make-reservation', label: 'Book Table', icon: Plus },
                { id: 'view-reservations', label: 'View Reservations', icon: Calendar },
                { id: 'table-layout', label: 'Table Layout', icon: Users }
              ].map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 py-4 px-2 border-b-2 font-medium transition-colors ${activeTab === tab.id
                      ? 'border-amber-400 text-amber-400'
                      : 'border-transparent text-gray-400 hover:text-white'
                      }`}
                  >
                    <Icon className="w-5 h-5" />
                    {tab.label}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-8">
          {/* Book Table Tab */}
          {activeTab === 'make-reservation' && (
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-white">Make a Reservation</h2>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Reservation Form */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <form onSubmit={handleReservationSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-white font-medium mb-2">Date</label>
                        <input
                          type="date"
                          value={selectedDate}
                          onChange={(e) => setSelectedDate(e.target.value)}
                          min={new Date().toISOString().split('T')[0]}
                          className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-white font-medium mb-2">Guests</label>
                        <select
                          value={guestCount}
                          onChange={(e) => setGuestCount(parseInt(e.target.value))}
                          className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
                          required
                        >
                          {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                            <option key={num} value={num}>{num} Guest{num !== 1 ? 's' : ''}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-white font-medium mb-2">Time</label>
                      <div className="grid grid-cols-3 gap-2">
                        {timeSlots.map(time => (
                          <button
                            key={time}
                            type="button"
                            onClick={() => setSelectedTime(time)}
                            className={`p-3 rounded-lg border text-center transition-colors ${selectedTime === time
                              ? 'bg-amber-500 border-amber-500 text-black'
                              : 'bg-white/10 border-white/20 text-white hover:bg-white/20'
                              }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-white font-medium mb-2">Select Table</label>
                      <div className="grid grid-cols-2 gap-2">
                        {getAvailableTables().map(table => (
                          <button
                            key={table.id}
                            type="button"
                            onClick={() => setSelectedTable(table.id)}
                            className={`p-4 rounded-lg border text-left transition-colors ${selectedTable === table.id
                              ? 'bg-amber-500 border-amber-500 text-black'
                              : 'bg-white/10 border-white/20 text-white hover:bg-white/20'
                              }`}
                          >
                            <div className="font-semibold">{table.id}</div>
                            <div className="text-sm opacity-80">
                              {table.seats} seats • {table.location}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-white font-medium mb-2">Name</label>
                        <input
                          type="text"
                          value={customerName}
                          onChange={(e) => setCustomerName(e.target.value)}
                          className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
                          placeholder="Full Name"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-white font-medium mb-2">Phone</label>
                        <input
                          type="tel"
                          value={customerPhone}
                          onChange={(e) => setCustomerPhone(e.target.value)}
                          className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
                          placeholder="Phone Number"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-white font-medium mb-2">Email</label>
                      <input
                        type="email"
                        value={customerEmail}
                        onChange={(e) => setCustomerEmail(e.target.value)}
                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
                        placeholder="Email Address"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-white font-medium mb-2">Special Requests</label>
                      <textarea
                        value={specialRequests}
                        onChange={(e) => setSpecialRequests(e.target.value)}
                        rows="3"
                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400 resize-none"
                        placeholder="Any special requests or dietary restrictions..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={!selectedTime || !selectedTable || !customerName}
                      className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-black font-semibold py-4 rounded-lg hover:scale-105 transition-transform duration-200 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                      Book Table
                    </button>
                  </form>
                </div>

                {/* Reservation Summary */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <h3 className="text-2xl font-bold text-white mb-6">Reservation Summary</h3>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-4 bg-white/5 rounded-lg">
                      <Calendar className="w-6 h-6 text-amber-400" />
                      <div>
                        <div className="text-white font-medium">Date</div>
                        <div className="text-gray-300">{selectedDate || 'Not selected'}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-4 bg-white/5 rounded-lg">
                      <Clock className="w-6 h-6 text-amber-400" />
                      <div>
                        <div className="text-white font-medium">Time</div>
                        <div className="text-gray-300">{selectedTime || 'Not selected'}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-4 bg-white/5 rounded-lg">
                      <Users className="w-6 h-6 text-amber-400" />
                      <div>
                        <div className="text-white font-medium">Party Size</div>
                        <div className="text-gray-300">{guestCount} Guest{guestCount !== 1 ? 's' : ''}</div>
                      </div>
                    </div>

                    {selectedTable && (
                      <div className="flex items-center gap-3 p-4 bg-white/5 rounded-lg">
                        <div className="w-6 h-6 bg-amber-400 rounded text-black text-xs font-bold flex items-center justify-center">
                          T
                        </div>
                        <div>
                          <div className="text-white font-medium">Table</div>
                          <div className="text-gray-300">
                            {selectedTable} ({tables.find(t => t.id === selectedTable)?.location})
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="mt-6 p-4 bg-amber-500/20 border border-amber-500/30 rounded-lg">
                    <h4 className="text-amber-400 font-semibold mb-2">Restaurant Policies</h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Reservations held for 15 minutes</li>
                      <li>• Cancellations accepted up to 2 hours before</li>
                      <li>• Large parties (6+) may require deposit</li>
                      <li>• Smart casual dress code</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* View Reservations Tab */}
          {activeTab === 'view-reservations' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-3xl font-bold text-white">Reservations</h2>

                <div className="flex gap-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search reservations..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
                    />
                  </div>

                  <select
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                    className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
                  >
                    <option value="all">All Status</option>
                    <option value="confirmed">Confirmed</option>
                    <option value="pending">Pending</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </div>
              </div>

              <div className="grid gap-4">
                {filteredReservations.map((reservation) => (
                  <div key={reservation.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white">{reservation.customerName}</h3>
                        <div className="flex items-center gap-4 text-gray-300 mt-2">
                          <div className="flex items-center gap-1">
                            <Phone className="w-4 h-4" />
                            {reservation.phone}
                          </div>
                          <div className="flex items-center gap-1">
                            <Mail className="w-4 h-4" />
                            {reservation.email}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${getStatusColor(reservation.status)}`}>
                          {reservation.status.charAt(0).toUpperCase() + reservation.status.slice(1)}
                        </span>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-4 gap-4 mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-5 h-5 text-amber-400" />
                        <div>
                          <div className="text-gray-400 text-sm">Date</div>
                          <div className="text-white font-medium">{reservation.date}</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <Clock className="w-5 h-5 text-amber-400" />
                        <div>
                          <div className="text-gray-400 text-sm">Time</div>
                          <div className="text-white font-medium">{reservation.time}</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <Users className="w-5 h-5 text-amber-400" />
                        <div>
                          <div className="text-gray-400 text-sm">Guests</div>
                          <div className="text-white font-medium">{reservation.guests}</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 bg-amber-400 rounded text-black text-xs font-bold flex items-center justify-center">T</div>
                        <div>
                          <div className="text-gray-400 text-sm">Table</div>
                          <div className="text-white font-medium">{reservation.table}</div>
                        </div>
                      </div>
                    </div>

                    {reservation.specialRequests && (
                      <div className="mb-4 p-3 bg-white/5 rounded-lg">
                        <div className="text-gray-400 text-sm mb-1">Special Requests:</div>
                        <div className="text-white">{reservation.specialRequests}</div>
                      </div>
                    )}

                    <div className="flex gap-2">
                      {reservation.status === 'pending' && (
                        <>
                          <button
                            onClick={() => updateReservationStatus(reservation.id, 'confirmed')}
                            className="flex items-center gap-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                          >
                            <Check className="w-4 h-4" />
                            Confirm
                          </button>
                          <button
                            onClick={() => updateReservationStatus(reservation.id, 'cancelled')}
                            className="flex items-center gap-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                          >
                            <X className="w-4 h-4" />
                            Cancel
                          </button>
                        </>
                      )}

                      <button
                        onClick={() => deleteReservation(reservation.id)}
                        className="flex items-center gap-1 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors ml-auto"
                      >
                        <Trash2 className="w-4 h-4" />
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Table Layout Tab */}
          {activeTab === 'table-layout' && (
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">Table Layout</h2>

              <div className="grid lg:grid-cols-4 gap-6">
                {/* Legend */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-4">Legend</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-green-500 rounded"></div>
                      <span className="text-white">Available</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-yellow-500 rounded"></div>
                      <span className="text-white">Reserved</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-red-500 rounded"></div>
                      <span className="text-white">Occupied</span>
                    </div>
                  </div>
                </div>

                {/* Table Grid */}
                <div className="lg:col-span-3">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <div className="grid grid-cols-4 gap-4">
                      {tables.map((table) => (
                        <div
                          key={table.id}
                          className={`relative p-4 rounded-lg border-2 transition-all hover:scale-105 ${table.status === 'available'
                            ? 'border-green-500 bg-green-500/20'
                            : table.status === 'reserved'
                              ? 'border-yellow-500 bg-yellow-500/20'
                              : 'border-red-500 bg-red-500/20'
                            }`}
                        >
                          <div className="text-center">
                            <div className="text-white font-bold text-lg">{table.id}</div>
                            <div className="text-gray-300 text-sm">{table.seats} seats</div>
                            <div className="text-gray-400 text-xs">{table.location}</div>
                          </div>

                          <div className={`absolute top-1 right-1 w-3 h-3 rounded-full ${getTableStatusColor(table.status)}`}></div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 text-center">
                      <div className="inline-block bg-white/5 rounded-lg p-4 border border-white/10">
                        <h4 className="text-white font-semibold mb-2">Restaurant Floor Plan</h4>
                        <p className="text-gray-300 text-sm">Click on any table to view details and reservations</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Table Statistics */}
              <div className="grid md:grid-cols-4 gap-4">
                <div className="bg-green-500/20 border border-green-500/30 rounded-xl p-6">
                  <h3 className="text-green-400 font-semibold">Available Tables</h3>
                  <p className="text-3xl font-bold text-white mt-2">
                    {tables.filter(t => t.status === 'available').length}
                  </p>
                </div>

                <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-xl p-6">
                  <h3 className="text-yellow-400 font-semibold">Reserved Tables</h3>
                  <p className="text-3xl font-bold text-white mt-2">
                    {tables.filter(t => t.status === 'reserved').length}
                  </p>
                </div>

                <div className="bg-red-500/20 border border-red-500/30 rounded-xl p-6">
                  <h3 className="text-red-400 font-semibold">Occupied Tables</h3>
                  <p className="text-3xl font-bold text-white mt-2">
                    {tables.filter(t => t.status === 'occupied').length}
                  </p>
                </div>

                <div className="bg-blue-500/20 border border-blue-500/30 rounded-xl p-6">
                  <h3 className="text-blue-400 font-semibold">Total Capacity</h3>
                  <p className="text-3xl font-bold text-white mt-2">
                    {tables.reduce((sum, table) => sum + table.seats, 0)}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Reservation;