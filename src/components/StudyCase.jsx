import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import clients from '../assets/db/clients';

const StudyCase = () => {
  const { clientSlug } = useParams();
  const [currentClient, setCurrentClient] = useState(undefined);

  useEffect(() => {
    const foundClient = clients.find((client) => client.slug === clientSlug);
    setCurrentClient(foundClient);
  }, [clientSlug]);

  return (
    <div className="my-5">
      {currentClient ? (
        <>
          <h2>{currentClient.name}</h2>
          <h3>{currentClient.title}</h3>
          <p>{currentClient.body}</p>
        </>
      ) : (
        <p>Pas de client trouvé</p>
      )}
    </div>
  );
};

export default StudyCase;