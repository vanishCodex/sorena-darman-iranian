import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Container from "./Container"; // مسیر کامپوننت کانتینر
import Dashboard from "./Dashboard"; // مسیر کامپوننت داشبورد (حتماً کامپوننت داشبورد را ایجاد کنید)
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* مسیر صفحه اصلی که به فرم ثبت درخواست مربوط می‌شود */}
        <Route path="/" element={<Container />} />
        
        {/* مسیر داشبورد */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
