import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import auth from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect,useState } from "react";


const Home = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const disp = onAuthStateChanged(auth, (resp) => {
      if (resp) {
        setUser([<p>{resp.email}</p>, <p>{resp.providerId}</p>])
      }
      else {
        setUser(null)
      }
    })
    return disp
  },[])
  
  return (
    <div className="home">

      {/* hello
      <h3 key={user}>Ten la: {user}       
      </h3> */}
      <Navbar />
      {/* <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="product" />
          <Widget type="order" />
          <Widget type="earning" />
        </div>
        <div className="charts">
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table />
        </div>
      </div> */}
    </div>
  );
};

export default Home
