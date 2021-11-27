import Loader from 'react-loader-spinner';

function Loading() {
  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Loader
        type="Hearts"
        color="red"
        height={100}
        width={100}
        timeout={3000}
      />
    </div>
  );
}

export { Loading };
