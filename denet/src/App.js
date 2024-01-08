import React, { useState } from 'react';
import './App.css';
import logo from './img/LOGO.jpg';
import uploadye from './img/uploadyellow.svg';
import newFolder from './img/add.svg';
import profile from './img/Profile.png';
import search from './img/search.svg';
import plus from './img/plus.svg';
import logos from './img/logos.svg';
import down from './img/down.svg';
import basket from './img/delete.svg';
import file from './img/file.svg';
import folder from './img/folder.svg';
import ContextMenu from './components/ContexMenu';
import DataList from './components/Datalist';
function App() {
  const initalContextMenu = { show: false, x: 0, y: 0 };
  const [contextMenu, setContextMenu] = useState(initalContextMenu);
  function contexHandler(e) {
    e.preventDefault();
    const { pageX, pageY } = e;
    setContextMenu({ show: true, x: pageX, y: pageY });
  }
  const handleCloseContextMenu = () => {
    setContextMenu(initalContextMenu);
  };
  return (
    <div className="App">
      <header className="header">
        <div className="header__left">
          <img src={logo} alt="" className="logo" />
          <div className="button upload">
            <img src={uploadye} alt="" className="upload__img" /> Upload
          </div>
          <div className="button newFolder">
            <img src={newFolder} alt="" /> New folder
          </div>
          <div className="basket align-center">
            <img src={basket} alt="" /> Resycle bin
          </div>
        </div>
        <div className="header__right">
          <div className="search">
            <img src={search} className="search_img" />
          </div>
          <div className="coin">
            <div className="align-center">
              <img src={logos} /> Polygon
            </div>
            <img src={down} className="" />
          </div>
          <div className="states">
            <div className="used">
              Used: <span className="bold">0.4 Gb</span>{' '}
            </div>
            <div className="line"></div>
            <div className="balance">
              Balance: <span className="bold"> 0.6 TBY</span>
              <img src={plus} className="plus_img" />
            </div>
          </div>
          <div className="profile">
            {' '}
            <img src={profile} className="profile__img" />{' '}
          </div>
        </div>
      </header>
      <div className="sortby">
        <div className="sortby__title">All files</div>
        <DataList />
      </div>

      <div className="main">
        <div className="card" onContextMenu={(e) => contexHandler(e)}>
          <img src={file} />
          NR.xls
        </div>
        <div className="card" onContextMenu={(e) => contexHandler(e)}>
          <img src={folder} />
          New Folder
        </div>
      </div>
      <div className="recycle">
        {' '}
        <img src={basket} alt="" /> Resycle bin
      </div>
      <ContextMenu
        xPos={contextMenu.x}
        yPos={contextMenu.y}
        isOpen={contextMenu.show}
        onClose={handleCloseContextMenu}
      />
    </div>
  );
}
export default App;
