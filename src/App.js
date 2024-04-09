import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddNewJob from './components/Employer/AddNewJob';
import './App.css'; // Import your CSS file if needed
import Jobs from './components/Employer/Jobs';
import ApplyForJob from './components/JobSeeker/ApplyForJob';
import AddNewUser from './components/Admin/AddNewUser';
import JobsToAccept from './components/Admin/JobsToAccept';
import Proposal from './components/Employer/Proposal';
import UsersList from './components/Admin/UsersList';
import SavedJobs from './components/JobSeeker/SavedJobs';
import UpdateUser from './components/Admin/UpdateUser';
// import Test from './components/Admin/Test';
import ANavbar from './components/Admin/ANavbar';
import JNavbar from './components/JobSeeker/JNavbar';
import ENavbar from './components/Employer/ENavbar';
import Login from './components/Reg/Login';
import SignUp from './components/Reg/SignUp';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/addNewJob" element={<AddNewJob />} />
        <Route path="/Jobs" element={<Jobs />} />
        <Route path="/ApplyForJob" element={<ApplyForJob />} />
        <Route path="/AddNewUser" element={<AddNewUser />} />
        <Route path="/JobsToAccept" element={<JobsToAccept />} />
        <Route path="/Proposal" element={<Proposal />} />
        <Route path="/UsersList" element={<UsersList />} />
        <Route path="/SavedJobs" element={<SavedJobs />} />
        <Route path="/UpdateUser" element={<UpdateUser />} />
        {/* <Route path="/Test" element={<Test />} /> */}
        <Route path="/ANavbar" element={<ANavbar />} />
        <Route path="/JNavbar" element={<JNavbar />} />
        <Route path="/ENavbar" element={<ENavbar />} />
        {/* Nested route for /Jobs under /Login */}
        <Route path="/Login" element={<Login />}>
          <Route path="Jobs" element={<Jobs />} />
        </Route>
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
