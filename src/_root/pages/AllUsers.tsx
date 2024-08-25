import Loader from '@/components/shared/Loader';
import UserCard from '@/components/shared/UserCard';
import { useGetUsers } from '@/lib/react-query/queriesAndMutation';

const AllUsers = () => {
  const {data: creators , isPending: isUserLoading } = useGetUsers();
  
  return (
    <div className="home-creators">
        <h3 className="h3-bold text-light-1">All Users</h3>
        {isUserLoading && !creators ? (
          <Loader />
        ) : (
          <ul className="grid 2xl:grid-cols-2 gap-6">
            {creators?.documents.map((creator) => (
              <li key={creator?.$id}>
                <UserCard user={creator} />
              </li>
            ))}
          </ul>
        )}
      </div>
  )
}

export default AllUsers