import { useState } from "react";
import searchButton from "../../assests/BrowsingHistory/searchButton.svg";

import { TextField, InputAdornment } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import dayjs from "dayjs";

export default function BrowsingHeader() {
  const [selectedDate, setSelectedDate] = useState(dayjs());

  return (
    <div className="bg-white p-6 rounded-sm w-full">
      {/* Heading */}
      <h2 className="text-xl font-semibold text-gray-800 mb-6">
        Browser History
      </h2>

      {/* Search & Date Inputs */}
      <div className="flex gap-4">
        {/* Search Input with icon */}
        <div className="flex flex-col flex-1 relative">
          <label className="text-sm font-medium text-gray-700 mb-1">
            Search
          </label>
          <input
            type="text"
            placeholder="Search history..."
            className="border border-gray-00 rounded-md pl-10 pr-4 py-4 text-sm w-full"
          />
          <img
            src={searchButton}
            alt="search"
            className="absolute left-3 top-10 transform translate-y-1 w-4 h-4 pointer-events-none"
          />
        </div>

        {/* MUI Date Picker */}
        <div className="flex flex-col flex-1">
          <label className="text-sm font-medium text-gray-700 mb-1">Date</label>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
              inputFormat="MM/DD/YYYY"
              value={selectedDate}
              onChange={(newValue) => setSelectedDate(newValue)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  fullWidth
                  size="small"
                  sx={{
                    backgroundColor: "white",
                    borderRadius: 1,
                    "& .MuiOutlinedInput-root": {
                      fontSize: 14,
                    },
                  }}
                  InputProps={{
                    ...params.InputProps,
                    startAdornment: (
                      <InputAdornment position="start">
                        <CalendarMonthIcon className="text-gray-500" />
                      </InputAdornment>
                    ),
                  }}
                />
              )}
            />
          </LocalizationProvider>
        </div>
      </div>
    </div>
  );
}
