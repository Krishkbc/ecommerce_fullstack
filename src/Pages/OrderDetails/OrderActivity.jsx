import GreenCheck from "../../assests/OrderDetails/GreenTick.png";


const orderTimeline = [
    { step: "Your order has been placed successfully", status: "Completed", date: "20 Jan, 2021", time: "10:00 AM" },
    { step: "Your order is being carefully packed", status: "Completed", date: "21 Jan, 2021", time: "2:30 PM" },
    { step: "Your package is on the way to your location", status: "Completed", date: "23 Jan, 2021", time: "3:00 PM" },
    { step: "Your order has been delivered successfully", status: "Completed", date: "23 Jan, 2021", time: "7:32 PM", message: "Your order has been delivered. Thank you for shopping at Clicon!" }
];

export default function OrderActivity() {
    return (
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200 w-full ">
            <div className="flex flex-col gap-4">
                <h1 className="font-public font-semibold text-xl">Order Activity</h1>
                <ul className="flex flex-col gap-4">
                    {orderTimeline.map((item, index) => (
                        <li key={index} className="flex items-center gap-4">
                            <div>
                                <img src={GreenCheck} alt="GreenCheck" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <div className="font-public font-normal text-sm">{item.step}</div>
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
    )
}
