// components/Breadcrumbs.tsx
import { useLocation, Link } from "react-router-dom";

export default function Breadcrumbs() {
  const location = useLocation();

  const crumbs = location.pathname.split("/").filter(Boolean);

  return (
    <div className="bg-[#F2F4F5]">
      <div className="container mx-auto px-4">
        <nav className="text-sm  text-gray-500 px-4 py-2">
          {crumbs.map((crumb, idx) => {
            const path = "/" + crumbs.slice(0, idx + 1).join("/");
            console.log;
            const isLast = idx === crumbs.length - 1;

            return (
              <span key={path}>
                {!isLast ? (
                  <>
                    <Link to={path} className="hover:underline capitalize">
                      {crumb}
                    </Link>
                    <span className="mx-1">{">"}</span>
                  </>
                ) : (
                  <span className="font-semibold text-[#2DA5F3] capitalize">
                    {crumb}
                  </span>
                )}
              </span>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
