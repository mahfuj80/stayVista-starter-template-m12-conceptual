import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import Home from '../pages/Home/Home';
import ErrorPage from '../pages/ErrorPage';
import Login from '../pages/Login/Login';
import SignUp from '../pages/SignUp/SignUp';
import RoomDetails from '../pages/RoomDetails/RoomDetails';
import PrivateRoute from './PrivateRoute';
import { getRoom } from '../api/rooms';
import DashboardLayout from '../layouts/DashboardLayout';
import AddRoom from '../pages/Dashboard/Host/AddRoom';
import MyListing from '../pages/Dashboard/Host/MyListing';
import HostRoute from './HostRoute';
import AdminRoute from './AdminRoute';
import ManageUsers from '../pages/Dashboard/Admin/ManageUsers';
import Profile from '../pages/Dashboard/Common/Profile';
import MyBookings from '../pages/Dashboard/Guest/MyBookings';
import ManageBookings from '../pages/Dashboard/Host/ManageBookings';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/room/:id',
        element: (
          <PrivateRoute>
            <RoomDetails></RoomDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) => getRoom(params.id),
      },
    ],
  },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <SignUp /> },
  {
    path: '/dashboard',
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: '/dashboard/add-room',
        element: (
          <PrivateRoute>
            <HostRoute>
              <AddRoom></AddRoom>
            </HostRoute>
          </PrivateRoute>
        ),
      },
      {
        path: '/dashboard/my-listings',
        element: (
          <PrivateRoute>
            <HostRoute>
              <MyListing></MyListing>
            </HostRoute>
          </PrivateRoute>
        ),
      },
      {
        path: '/dashboard/manage-users',
        element: (
          <PrivateRoute>
            <AdminRoute>
              <ManageUsers></ManageUsers>
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: '/dashboard/profile',
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: '/dashboard/my-bookings',
        element: (
          <PrivateRoute>
            <MyBookings></MyBookings>
          </PrivateRoute>
        ),
      },
      {
        path: '/dashboard/manage-bookings',
        element: (
          <PrivateRoute>
            <HostRoute>
              <ManageBookings></ManageBookings>
            </HostRoute>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
