import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import { useState } from "react";
import Modal from "./components/Modal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <BrowserRouter>
      <Router />
      <button onClick={openModal}>모달 열기</button>
      {isModalOpen && <Modal onClose={closeModal} />}
    </BrowserRouter>
  );
}

export default App;
