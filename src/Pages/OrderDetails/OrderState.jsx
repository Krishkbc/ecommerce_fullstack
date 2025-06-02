import { Stepper, Step, StepLabel } from "@mui/material";

export default function OrderState() {
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
  const currentStep = 1;
  return (
    <div className="rounded-sm p-6 border border-gray-200 w-full ">
      <div>
        <div className="flex justify-between items-center bg-[#f5eec9] p-3 border  ">
          <div className="flex flex-col gap-2">
            <div className="font-public font-semibold text-xl">#96459761</div>
            <div className="font-public font-normal text-sm flex items-center gap-2 text-gray-text">
              <p>4 Products</p>
              <p> . </p>
              <p>Order placed in 17 jan 2021 at 7:23 PM</p>
            </div>
          </div>

          <div className="text-[#2DA5F3] font-public font-semibold text-3xl">
            $1112.00
          </div>
        </div>
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
                  borderWidth: 2,
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
      </div>
    </div>
  );
}
