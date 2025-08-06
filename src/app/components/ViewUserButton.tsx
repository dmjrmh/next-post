'use client'

const ViewUserButton = () => {
  const handleClick = () => alert('User details will be displayed here.');

  return (
    <>
      <button onClick={handleClick}>See user</button>
    </>
  )
}

export default ViewUserButton