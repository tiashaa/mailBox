import React from 'react'
import './Header.css'
import '@material-ui/core'

import EditIcon from '@material-ui/icons/Edit';
import EmailIcon from '@material-ui/icons/Email';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import DeleteIcon from '@material-ui/icons/Delete';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
function Header() {
    return (
        <div className="header">
        <div className="header-top">
            <EditIcon/>
            <EmailIcon/>
            <InsertDriveFileIcon/>
            <DeleteIcon/>

          <div/>
          <div className="header-top__navbar">
           <SearchIcon/>
           <input placeholder='search mail' type='text'/>
           <ArrowDropDownIcon/>
          </div>
        </div>
        
          
        
      </div>
    )
}

export default Header
