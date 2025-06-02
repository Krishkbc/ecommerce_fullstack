import { Stepper, Step, StepLabel } from "@mui/material";
import GreenCheck from "../../assests/OrderDetails/GreenTick.png";

export default function TrackOrderDetail() {
  const steps = [
    "Order Placed",
    "Processing",
    "Shipped",
    "Delivered",
    "Cancelled",
  ];

  const orderTimeline = [
    {
      step: "Your order has been placed successfully",
      status: "Completed",
      date: "20 Jan, 2021",
      time: "10:00 AM",
    },
    {
      step: "Your order is being carefully packed",
      status: "Completed",
      date: "21 Jan, 2021",
      time: "2:30 PM",
    },
    {
      step: "Your package is on the way to your location",
      status: "Completed",
      date: "23 Jan, 2021",
      time: "3:00 PM",
    },
    {
      step: "Your order has been delivered successfully",
      status: "Completed",
      date: "23 Jan, 2021",
      time: "7:32 PM",
      message:
        "Your order has been delivered. Thank you for shopping at Clicon!",
    },
  ];

  const currentStep = 2;

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="w-full rounded-sm border border-gray-200 bg-white overflow-hidden p-">
        {/* Order Info */}
        <div className="flex justify-between items-start bg-[#f5eec9] px-6 py-5 border-b border-gray-300">
          <div className="flex flex-col gap-1">
            <h2 className="font-semibold text-xl text-gray-800">
              Order #96459761
            </h2>
            <div className="text-sm text-gray-600 flex gap-2">
              <span>4 Products</span>
              <span>•</span>
              <span>Placed on Jan 17, 2021 at 7:23 PM</span>
            </div>
          </div>
          <div className="text-2xl font-semibold text-[#2DA5F3]">$1112.00</div>
        </div>

        {/* MUI Stepper */}
        <div className="px-6 py-8">
          <Stepper
            activeStep={currentStep}
            alternativeLabel
            sx={{
              "& .MuiStepIcon-root": {
                color: "#e0e0e0",
              },
              "& .MuiStepIcon-root.Mui-active": {
                color: "#FA8232",
              },
              "& .MuiStepIcon-root.Mui-completed": {
                color: "#FA8232",
              },
              "& .MuiStepConnector-line": {
                borderColor: "#e0e0e0",
                borderWidth: 2,
              },
              "& .MuiStepConnector-root.Mui-completed .MuiStepConnector-line, & .MuiStepConnector-root.Mui-active .MuiStepConnector-line":
                {
                  borderColor: "#FA8232",
                  borderWidth: 3,
                },
            }}
          >
            {steps.map((label, index) => (
              <Step key={index}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="font-public font-semibold text-xl">Order Activity</h1>
          <ul className="flex flex-col gap-4">
            {orderTimeline.map((item, index) => (
              <li key={index} className="flex items-center gap-4">
                <div>
                  <img src={GreenCheck} alt="GreenCheck" />
                </div>
                <div className="flex flex-col gap-1">
                  <div className="font-public font-normal text-sm">
                    {item.step}
                  </div>
                  <div className="flex gap-1 text-gray-text font-normal text-sm">
                    <p>{item.date}</p>
                    <p>{item.time}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
