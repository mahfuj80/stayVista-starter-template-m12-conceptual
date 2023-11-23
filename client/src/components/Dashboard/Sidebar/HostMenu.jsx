import MenuItem from './MenuItem';
import { BsFillHouseAddFill } from 'react-icons/bs';
import { MdHomeWork, MdOutlineManageHistory } from 'react-icons/md';

const HostMenu = () => {
  return (
    <>
      <MenuItem
        icon={BsFillHouseAddFill}
        label="Add Room"
        address="/dashboard/add-room"
      />

      <MenuItem
        icon={MdHomeWork}
        label="My Listings"
        address="/dashboard/my-listings"
      />
      <MenuItem
        icon={MdOutlineManageHistory}
        label="Manage Bookings"
        address="/dashboard/manage-bookings"
      />
    </>
  );
};

export default HostMenu;
