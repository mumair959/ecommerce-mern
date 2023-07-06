import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import AccountBanner from "../../components/account/AccountBanner";
import AccountSideBar from "../../components/account/AccountSideBar";

const Dashboard = () => {
  const [mounted, setMounted] = useState(false);
  const [dashboard, setDashboard] = useState({});
  const router = useRouter('/');

  useEffect(() => {
      let authtoken = JSON.parse(window.localStorage.getItem('auth'));
      if (authtoken == null) {
          router.push('/');
      }
      setMounted(true);
      getDashboardData();
  },[]);

  const getDashboardData = async (e) => {
    const {data} = await axios.get('/dashboard/get-data');
    console.log(data);
    setDashboard(data.dashboard);
};

  return (
      mounted && <>
        <section className="my-account pt-6 pb-120">
            <div className="container">
              <AccountBanner />
                <div className="row g-4">
                  <AccountSideBar />
                  <div className="col-xl-9">
                      <div className="tab-content">
                        <div className="tab-pane fade show active">
                          <div className="address-book bg-white rounded p-5">
                            
                          </div>
                        </div>
                      </div>
                  </div>
                </div>
            </div>
        </section>
      </>
  )
}

export default Dashboard;