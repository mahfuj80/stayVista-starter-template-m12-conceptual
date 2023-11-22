import { FaUserCog } from 'react-icons/fa';
import MenuItem from './MenuItem';

const AdminMenu = () => {
  return (
    <>
      <MenuItem
        icon={FaUserCog}
        label="My Listings"
        address="/dashboard/manage-users"
      />
    </>
  );
};

export default AdminMenu;
