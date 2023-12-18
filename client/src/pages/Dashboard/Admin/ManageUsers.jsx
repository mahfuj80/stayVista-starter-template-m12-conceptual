import { Helmet } from 'react-helmet-async';
import { useQuery } from '@tanstack/react-query';
import { getAllUsers } from '../../../api/auth';
import UserDataRow from '../../../components/Dashboard/TableRows/UserDataRow';
import useAuth from '../../../hooks/useAuth';
import Loader from '../../../components/Shared/Loader';

const ManageUsers = () => {
  const { loading } = useAuth();

  // const { data: users = [], isLoading } = useQuery({
  //   enabled: !loading,
  //   queryKey: ['users'],
  //   queryFn: async () => await getAllUsers(),
  // });
  const {
    data: users = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['users'],
    queryFn: async () => await getAllUsers(),
  });

  if (isLoading || loading) {
    return <Loader></Loader>;
  }

  return (
    <>
      <div className="container mx-auto px-4 sm:px-8">
        <Helmet>
          <title>Manage Users | DashBoard</title>
        </Helmet>
        <div className="py-8">
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Role
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Status
                    </th>

                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* User data table row */}
                  {users &&
                    users?.map((user) => (
                      <UserDataRow key={user?._id} user={user}></UserDataRow>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageUsers;
