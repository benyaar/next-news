'use client'
export default function FilterError({error}) {
  return (
      <>
          <div id='error'>Filter Error</div>
          <p>{error.message}</p>
      </>

  );
}