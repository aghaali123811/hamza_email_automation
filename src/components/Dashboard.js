import Image from "next/image";
import { CiCalendar } from "react-icons/ci";
import { FaArrowTrendUp } from "react-icons/fa6";
import { BiEnvelope } from "react-icons/bi";

const Dashboard = () => {
  return (
    <>
      <div className="d-md-block d-none d-md-block d-sm-none">
        <div className="bg-dark py-4 p-0"></div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-1 bg-dark text-white pt-5 p-sm-0">
            <div className="d-flex flex-md-column flex-sm-row align-items-start">
              <Image
                src="/Home.svg"
                alt="Vercel Logo"
                className="dark:invert my-md-5 my-sm-0"
                width={80}
                height={30}
                priority
              />
              <Image
                src="/Calendar Plus.svg"
                alt="Vercel Logo"
                className="dark:invert mb-5"
                width={80}
                height={30}
                priority
              />
              <Image
                src="/Align Text Bottom.svg"
                alt="Vercel Logo"
                className="dark:invert mb-5"
                width={80}
                height={30}
                priority
              />
              <Image
                src="/Settings.svg"
                alt="Vercel Logo"
                className="dark:invert mb-5"
                width={80}
                height={30}
                priority
              />
              <Image
                src="/Logout.svg"
                alt="Vercel Logo"
                className="dark:invert mb-5"
                width={80}
                height={30}
                priority
              />
            </div>
          </div>
          <div className="col-md-11 py-5 ps-3 pe-5">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <div>
                <h5 className="card-title fw-bold">Summary</h5>
                <p className="card-text">June 25,2024 - July 2, 2024</p>
              </div>
              <button className="btn btn-outline-secondary">
                <CiCalendar size={25} /> Time period
              </button>
            </div>
            <div className="card border-dark mb-5">
              <div className="card-body p-5">
                <div className="row align-items-center">
                  <div className="col-md-3">
                    <Image
                      src="/summary-point.svg"
                      alt="Vercel Logo"
                      className="dark:invert"
                      width={200}
                      height={100}
                      priority
                    />
                  </div>
                  <div className="col-md-2">
                    <p>Open Rate</p>
                    <p>Click Rate</p>
                  </div>
                  <div className="col-md-2">
                    <p>20.3%</p>
                    <p>3.36%</p>
                  </div>
                  <div className="col-md-2">
                    <div className="w-50">
                      <p className="d-flex justify-content-center rounded-pill bg-light w-auto">
                        <FaArrowTrendUp
                          className="text-success me-2"
                          size={25}
                        />{" "}
                        6.2%
                      </p>
                      <p className="d-flex justify-content-center rounded-pill bg-light w-auto">
                        <FaArrowTrendUp
                          className="text-success me-2"
                          size={25}
                        />{" "}
                        54.6%
                      </p>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <p>Site Visits</p>
                    <p>ATC</p>
                    <p>Placed Order</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <h5 className="card-title fw-bold">Upcoming Campaigns</h5>
              <p className="card-text">June 25, 2024 - July 2, 2024</p>
            </div>
            <div className="card shadow border-dark mb-5">
              <div className="card-body">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Campaign</th>
                      <th>Type</th>
                      <th>Open Rate</th>
                      <th>Click Rate</th>
                      <th>Active on Site</th>
                    </tr>
                  </thead>
                  <tbody className="align-items-center">
                    <tr>
                      <td className="text-primary">
                        Email Campaign - Jun 19, 2024, 10:25 AM
                        <br />
                        <span className="text-dark">
                          Sent on June 22, 2024 at 8:00 AM
                        </span>
                      </td>
                      <td>
                        <BiEnvelope
                          className="bg-light p-1 rounded-pill"
                          size={30}
                        />
                      </td>
                      <td>21.32%</td>
                      <td>1.70%</td>
                      <td>$0.00</td>
                    </tr>
                    <tr>
                      <td className="text-primary">
                        Father's Day Email
                        <br />
                        <span className="text-dark">
                          Sent on June 8, 2024 at 4:00 AM
                        </span>
                      </td>
                      <td>
                        <BiEnvelope
                          className="bg-light p-1 rounded-pill"
                          size={30}
                        />
                      </td>
                      <td>21.95%</td>
                      <td>7.39%</td>
                      <td>$0.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="card border-dark">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-start mb-4">
                  <div>
                    <h5 className="card-title fw-bold">Recent Campaigns</h5>
                    <p className="card-text">May 26, 2024 - Jun 25, 2024</p>
                  </div>
                  <button className="btn btn-outline-secondary">
                    View all campaigns
                  </button>
                </div>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Campaign</th>
                      <th>Type</th>
                      <th>Open Rate</th>
                      <th>Click Rate</th>
                      <th>Active on Site</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-primary">
                        Email Campaign - Jun 19, 2024, 10:25 AM
                        <br />
                        <span className="text-dark">
                          Sent on June 22, 2024 at 8:00 AM
                        </span>
                      </td>
                      <td>
                        <BiEnvelope
                          className="bg-light p-1 rounded-pill"
                          size={30}
                        />
                      </td>
                      <td>21.32%</td>
                      <td>1.70%</td>
                      <td>$0.00</td>
                    </tr>
                    <tr>
                      <td className="text-primary">
                        Father's Day Email
                        <br />
                        <span className="text-dark">
                          Sent on June 8, 2024 at 4:00 AM
                        </span>
                      </td>
                      <td>
                        <BiEnvelope
                          className="bg-light p-1 rounded-pill"
                          size={30}
                        />
                      </td>
                      <td>21.95%</td>
                      <td>7.39%</td>
                      <td>$0.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
