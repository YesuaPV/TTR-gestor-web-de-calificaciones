import {BrowserRouter as Router, Routes, Route} from  'react-router-dom';
import IndexContainer from '../containers/indexContainer';
import HomeContainer from '../containers/homeContainer';
import ProfileContainer from '../containers/profileContainer';
import SolicitudesContainer from '../containers/solicitudesContainer';
import StatisticsContainer from '../containers/statisticsContainer';
import LoginContainer from '../containers/loginContainer';
import ConsultasContainer from '../containers/consultasContainer'
import MasiveContainer from '../containers/masivecharge';
import StudentFormContainer from '../containers/studentFormContainer';
import TeacherFormContainer from '../containers/teacherFormContainer';
import CourseFormContainer from '../containers/courseFormContainer';


function App() {
  return (
    <Router>
         <Routes>
          <Route exact path="/" element={<IndexContainer />}/>
          <Route exact path="/home" element={<HomeContainer />}/>
          <Route exact path="/profile" element={<ProfileContainer />}/>
          <Route exact path="/consultas" element={<ConsultasContainer />}/>
          <Route exact path="/solicitudes" element={<SolicitudesContainer />}/>
          <Route exact path="/estadisticas" element={<StatisticsContainer />}/>
          <Route exact path="/masivecharge" element={<MasiveContainer />}/>
          <Route exact path="/login" element={<LoginContainer />}/>
          <Route exact path="/new-student" element={<StudentFormContainer />}/>
          <Route exact path="/new-course" element={<CourseFormContainer />}/>
          <Route exact path="/new-teacher" element={<TeacherFormContainer />}/>

        </Routes>
      </Router>
  );
}

export default App;
