import React, { useState }from 'react';
import { findAllByDisplayValue } from '@testing-library/react';


function App() {
  return (
    <div> 
      <Folder name= "Desktop"  >
        <Folder name="Music"> 
          <File name="Hotel_California.mp4" />
          <File name="Blister_In_The_Sun.mp4" />
        </Folder>
        <Folder name="Pictures">
          <File name="dogs.jpeg" />
          <File name="cats.png" />
        </Folder>
      </Folder>
      <Folder name="Applications"/>
      <Folder name="Downloads">
          <File name="Resume.doc" />
      </Folder>



    </div>
  )


}

const Folder = (props) => {
  const [ isOpen, setIsOpen ] = useState(true); 
  
  // Deststructure out of props. 
  const { name, children } = props; 

  const direction = isOpen ? 'down' : 'right';

  const handleClick = () => setIsOpen(!isOpen);
  
  
return <div>
  <span onClick={handleClick}>
    <i className=" blue folder icon"></i>
    <i className={`caret ${direction} icon`}></i>
  </span>
  {name}
  <div style= {{ marginLeft: '17px'}}>
    { isOpen ? children : null }

  </div>
  </div>
}

const File = (props) => {
  const { name } = props;
 const fileExtension =  name.split('.')[1];
 const fileIcons = { 
   mp4: 'headphones',
   jpeg: 'file image',
   png: 'file image outline',
   doc: 'file alternate'
 };

return <div>
  <i className={`${fileIcons[fileExtension]} icon`}></i>
  {name}
  </div>
}

export default App;
