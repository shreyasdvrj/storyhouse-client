import React from "react";
import "./profile.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Header from "../../components/Header/header";
import Navigation from "../../components/Navbar/navbar";
import Sidebar from "../../components/Sidebar/sidenav";
import User from "../../components/User/user";
import FooterPage from "../../components/Footer/footer";

import TopBar from "../../components/TopBar/topBar";

// class Profile extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { user: {} };
//   }
//   componentDidMount() {
//     axios({
//       method: "GET",
//       url: "https://storyhouse-bookstore.herokuapp.com/users/verify",
//       withCredentials: true,
//     })
//       .then((res) => {
//         console.log("Works with res");
//         this.setState({ user: res.data });
//       })
//       .catch((res, error) => {
//         console.log("Profile Problem ", res, error);
//       });
//   }
//   render() {
//     return (
//       <div>
//         <p> {this.state.user}</p>
//         <Header />
//         <Navigation />
//         <TopBar name="Your Account"></TopBar>
//         <div className="profileContent">
//           <Sidebar />
//         </div>
//         <FooterPage />
//       </div>
//     );
//   }
// }

// export default Profile;

const Profile = () => {
  // const [post, setPost] = React.useState(null);
  // React.useEffect(() => {
 
  //   axios({
  //     method : "GET",
  //     url : "https://storyhouse-bookstore.herokuapp.com/users/verify",
  //     withCredentials: true}).then((response) => {
  //     setPost(response.data);
  //   });
  // }, []);


  return (
    <div>
      {/* <h1>{post.email}</h1> */}
      <Header />
      <Navigation />
      <TopBar name="Your Account"></TopBar>
      <div className="profileContent">
        <Sidebar />
      </div>
      <FooterPage />
    </div>
  );
};

export default Profile;
