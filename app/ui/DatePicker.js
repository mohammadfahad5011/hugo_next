"use client";

import React, { useState } from "react";

function DatePicker() {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");

  const handleSelectClick = () => {
    setShowDatePicker(!showDatePicker);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "short" });
    return `${day} ${month}`;
  };

  const handleDateChange = (event) => {
    setSelectedDate(formatDate(event.target.value));
    setShowDatePicker(false); // Hide the date picker after a date is selected
  };

  return (
    <div className="relative">
      {!selectedDate && (
        <label
          htmlFor="date"
          onClick={handleSelectClick}
          className="text-white font-semibold text-lg"
        >
          Select
        </label>
      )}
      <div
        className={`absolute bg-white p-2 rounded-lg border border-gray-300 mt-1 transition-all duration-300 ${
          showDatePicker ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <input
          type="date"
          name="date"
          id="date"
          value={selectedDate}
          onChange={handleDateChange}
          className="w-full"
        />
      </div>
      {selectedDate && <p className="text-bold text-white">{selectedDate}</p>}
    </div>
  );
}

export default DatePicker;
