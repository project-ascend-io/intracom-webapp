type FeatureProps = {
  icon: string;
  title: string;
  description: string;
};

const FeatureCard = (props: FeatureProps) => {
  const { icon, title, description } = props;
  return (
    <div className='p-8 text-center'>
      <p className='my-0 text-xl'>{icon}</p>
      <p className='my-0 font-semibold'>{title}</p>
      <p className='my-0'>{description}</p>
    </div>
  );
};

const FeatureSection = () => {
  const featureCards = [
    {
      icon: '🏠',
      title: 'Real-Time Messaging with WebSockets',
      description:
        'Experience instant, reliable communication with WebSocket technology.',
    },
    {
      icon: '📱',
      title: 'Desktop Application',
      description:
        'Cross-platform application built with ElectronJS for seamless use on any device.',
    },
    {
      icon: '💬',
      title: 'Effortless Navigation',
      description:
        'Naviage with ease using intuitive keybindings and a user-friendly interface.',
    },
    {
      icon: '📁',
      title: 'Powered by Modern Technologies',
      description:
        'Built with Typescript, Node.js, and more to ensure performance and scalability',
    },
  ];

  return (
    <>
      <div className='container m-auto grid grid-cols-4'>
        {featureCards.map((card, index) => (
          <FeatureCard
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </>
  );
};

export default FeatureSection;
