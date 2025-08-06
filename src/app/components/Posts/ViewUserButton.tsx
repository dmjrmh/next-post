'use client'

interface ViewUserButtonProps {
  userId: number;
}

const ViewUserButton: React.FC<ViewUserButtonProps> = ({userId}) => {
  const handleClick = () => alert(`Admin User ID is : ${userId}`);

  return (
    <>
      <button onClick={handleClick}>See user</button>
    </>
  )
}

export default ViewUserButton