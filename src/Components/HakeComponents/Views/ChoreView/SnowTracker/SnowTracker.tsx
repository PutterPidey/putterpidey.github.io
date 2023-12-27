const SnowTracker = ({ person }: { person: string }) => {
  return (
    <div>
      <h2>Denna vecka ska</h2>
      <h1>{person}</h1>
      <h2>skotta snö</h2>
    </div>
  );
};

export default SnowTracker;
