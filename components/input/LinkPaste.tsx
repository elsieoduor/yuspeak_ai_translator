import React from 'react';
import { IconLink } from '@tabler/icons-react';  

interface LinkPasteProps {
  handleLinkPaste: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const LinkPaste: React.FC<LinkPasteProps> = ({ handleLinkPaste }) => {
  return (
    <label htmlFor="link-input" className='cursor-pointer'>
      <IconLink size={20} />
      <input 
        type="text" 
        id="link-input" 
        className="hidden" 
        onChange={handleLinkPaste} 
      />
    </label>
  );
}

export default LinkPaste;
