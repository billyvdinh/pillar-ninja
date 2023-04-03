/* eslint-disable jsx-a11y/img-redundant-alt */
import './App.css';

const NavItem = ({ item }) => {
  const onItemClick = () => {
    window.open(item.url, '_blank').focus();
  };
  return (
    <div className="nav-item" onClick={onItemClick}>
      <span>{item.title}</span>
    </div>
  );
};

function App() {
  const items = [
    {
      icon: 'youtube',
      title: 'Ninja Gaming',
      url: 'http://youtube.com/ninja?sub_confirmation=1',
    },
    {
      icon: 'youtube',
      title: 'Ninja Gaming',
      url: 'http://youtube.com/ninja?sub_confirmation=1',
    },
    {
      icon: 'youtube',
      title: 'Ninja Gaming',
      url: 'http://youtube.com/ninja?sub_confirmation=1',
    },
    {
      icon: 'youtube',
      title: 'Ninja Gaming',
      url: 'http://youtube.com/ninja?sub_confirmation=1',
    },
    {
      icon: 'youtube',
      title: 'Ninja Gaming',
      url: 'http://youtube.com/ninja?sub_confirmation=1',
    },
    {
      icon: 'youtube',
      title: 'Ninja Gaming',
      url: 'http://youtube.com/ninja?sub_confirmation=1',
    },
    {
      icon: 'youtube',
      title: 'Ninja Gaming',
      url: 'http://youtube.com/ninja?sub_confirmation=1',
    },
  ];
  return (
    <div className="App">
      <div className="content">
        <div className="profile">
          <img
            src="https://res.cloudinary.com/pillario/image/upload/c_thumb,g_custom,w_300,h_300/user-image/page/1a8afd21-5e4c-41e3-a84e-390a2f4fba69?_reload=429d35a0-d24c-11ed-aba7-37a4c0b19fc9"
            alt="Ninja Profile Image | Pillar"
          />
          <div className="name">Ninja</div>
          <div className="description">I love video games 👾</div>
        </div>
        <div className="items">
          {items.map((item, id) => (
            <NavItem key={id} item={item}></NavItem>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
